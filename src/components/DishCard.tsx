import { Star } from "lucide-react";

interface DishCardProps {
  name: string;
  restaurant: string;
  rating: number;
  totalRatings: number;
  image: string;
}

export default function DishCard({
  name,
  restaurant,
  rating,
  totalRatings,
  image,
}: DishCardProps) {
  const handleViewDetails = () => {
    alert(`Mostrando detalles de ${name} en ${restaurant}...`);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
        />
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{restaurant}</p>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">
            {rating} Estrellas ({totalRatings})
          </span>
        </div>

        <button
          onClick={handleViewDetails}
          className="w-full py-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium"
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
}
