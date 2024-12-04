// Aquest component crida al conjunt de Box's i especifica les seves característiques:

// Importació d'elements necessaris:
import "../App.css";
import Box from "./Box.jsx"

// Definició del component:

export default function Carrusel() {
    return (
        <section className="cont_img">
            <Box 
                titol = "Sobre mi"
                imatge = "/media/sobremi1.jpeg"
                pagina = "/index2"
            />
            <Box 
                titol = "Projectes"
                imatge = "/media/mitrabajo1.jpeg"
                pagina = "/index3"
            />
            <Box
                titol = "Newsletter"
                imatge = "/media/newsletter.jpeg"
                pagina = "/index5"
            />
            <Box
                titol = "Contacte"
                imatge = "/media/contacte.jpeg"
                pagina = "/index4"
            />
        </section>
    );

}