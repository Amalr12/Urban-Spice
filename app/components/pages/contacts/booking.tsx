"use client";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

import { CalendarDays, Clock3, MapPin, Phone, Mail, Users } from "lucide-react";

export default function BookingPage() {

      const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "service_4tlga23",
                    "template_rmf8t85",
                    form.current,
                    "YNbA4zbylb_2k4mKE"
                )
                .then(
                    (result) => {
                        console.log("SUCCESS!", result.text);
                        if(result.text == "OK") {
                            alert("Message sent successfully!");
                            form.current?.reset();
                        }
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                    }
                );
        }
    };
  return (
    <main>

      {/* Hero */}
      <section className="relative h-[45vh] bg-[url('/booking.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative flex h-full items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold">
              Reserve Your Table
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-200">
              Book your table online and enjoy an unforgettable dining
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="bg-[#faf7f2] py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6">

          {/* Form */}

          <div className="bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Book a Table
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              />

              <div className="grid md:grid-cols-2 gap-4">

                <div className="relative">
                  <CalendarDays className="absolute left-4 top-4 h-5 w-5 text-gray-400" />

                  <input
                    type="date"
                    className="w-full border rounded-lg pl-12 pr-4 py-3"
                  />
                </div>

                <div className="relative">
                  <Clock3 className="absolute left-4 top-4 h-5 w-5 text-gray-400" />

                  <input
                    type="time"
                    className="w-full border rounded-lg pl-12 pr-4 py-3"
                  />
                </div>

              </div>

              <div className="relative">

                <Users className="absolute left-4 top-4 h-5 w-5 text-gray-400" />

                <select className="w-full border rounded-lg pl-12 pr-4 py-3">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6+ Guests</option>
                </select>

              </div>

              <textarea
                rows={5}
                placeholder="Special Request"
                className="w-full border rounded-lg px-4 py-3 outline-none resize-none"
              />

              <button type="submit" value="Send"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition"
              >
                Book Now
              </button>

            </form>

          </div>

          {/* Contact */}

          <div>

            <h2 className="text-3xl font-bold mb-8">
              Visit Urban Spices
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">

                <MapPin className="text-orange-500" />

                <div>
                  <h4 className="font-semibold">Address</h4>

                  <p className="text-gray-600">
                    123 MG Road, Kochi, Kerala, India
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Phone className="text-orange-500" />

                <div>
                  <h4 className="font-semibold">Phone</h4>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Mail className="text-orange-500" />

                <div>

                  <h4 className="font-semibold">Email</h4>

                  <p className="text-gray-600">
                    info@urbanspices.com
                  </p>

                </div>

              </div>

              <div>

                <h4 className="font-semibold mb-4">
                  Opening Hours
                </h4>

                <div className="space-y-2 text-gray-600">

                  <p>Monday - Friday : 11:00 AM - 10:00 PM</p>

                  <p>Saturday : 10:00 AM - 11:00 PM</p>

                  <p>Sunday : 10:00 AM - 11:00 PM</p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Google Map */}

      <section>

        <iframe
          src="https://www.google.com/maps/embed?pb="
          className="w-full h-[500px]"
          loading="lazy"
        />

      </section>

    </main>
  );
}