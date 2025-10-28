import Header from "./Header";
import Footer from "./Footer";

export default function NotFound() {
  const handleGoHome = () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-24 px-6">
        <div className="max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-emerald-100 text-emerald-600 mb-6 shadow-lg">
            <span className="text-4xl font-bold">404</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida. Puedes
            volver al inicio o explorar otras secciones.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleGoHome}
              className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all font-medium"
            >
              Volver al inicio
            </button>
            <a
              href="#explora"
              onClick={() => window.history.pushState({}, "", "/")}
              className="px-6 py-3 bg-white text-emerald-600 rounded-full border-2 border-emerald-600 hover:bg-gray-50 transition-all font-medium"
            >
              Explorar platillos
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
