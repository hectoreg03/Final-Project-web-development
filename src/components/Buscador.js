import React, {Component} from 'react';

class Buscador extends Component{

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        const termino = this.busquedaRef.current.value;

        this.props.datosBusqueda(termino);
    }

    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row"> 
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" id='busca' placeholder='Search the place. Example: New York'/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" id='buscar' value="Search"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;