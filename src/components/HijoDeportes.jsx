import { Component } from "react"

class HijoDeportes extends Component {
    seleccionarFavorito = () => {
            // cuando deseemos llamamos al padre mediante su metodo en props
            this.props.mostrarFavorito(this.props.nombre)
        
    }
    render() {
        return(
            <div>
                <h3 style={{color: "blue"}}>Deporte: {this.props.nombre}</h3>
            <button onClick={this.seleccionarFavorito}>Favorito</button>
            </div>
        )
    }

}
export default HijoDeportes;