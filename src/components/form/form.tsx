import { useForm } from "@/hooks";
import { sendEmail } from "@/services/form";
import type { FormType } from "@/types/form";
import { useState, useEffect } from "react";
import { Popup } from "../popup/popup";
import { allImages } from "@/types/imgtype";
import { ImageUtils } from "@/utils/imgUtils";

const initialState: FormType = {
  nombre_empresa: "",
  email: "",
  telefono: Number(""),
  motivo: "",
};

const TIMEOUTPOPUP = 1000;

export const Form = () => {
  const { handleChange, resetForm, form } = useForm(initialState);
  const [popup, setPopup] = useState<{
    title: string;
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nombre_empresa || !form.email || !form.telefono) {
      return setPopup({
        title: "Campos requeridos",
        message: "Por favor completa nombre, email y teléfono",
        type: "error",
      });
    }

    try {
      await sendEmail(form);

      setPopup({
        title: "Éxito",
        message: "Email enviado correctamente",
        type: "success",
      });

      resetForm();
    } catch {
      setPopup({
        title: "Error",
        message: "No se pudo enviar el email. Intenta nuevamente.",
        type: "error",
      });
    }
  };

  useEffect(() => {
    if (!popup) return;

    const timer = setTimeout(() => setPopup(null), TIMEOUTPOPUP);

    return () => clearTimeout(timer);
  }, [popup]);

  return (
    <section
      id="contacto"
      className="
        relative 
        w-full 
        min-h-screen
        grid place-content-center
        py-16 pb-32
        overflow-hidden
      "
    >
      {/* Fondo full-area */}
      <div className="absolute inset-0 -z-10">
        <ImageUtils
          src={allImages.fondoForm}
          alt="Fondo formulario de contacto"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido encima del fondo */}
      <div className="relative">
        <div className="bg-navyDeep text-cloudGray p-4 rounded-t-lg text-center text-lg md:text-xl">
          Envianos tu consulta
        </div>

        <form
          className="bg-cloudGray p-4 relative grid gap-8 md:w-[799px] w-[299px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <div className="flex flex-col pt-6">
              <span className="font-semibold text-md sm:text-sm">
                Nombre y empresa
              </span>
              <label className="pt-1">
                <input
                  type="text"
                  name="nombre_empresa"
                  placeholder="Ej. Julia - AYMA S.A."
                  className="overflow-x-auto whitespace-nowrap p-1 text-sm border rounded-full border-skyBlue text-center w-full"
                  value={form.nombre_empresa}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="flex flex-col pt-6">
              <span className="font-semibold text-md">E-mail</span>
              <label className="pt-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Ej. julia@ayma.com"
                  className="overflow-x-auto whitespace-nowrap p-1 text-sm border rounded-full border-skyBlue text-center w-full"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="flex flex-col pt-6">
              <span className="font-semibold">Telefono / Whatsapp</span>
              <label className="p-1">
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Ej. +54 9 11 1234 5678"
                  className="overflow-x-auto whitespace-nowrap p-1 text-sm border rounded-full border-skyBlue text-center w-full"
                  value={form.telefono}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col pt-6">
            <span className="font-semibold text-md">Motivo / Area</span>
            <label className="pt-1">
              <input
                type="text"
                name="motivo"
                placeholder="Compliance, Panel Económico"
                className="overflow-x-auto whitespace-nowrap p-1 text-sm border rounded-2xl border-skyBlue text-center w-full h-[200px]"
                value={form.motivo}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="flex flex-col pt-8 pb-6 md:col-span-2">
            <button
              type="submit"
              className="bg-navyDeep text-softGray p-3 rounded-full mt-4 hover:bg-skyBlue transition-colors w-full md:w-1/3 md:mx-auto"
            >
              Enviar consulta
            </button>
          </div>

          {popup && (
            <Popup
              title={popup.title}
              message={popup.message}
              type={popup.type}
              onClose={() => setPopup(null)}
            />
          )}
        </form>
      </div>
    </section>
  );
};
