import { Component } from "react";

class DibujosComplejosArray extends Component {
    dibujarNumeros = () => {
        let lista = [];
        for (let i = 1; i <= 7; i++) {
            var num = parseInt(Math.random() * 120);
            lista.push(<li key={i}>{num}</li>);
        }
        return lista;
    }



    render() {
        return (
            <div>Dibujos Complejos Array
                <ul>
                    {this.dibujarNumeros()}  
                </ul>
            </div>
            
        );
    }
}
export default DibujosComplejosArray;