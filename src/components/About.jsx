// About.js
import securicon from "../assets/amenazas-a-la-ciberseguridad.png";

export default function About() {
 const highlights = [
  {
    title: "Inteligencia Artificial",
    description:
      "Interés en la aplicación de IA para automatización, análisis y mejora de sistemas, con enfoque en soluciones prácticas.",
  },
  {
    title: "Desarrollo de Software",
    description:
      "Formación en desarrollo de aplicaciones siguiendo buenas prácticas, código limpio y principios básicos de seguridad.",
  },
  {
    title: "Análisis de Datos",
    description:
      "Uso de datos para análisis, visualización y apoyo a la toma de decisiones mediante herramientas técnicas.",
  },
  {
    title: "Desarrollo Web",
    description:
      "Construcción de aplicaciones web funcionales y responsivas utilizando tecnologías modernas.",
  },
];

  return (
    <section id="about" className="py-32 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-green-400 text-sm"></span>
          <h2 className="text-4xl font-bold text-green-400">Sobre Mí</h2>
          <div className="h-px flex-1 bg-gray-700 max-w-64" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Texto */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Soy estudiante de décimo ciclo de{" "}
              <span className="text-green-400 font-medium">
                Ingeniería Electrónica en la UNI
              </span>
              , Me caracterizo por ser organizado, analítico y orientado a
              procesos, con facilidad para documentar, automatizar y optimizar
              flujos de trabajo, además de aprender rápidamente nuevas
              tecnologías.
            </p>

            <p>
            
              Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, contribuyendo a proyectos open source, o compartiendo conocimiento con la comunidad de desarrolladores.
            </p>

            <p>
              Actualmente busco prácticas preprofesionales donde pueda aplicar y
              fortalecer mis conocimientos en desarrollo web , software y análisis de datos, participando activamente en la
              operación y mejora de sistemas TI.
            </p>

            {/* Decoración tipo código */}
            <div className="font-mono text-sm bg-gray-800 border border-gray-700 rounded-lg p-4 mt-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <code className="text-gray-300">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-white">engineer</span>{" "}
                <span className="text-pink-400">=</span>{" "}
                {"{"}
                <br />
                <span className="ml-4 text-green-400">learning</span>: true,
                <br />
                <span className="ml-4 text-green-400">focus</span>: "Web & Software development",
                <br />
                <span className="ml-4 text-green-400">status</span>: "Student"
                <br />
                {"}"};
              </code>
            </div>
          </div>

          {/* Imagen + highlights */}
          <div className="space-y-6">
            <img
              src={securicon}
              alt="Ciberseguridad"
              className="w-full rounded-lg "
            />

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-gray-800 border border-gray-700 rounded-xl hover:border-green-400 transition"
                >
                  <h3 className="font-mono font-semibold text-green-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
