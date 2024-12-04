// Aquesta pàgina mostre un grid amb els projectes
//  import components necessaris
import { useEffect, useState } from "react";

// Declaració de la pagina i la seva lògica associada
export default function Index3() {
    const [projectes, setProjectes] = useState([]);
    
// crida del fitxer json (apartat de projectes)
    useEffect(() => {
        fetch('/dades.json') 
            .then(response => {
                if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
                return response.json();
            })
            .then(data => setProjectes(data.projectes)) 
            .catch(error => console.error("Error al cargar los proyectos:", error));
    }, []);


    return (
        <>
            <h1 className="titol-pag">Principals Projectes</h1>
            <div className="anidada-main">
            {projectes.length > 0 ? (
                projectes.map((projecte) => (
                    <article className="projectes-box" key={projecte.id}>
                        <h2 className="projecte-titol">{projecte.nom}</h2>
                        <a href={projecte.url} target="_blank" rel="noopener noreferrer">
                            <img src={projecte.img} alt={projecte.nom} className="projectes-img" />
                        </a>
                        <div>
                            <p className="projectes-text">{projecte.descripcio}</p>
                        </div>
                    </article>
                ))
            ) : (
                <p>Hi hagut un problema al carregar els projectes...</p>
            )}
            </div>
        </> 
    );

}