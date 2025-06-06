import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Rent Your Dream Ride Today!
        </motion.h1>
        <motion.p
          className="text-gray-700 mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore our wide range of bikes and scooters at the best prices. Easy
          booking, instant service.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/vehicles"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Vehicles
          </Link>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Choose Bike", "Connect on WhatsApp", "Pick Up & Ride"].map(
            (step, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-medium mb-2">{step}</h3>
                <p className="text-sm text-gray-600">
                  Step {idx + 1} of the process explained simply.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-12 text-center px-6">
        <h2 className="text-2xl font-semibold mb-4">Ready to Ride?</h2>
        <p className="mb-6">Contact us now to book your bike via WhatsApp!</p>
        <a
          href="https://wa.me/91XXXXXXXXXX" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
