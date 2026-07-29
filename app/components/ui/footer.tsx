import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

          {/* Contacts */}

          <div>
            <h2 className="md:text-2xl text-xl uppercase tracking-wider font-light mb-10">
              Contacts
            </h2>

            <div className="space-y-6 text-gray-300 uppercase md:text-sm text-xs">

              <p>
                123 MG Road,
                <br />
                Kochi, Kerala 682001
              </p>

              <p>+91 98765 43210</p>

              <p>info@urbanspices.com</p>

            </div>
          </div>

          {/* Opening Hours */}

          <div>

            <h2 className="md:text-2xl text-xl uppercase tracking-wider font-light mb-10">
              Opening Hours
            </h2>

            <div className="space-y-6 text-gray-300 uppercase md:text-sm text-xs">

              <p>Monday - Friday : 11AM - 10PM</p>

              <p>Saturday - Sunday : 10AM - 11PM</p>

              <p>Kitchen closes 30 mins before closing</p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h2 className="md:text-2xl text-xl uppercase tracking-wider font-light mb-10">
              Social
            </h2>

            <div className="space-y-6 text-xs md:text-sm">

              <Link
                href="#"
                className="block text-gray-300 uppercase hover:text-orange-400 transition"
              >
                Instagram
              </Link>

              <Link
                href="#"
                className="block text-gray-300 uppercase hover:text-orange-400 transition"
              >
                Facebook
              </Link>

              <Link
                href="#"
                className="block text-gray-300 uppercase hover:text-orange-400 transition"
              >
                Twitter
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}