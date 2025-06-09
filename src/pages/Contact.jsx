import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-900 via-gray-800 to-neutral-900 text-white py-28 px-4 flex flex-col items-center -mt-14">
      <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/918486476902" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium text-lg transition duration-300 shadow-md mb-12"
      >
        <FaWhatsapp className="text-2xl" />
        Chat with us on WhatsApp
      </a>

      {/* Google Map Embed */}
      <div className="w-full max-w-4xl h-96 rounded-xl overflow-hidden shadow-lg border border-gray-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.967491913873!2d94.91047119999999!3d27.470271399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3740992805f2c04d%3A0xffba84b77382b1b7!2sBike%20House!5e0!3m2!1sen!2sin!4v1749292878427!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="w-full h-[450px] rounded-xl border-0 shadow-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
