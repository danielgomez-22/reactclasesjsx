import { Component } from "react";

class HijoNumeros extends Component {
  render() {
    // Recibimos el número y la función del padre desde las props
    const { numero, sumarAlPadre } = this.props;

    return (
      <div>
        <h2 style={{ color: "red" }}>Número: {numero}</h2>
        {/* Al hacer clic, llamamos a la función del padre pasándole este número */}
        <button onClick={() => sumarAlPadre(numero)}>
          Sumar {numero}
        </button>
      </div>
    );
  }
}

export default HijoNumeros;
