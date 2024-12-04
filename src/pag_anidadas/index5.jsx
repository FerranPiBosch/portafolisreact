import {Link} from "react-router-dom";
export default function Index5() {
    return (
        <>
        <h1 className="titol-pag">Newsletter</h1>
        <main className="anidada-main">
            <section className="nl-body">
                <header className="nl-header">
                    <h2 className="nl-cap-titol">Newsletter</h2>
                    <br/>
                    <h4>La millor manera de mantenir-se informàt de les últimes novetats</h4>
                    <h3>By Ferran Pi</h3>
                </header>
                <article className="nl-box">
                    <h3 className="nl-titol">Black Friday</h3>
                    <div className="nl-contingut">
                        <img src="../media/blackfriday.png" alt="" className="nl-img" />
                        <p>Com ja es costum, es el moment de informar-se per estalviar,Segueix les millors ofertes i el minut a minut per estalviar al màxim amb les ofertes que et proposem</p> 
                    </div>
                    <div className="btn-estalviar">
                        <Link to="https://www.pccomponentes.com/" target="_blank">Estalviar</Link>
                    </div>
                </article>
                <article className="nl-box">
                    <h3 className="nl-titol">Prova gratuïta d'IA generadora d'imatges</h3>
                    <div className="nl-contingut">
                        <img src="../media/ia-imatge.jpg" alt="" className="nl-img" />
                        <p>Està disponible de forma gratuïta la intel·ligència artificial que hem utilitzat per generar les imatges de tota la web, no esperis més i prova-la tu mateix.</p> 
                    </div>
                    <div className="btn-estalviar">
                        <Link to="https://www.bing.com/search?q=Bing+AI&showconv=1" target="_blank">Provar ara</Link>
                    </div>
                </article>
                <article className="nl-box">
                    <h3 className="nl-titol">Concurs de "Set-up" de programació</h3>
                    <div className="nl-contingut">
                        <img src="../media/set-up.jpg" alt="" className="nl-img" />
                        <p>Aquest mes us convidem a participar en el nostre concurs de set-up, aquest cop enfocats en programació, envieu-nos una imatge del vostre set-up i una petita explicació de perquè està format d'aquesta manera, els millors set-up, tindran un descompte amb les nostres pàgines col·laboradores</p> 
                    </div>
                    <div className="btn-estalviar">
                        <a href="index4.html" target="_blank">Enviar el meu set-up</a>
                    </div>
                </article>
                <footer className="nl-footer">
                    <p>Aquest newsletter forma part de l'exercici de portafolis de LLM, tots els botons funcionen, tot i que no tots porten a pàgines generades per mi.
                        <br/>
                        Versió del mes de decembre de 2024
                        <br/>
                        Newsletter creat dissenyat i desenvolupat per: <a href="../index.html">Ferran Pi</a> </p>
                </footer>
            </section>
        </main>
    </>
    )
}