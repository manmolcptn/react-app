import './App.css';
import {useRef} from "react";
import Iterador from "./components/iterador/iterador.js";
import Selector from "./components/selector/selector.js";
import Sumar from "./components/sumar/sumar.js";
import imagen1 from "./img/imagen1.jpg";

function App() {
  //Para acceder al DOM usamos el hook useRef
  const foto = useRef();

  const cambiarFoto = () => {
    let src = foto.current.src
    //No confundir include, con includes.
    //El primero es para arrays, el segundo para strings.
    if(src.includes("imagen1")){
      foto.current.src
    }

  }

  return (
    <> 
      <img src={imagen1} onClick={cambiarFoto} ref={foto}/>
    </>
  );
}

export default App;
