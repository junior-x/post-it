import React, { Component } from "react";
import logo from './logo.svg';
import {ListaDeNotas} from "./components/ListaDeNotas";
import {FormularioCadastro} from "./components/FormularioCadastro";
import './App.css';

///App Render Zone
///function App()
 
class App extends Component {
   render(){
    return (
      <section className="App-header">
        <h1 className="app-text_title">POST-IT ZONE</h1>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
 
}

///react -> lib
///React -> ecossistema
export default App;