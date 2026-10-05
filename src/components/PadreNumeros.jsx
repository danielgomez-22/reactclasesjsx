import { Component } from "react";
import HijoNumero from "./HijoNumeros";

class PadreNumeros extends Component {
  // Inicia el estado con la suma en 0 y algunos números aleatorios iniciales
  state = {
    numeros: [
      Math.floor(Math.random() * 20) + 1,
      Math.floor(Math.random() * 20) + 1
    ],
    sumaTotal: 0
  };

  //  genera un nuevo número aleatorio y añadirlo a la lista
  generarNumero = () => {
    const nuevoNumero = Math.floor(Math.random() * 100) + 1;
    this.setState({
      numeros: [this.state.numeros, nuevoNumero]
    });
  };

  // recibe el número enviado desde el componente Hijo
  sumarAlTotal = (valor) => {
    this.setState({
      sumaTotal: this.state.sumaTotal + valor
    });
  };

  render() {
    return (
       
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>

        {/* CONDICIONALES EN REACT */}
        {
            this.variable == /* <= >= ===*/0 ?
            <h1>Lavariable es 0 </h1>:
            <h1>la variable no es 0</h1>
        }
        <h1>Padre Números</h1>
        
        {/* Bloque amarillo para mostrar el acumulado de la suma */}
        <div style={{ backgroundColor: "yellow" }}>
          La suma es es {this.state.sumaTotal}
        </div>

        {/* Botón para agregar más números aleatorios a la lista */}
        <button onClick={this.generarNumero}>
          Generar número
        </button>

        {/* Mapeamos el arreglo de números para renderizar los componentes hijos */}
        {this.state.numeros.map((num, index) => {
          return (
            <HijoNumero 
              key={index} 
              numero={num} 
              sumarAlPadre={this.sumarAlTotal} 
            />
          );
        })}
      </div>
    );
  }
}

export default PadreNumeros;
