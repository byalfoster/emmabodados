import { AboutCards } from "./aboutCards";
import { ImageUtils } from "@/utils/imgUtils";
import { allImages } from "@/types/imgtype";

export const About = () => {
  return (
    <>
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <ImageUtils
            src={allImages.fondoAbout}
            alt="Fondo about"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 👇 acá estaba el margin-bottom: lo cambiamos por padding-bottom */}
        <div className="flex flex-col text-center pb-8 sm:pb-12 lg:pb-16">
          {/* Contenedor común para título + párrafo + grid */}
          <div className="relative p-4 sm:px-6 lg:px-8 lg:pt-20">
            {/* Título + texto */}
            <div
              className="py-8 sm:py-12 lg:py-4"
              data-aos="zoom-in"
              data-aos-duration="600"
            >
              <h2 className="text-left text-2xl font-bold text-white pb-2 sm:pb-2">
                Nuestro Estudio
              </h2>

              <p className="text-left text-blue-50 leading-relaxed sm:leading-loose">
                Somos un equipo joven y dinámico, comprometido con un ejercicio
                del derecho basado en la creatividad y la implementación de una
                estrategia acorde a cada necesidad. Con un fuerte enfoque en el
                ecosistema crypto/fintech, el derecho penal económico y el
                derecho regulatorio, brindamos soluciones jurídicas innovadoras
                y eficaces. Contamos con una sólida formación técnica que,
                combinada con nuestra vasta experiencia, nos permite aportar una
                mirada eficiente y, a al mismo tiempo, actualizada.
              </p>
            </div>

            {/* Grid de AboutCards: MISMO ancho que el texto */}
            <article
              className="
                grid
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-y-4
                gap-x-[2px]
                pt-4 sm:pt-6 lg:pt-1
                justify-center
                justify-items-center
              "
            >
              {/* Izquierda – Etcheverry */}
              <div
                className="transition-transform duration-500 ease-out hover:scale-[1.01]"
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-easing="ease-in-sine"
              >
                <AboutCards
                  src={allImages.pablo}
                  title="Pablo Etcheverry"
                  subtitle="+15 años en investigaciones criminales. Enfoque en litigios."
                  chip={["Derecho Penal", "Litigios"]}
                  description="Abogado especialista en Derecho Penal y socio fundador del Estudio. Posee una amplia trayectoria de más de quince años actuando en investigaciones complejas en la Justicia Federal de San Isidro, a lo que se suma un reciente paso por la Unidad de Información Financiera (UIF), donde se desempeñó como Subdirector de Litigios Penales, interviniendo en causas de alto impacto vinculadas al lavado de activos y delitos económicos."
                />
              </div>

              {/* Centro – Julieta */}
              <div
                className="transition-transform duration-500 ease-out hover:scale-[1.01]"
                data-aos="zoom-in"
                data-aos-duration="600"
              >
                <AboutCards
                  src={allImages.julieta}
                  title="Julieta Martin"
                  subtitle="Prevención de lavado y delitos económicos. Investigaciones complejas. Armado de áreas de compliance. 
"
                  chip={["PLA/TF", "Penal"]}
                  description="Antes de fundar el Estudio, trabajó como Manager de Compliance en una fintech brasileña, se desempeñó como subdirectora de litigios penales en la Unidad de Información Financiera (UIF), formó parte del Estudio Ramirez y Gonzalez Guerra y del Estudio Lisicki Litvin & Asoc, en las áreas de derecho penal económico y compliance.
Es abogada egresada de la Universidad Empresarial Siglo21, en 2022 se graduó como Magister en Derecho Penal en la Universidad Austral, y realizó posgrados en Derecho Penal Tributario (UBA), Crypto Compliance (UMSA) y Crypto en investigaciones (UBA).
Es autora de publicaciones académicas y ha participado como docente de posgrado en la Universidad de Buenos Aires y la Universidad Nacional de Entre Ríos, en programas de prevención de lavado.
"
                />
              </div>

              {/* Derecha – Francisco */}
              <div
                className="transition-transform duration-500 ease-out hover:scale-[1.01]"
                data-aos="fade-left"
                data-aos-duration="600"
              >
                <AboutCards
                  src={allImages.francisco}
                  title="Francisco Mateos"
                  subtitle="Especialista en Derecho Penal Empresarial y lavado de activos.
"
                  chip={["Litigios", "PLA/FT/FP"]}
                  description="Socio fundador de EMM Abogados, integró anteriormente el equipo de Derecho Penal Empresarial de un estudio jurídico de primera línea, donde participó en causas vinculadas a defraudaciones, fraudes corporativos, delitos económicos, cibercrimen y delitos aduaneros. Posteriormente, se desempeñó en la Dirección de Litigios Penales de la Unidad de Información Financiera (UIF), interviniendo en investigaciones de alta complejidad relacionadas con el lavado de activos y delitos económicos.
Es abogado egresado de la Universidad de Buenos Aires. Cuenta con una Especialización en Derecho Penal de la Universidad Torcuato Di Tella, donde actualmente finaliza la Maestría en Derecho Penal.Asimismo, realizó diplomaturas en Compliance y Prevención de Lavado de Activos (UBA) y en Criptoactivos en Investigaciones Criminales (UBA).
"
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
