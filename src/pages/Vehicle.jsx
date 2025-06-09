import bikes from "../data/bikes";

export default function Vehicles() {
  return (
    <div className="px-6 py-20 -mt-14 min-h-screen bg-gradient-to-br from-neutral-900 via-gray-900 to-black text-white">
      <h1 className="text-3xl font-bold text-center text-rose-500 mb-10">
        Available Bikes & Scooters
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {bikes.map((bike, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1f1f1f] via-[#2c2c2c] to-[#1a1a1a] rounded-xl ring-1 ring-gray-700 shadow hover:scale-[1.03] hover:shadow-rose-600/20 transition-transform duration-300 p-4 border-b-2 border-rose-700"
          >
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-semibold text-white">{bike.name}</h2>
            <p className="text-gray-400 mb-3">₹{bike.price} / day</p>
            <a
              href={`https://wa.me/918486476902?text=Hi,%20I'm%20interested%20in%20renting%20the%20${encodeURIComponent(
                bike.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto bg-gradient-to-br from-rose-600 to-rose-700 text-white px-4 py-2 rounded hover:from-rose-700 hover:to-rose-800 transition"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
