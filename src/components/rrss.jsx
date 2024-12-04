// Aquest document serveix per reutilitzar el component de cada xarxa social

// import d'elements necessaris
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
import {nanoid} from 'nanoid';
import "../App.css";

// definir la Caixa amb els seeus promts
export default function Rrss({nom, logo, pagina, descripcio}) {
    return (
        <article className="contacte-box" id = {nanoid()}>
            <div className="enllaç">
                <Link to={pagina} target="_blank" >
                <FontAwesomeIcon icon={logo} size="2x" style={{ color: "#ffbc51" }} className="icono"/>
                </Link>
                <a href={pagina}>
                    <h2 className="contacte-titol">{nom}</h2>
                </a>
            </div>    
            <div>
                <p className="contacte-text">{descripcio}</p>
            </div>
        </article>
    );

}