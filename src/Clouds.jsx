export default function Clouds({ tipo }) {
    const estilosBase = "absolute inset-0 z-0 pointer-events-none overflow-hidden";
    const nube = "animate-pulse opacity-50 transition-all duration-1000";
  
    return (
      <div className={estilosBase}>
        {tipo === "inicio" && (
          <div className={`${nube} bg-white w-64 h-64 rounded-full blur-2xl top-20 left-10 absolute`} />
        )}
        {tipo === "sobre" && (
          <>
            <div className={`${nube} bg-gray-300 w-64 h-64 rounded-full blur-2xl top-10 left-20 absolute`} />
            <div className={`${nube} bg-gray-400 w-48 h-48 rounded-full blur-2xl top-40 right-10 absolute`} />
          </>
        )}
        {tipo === "proyectos" && (
          <>
            <div className={`${nube} bg-gray-500 w-64 h-64 rounded-full blur-2xl top-0 left-0 absolute`} />
            <div className={`${nube} bg-gray-600 w-80 h-80 rounded-full blur-2xl top-32 right-0 absolute`} />
          </>
        )}
        {tipo === "contacto" && (
          <>
            <div className={`${nube} bg-gray-700 w-72 h-72 rounded-full blur-2xl top-10 left-10 absolute`} />
            <div className={`${nube} bg-gray-800 w-80 h-80 rounded-full blur-2xl bottom-10 right-10 absolute`} />
          </>
        )}
      </div>
    );
  }