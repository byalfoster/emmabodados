import { allImages } from "@/types/imgtype";

export const Hero = () => {
  // Textos para MOBILE
  const mobileTitle = "Estrategia y creatividad en el ejercicio del derecho";

  // Textos para DESKTOP
  const desktopTitle = "Estrategia y creatividad en el ejercicio del derecho";

  return (
    <>
      {/* Versión MOBILE (hasta md) */}
      <section
        className="
          relative
          w-screen
          aspect-square
          md:hidden
          overflow-hidden
        "
      >
        <img
          src={allImages.heroImgMobile}
          alt="Estrategia legal a tu alcance"
          className="
            w-full
            h-full
            object-cover
          "
        />

        <div
          className="
            absolute inset-0
            flex flex-col justify-end items-start
            px-10 pb-20
          "
        >
          <h1
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="false"              // 👈 se puede animar muchas veces
            data-aos-mirror="true"             // 👈 reacciona al salir/entrar
            data-aos-anchor-placement="top-bottom"
            className="text-cloudGray text-1xl font-bold max-w-45"
          >
            {mobileTitle}
          </h1>
        </div>
      </section>

      {/* Versión DESKTOP (md en adelante) */}
      <section
        className="
          relative
          h-screen w-screen
          hidden md:flex
          flex-col justify-center text-left
          bg-no-repeat bg-center bg-cover
        "
        style={{ backgroundImage: `url(${allImages.heroImg})` }}
      >
        {/* Contenedor reducido del h1 */}
        <div className="max-w-xl pl-16">
          <h1
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="false"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-bottom"
            className="text-navyDeep text-5xl font-bold"
          >
            {desktopTitle}
          </h1>
        </div>

        {/* Imagen nombres en esquina inferior izquierda */}
        <img
          src={allImages.nombres}
          alt="Nombres del estudio"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="700"
          data-aos-once="false"
          data-aos-mirror="true"
          data-aos-anchor-placement="top-bottom"
          className="
            absolute
            bottom-10 left-0
            w-xl h-auto
          "
        />
      </section>
    </>
  );
};
