import React from 'react';
import Places from './Places';
import { Link } from "react-router-dom";
const Navbar = () =>{
    function move (){
        window.location.href = '/publicar' ;
    }
    return (
    <nav class="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
              <img src="/imagenes/avion.png" class="imagen_logo" alt="logo-UP" width="70" height="auto"/>
          </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-link"   to="/">Home</Link>
                <Link class="nav-link" to="/components/Places"><Places/></Link>
                <form class="d-flex" id="botonesinicio" >
                  <button class="btn btn-outline-secondary" type="button" id="iniciarsesion" onClick="blank" >Register</button>
                </form>
              </div>
            </div>
        </nav>
    )
}
    

export default Navbar;
