// Aquests element permetrà replicar de forma fàcil els "botons" del carrusel

// Importacio dels elements necessaris:
import {Link} from "react-router-dom";
import {nanoid} from 'nanoid';
import "../App.css";

// Creació del component amb els procs necessaris:
export default function Box({titol, imatge, pagina}) {
    return (
        <div className="cuadro" id = {nanoid()}>
            <Link to={pagina}>
                <img src={imatge} alt={titol} className="imgenlace" />
                <p className="text_visible">{titol}</p>
            </Link>
        </div>
    );

}