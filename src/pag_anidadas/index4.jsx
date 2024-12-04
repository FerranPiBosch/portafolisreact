// Aquesta pàgina permetrà guardar el contingut enviat en un formolari guardat en LocalStorage i eliminarlo

// importació elements necessaris:
import React, { useState, useEffect } from "react";

export default function Index4() {

//   Declaració diferentes useState per a cada element del formulari
  const [email, setEmail] = useState("");
  const [asumpte, setAsumpte] = useState("Contractació");
  const [missatge, setMissatge] = useState("");
  const [storedData, setStoredData] = useState(null); 

//   useEffect per carregar les dades de localSotarge
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setStoredData(JSON.parse(savedData));
    }
  }, []);

//funció per carregar les dades al LocalStorage 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = { email, asumpte, missatge };
    setStoredData(formData); 
    localStorage.setItem("formData", JSON.stringify(formData)); 
  };

//   Funció per eliminar les dades guardades al LocalStorage
  const handleClear = () => {
    setStoredData(null);
    localStorage.removeItem("formData");
  };

//   Contingut a retornar
  return (
    <>
      <h1 className="titol-pag">Formulari de contacte</h1>
      < main className="anidada-main" style={{ display: "flex", gap: "2rem" }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="e-mail">E-mail</label>
          <input
            type="email"
            name="e-mail"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="asumpte">Asumpte</label>
          <select
            name="asumpte"
            className="input"
            value={asumpte}
            onChange={(e) => setAsumpte(e.target.value)}
          >
            <option value="Contractació">Contractació</option>
            <option value="Correció-errors">Correció d'errors</option>
            <option value="pressupost">Solicitud de pressupost</option>
            <option value="Concurs">Concurs Set-up</option>
            <option value="altres">Altres</option>
          </select>

          <br />
          <label htmlFor="Missatge">Cos del missatge</label>
          <br />
          <input
            type="text"
            className="form-missatge input"
            value={missatge}
            onChange={(e) => setMissatge(e.target.value)}
          />
          <br />
          <div style={{ display: "flex", gap: "1rem" }}>
            <button className="btn-envia" type="submit">
              Envia
            </button>
            <button
              className="btn-envia"
              type="button"
              onClick={handleClear}
            >
              Netejar
            </button>
          </div>
        </form>
        {/* només es mostrarà si StoreDatta no està buit */}
        {storedData && (
          <div>
            <h2>Dades Enviades en el Formulari:</h2>
            <p>
              <strong>E-mail:</strong> {storedData.email}
            </p>
            <p>
              <strong>Asumpte:</strong> {storedData.asumpte}
            </p>
            <p>
              <strong>Missatge:</strong> {storedData.missatge}
            </p>
          </div>
        )}
        </main>
    </>
          )
    }