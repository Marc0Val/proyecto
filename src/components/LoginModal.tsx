import { X } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pinkMain = "#F4B6B6";
  const pinkHover = "#F19292";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }
    // Implementación de ejemplo: reemplazar por llamada real
    alert(`Iniciando sesión con ${email}`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md mx-4 rounded-2xl bg-white shadow-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold" style={{ color: pinkMain }}>
            INICIA SESIÓN
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              placeholder="********"
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              type="submit"
              className="flex-1 py-2.5 text-white rounded-full font-medium transition-colors"
              style={{ backgroundColor: pinkMain }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = pinkHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = pinkMain)
              }
            >
              Entrar
            </button>

            <button
              type="button"
              onClick={() => {
                // Navegar a registro: cambiar ruta y cerrar modal
                window.history.pushState({}, "", "/register");
                window.dispatchEvent(new PopStateEvent("popstate"));
                onClose();
              }}
              className="py-2.5 px-4 border rounded-full font-medium"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
