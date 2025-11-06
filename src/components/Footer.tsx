// Footer actualizado: colores locales y copy sin mención a delivery
export default function Footer() {
  const pinkMain = "#F4B6B6";
  const pinkHover = "#F19292";
  const pinkLight = "#FADCDC";

  return (
    <footer
      className="text-gray-800 py-12 md:py-16"
      style={{
        background: `linear-gradient(135deg, ${pinkLight}, ${pinkMain})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: pinkHover }}
            >
              UMAI
            </h3>
            <p className="text-gray-700">
              Descubre y explora sitios, menús y contenido — demo de app móvil.
            </p>
          </div>
          {/* ...existing code... */}
        </div>

        <div className="border-t border-pink-200 pt-8 text-center text-gray-700">
          <p>
            &copy; 2025{" "}
            <span style={{ color: pinkHover }} className="font-semibold">
              UMAI
            </span>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
