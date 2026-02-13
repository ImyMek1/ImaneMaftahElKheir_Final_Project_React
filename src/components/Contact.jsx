import { useState } from "react";
import { Images } from "../constants/Images";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2xwqjaj",
        "template_urw2xn8",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "2zOj37YvOcmC1OJm4"
      )
      .then(() => {
        setForm({ name: "", email: "", phone: "", message: "" });
        alert("Message sent successfully");
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return (
    <section className="bg-gray-100">
      <div className="relative h-[300px] w-full">
        <img
          src={Images.carousel2}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl tracking-widest">CONTACT</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 bg-gray-100">
        <div className="w-full h-[400px]">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=2300+Traverwood+Dr,+Ann+Arbor,+MI&output=embed"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-medium mb-6">Send us your message</h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black resize-none"
            required
          />

          <button
            type="submit"
            className="bg-black text-white px-10 py-3 text-sm rounded-full hover:bg-gray-800 transition"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}
