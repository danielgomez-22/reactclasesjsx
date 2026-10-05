import { Component } from "react";

class DibujosComplejosRender extends Component {
    // Necesitamos un array en state para ir generando nuevos elementos al pulsar un botón
    state = {
        nombre: ["Diana", "Carlos", "Ana", "Pedro", "Luis", "Maria"]
    }

    generarNombre = () => {
        // CORRECCIÓN 1: No mutar el estado directamente con .push(). 
        this.setState({
            nombre: [this.state.nombre, "Nuevo nombre"]
        });
    }

    render() {
        return ( 
            <div>
                <h1>Dibujos Complejos Render</h1>
                <button onClick={this.generarNombre}>
                    Generar Nombre
                </button>
                {
                    // CORRECCIÓN 2: Se corrigieron las llaves del método .map()
                    this.state.nombre.map((nombre, index) => {
                        return (
                            // CORRECCIÓN 3: Se agregó el atributo 'key'
                            <h4 key={index} style={{color: "blue"}}>
                                {nombre}
                            </h4>
                        );
                    }) // <- Faltaba cerrar correctamente el paréntesis del .map
                }
            </div>
        );   
    }
} 

export default DibujosComplejosRender;
