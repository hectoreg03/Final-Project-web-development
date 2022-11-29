import React,{Component} from 'react';
import './style.css';
import Buscador from './components/Buscador';
import Login from './components/Login';
import Places from './components/Places';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reservation from './components/Reservation';
import Home from './components/Home';


class App extends Component{

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
        <div className="App">
          <Router>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/register"element={<Reservation/>}/>
      <Route path="/places" element={<Places/>}/>
      <Route path="/login"element={<Login/>}/>
      </Routes>
      </Router>

      </div>

        </div>
    );
  }
}

export default App;
