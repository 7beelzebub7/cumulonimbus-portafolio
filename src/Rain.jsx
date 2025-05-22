import LightningBolt from "./LightningBolt";
import { useEffect, useState } from "react";

function generarCaminoRayo(ancho, alto, ramificaciones = 3) {
    let path = `M ${ancho / 2} 0`;
    let x = ancho / 2;
    let y = 0;
  
    for (let i = 0; i < 10; i++) {
      const dx = (Math.random() - 0.5) * 20;
      const dy = alto / 10;
      x += dx;
      y += dy;
      path += ` L ${x} ${y}`;
  
      // Ramificación ocasional
      if (ramificaciones > 0 && Math.random() < 0.3) {
        const rx = x + (Math.random() - 0.5) * 40;
        const ry = y + (Math.random() - 0.5) * 40;
        path += ` M ${x} ${y} L ${rx} ${ry}`;
      }
    }
  
    return path;
  }
  
export default function Rain({ intensidad = "light", rayos = false }) {
  const [flashes, setFlashes] = useState([]);

  useEffect(() => {
    if (rayos) {
        const interval = setInterval(() => {
            const flash = {
              id: Date.now(),
              left: Math.random() * 90,
              top: Math.random() * 30,
              angle: Math.random() * 20 - 10,
            };
            setFlashes((prev) => [...prev, flash]);
            setTimeout(() => {
              setFlashes((prev) => prev.filter((f) => f.id !== flash.id));
            }, 300);
          }, Math.random() * 2500 + 1500); // entre 1.5 y 4 segundos
      return () => clearInterval(interval);
    }
  }, [rayos]);

  const cantidad =
    intensidad === "light" ? 30 : intensidad === "medium" ? 60 : 100;

  const gotas = Array.from({ length: cantidad }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: Math.random() * 1 + 0.5,
    delay: Math.random() * 5,
  }));

  return (
    <>
      {/* Lluvia */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {gotas.map((gota) => (
          <div
            key={gota.id}
            className="w-0.5 h-5 bg-white/50 absolute top-[-20px] animate-raindrop"
            style={{
              left: `${gota.left}%`,
              animationDuration: `${gota.duration}s`,
              animationDelay: `${gota.delay}s`,
            }}
          />
        ))}
      </div>
  
      {/* Relámpagos */}
      {flashes.map((flash) => (
  <LightningBolt
    key={flash.id}
    id={flash.id}
    left={flash.left}
    top={flash.top}
    angle={flash.angle}
  />
))}

    </>
  )}