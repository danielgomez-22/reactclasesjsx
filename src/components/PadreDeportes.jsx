import { Component } from "react"
import HijoDeportes from "./HijoDeportes" 

class PadreDeportes extends Component {
    deportes = ["Petanca", "Curling", "Canicas", "Futbol"]

        state = {
            favorito:" "
        }
    mostrarFavorito = (deporteSeleccionado) => {
         this.setState({
            favorito: deporteSeleccionado
         })
    }
    render() {
        return(
            <div>
                <h1>Padre Deportes</h1>
                <h3 style={{backgroundColor: "lightgreen"}}>Su deprte favortio es: {this.state.favorito}</h3>
                {
                    this.deportes.map((sport, index) => {
                        return(<HijoDeportes nombre={sport} key={index} mostrarFavorito={this.mostrarFavorito}/>)
                    })
                    
                }
            </div>
        )
    }

}
export default PadreDeportes;

