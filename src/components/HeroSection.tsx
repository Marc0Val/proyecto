import { MapPin, Store } from 'lucide-react';

export default function HeroSection() {
  const handleDownload = () => {
    const element = document.getElementById('descargas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    const element = document.getElementById('explora');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

 
  const pinkMain = '#F4B6B6'; 
  const pinkHover = '#F19292';
  const pinkLight = '#FADCDC'; 

  return (
    <section
      id="inicio"
      className="pt-20 md:pt-24 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${pinkLight}, #F7AFA0, #F4B6B6)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Descubre, ordena, y explora platillos y restaurantes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              con <span className="font-bold" style={{ color: pinkMain }}>UMAI</span> disfruta de una interfaz llamativa para explorar restaurantes y platillos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownload}
                className="px-8 py-3 text-white rounded-full font-medium text-lg shadow-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: pinkMain,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = pinkHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = pinkMain)
                }
              >
                Descarga
              </button>

              <button
                onClick={handleExplore}
                className="px-8 py-3 bg-white rounded-full font-medium text-lg shadow-lg border-2 transition-all hover:scale-105"
                style={{
                  color: pinkMain,
                  borderColor: pinkMain,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFF0F0';
                  e.currentTarget.style.color = pinkHover;
                  e.currentTarget.style.borderColor = pinkHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = pinkMain;
                  e.currentTarget.style.borderColor = pinkMain;
                }}
              >
                Explora
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              className="relative rounded-3xl p-6 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${pinkLight}, ${pinkMain})`,
              }}
            >
              <img
                src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Delicious burger"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
              />

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={20} style={{ color: pinkMain }} />
                    <h3 className="font-semibold text-gray-900">Localiza Burgers</h3>
                  </div>
                  <p className="text-sm text-gray-600">320 restaurantes emplazados</p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Store size={20} style={{ color: pinkMain }} />
                    <h3 className="font-semibold text-gray-900">Burger Loca</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">(4.9)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
