"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

interface orderProps {
  title: string;
  image: string;
  description: string;
  link: string;
  price: string | number;
  category: string;
}

export default function OrderPage({ title, image, description, link, price, category }: orderProps) {
  const itemPrice = typeof price === "string" ? parseFloat(price) : Number(price || 0);
  const deliveryCharge = 40;
  const whatsappNumber = "+918848446731";

  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    landmark: "",
    notes: "",
    payment: "Cash on Delivery",
  });

  const total = itemPrice * quantity + deliveryCharge;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `
New Order Request
Item: ${title}
Category: ${category || "N/A"}
Quantity: ${quantity}
Item Price: ₹${itemPrice}
Delivery Charge: ₹${deliveryCharge}
Total: ₹${total}

Customer Details:
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Landmark: ${formData.landmark || "Not provided"}
Special Instructions: ${formData.notes || "None"}
Payment Method: ${formData.payment}
`.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Order Your Food</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Image
              src={image}
              alt={title}
              width={600}
              height={500}
              className="rounded-xl w-full h-72 object-cover"
            />

            <h2 className="text-3xl font-bold mt-6">{title}</h2>

            <p className="text-gray-600 mt-3">{description}</p>

            <div className="flex justify-between items-center mt-8">
              <span className="text-3xl font-bold text-orange-600">₹{itemPrice}</span>

              {/* Quantity */}

              <div className="flex items-center gap-4">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-10 h-10 rounded-full border flex items-center justify-center"
                >
                  <Minus size={18} />
                </button>

                <span className="text-xl font-semibold">{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border flex items-center justify-center"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Summary */}

            <div className="mt-10 border rounded-xl p-5 bg-orange-50">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

              <div className="flex justify-between mb-3">
                <span>Item Price</span>
                <span>₹{itemPrice}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Quantity</span>
                <span>{quantity}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Delivery Charge</span>
                <span>₹{deliveryCharge}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-2xl font-bold text-orange-600">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Delivery Details</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}

              <div>
                <label className="block mb-2 font-medium">Full Name</label>

                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  placeholder="Enter your name"
                  required
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Phone */}

              <div>
                <label className="block mb-2 font-medium">Phone Number</label>

                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                  placeholder="Enter phone number"
                  required
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Address */}

              <div>
                <label className="block mb-2 font-medium">Delivery Address</label>

                <textarea
                  rows={4}
                  value={formData.address}
                  onChange={(event) => setFormData({ ...formData, address: event.target.value })}
                  placeholder="Enter full delivery address"
                  required
                  className="w-full border rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Landmark */}

              <div>
                <label className="block mb-2 font-medium">Landmark (Optional)</label>

                <input
                  type="text"
                  value={formData.landmark}
                  onChange={(event) => setFormData({ ...formData, landmark: event.target.value })}
                  placeholder="Nearby landmark"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Notes */}

              <div>
                <label className="block mb-2 font-medium">Special Instructions</label>

                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(event) => setFormData({ ...formData, notes: event.target.value })}
                  placeholder="Extra cheese, less spicy..."
                  className="w-full border rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Payment */}

              <div>
                <label className="block mb-2 font-medium">Payment Method</label>

                <select
                  value={formData.payment}
                  onChange={(event) => setFormData({ ...formData, payment: event.target.value })}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option>Cash on Delivery</option>
                  <option>UPI</option>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                </select>
              </div>

              {/* Button */}

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-lg text-lg font-semibold"
              >
                Place Order • ₹{total}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}