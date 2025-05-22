export default function LightningBolt({ left, top, angle }) {
    // Generar puntos aleatorios para simular una forma de rayo
    const generatePath = () => {
      let d = `M32 0`; // punto inicial
      let y = 0;
      for (let i = 0; i < 10; i++) {
        const x = 32 + Math.random() * 30 - 15; // varía el x para que no sea vertical
        y += Math.random() * 10 + 8; // avanza hacia abajo
        d += ` L${x} ${y}`;
      }
      return d;
    };
  
    return (
      <svg
        className="absolute z-10 pointer-events-none animate-lightning"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          transform: `rotate(${angle}deg)`,
          width: "60px",
          height: "120px",
          opacity: 0.95,
        }}
        viewBox="0 0 64 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={generatePath()}
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="drop-shadow(0 0 6px white)"
        />
      </svg>
    );
  }
  