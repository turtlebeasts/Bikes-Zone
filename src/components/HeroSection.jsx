import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactTyped as Typed } from "react-typed";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden -mt-14">
      {/* Background Video */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 banner-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Rent Your Dream Ride Today!
        </motion.h1>

        <motion.div
          className="text-lg md:text-xl max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Typed
            strings={[
              "Choose from the best bikes and scooters.",
              "Affordable, fast, and reliable service.",
              "Book instantly through WhatsApp!",
            ]}
            typeSpeed={40}
            backSpeed={25}
            loop
            backDelay={1500}
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Link
            to="/vehicles"
            className="inline-block bg-rose-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-400 transition shadow-xl"
          >
            Browse Vehicles
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
