import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("juniorxxx", "juniorxxx", "study").map((categoria, index) => {
          return (
            <li key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
