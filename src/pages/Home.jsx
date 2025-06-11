import { motion } from "framer-motion";
import { FaMotorcycle, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import FAQs from "../components/FAQs";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-neutral-900 via-gray-800 to-neutral-900">
        <h2 className="text-3xl font-bold text-rose-700 mb-10">How It Works</h2>
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
              className="bg-gradient-to-br from-neutral-900 via-gray-800 to-neutral-900 text-white rounded-xl p-6 shadow-gray-900 shadow-lg transition-transform transform hover:scale-105 border-b-2 border-rose-700"
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
      <section className="bg-gradient-to-r from-rose-700 to-rose-900 text-white py-16 text-center px-6 shadow-[inset_-10px_10px_40px_rgba(0,0,0,0.4),inset_10px_10px_20px_rgba(255,255,255,0.05)]">
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
          href="https://wa.me/918486476902" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-rose-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
      <FAQs />
      <WhyChooseUs />
    </div>
  );
}
