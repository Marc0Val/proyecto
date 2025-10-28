import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    alert(`Abriendo ${platform}...`);
  };

  const pinkLight = '#FADCDC'; // Rosa muy claro de fondo
  const pinkMain = '#F4B6B6';  // Rosa pastel principal
  const pinkHover = '#F19292'; // Rosa acentuado

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
            <h3 className="text-2xl font-bold mb-6" style={{ color: pinkHover }}>
              UMAI
            </h3>
            <p className="text-gray-700">
              Descubre y ordena los mejores platillos de tu ciudad
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg text-gray-800">Navegación</h4>
            <ul className="space-y-2">
              {['inicio', 'descargas', 'explora'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleNavClick(section)}
                    className="text-gray-700 transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg text-gray-800">Redes Sociales</h4>
            <ul className="space-y-2">
              {['Instagram', 'Facebook', 'Twitter', 'Email'].map((platform) => (
                <li key={platform}>
                  <button
                    onClick={() => handleSocialClick(platform)}
                    className="text-gray-700 transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  >
                    {platform}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg text-gray-800">Síguenos</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <button
                  key={i}
                  onClick={() =>
                    handleSocialClick(['Instagram', 'Facebook', 'Twitter', 'Email'][i])
                  }
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md"
                  style={{
                    backgroundColor: pinkMain,
                    color: '#fff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = pinkHover;
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = pinkMain;
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-pink-200 pt-8 text-center text-gray-700">
          <p>
            &copy; 2025{' '}
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
