// Aquest component serà visible en totes les pàgines

// Importar elements necessaris:
import {Link} from "react-router-dom";
import "../App.css";

export default function Header({nom, projecte}) {
    return (
        <header>
            <Link to="/">
            <h1>{nom}</h1>
            </Link>
            <p>{projecte}</p>
        </header>
    );

}
