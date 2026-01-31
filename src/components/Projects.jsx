export default function Projects() {
    const projects = [
        {   
            title: "Aplicación Web de Gestión de Tareas con Autenticación Segura",
            link: "https://github.com/leonardostore389-tech/loginresgitertasks/tree/master",
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXIs14uXvXtE6nPoOYdHzJSEZf3YSSrTjxCa2fZ1SyL0DqWAzIzhX4Y4daaKtpJTgZm6T_sAJgqLqo4CPw9HIjlNJmfehtBZq61qKL4M8XuHAPhbln-NnXtA142P68JHV__Qtxv2-oYPaGx3eLmwGNKEJ3cCQSI-FIdFkAF5QSUzmRIcvnSGxACKOWPBHl/s1616/gestortareas.PNG" ,
            description: "Una aplicación web full-stack para gestión de tareas que incluye autenticación de usuarios, CRUD de tareas y una interfaz responsive. Se enfoca en implementar prácticas seguras.",
            tech: [ "React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"]
        },
        
        
       
    ];

    return (
        <section id="projects" className="my-20 w-full flex flex-col gap-10 max-w-5xl mx-auto">
            <h2 className="text-5xl text-green-400 font-bold text-center">
                Mis Proyectos
            </h2>

            {projects.map((project, idx) => (
                <div key={idx} className="p-8 bg-gray-900 flex flex-col lg:flex-row gap-5 shadow rounded-lg transition hover:shadow-xl hover:scale-[102%] w-full">
                    
                    {/* Imagen */}
                    <div className="w-80 rounded">
                        <a href={project.link} className="w-full h-full">
                            <img src={project.img} alt={project.title} className="w-full h-full object-cover rounded"/>
                        </a>
                    </div>

                    {/* Contenido */}
                    <div className="flex flex-col gap-3 justify-center flex-1 text-gray-300">
                        <h2 className="font-bold text-3xl text-green-400 text-center lg:text-left">
                            <a className="hover:underline" href={project.link}>
                                {project.title}
                            </a>
                        </h2>
                        <p>{project.description}</p>

                        {/* Tecnologías como cuadritos */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}


