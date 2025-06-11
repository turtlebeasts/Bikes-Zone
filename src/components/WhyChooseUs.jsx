import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Affordable & Transparent Pricing",
    description:
      "No hidden fees. What you see is what you pay. We keep it simple and honest so you can ride worry-free.",
  },
  {
    title: "Instant WhatsApp Booking",
    description:
      "Skip the paperwork. Just message us on WhatsApp, and your ride will be ready in minutes.",
  },
  {
    title: "Wide Range of Vehicles",
    description:
      "From gearless scooters to powerful bikes — we've got options for every kind of rider and every occasion.",
  },
  {
    title: "Local & Trusted Service",
    description:
      "We’re based in Dibrugarh and loved by locals. Our goal is to serve our community with pride and passion.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-neutral-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 text-rose-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose BikeZone?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="text-rose-500" size={24} />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
