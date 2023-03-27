import React, { useState } from "react";
import "./login.css"
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

const Login= () =>{
//adding a username Usestate
  const [username, setUsername] = useState("");
  //adding a password useState
  const [password, setPassword] = useState("");
  //setting the user 
  const [user, setUser] = useState()


  const history = useNavigate()

  //the asscunc handlesubmit function
  const handleSubmit = async e => {
    
      e.preventDefault();
    

   localStorage.setItem('username', "Elizaveta");
   localStorage.setItem('password', "password");

 if (username === "Elizaveta" && password === "password") {
   history('/your-plants')
   }else{
      console.log("wrong username or password")
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
   

    
   
    </form>
  );}

  
  export default Login
  
 // < Link to="/your-plants"></Link>  