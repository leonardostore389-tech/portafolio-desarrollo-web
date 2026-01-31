// Navbar.js
export default function Navbar() {
  return (
    <nav className="w-full px-5 sm:px-10 py-5 
                    bg-black/80 backdrop-blur-lg 
                    border-b border-green-400/30 
                    fixed top-0 z-10">
      <div className="container flex flex-col lg:flex-row
                      gap-5 justify-between w-full 
                      items-center max-w-5xl mx-auto">

        {/* Logo / Título */}
        <h3 className="text-3xl font-bold text-green-400 tracking-wider">
          Portafolio
        </h3>

        {/* Links */}
        <ul className="flex gap-3 items-center p-1 flex-wrap">
          {[
            { name: "Acerca de mí", link: "#about" },
            { name: "Habilidades", link: "#skills" },
            { name: "Proyectos", link: "#projects" },
            { name: "Contacto", link: "#contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-sm sm:text-base px-4 py-2 
                           text-gray-300 rounded 
                           transition-all duration-300
                           hover:text-black 
                           hover:bg-green-400 
                           hover:shadow-[0_0_15px_#22c55e]"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
