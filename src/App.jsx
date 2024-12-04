// Importació elements necessaris
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/header.jsx"
// Importació de les págines anidades
import Index from "./pag_anidadas/index.jsx"
import Index2 from "./pag_anidadas/index2.jsx";
import Index3 from "./pag_anidadas/index3.jsx";
import Index4 from "./pag_anidadas/index4.jsx";
import Index5 from "./pag_anidadas/index5.jsx";


export default function App(){
  return (
    <BrowserRouter>
    {/* Element comú a totes les pàgines */}
      <Header 
        nom = "Ferran Pi"
        projecte = "Projecte de Portafolis amb REACT, 2on GS ASIX (2024)"
      />
      {/* Assignació de les rutes: */}
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/index2" element={<Index2/>}/>
        <Route path="/index3" element={<Index3/>}/>
        <Route path="/index4" element={<Index4/>}/>
        <Route path="/index5" element={<Index5/>}/>
        <Route path="*" element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}