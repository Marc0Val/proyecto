import { Store } from "lucide-react";

export default function HeroSection() {

  const pinkMain = "#F4B6B6";
  const pinkHover = "#F19292";
  const pinkLight = "#FADCDC";

  return (
    <section
      id="inicio"
      className="pt-20 md:pt-24 overflow-visible relative pb-20"
      style={{
        background: `linear-gradient(135deg, ${pinkLight}, #F7AFA0, ${pinkMain})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 relative z-20">
            {/* Panel translúcido para mejorar contraste */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
                Demo de app móvil
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-3">
                Prueba la interfaz móvil de <span className="font-bold" style={{ color: pinkMain }}>UMAI</span>.
                Descubre lugares, menús y contenido pensado para usuarios móviles — esto es una demo, no un servicio de entrega.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={() => {
                    const el = document.getElementById("descargas");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-3 text-white rounded-full font-medium text-lg shadow-lg transition-transform transform hover:-translate-y-0.5"
                  style={{ background: `linear-gradient(90deg, ${pinkMain}, ${pinkHover})` }}
                >
                  Ver Demo
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById("explora");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-3 bg-white rounded-full font-medium text-lg shadow-md border-2 transition-all hover:scale-105"
                  style={{ color: pinkMain, borderColor: pinkMain }}
                >
                  Más información
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Mockup construido en CSS - comunica una app móvil y CTA de descarga */}
            <div className="relative w-64 md:w-80 lg:w-96 transform hover:scale-105 transition-transform duration-300 shadow-2xl rounded-3xl">
              <div className="mx-auto bg-black rounded-3xl p-2" style={{ aspectRatio: '9/19' }}>
                <div className="bg-white rounded-2xl h-full overflow-hidden relative flex flex-col">
                  {/* notch/header */}
                  <div className="h-8 bg-gray-50 flex items-center justify-center text-xs text-gray-500">9:41</div>

                  {/* main content */}
                  <div className="p-4 space-y-3 flex-1">
                    <div className="bg-amber-50 rounded-xl p-3">
                      <div className="text-sm font-semibold text-amber-600">Oferta</div>
                      <div className="text-xs text-gray-500">40% OFF por tiempo limitado</div>
                    </div>

                    <div className="bg-white rounded-xl p-3 shadow flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">Burger Spot</div>
                        <div className="text-xs text-gray-500">Ejemplo de tarjeta dentro de la app</div>
                      </div>
                      <div className="w-12 h-12 bg-gray-200 rounded-md" />
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="h-10 bg-gray-100 rounded-lg" />
                      <div className="h-10 bg-gray-100 rounded-lg" />
                      <div className="h-10 bg-gray-100 rounded-lg" />
                    </div>
                  </div>

                  {/* CTA bottom */}
                  <div className="p-4 border-t bg-white/60">
                    <div className="flex items-center justify-center">
                      <button className="px-6 py-2 bg-amber-500 text-white rounded-full shadow">Descargar</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta ejemplo sobrepuesta: estática en pantallas pequeñas y absoluta en lg */}
              <div className="mt-4 mx-auto lg:mx-0 lg:absolute lg:-bottom-8 lg:left-1/2 lg:-translate-x-1/2 bg-white rounded-xl shadow-xl p-3 w-11/12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center">
                    <Store size={20} style={{ color: pinkMain }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Burger Spot</div>
                    <div className="text-xs text-gray-500">Ejemplo de tarjeta dentro de la app</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-16 w-56 h-56 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute right-6 -bottom-10 w-40 h-40 rounded-full bg-white/8 blur-2xl"></div>
      </div>
    </section>
  );
}
// ...existing code...
