// Skills.js
export default function Skills() {
  const skills = [
    { name: "Python", category: "Language / Data" },
    { name: "Power BI", category: "Data Visualization" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "React", category: "Frontend Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend Framework" },
    { name: "Git", category: "Version control" },
    { name: "MongoDB", category: "Database" },
  { name: "SQL server", category: "Database" },
  
  ];

  return (
    <section
      id="skills"
      className="px-10 w-full my-40 max-w-5xl mx-auto"
    >
      {/* Título */}
      <h2 className="text-center text-6xl text-green-400 font-bold">
        Mis Habilidades
      </h2>

      {/* Skills */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 mx-auto max-w-3xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group cursor-default px-6 py-5 rounded bg-gray-900 border border-gray-700 hover:border-green-400 transition"
          >
            <p className="text-green-400 font-bold text-lg group-hover:text-green-300">
              {skill.name}
            </p>
            <p className="text-gray-400 text-sm font-mono mt-1">
              {skill.category}
            </p>
          </div>
        ))}
      </div>

      {/* Decoración tipo terminal */}
      <div className="mt-16 font-mono text-sm text-center text-gray-400">
        <span className="text-green-400">$</span>{" "}
        <span className="text-white">npm run</span>{" "}
        <span className="text-green-300">build:skills</span>
        <span className="animate-blink ml-1">▊</span>
      </div>
    </section>
  );
}
