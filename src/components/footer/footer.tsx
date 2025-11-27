import { ImageUtils } from "@/utils/imgUtils";
import { allImages } from "@/types/imgtype";

const FooterInfo = () => (
  <div className="flex flex-col md:flex-row gap-6 text-left md:items-start">
    <div className="p-0 md:p-4">
      <h3 className="text-xs sm:text-xl font-bold mb-4 text-softGray">
        Contacto
      </h3>
      <div className="space-y-1 text-softGray text-[10px] sm:text-sm">
        {/* Dirección en una sola línea en desktop */}
        <p className="whitespace-normal md:whitespace-nowrap">
          <span className="font-medium">Dirección:</span>{" "}
          <span>Reconquista 336, piso 6, oficina P6</span>
        </p>

        <p>Buenos Aires - (C1003ABH)</p>
        <p>
          <span className="font-medium">Teléfono:</span> 54 9 0000 0000
        </p>
        <p>
          <span className="font-medium">Mail:</span>{" "}
          contacto@emmabogados.com
        </p>
      </div>
    </div>

    <div className="p-0 md:p-4">
      <h3 className="text-xs sm:text-xl font-bold mb-4 text-softGray">
        Áreas de Práctica
      </h3>
      <div className="space-y-1 text-cloudGray text-[10px] sm:text-sm">
        <p>Compliance</p>
        <p>Derecho penal empresario</p>
        {/* Sumarios en una sola línea en desktop */}
        <p className="whitespace-normal md:whitespace-nowrap">
          Sumarios y procedimientos administrativos
        </p>
        <p>Derecho penal</p>
      </div>
    </div>
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-navyDeep text-softGray pt-6 pb-2 sm:pt-2 px-6">
      {/* DESKTOP (≥ sm): logo izq, info centrada, copyright abajo derecha */}
      <div className="hidden sm:flex w-full flex-col gap-4">
        {/* Fila superior */}
        <div className="grid grid-cols-3 items-start">
          {/* Logo izquierda */}
          <div className="flex justify-start">
            <div className="w-24 h-24 sm:w-32 sm:h-32">
              <ImageUtils
                src={allImages.logoFooter}
                alt="Logo Emm abogados"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Centro: Contacto + Áreas de práctica */}
          <div className="flex justify-center">
            <FooterInfo />
          </div>

          {/* Columna derecha vacía para centrar el bloque */}
          <div />
        </div>

        {/* Fila inferior: copyright esquina inferior derecha */}
        <div className="flex justify-end">
          <p className="text-[10px] text-softGray text-right">
            &copy; {new Date().getFullYear()} EMM Abogados. Todos los derechos
            reservados.
          </p>
        </div>
      </div>

      {/* MOBILE (< sm): versión anterior */}
      <div className="w-full flex flex-col gap-6 sm:hidden">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <FooterInfo />
          </div>

          <div className="shrink-0 ml-4">
            <div className="w-20 h-20">
              <ImageUtils
                src={allImages.logoFooter}
                alt="Logo Emm abogados"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-end">
          <p className="text-[8px] text-softGray text-right">
            &copy; {new Date().getFullYear()} EMM Abogados. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
