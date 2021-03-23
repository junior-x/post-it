import React from "react";
import {ListaDeNotas} from "./components/ListaDeNotas"
import logo from './logo.svg';
import './App.css';

///App Render Zone
function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título"/>
        <textarea placeholder="Escreva a sua nota..."/>
        <button>Criar nota</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;