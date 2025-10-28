import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const pinkMain = '#F4B6B6'; // Rosa pastel principal
  const pinkHover = '#F19292'; // Rosa un poco más oscuro para hover

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold" style={{ color: pinkMain }}>
              UMAI
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('inicio')}
              className="text-gray-700 transition-colors font-medium"
              style={{ '--tw-text-hover': pinkMain } as React.CSSProperties}
              onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('descargas')}
              className="text-gray-700 transition-colors font-medium"
              onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              Descargas
            </button>
            <button
              onClick={() => handleNavClick('explora')}
              className="text-gray-700 transition-colors font-medium"
              onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              Explora
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => alert('Función de inicio de sesión próximamente')}
              className="px-4 py-2 text-gray-700 transition-colors font-medium"
              onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              INICIA SESIÓN
            </button>
            <button
              onClick={() => alert('Función de registro próximamente')}
              className="px-6 py-2 text-white rounded-full font-medium transition-colors"
              style={{ backgroundColor: pinkMain }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = pinkMain)}
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

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {['inicio', 'descargas', 'explora'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="block w-full text-left py-2 text-gray-700 transition-colors font-medium"
                onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button
              onClick={() => alert('Función de inicio de sesión próximamente')}
              className="block w-full text-left py-2 text-gray-700 transition-colors font-medium"
              onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              INICIA SESIÓN
            </button>
            <button
              onClick={() => alert('Función de registro próximamente')}
              className="block w-full py-2 text-white rounded-full font-medium transition-colors"
              style={{ backgroundColor: pinkMain }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = pinkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = pinkMain)}
            >
              REGÍSTRATE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
