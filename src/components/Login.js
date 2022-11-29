import React from "react";
import { Link } from "react-router-dom";


const User = ()=>{


    return(
        <div>

        <br></br>

        <div className ="noticia2">
            <h5> <b> See your previous Reservations</b></h5>
            <aside>
                <hr size="4%"/>
                <div>
                    <form action ="/reservation"  id="reservas">
                        <div classNameName="from-group">
                            <h4> Username:</h4>
                            <input type="text" id="fName" name="usName"  className="form-control"/>
                            <h4> Password:</h4>
                            <input type="password" id="fName" name="usName"  className="form-control"/>
                            <br></br>
                            <center><button className="btn btn-outline-secondary boton-forms" type="submit" id="buscar3" >Login</button></center>
                            <br></br>
                            <center><Link className="btn btn-outline-secondary boton-forms" to="/register" id="buscar3" >Dont have an account</Link></center>
                        </div>
                        <br></br>
                    </form>
                </div>
            </aside>
        </div>

        </div>
    )
};

export default User;
