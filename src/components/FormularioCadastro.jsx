import React, { Component } from "react";

export class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <section>
          <input type="text" placeholder="Título" />
          <br></br>
          <textarea placeholder="Escreva a sua nota..." />
          <button className="app-button">Criar nota</button>
        </section>
      </form>
    );
  }
}
