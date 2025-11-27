import logo from "@/assets/img/logo-headder.png"
import heroImg from "@/assets/img/heroImg.webp"
import fondoAbout from "@/assets/img/fondo about.webp"
import logoFooter from "@/assets/img/logo-footer.webp"
import francisco from "@/assets/img/francisco.webp"
import julieta from "@/assets/img/julieta.webp"
import pablo from "@/assets/img/pablo.webp"
import heroImgMobile from "@/assets/img/heroImgMobile.webp"
import nombres from "@/assets/img/nombres.png"
import fondoForm from "@/assets/img/fondo-form.webp"
import fondoServices from "@/assets/img/fondo services.webp"

export type ImageT = {
    src: string;
    alt: string;
    className?: string;
    [key: string]: any;
}

export const allImages = {
    "logo": logo,
    "heroImg": heroImg,
    "fondoAbout": fondoAbout,
    "logoFooter": logoFooter,
    "francisco": francisco,
    "julieta": julieta,
    "pablo": pablo,
    "nombres": nombres,
    "heroImgMobile": heroImgMobile,
    "fondoForm": fondoForm,
    "fondoServices": fondoServices,
}