import { Store, Star, Heart, Search, Home, Grid, User, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const pinkMain = "#F4B6B6";
  const pinkHover = "#F19292";
  const pinkLight = "#FADCDC";

  const cards = [
    { title: "Burger Spot", subtitle: "Ejemplo", img: "/images/burger.svg", rating: 4.8 },
    { title: "Sushi Bar", subtitle: "Ejemplo", img: "/images/sushi.svg", rating: 4.7 },
    { title: "Tacos Hans", subtitle: "Ejemplo", img: "/images/tacos.svg", rating: 4.9 },
  ];

  const categories = ["Populares", "Cafés", "Sushi", "Tacos", "Postres", "Bebidas"];
  const [fav, setFav] = useState(false);

  return (
    <section
      id="inicio"
      className="pt-20 md:pt-24 overflow-visible relative pb-20"
      style={{ background: `linear-gradient(135deg, ${pinkLight}, #F7AFA0, ${pinkMain})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: promoción y CTAs */}
          <div className="space-y-6 md:space-y-8 relative z-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">Nueva</div>
                <div className="text-xs text-gray-500">Versión demo · Interfaz móvil</div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
                Presentamos UMAI — la app demo para descubrir restaurantes y menús
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-3">
                Vende la experiencia: muestra la interfaz móvil, las funciones clave y la facilidad de navegación. Ideal para demostrar a inversionistas y clientes cómo se ve la app en acción — esto es una demo, no un servicio de entrega.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Interfaz nativa y fluida
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full" />
                  Carruseles y microinteracciones
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  Alta fidelidad visual
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-300 rounded-full" />
                  Listo para presentaciones comerciales
                </li>
              </ul>

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

          {/* Right: mockup teléfono completo (ampliado) */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              className="relative w-64 md:w-80 lg:w-96 shadow-2xl rounded-3xl"
              initial={{ scale: 0.98, y: 8 }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.03, rotate: -0.5 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
            >
              {/* Marco del teléfono */}
              <div className="mx-auto bg-black rounded-3xl p-2" style={{ aspectRatio: "9/19" }}>
                <div className="bg-white rounded-2xl h-full overflow-hidden relative flex flex-col">
                  {/* Barra superior (notch + estado) */}
                  <div className="h-9 bg-gray-50 flex items-center justify-between px-3 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">UMAI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">9:41</span>
                      <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                    </div>
                  </div>

                  {/* Contenido desplazable dentro del teléfono */}
                  <div className="p-3 space-y-3 flex-1 overflow-hidden">
                    {/* Buscador con sugerencias */}
                    <div>
                      <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-2">
                        <Search size={16} className="text-gray-400" />
                        <input
                          aria-label="Buscar lugares o platillos"
                          className="bg-transparent flex-1 text-sm outline-none"
                          placeholder="Buscar lugares o platillos"
                        />
                        <button className="text-xs text-gray-500 px-2">FILTROS</button>
                      </div>

                      <div className="mt-2 flex gap-2 overflow-x-auto scrollbar-hide text-xs">
                        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
                          <span className="w-2 h-2 bg-amber-400 rounded-full" />
                          Sugerido: Sushi
                        </div>
                        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                          Cerca de ti
                        </div>
                        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
                          <span className="w-2 h-2 bg-pink-300 rounded-full" />
                          Nuevos
                        </div>
                      </div>
                    </div>

                    {/* Chips de categorías */}
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1">
                      {categories.map((c) => (
                        <motion.button
                          key={c}
                          whileTap={{ scale: 0.95 }}
                          className="flex-shrink-0 px-3 py-1 rounded-xl bg-gray-100 text-xs font-medium"
                        >
                          {c}
                        </motion.button>
                      ))}
                    </div>

                    {/* Banner promocional */}
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl p-3 text-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-amber-700">Oferta especial</div>
                          <div className="text-xs text-gray-700">40% OFF — muestra de la app</div>
                        </div>
                        <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-amber-700 font-bold">-40%</div>
                      </div>
                    </motion.div>

                    {/* Carrusel horizontal de cards (mini-app screenshots) */}
                    <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory py-2">
                      {cards.map((card, i) => (
                        <motion.div key={i} className="snap-start w-44 flex-shrink-0 bg-white rounded-xl shadow p-2" whileHover={{ y: -6 }}>
                          <div className="h-24 rounded-md overflow-hidden">
                            <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                          </div>

                          <div className="mt-2 flex items-center justify-between">
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{card.title}</div>
                              <div className="text-xs text-gray-500">Ejemplo</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star size={14} className="text-yellow-400" />
                              <span className="text-xs text-gray-600">{card.rating}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tarjeta destacada más grande */}
                    <motion.div className="bg-white rounded-xl p-3 shadow-md" whileHover={{ scale: 1.01 }}>
                      <div className="flex items-start gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <img src="/images/burger.svg" alt="Burger Spot" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-semibold">Burger Spot</div>
                              <div className="text-xs text-gray-500">Ejemplo de tarjeta destacada</div>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                aria-pressed={fav}
                                onClick={() => setFav((s) => !s)}
                                className="p-1 rounded-md hover:bg-gray-100"
                                title={fav ? "Quitar favorito" : "Marcar favorito"}
                              >
                                <Heart size={16} className={fav ? "text-pink-500" : "text-gray-300"} />
                              </button>
                              <div className="flex items-center gap-1 text-xs text-gray-600">
                                <Star size={14} className="text-yellow-400" />
                                4.8
                              </div>
                            </div>
                          </div>

                          <div className="mt-2 text-xs text-gray-600">Cocina americana · Abierto ahora</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Barra inferior dentro del teléfono (navegación) */}
                  <div className="p-2 border-t bg-white/60">
                    <div className="flex items-center justify-between px-2">
                      <button className="flex flex-col items-center text-amber-500 text-xs">
                        <Home size={18} />
                        <span>Inicio</span>
                      </button>
                      <button className="flex flex-col items-center text-gray-500 text-xs">
                        <Grid size={18} />
                        <span>Categorías</span>
                      </button>
                      <button className="flex flex-col items-center text-gray-500 text-xs">
                        <Bell size={18} />
                        <span>Notifs</span>
                      </button>
                      <button className="flex flex-col items-center text-gray-500 text-xs">
                        <User size={18} />
                        <span>Perfil</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta flotante fuera del teléfono para dar contexto comercial */}
              <motion.div
                className="mt-4 mx-auto lg:mx-0 lg:absolute lg:-bottom-10 lg:left-1/2 lg:-translate-x-1/2 bg-white rounded-xl shadow-xl p-3 w-11/12"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center">
                    <Store size={20} style={{ color: pinkMain }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">Burger Spot</div>
                    <div className="text-xs text-gray-500">Tarjeta de ejemplo dentro de la app</div>
                  </div>
                  <div>
                    <button className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm shadow">Ver</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Small decorative nav blob */}
            <div className="hidden lg:flex absolute bottom-6 right-0 gap-3">
              <div className="bg-white/90 rounded-2xl p-2 shadow">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-amber-500">◎</div>
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
