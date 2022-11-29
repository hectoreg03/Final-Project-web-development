import React from "react";
import { Link } from "react-router-dom";


const Reservation = ()=>{
    const handleSubmit = evt =>{
        evt.preventDefault();
        
        console.log('submit')
    }

    return(
        <div>

        <br></br>

        <div className ="noticia2">
            <h5> <b> Do your Reservation</b></h5>
            <aside>
                <hr size="4%"/>
                <div>
                    <form   id="reservas" onSubmit={handleSubmit}>
                        <div classNameName="from-group">
                            <h4> Username:</h4>
                            <input type="text" id="fName" name="usName"  className="form-control"/>
                            <h4> Password:</h4>
                            <input type="password" id="fName" name="usName"  className="form-control"/>
                            <h4> Email:</h4>
                            <input type="email" id="email" name="email"  className="form-control"/>
                            <h4> Departure Date:</h4>
                            <input type="date" id="text" name="depDate"  className="form-control"/>
                            <h4> Arrival Date:</h4>
                            <input type="date" id="text" name="arrDate"  className="form-control"/>
                            <h4> How many adults?</h4>
                            <input type="number" id="text" name="text"  className="form-control" min ="1"/>
                            <h4> How many children?</h4>
                            <input type="number" id="text" name="text"  className="form-control" />
                            <br></br>
                            <center><button className="btn btn-outline-secondary boton-forms" type="submit" id="buscar3" >Register</button></center>
                            <br></br>
                            <center><Link className="btn btn-outline-secondary boton-forms" to="/login" id="buscar3" >Previously Registered</Link></center>
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
