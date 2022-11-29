import React from "react";
import Navbar from "./Navbar";
const Places=()=>{
    return (
        <div>
        <br></br><br></br>
  
        <nav className="navbar2 navbar-expand-lg">
        <h4 align="center"><b> !Some Places you can visit and do the reserve with us!</b></h4>
        <div className="container" id ="galeriam1">
          <div className="row">
            <div className="col-sm imgcont">
              <img className="d-block imggal" src="https://pixabay.com/get/g24e990503e312507f8a21a64172978f98674d13515073af61a18887a7fa610e5f132ec581280b28e5c750ccdb8018ca8_640.jpg"  alt="imagen1" />
              <div className="middle">
                <div className="texto-galeria">Barcelona</div>
              </div>
            </div>
            <div className="col-sm imgcont">
              <img className="d-block imggal" src="https://cdn.pixabay.com/photo/2014/12/29/23/30/glacier-583419_150.jpg"  alt="imagen1" />
              <div className="middle">
                <div className="texto-galeria"> Argentina</div>
              </div>
            </div>
            <div className="col-sm imgcont">
              <img className="d-block imggal" src="https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_150.jpg"  alt="imagen1" />
              <div className="middle">
                <div className="texto-galeria">New York </div>
              </div>
            </div>
            <div className="col-sm imgcont">
              <img className="d-block imggal" src="https://cdn.pixabay.com/photo/2019/04/27/23/09/arch-4161595_150.jpg"  alt="imagen1" />
              <div className="middle">
                <div className="texto-galeria">Los Cabos</div>
              </div>
            </div>
            <div className="col-sm imgcont">
              <img className="d-block imggal" src="https://cdn.pixabay.com/photo/2017/05/27/22/33/morocco-2349647_150.jpg"  alt="imagen1" />
              <div className="middle">
                <div className="texto-galeria">Marruecos </div>
              </div>
            </div>
          </div>
        </div>
        </nav>
        <nav className="navbar2 navbar-expand-lg">
        <div className="container" id ="galeriam1">
          <div className="row">
            <div className="col-sm imgcont">
              <img className="d-block imggal" src="https://cdn.pixabay.com/photo/2018/10/28/16/11/volcano-3779159_150.jpg"  alt="imagen1" />
              <div className="middle">
                <div className="texto-galeria">Indonesia</div>
              </div>
            </div>
            <div className="col-sm imgcont">
              <img className="d-block imggal" src="https://cdn.pixabay.com/photo/2016/02/07/19/48/aurora-1185464_150.jpg"  alt="imagen1" />
              <div className="middle">
                <div className="texto-galeria"> Alaska</div>
              </div>
            </div>
            <div className="col-sm imgcont">
              <img className="d-block imggal" src="https://cdn.pixabay.com/photo/2020/04/21/11/31/architecture-5072728_150.jpg"  alt="imagen1" />
              <div className="middle">
                <div className="texto-galeria">Monte Carlo </div>
              </div>
            </div>
            <div className="col-sm imgcont">
              <img className="d-block imggal" src="https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_150.jpg"  alt="imagen1" />
              <div className="middle">
                <div className="texto-galeria">Rio de Janeiro</div>
              </div>
            </div>
            <div className="col-sm imgcont">
              <img className="d-block imggal" src="https://cdn.pixabay.com/photo/2019/09/07/02/25/city-4457801_150.jpg"  alt="imagen1" />
              <div className="middle">
                <div className="texto-galeria">Colombia </div>
              </div>
            </div>
          </div>
        </div>
        </nav>

        <br></br>

        <div id="carruselprincipal" className="carousel carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carruselprincipal" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carruselprincipal" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carruselprincipal" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="8000">
                    <img src="/imagenes/vuelo3.jpg" className="d-block w-100" alt="cuadro-1" height="500"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                    <img src="/imagenes/vuelo2.jpg" className="d-block w-100" alt="cuadro-2" height="500"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                    <img src="/imagenes/vuelo.jpg" className="d-block w-100" alt="cuadro-3" height="500"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carruselprincipal" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carruselprincipal" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <br></br>

        </div>

    );
};

export default Places;
