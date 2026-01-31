// Contact.js
import WhatsAppIcon from "../assets/whatsapp_2504957.png";
import GmailIcon from "../assets/google_2504914.png";
import LinkedinIcon from "../assets/linkedin_2504923.png";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                      w-[600px] h-[400px] bg-emerald-500/10 
                      rounded-full blur-[128px]" />

      <div className="max-w-3xl mx-auto relative text-center">

        {/* Section header */}
        <span className="font-mono text-emerald-400 text-sm">
           ¿Qué sigue?
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Trabajemos Juntos
        </h2>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
          Estoy abierto a nuevas oportunidades y colaboraciones.  
          Si tienes un proyecto interesante o solo quieres saludar, ¡escríbeme!
        </p>

        {/* Contact links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* WhatsApp */}
          <a
            href="https://wa.me/51922318300?text=Hola!%20Vi%20tu%20portafolio"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 
                       border border-gray-700 rounded-lg shadow 
                       hover:bg-emerald-600 hover:text-white transition"
          >
            <img src={WhatsAppIcon} alt="WhatsApp" className="w-6 h-6" />
            <span className="font-semibold">WhatsApp</span>
          </a>

          {/* Gmail */}
          <a
            href="mailto:geeks_for_nardouni389@gmail.com"
            className="flex items-center justify-center gap-3 px-6 py-4 
                       border border-gray-700 rounded-lg shadow 
                       hover:bg-red-600 hover:text-white transition"
          >
            <img src={GmailIcon} alt="Gmail" className="w-6 h-6" />
            <span className="font-semibold">Gmail</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/leonardo-armando-a-926429251"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 
                       border border-gray-700 rounded-lg shadow 
                       hover:bg-blue-700 hover:text-white transition"
          >
            <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            <span className="font-semibold">LinkedIn</span>
          </a>
        </div>

        {/* Location */}
        <div className="mt-10 text-gray-400 font-mono text-sm">
          Lima, Perú
        </div>

        {/* Status */}
        <div className="mt-16 font-mono text-sm">
          <div className="inline-flex items-center gap-2 
                          border border-gray-700 rounded-lg px-4 py-2">
            <span className="text-emerald-400">✓</span>
            <span className="text-gray-400">
              Disponible para proyectos
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
