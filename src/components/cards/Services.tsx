import { ServiceCard } from "./ServiceCard";
import { CardList } from "./CardList";
import { allImages } from "@/types/imgtype";

export const Services = () => {
  return (
    <section
      id="servicios"
      className="relative w-full py-16 md:pt-35 pb-16 overflow-hidden"
    >
      {/* Fondo full-area */}
      <div className="absolute inset-0 -z-10">
        <img
          src={allImages.fondoServices} // ajustá el nombre de la key si es distinto
          alt="Fondo servicios"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full px-4 md:px-8">
        <h2
          data-aos="fade-up"
          data-aos-duration="600"
          className="
            text-2xl md:text-3xl font-semibold text-inkBlue mb-8
            text-center
          "
        >
          Áreas de práctica
        </h2>

        <div
          className="
            grid w-full mb-8
            grid-cols-1
            gap-y-4 gap-x-4
            md:grid-cols-4 md:gap-y-4 md:gap-x-6
          "
        >
          {/* Primera fila */}
          <div
            className="
              md:col-span-1
              transition-transform duration-300
              hover:scale-[1.03]
            "
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="0"
          >
            <ServiceCard
              title="Compliance"
              description="Asesoramos a clientes en todas las verticales del ecosistema Fintech, incluyendo: (I) billeteras virtuales y proveedores de servicios de pago en general, (II) proveedores no financieros de crédito (lending), (III) PSAV o exchanges, (IV) remesas, (V) startups."
            />
          </div>

          <div
            className="
              md:col-span-1
              transition-transform duration-500 ease-out
              hover:scale-[1.01]
            "
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <ServiceCard
              title="Derecho Penal Empresarial"
              description="En EMM Abogados brindamos asesoramiento estratégico en Derecho Penal Económico, con especial foco en régimen penal cambiario, delitos aduaneros, delitos fiscales y lavado de activos"
            />
          </div>

          <div
            className="
              md:col-span-1
              transition-transform duration-500 ease-out
              hover:scale-[1.01]
            "
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <ServiceCard
              title="Derecho Penal"
              description="Asesoramiento y representación en causas seguidas por delitos comunes en el fuero federal y ordinario, en todas las instancias."
            />
          </div>

          <div
            className="
              md:col-span-1
              transition-transform duration-500 ease-out
              hover:scale-[1.01]
            "
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <ServiceCard
              title="Sumarios y Procedimientos Administrativos"
              description="Ejercemos la defensa y representación en sumarios y procedimientos sancionatorios a cargo de organismos reguladores (BCRA, UIF, ARCA, DGA, CNV, Loterías, etc.), actuando en todas las instancias del proceso: elaboración de descargos, recursos y gestiones ante los reguladores."
            />
          </div>

          {/* Segunda fila */}
          <div
            className="
              md:col-span-4
              transition-transform duration-500 ease-out
              hover:scale-[1.01]
            "
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="400"
          >
            <CardList
              title="Nuestros servicios incluyen:"
              items={[
                "Diseño e implementación de programas de cumplimiento.",
                "Evaluación de riesgo regulatorio para productos y servicios.",
                "Diseño de procesos de Due Diligence (DD) y Know Your Client (KYC).",
                "Consultoría en análisis de alertas y reportes de operaciones sospechosas ante UIF  (ROS, RT).",
                "Auditoría y Revisión Externa Independiente (REI).",
                "Externalización de la función de Oficial de Cumplimiento/MLRO.",
                "Staffing de Compliance para Startups y Fintechs en etapas tempranas.",
                "Contestación de vistas y descargos.",
                "Asistencia en inspecciones, requerimientos y auditorías.",
                "Gestión de respuestas a reguladores.",
                "Asesoramiento estratégico en delitos económicos.",
                "Protocolos internos de actuación ante contingencias.",
                "Investigaciones internas.",
                "Preparación de descargos y defensas técnicas.",
                "Intervención en procedimientos de decomiso, secuestro y medidas cautelares.",
                "Querellas",
                "Defensas penales.",
                "Negociación y acuerdos.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
