import type{ FC } from "react";

interface PopupProps {
  title: string;
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export const Popup: FC<PopupProps> = ({ title, message, type = "success", onClose }) => {
  const bgColor =
    type === "success" ? "bg-green-500" :
    type === "error" ? "bg-red-500" :
    "bg-yellow-500";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* POPUP SOLO - SIN FONDO OSCURO */}
      <div className={`p-6 rounded-lg shadow-xl text-white ${bgColor} max-w-sm mx-4`}>
        <div className="flex justify-between items-center mb-2">
          <strong className="text-lg">{title}</strong>
          <button 
            onClick={onClose} 
            className="ml-4 font-bold hover:bg-white hover:bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center"
          >
            ×
          </button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};