import React, { useState } from "react";
import "./login.css"
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

const Login= () =>{
//adding a username Usestate
  const [username, setUsername] = useState("");
  //adding a password useState
  const [password, setPassword] = useState("");
  //setting the error message 
  const [errorMessage, createErrorMessage] = useState("");


  const history = useNavigate()

  //the asscunc handlesubmit function
  const handleSubmit = async e => {
    
      e.preventDefault();
    

   localStorage.setItem('username', "Elizaveta");
   localStorage.setItem('password', "pass123");

 if (username === "Elizaveta" && password === "pass123") {
   history('/your-plants')
   }else{
    createErrorMessage("Username or Password is not correct")
  }

    };
  

  // if no ones is logged in, the login form will be shown
  return (
    <form className="login" onSubmit={handleSubmit}>
      {/* The user will imut their username using this imput */}
     
      <input className="username"
        type="text"
        value={username}
        placeholder="Full Name"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
       
        {/* The user will enter thier password with this input */}
        <input className="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />

<input type="submit" className="Login" value="Submit"></input>
      </div>
   
      {errorMessage && <p className="errormessage">{errorMessage}</p>} {/* creating the error message */}
    
   
    </form>
  );}

  
  export default Login
  
 