import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

//CSS
import "./login.css"


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
    

    if (username === "partythyme" && password === "pass123") {
    history('/browse')
    } else {
    createErrorMessage("Username or Password is not correct")
    }
  };

  // if no ones is logged in, the login form will be shown
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {/* The user will imut their username using this imput */}
     
      <input className="username"
        type="text"
        value={username}
        placeholder="Full Name"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div className="submit-inputs">
       
        {/* The user will enter thier password with this input */}
        <input className="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />

        <input 
        type="submit" 
        className="login" 
        value=" Go! ">
        </input>
      </div>
   
      {errorMessage && <p className="errormessage">{errorMessage}</p>} {/* creating the error message */}
    
    </form>
  );
}

  
export default Login
  
 