import './App.css';
import {useRef, useState} from "react";
import Iterador from "./components/iterador/iterador.js";
import Selector from "./components/selector/selector.js";
import Sumar from "./components/sumar/sumar.js";
import img from "./img/imagen1.jpg";

function App() {
  
  return (
    <> 
      <img src={img}/>
    </>
  );
}

export default App;
