import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

function Login(props) {
  var [registerInfo, setRegisterInfo] = useState({ 
    userName: "", 
    password: "",
    name: "",
    lname: "",
  });
  var [errorMsg, setErrorMsg] = useState("");
  function handleUpdate(e) { 
    const { value, name } = e.target; 
    setRegisterInfo((prevValue)=>{
      if (name === "Username") {
        return { 
          ...prevValue,
          userName: value, 
        };
      } else {
        return {  
          ...prevValue,
          password: value, 
        };
      }
    });
  }
  function processLogin(e/*userName*/) { //the 'e' represents the event of the clic
    e.preventDefault();
    var userName = registerInfo.userName;
    var userPass = registerInfo.password;
    axios
      .post("http://localhost:4000/api/users",{ user: userName, pass: userPass }) //Im here creating a form, for the security
      .then((res) => {
        var data = res.data; 
        console.log(data);
        if(!data.hasOwnProperty("error")) {
          console.log("Success");
          registerInfo.name = data.name;
          registerInfo.lname = data.lname;
          props.handler(registerInfo);
        } else {
          setErrorMsg(data.message);
        }
      }).catch(err => {
        console.error(err.error);
      });
  }
  return (
      <form>
          <input
            name = "Username"
            type="text"
            placeholder="Username" 
            // onChange={recordUsername}
            onChange={handleUpdate}
          />
          <input 
            name = "Password"
            type="password"
            placeholder="Password" 
            // onChange={recordPassword}
            onChange={handleUpdate}
          />
          <button 
            type="submit" 
            // onClick={props.handler}
            onClick={processLogin}
          >
            Log In
          </button>
          <center><Link className="btn btn-outline-secondary boton-forms" to="/register" id="buscar3" >Dont have an account</Link></center>
          {errorMsg}
      </form>
  );
}

export default Login;