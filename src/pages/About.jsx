import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-rose-600 mb-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          About Bike Zone
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We are passionate about making two-wheeler rentals simple, affordable,
          and accessible. Whether you need a stylish scooter for city rides or a
          powerful bike for weekend getaways — Bike Zone has your back.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Wide Range of Vehicles",
              desc: "From scooters to sports bikes – we offer vehicles to match every need and style.",
            },
            {
              title: "Instant WhatsApp Booking",
              desc: "No long forms or calls. Just click and message us directly on WhatsApp!",
            },
            {
              title: "Local, Trusted & Reliable",
              desc: "We’re your friendly neighborhood bike rental partner – always ready to help.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-rose-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
