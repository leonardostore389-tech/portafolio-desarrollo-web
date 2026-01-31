// Hero.js
import { useEffect, useState } from "react";
import logoicon from "../assets/yopersonalogo.png";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Analisis de datos · Desarrollo Web · Desarrollo Software  ·IA";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen px-10 w-full flex flex-col lg:flex-row 
                 justify-center items-center gap-12 
                 max-w-5xl mx-auto relative"
    >
      {/* Texto */}
      <div className="flex-1 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
        
        {/* Terminal intro */}
        <div className="font-mono text-green-400 text-sm">
          <span className="text-gray-400">~/portfolio</span>{" "}
          <span className="text-green-400">$</span>{" "}
          whoami
        </div>

        {/* Nombre */}
        <h1 className="text-5xl lg:text-7xl font-bold">
          <span className="text-white">Leonardo</span>{" "}
          <span className="text-green-400">Amaro</span>
        </h1>

        {/* Typing effect */}
        <div className="font-mono text-lg lg:text-xl text-gray-300">
          <span className="text-green-400">&lt;</span>
          {text}
          <span className="animate-blink ml-1">▊</span>
          <span className="text-green-400">/&gt;</span>
        </div>

        {/* Descripción */}
        <p className="text-gray-400 max-w-xl">
          Estudiante de décimo ciclo de Ingeniería Electrónica (UNI), orientado a
          un enfoque combina la excelencia técnica con una comprensión profunda de las necesidades del usuario, desarrollo web y análisis de
          datos, con interés en prácticas preprofesionales en el sector TI.
        </p>

        {/* Botones / Links */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center lg:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 border border-green-400 text-green-400 
                       font-mono rounded hover:bg-green-400 hover:text-black transition"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 text-gray-300 
                       font-mono rounded hover:border-green-400 hover:text-green-400 transition"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Imagen */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={logoicon}
          alt="Logo personal"
          className="w-3/4 lg:w-full h-auto object-cover"
        />
      </div>

      {/* Indicador scroll */}
      <div className="absolute bottom-6 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-green-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
