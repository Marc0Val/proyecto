import { ChevronRight } from 'lucide-react';
import DishCard from './DishCard';

const dishes = [
  {
    name: 'Ramen',
    restaurant: 'Kintaro Sushi',
    rating: 4.1,
    totalRatings: 2453,
    image: 'https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Orden de Pastor',
    restaurant: 'Tacos Hans',
    rating: 5,
    totalRatings: 892,
    image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Pizza Pepperoni',
    restaurant: 'Little Caesars',
    rating: 4.5,
    totalRatings: 1823,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Snodan',
    restaurant: 'Kintaro Sushi',
    rating: 4.7,
    totalRatings: 3421,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function ExploreDishes() {
  const handleViewAll = () => {
    alert('Ver todos los platillos disponibles...');
  };

  return (
    <section id="explora" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explora tus antojos
          </h2>
          <button
            onClick={handleViewAll}
            className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium transition-colors group"
          >
            Ver Todo
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {dishes.map((dish, index) => (
            <DishCard key={index} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
