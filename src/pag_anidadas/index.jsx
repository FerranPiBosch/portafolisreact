// Pàgina HOME, aquesta pàgina mostrarà la petita presentació y el carrusel que ens permetrà navegar per la web

// Importacio d'elements necesssaris:
import Presentacio from "../components/presentacio.jsx"
import Carrusel from "../components/carrusel.jsx"

// Crida dels elements necessaris per a la pàgina
export default function Index() {
    return (
        <>
            <Presentacio 
            nom = "Ferran"
            text = "Un apassionat del món de la informàtica amb un títol en Sistemes Microinformàtics i Xarxes i actualment perseguint el meu grau superior en Administració de Sistemes Informàtics i Xarxes. A través de la meva trajectòria acadèmica, he dissenyat i desenvolupat diversos projectes web, reflectint la meva passió per la creativitat i la tecnologia. El meu enfocament perfeccionista, combinat amb una ètica de treball sòlida, ha estat la clau del meu creixement professional. Explora el meu portafolis per a descobrir la fusió d'habilitats tècniques i visió creativa en cada projecte."
            img1 = "/media/traje2png.png"
            img2 = "/media/traje2petita.png"
            />
            <Carrusel />
        </>
    )
}