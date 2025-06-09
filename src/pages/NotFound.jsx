// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white text-center px-6 -mt-14">
      <h1 className="text-6xl font-bold text-rose-600 mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
