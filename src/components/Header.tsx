import { Menu, X } from "lucide-react";
import { useState } from "react";
import LoginModal from "./LoginModal"; // agregado

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleNavClick = (section: string) => {
    const scrollToSection = () => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    };

    // If we're not on root, navigate to root first so the sections exist,
    // then scroll after a short delay when the root layout is rendered.
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      setTimeout(scrollToSection, 80);
    } else {
      scrollToSection();
    }
  };

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setIsMenuOpen(false);
  };

  const pinkMain = "#F4B6B6"; // Rosa pastel principal
  const pinkHover = "#F19292"; // Rosa un poco más oscuro para hover

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1
              className="text-2xl md:text-3xl font-bold cursor-pointer"
              style={{ color: pinkMain }}
              onClick={() => handleNavClick('inicio')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleNavClick('inicio');
                }
              }}
              aria-label="Ir al inicio"
            >
              UMAI
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("inicio")}
              className="text-gray-700 transition-colors font-medium"
              style={{ "--tw-text-hover": pinkMain } as React.CSSProperties}
              onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick("descargas")}
              className="text-gray-700 transition-colors font-medium"
              onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Descargas
            </button>
            <button
              onClick={() => handleNavClick("explora")}
              className="text-gray-700 transition-colors font-medium"
              onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Explora
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleOpenLogin}
              className="px-4 py-2 text-gray-700 transition-colors font-medium"
              onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
              //  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              INICIA SESIÓN
            </button>
            <button
              onClick={() => {
                window.history.pushState({}, "", "/register");
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}
              className="px-6 py-2 text-white rounded-full font-medium transition-colors"
              style={{ backgroundColor: pinkMain }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = pinkHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = pinkMain)
              }
            >
              REGÍSTRATE
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Modal de login */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {["inicio", "descargas", "explora"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="block w-full text-left py-2 text-gray-700 transition-colors font-medium"
                onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button
              onClick={() => {
                setIsLoginOpen(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-700 transition-colors font-medium"
              onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              INICIA SESIÓN
            </button>
            <button
              onClick={() => {
                window.history.pushState({}, "", "/register");
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}
              className="block w-full py-2 text-white rounded-full font-medium transition-colors"
              style={{ backgroundColor: pinkMain }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = pinkHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = pinkMain)
              }
            >
              REGÍSTRATE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
