import React, {Component} from 'react';
import Buscador from './Buscador';
import Resultado from './Resultado';

class Home extends Component{
    state = {
        termino : '', 
        imagenes : [], 
        pagina : ''
      }
    
    
      paginaAnterior = () => {
        let pagina = this.state.pagina;
        if(pagina===1) return null;
        pagina -=1;
        this.setState({
          pagina
        }, () => {
          this.consultarApi();
        });
        // console.log(pagina);
      }
    
      paginaSiguiente = () => {
        let pagina = this.state.pagina;
        pagina +=1;
        this.setState({
          pagina
        }, () => {
          this.consultarApi();
        });
        // console.log(pagina);
      }
      
      consultarApi = () => {
        const termino = this.state.termino;
        const pagina = this.state.pagina;
        const url = `https://pixabay.com/api/?key=31628409-dae4ee20e192a3351934c8f40&q=${termino}&per_page=16&page=${pagina}`;
        // console.log(url);
        fetch(url)
          .then(respuesta => respuesta.json())
          .then(resultado => this.setState({imagenes : resultado.hits}))
      }
    
      datosBusqueda = (termino) => {
        this.setState({
          termino: termino,
          pagina:1
        }, ()=>{
          this.consultarApi();
        })
      }
    render(){
        return (
            <div>
            <nav class="navbar2 navbar-expand-lg">
            <h4 align="center"><b> Top most sought after destinations today in Mexico</b></h4>
            <div class="container" id ="galeriam1">
                <div class="row">
                <div class="col-sm imgcont">
                    <img class="d-block imggal" src="/imagenes/barcelona.jpg"  alt="imagen1" />
                    <div class="middle">
                    <div class="texto-galeria">Barcelona</div>
                    </div>
                </div>
                <div class="col-sm imgcont">
                    <img class="d-block imggal" src="/imagenes/cancun.jpg"  alt="imagen1" />
                    <div class="middle">
                    <div class="texto-galeria"> Cancún</div>
                    </div>
                </div>
                <div class="col-sm imgcont">
                    <img class="d-block imggal" src="/imagenes/dubai.jpg"  alt="imagen1" />
                    <div class="middle">
                    <div class="texto-galeria">Dubai </div>
                    </div>
                </div>
                <div class="col-sm imgcont">
                    <img class="d-block imggal" src="/imagenes/newyork.jpg"  alt="imagen1" />
                    <div class="middle">
                    <div class="texto-galeria">New York </div>
                    </div>
                </div>
                <div class="col-sm imgcont">
                    <img class="d-block imggal" src="/imagenes/paris.jpg"  alt="imagen1" />
                    <div class="middle">
                    <div class="texto-galeria">Paris </div>
                    </div>
                </div>
                </div>
            </div>
            </nav>


            <div class="noticia2">
            <h5> <b> Country Search: </b></h5>

            <Buscador
                datosBusqueda={this.datosBusqueda}
            />
            </div>
            <div className='row justify-content-center'>
                <Resultado
                    imagenes = {this.state.imagenes}
                    paginaAnterior = {this.paginaAnterior}
                    paginaSiguiente = {this.paginaSiguiente}
                />
            </div>

            <nav class="navbar navbar-expand-lg">
                <br></br>
            </nav>
            </div>
        );
    } 
}

export default Home;