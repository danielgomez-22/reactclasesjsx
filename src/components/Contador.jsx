import { Component } from "react";

class Contador extends Component {
    numero = 1;

    incrementarNumero = () => {
        // Para acceder a cualquier elemento tengo que usar this
        this.numero += 1;
        console.log("Numero: " + this.numero);
    };

    // Las variables state se declaran en un objeto de clase
    state = {
        valor: parseInt(this.props.inicio) 
    };

    incrementarValor = () => {
        // Para modificar el valor de cualquier elemento del state se utiliza setState
        this.setState({
            valor: this.state.valor + 1
        });
    };

    render() {
        return (
            <div>
                <h1>Contador JSX: {this.props.inicio}</h1>
                <h3>Valor: {this.state.valor}</h3>
                <button onClick={this.incrementarValor}>Incrementar</button>
                <button onClick={() => this.incrementarValor()}>
                    Incrementar lambda
                </button>
            </div>
        );
    }
}

export default Contador;
