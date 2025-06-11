import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-rose-600 text-lg font-semibold mb-3">
            BikesZone
          </h3>
          <p className="text-sm leading-relaxed">
            Affordable and trusted bike and scooter rentals in Dibrugarh. Book
            instantly via WhatsApp and ride worry-free!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-rose-600 font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-rose-700 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-rose-700 transition">
                About
              </a>
            </li>
            <li>
              <a href="/vehicles" className="hover:text-rose-700 transition">
                Vehicles
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-rose-700 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-rose-600 font-semibold mb-3">Get in Touch</h4>
          <p className="text-sm mb-2">Dibrugarh, Assam, India</p>
          <p className="text-sm mb-4">Email: support@bikeszone.in</p>
          <div className="flex justify-center md:justify-start gap-4 text-lg text-gray-600">
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-600 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-600 transition"
            >
              <FaInstagram />
            </a> */}
            <a
              href="https://wa.me/918486476902"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-600 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} BikesZone. All rights reserved.
      </div>
    </footer>
  );
}
