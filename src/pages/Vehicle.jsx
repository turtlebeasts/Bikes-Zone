import bikes from "../data/bikes";

export default function Vehicles() {
  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Available Bikes & Scooters
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {bikes.map((bike, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition"
          >
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{bike.name}</h2>
            <p className="text-gray-600 mb-3">₹{bike.price} / day</p>
            <a
              href={`https://wa.me/91XXXXXXXXXX?text=Hi,%20I'm%20interested%20in%20renting%20the%20${encodeURIComponent(
                bike.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
