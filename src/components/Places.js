import React from "react";

const Places=()=>{
    return (
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

        <br></br><br></br>
  
        <nav class="navbar2 navbar-expand-lg">
        <h4 align="center"><b> !Some Places you can visit and do the reserve with us!</b></h4>
        <div class="container" id ="galeriam1">
          <div class="row">
            <div class="col-sm imgcont">
              <img class="d-block imggal" src="https://pixabay.com/get/g24e990503e312507f8a21a64172978f98674d13515073af61a18887a7fa610e5f132ec581280b28e5c750ccdb8018ca8_640.jpg"  alt="imagen1" />
              <div class="middle">
                <div class="texto-galeria">Barcelona</div>
              </div>
            </div>
            <div class="col-sm imgcont">
              <img class="d-block imggal" src="https://cdn.pixabay.com/photo/2014/12/29/23/30/glacier-583419_150.jpg"  alt="imagen1" />
              <div class="middle">
                <div class="texto-galeria"> Argentina</div>
              </div>
            </div>
            <div class="col-sm imgcont">
              <img class="d-block imggal" src="https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_150.jpg"  alt="imagen1" />
              <div class="middle">
                <div class="texto-galeria">New York </div>
              </div>
            </div>
            <div class="col-sm imgcont">
              <img class="d-block imggal" src="https://cdn.pixabay.com/photo/2019/04/27/23/09/arch-4161595_150.jpg"  alt="imagen1" />
              <div class="middle">
                <div class="texto-galeria">Los Cabos</div>
              </div>
            </div>
            <div class="col-sm imgcont">
              <img class="d-block imggal" src="https://cdn.pixabay.com/photo/2017/05/27/22/33/morocco-2349647_150.jpg"  alt="imagen1" />
              <div class="middle">
                <div class="texto-galeria">Marruecos </div>
              </div>
            </div>
          </div>
        </div>
        </nav>
        <nav class="navbar2 navbar-expand-lg">
        <div class="container" id ="galeriam1">
          <div class="row">
            <div class="col-sm imgcont">
              <img class="d-block imggal" src="https://cdn.pixabay.com/photo/2018/10/28/16/11/volcano-3779159_150.jpg"  alt="imagen1" />
              <div class="middle">
                <div class="texto-galeria">Indonesia</div>
              </div>
            </div>
            <div class="col-sm imgcont">
              <img class="d-block imggal" src="https://cdn.pixabay.com/photo/2016/02/07/19/48/aurora-1185464_150.jpg"  alt="imagen1" />
              <div class="middle">
                <div class="texto-galeria"> Alaska</div>
              </div>
            </div>
            <div class="col-sm imgcont">
              <img class="d-block imggal" src="https://cdn.pixabay.com/photo/2020/04/21/11/31/architecture-5072728_150.jpg"  alt="imagen1" />
              <div class="middle">
                <div class="texto-galeria">Monte Carlo </div>
              </div>
            </div>
            <div class="col-sm imgcont">
              <img class="d-block imggal" src="https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_150.jpg"  alt="imagen1" />
              <div class="middle">
                <div class="texto-galeria">Rio de Janeiro</div>
              </div>
            </div>
            <div class="col-sm imgcont">
              <img class="d-block imggal" src="https://cdn.pixabay.com/photo/2019/09/07/02/25/city-4457801_150.jpg"  alt="imagen1" />
              <div class="middle">
                <div class="texto-galeria">Colombia </div>
              </div>
            </div>
          </div>
        </div>
        </nav>

        <br></br>

        <div id="carruselprincipal" class="carousel carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carruselprincipal" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carruselprincipal" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carruselprincipal" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="8000">
                    <img src="/imagenes/vuelo3.jpg" class="d-block w-100" alt="cuadro-1" height="500"/>
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                    <img src="/imagenes/vuelo2.jpg" class="d-block w-100" alt="cuadro-2" height="500"/>
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                    <img src="/imagenes/vuelo.jpg" class="d-block w-100" alt="cuadro-3" height="500"/>
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carruselprincipal" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carruselprincipal" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <br></br>

        </div>

    );
};

export default Places;
