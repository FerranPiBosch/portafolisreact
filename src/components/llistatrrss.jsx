

// importació dels logos de Fontawesome
import { faGithub, faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// importació dels components necessaris
import { useEffect, useState } from "react";
import "../App.css";
import Rrss from "./rrss.jsx"

export default function Llilstatrrss() {
    const [rrss, setRrss] = useState([]);
    // Al guardar el logo en el json ha sigut necessari fer-ho així, ja que si no, no cargaba l'import
    const iconMap = {
        faGithub: faGithub,
        faLinkedin: faLinkedin,
        faFacebook: faFacebook,
        faInstagram: faInstagram,
      };
// carregar les dades del document .json (apartat de rrss)
    useEffect(() => {
        fetch('/dades.json') 
            .then(response => {
                if (!response.ok) throw new Error("No ses pot carregar el JSON");
                return response.json();
            })
            .then(data => setRrss(data.rrss)) 
            .catch(error => console.error("Error al cargar les rrss:", error));
    }, []);

    return (
        <>
            <h1 className="titol-pag">Sobre mi</h1>
            <article className="anidada-main">
                {rrss.length > 0 ? (
                    rrss.map((xarxa, index) => (
                        <Rrss
                            key={xarxa.id} 
                            nom={xarxa.nom}
                            logo={iconMap[xarxa.logo]}
                            pagina={xarxa.pagina}
                            descripcio={xarxa.descripcio}
                        />
                    ))
                ) : (
                    <p>Hi hagut un problema al carregar les rrss...</p>
                )}
            </article>
        </>
    );

}