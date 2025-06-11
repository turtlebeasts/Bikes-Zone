import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What documents do I need to rent a bike?",
    answer: `To rent a bike from BikesZone, you must provide a valid driving license issued by a recognized authority in India. Additionally, you will need to submit one government-issued photo ID such as Aadhaar, Voter ID, or PAN card. These documents help us ensure safe and legal rentals, and are mandatory for insurance purposes as well. Please make sure to carry both original and photocopies at the time of pickup.`,
  },
  {
    question: "Is there any security deposit?",
    answer: `Yes, a nominal and refundable security deposit is required when renting a vehicle. This amount may vary depending on the type of vehicle and rental duration. The deposit is taken to cover any minor damages or issues that may arise during the rental period. Rest assured, the full amount is returned once the vehicle is returned in its original condition. For complete transparency, we will provide a receipt and clear terms before the booking is confirmed.`,
  },
  {
    question: "Do you provide helmets?",
    answer: `Absolutely! We prioritize your safety. Each rental comes with one complimentary helmet to ensure compliance with local traffic laws and personal protection. If you're riding with a pillion, an additional helmet can be provided upon request and subject to availability. We regularly sanitize and inspect all helmets to maintain hygiene and safety standards.`,
  },
  {
    question: "Can I book a bike in advance?",
    answer: `Yes, we strongly recommend booking your bike or scooter in advance, especially during weekends, holidays, or festive seasons when demand is higher. You can easily book via WhatsApp by sending your details and preferred vehicle. Once confirmed, we’ll reserve the bike for you and have it ready at your selected time. Early bookings also help you avoid last-minute disappointments and ensure that your preferred model is available.`,
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-neutral-900 via-gray-800 to-neutral-900 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-rose-500 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-rose-500"
                >
                  ▼
                </motion.span>
              </button>

              <div
                className={`px-6 pb-4 text-gray-300 transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
