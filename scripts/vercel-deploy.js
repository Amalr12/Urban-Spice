#!/usr/bin/env node
const https = require('https');
const { URL } = require('url');
const fs = require('fs');

function log(...args) {
  const line = `[${new Date().toISOString()}] ${args.join(' ')}\n`;
  process.stdout.write(line);
  try { fs.appendFileSync('logs/vercel-deploy.log', line); } catch (e) {}
}

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function requestWithRetries(url, options = {}, attempts = 5) {
  let attempt = 0;
  const token = options.token || process.env.VERCEL_TOKEN;
  if (!token) throw new Error('VERCEL_TOKEN not provided in env or options.token');

  const parsed = new URL(url);

  while (attempt < attempts) {
    attempt += 1;
    log('Attempt', attempt, 'to', url);
    try {
      const result = await new Promise((resolve, reject) => {
        const reqOptions = {
          method: 'GET',
          hostname: parsed.hostname,
          path: parsed.pathname + parsed.search,
          headers: {
            Authorization: `Bearer ${token}`,
            Connection: 'close',
            'User-Agent': 'vercel-deploy-retry-script/1.0'
          },
          agent: new https.Agent({ keepAlive: false }),
          timeout: 30000
        };

        const req = https.request(reqOptions, (res) => {
          let body = '';
          res.setEncoding('utf8');
          res.on('data', (chunk) => (body += chunk));
          res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body }));
        });

        req.on('error', (err) => reject(err));
        req.on('timeout', () => {
          req.destroy(new Error('Request timed out'));
        });
        req.end();
      });

      log('Response status:', result.statusCode);
      log('Response headers:', JSON.stringify(result.headers));
      log('Response body (truncated):', result.body ? result.body.slice(0, 200) : '');
      return result;
    } catch (err) {
      log('Error on attempt', attempt, err && err.message ? err.message : err);
      if (attempt >= attempts) throw err;
      const backoff = Math.min(1000 * 2 ** (attempt - 1), 16000);
      log('Backing off', backoff, 'ms before retry');
      await sleep(backoff);
    }
  }
}

function usage() {
  console.error('Usage: node scripts/vercel-deploy.js --id <deploymentId> [--team <teamId>]');
}

async function main() {
  const argv = process.argv.slice(2);
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--id') args.id = argv[++i];
    else if (argv[i] === '--team') args.team = argv[++i];
  }

  if (!args.id) {
    usage();
    process.exit(2);
  }

  const teamQuery = args.team ? `?teamId=${encodeURIComponent(args.team)}` : '';
  const url = `https://api.vercel.com/v13/deployments/${encodeURIComponent(args.id)}${teamQuery}`;

  try {
    if (!fs.existsSync('logs')) fs.mkdirSync('logs');
    const res = await requestWithRetries(url, { token: process.env.VERCEL_TOKEN }, 5);
    if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
      log('Success');
      process.exit(0);
    } else {
      log('Non-success status code:', res.statusCode);
      process.exit(3);
    }
  } catch (err) {
    log('Final error:', err && err.stack ? err.stack : err);
    process.exit(1);
  }
}

if (require.main === module) main();
