// Component que forma part de la Home, n'és la presentació

// importació del css
import "../App.css";

// declaració del component per fer-lo reutilitzable
export default function Presentacio({nom, text, img1,img2}) {
    return (
        <main className="presentacio">
            <img className="retrato grande" src={img1} alt="" />
            <img  className="retrato foco" src={img2} alt =""/>
            <div >
                <h2>Hola, Soc en {nom}</h2>
                <p className="overflow">{text}</p>

            </div>
        </main>
    );

}