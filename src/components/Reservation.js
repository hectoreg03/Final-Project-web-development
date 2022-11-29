import React from "react";


const Reservation = ()=>{


    return(
        <div>
            <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="/">
              <img src="/imagenes/avion.png" class="imagen_logo" alt="logo-UP" width="70" height="auto"/>
          </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link"   href="/">Home</a>
                <a class="nav-link" href="/components/Places">Places</a>
                <form class="d-flex" id="botonesinicio" >
                  <button class="btn btn-outline-secondary" type="button" id="iniciarsesion" onclick= "window.location.href = '/publicar' ; ">Register</button>
                </form>
              </div>
            </div>
        </nav>

        <br></br>

        <div class ="noticia2">
            <h5> <b> Do your Reservation</b></h5>
            <aside>
                <hr size="4%"/>
                <div>
                    <form action ="/reservation"  id="reservas">
                        <div className="from-group">
                            <h4> Username:</h4>
                            <input type="text" id="fName" name="fName"  class="form-control"/>
                            <h4> Email:</h4>
                            <input type="email" id="email" name="email"  class="form-control"/>
                            <h4> Takeoff:</h4>
                            <input type="text" id="text" name="text"  class="form-control"/>
                            <h4> Landing:</h4>
                            <input type="text" id="text" name="text"  class="form-control"/>
                            <h4> How many tickets?</h4>
                            <input type="text" id="text" name="text"  class="form-control"/>
                            <br></br>
                            <center><button class="btn btn-outline-secondary boton-forms" type="submit" id="buscar3" >Submit</button></center>
                        </div>
                        <br></br>
                    </form>
                </div>
            </aside>
        </div>

        </div>
    )
};

export default Reservation;
