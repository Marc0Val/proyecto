import { Apple, Smartphone } from 'lucide-react';

export default function DownloadSection() {
  const handleAppStore = () => {
    alert('Redirigiendo a App Store...');
  };

  const handlePlayStore = () => {
    alert('Redirigiendo a Google Play Store...');
  };

  return (
    <section id="descargas" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Descargas
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Elige una plataforma para descargar nuestra app
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
          <button
            onClick={handleAppStore}
            className="flex flex-col items-center justify-center w-64 h-64 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-3xl hover:shadow-2xl transition-all hover:scale-105 group"
          >
            <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Apple size={48} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">App Store</span>
          </button>

          <button
            onClick={handlePlayStore}
            className="flex flex-col items-center justify-center w-64 h-64 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl hover:shadow-2xl transition-all hover:scale-105 group"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Smartphone size={48} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Google Play</span>
          </button>
        </div>
      </div>
    </section>
  );
}
