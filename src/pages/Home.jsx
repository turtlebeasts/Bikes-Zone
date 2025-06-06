import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMotorcycle, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaMotorcycle className="text-3xl text-blue-600 mb-4" />,
              title: "Choose Your Bike",
              desc: "Browse through our collection and pick the ride that fits your journey.",
            },
            {
              icon: <FaWhatsapp className="text-3xl text-green-500 mb-4" />,
              title: "Connect on WhatsApp",
              desc: "Click to chat. Book in minutes. No long forms or delays.",
            },
            {
              icon: <FaMapMarkerAlt className="text-3xl text-red-500 mb-4" />,
              title: "Pick Up & Ride",
              desc: "Pick up your bike and you're ready to hit the road!",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-16 text-center px-6">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to Ride?
        </motion.h2>
        <p className="mb-6 text-lg">
          Contact us now and book your ride instantly on WhatsApp!
        </p>
        <a
          href="https://wa.me/91XXXXXXXXXX" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
