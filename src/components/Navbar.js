import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
const Navbar = () =>{
    function move (){
        
    }
    return (
      <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
          <img src="/imagenes/avion.png" className="imagen_logo" alt="logo-UP" width="70" height="auto"/>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link"   to="/">Home</Link>
            <Link className="nav-link" to="/Places"> Places</Link>
            <div className="d-flex" id="botonesinicio" >
              <Link className="btn btn-outline-secondary" type="button" id="iniciarsesion" to="/register">Register</Link>
            </div>
          </div>
        </div>
    </nav>
    );
}
    

export default Navbar;
