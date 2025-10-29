import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const pinkMain = "#F4B6B6";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPw) {
      alert("Completa todos los campos.");
      return;
    }
    if (password !== confirmPw) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    // Reemplazar por lógica real de registro
    alert(`Cuenta creada para ${name} (${email})`);
    // Redirigir al inicio
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: pinkMain }}>
            Crea tu cuenta
          </h1>
          <p className="text-gray-600 mb-6">
            Regístrate para empezar a ordenar y explorar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="tu@correo.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  value={confirmPw}
                  onChange={(e) => setConfirmPw(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="px-6 py-3 text-white rounded-full font-medium"
                style={{ backgroundColor: pinkMain }}
              >
                Crear cuenta
              </button>
              <button
                type="button"
                onClick={() => {
                  window.history.pushState({}, "", "/");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className="px-6 py-3 border rounded-full"
              >
                Volver
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
