import Rain from "./Rain";
import Clouds from "./Clouds";
import { useState } from "react";

export default function App() {
  const [seccion, setSeccion] = useState("inicio");

  return (
    <>
      <div className="min-h-screen text-white flex flex-col items-center p-6 transition-all duration-500"
          style={{
            background:
              seccion === "inicio" ? "linear-gradient(to bottom, #cbd5e1, #475569)" :
              seccion === "sobre" ? "linear-gradient(to bottom, #94a3b8, #1e293b)" :
              seccion === "proyectos" ? "linear-gradient(to bottom, #64748b, #0f172a)" :
              "linear-gradient(to bottom, #334155, #0f172a)"
          }}>
            <Clouds tipo={seccion} />
            {seccion === "sobre" && <Rain intensidad="light" />}
            {seccion === "proyectos" && <Rain intensidad="medium" />}
            {seccion === "contacto" && <Rain intensidad="heavy" rayos />}

        <nav className="flex gap-4 mb-8">
          <button onClick={() => setSeccion("inicio")} className="bg-white/10 px-4 py-2 rounded hover:bg-white/20">Inicio</button>
          <button onClick={() => setSeccion("sobre")} className="bg-white/10 px-4 py-2 rounded hover:bg-white/20">Sobre mí</button>
          <button onClick={() => setSeccion("proyectos")} className="bg-white/10 px-4 py-2 rounded hover:bg-white/20">Proyectos</button>
          <button onClick={() => setSeccion("contacto")} className="bg-white/10 px-4 py-2 rounded hover:bg-white/20">Contacto</button>
        </nav>

        <main className="text-center">
          {seccion === "inicio" &&( 
          <div>
           <h1 className="text-4xl font-bold">🌩️ Bienvenido a Cumulonimbus</h1>
            <div>
                <div className="text-5xl font-bold">
                  <p>Donde de una tormenta puede resultar algo emocionante aquí podrás encontrar todo tipo de ideas buenisimas, desde crear un simple logo hasta hacer una pelicula</p>
                </div>
                <div className="w-65">
                  <img src="images/logo.png" alt="" />
                </div>
            </div> 
          </div>)}
          {seccion === "sobre" && <p className="text-2xl">Soy un desarrollador que convierte nubes en ideas 💡</p>}
          {seccion === "proyectos" && <p className="text-2xl">Aquí verás mis creaciones 🧪</p>}
          {seccion === "contacto" && <p className="text-2xl">¿Hablamos? ✉️</p>}
        </main>
      </div>
    </>
  );
}