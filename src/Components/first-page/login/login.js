import React, { useState } from "react";
import SignUpBtn from "../../SignupBtn";
import "./login.css"
import { Link } from 'react-router-dom';

const Login= () =>{
//adding a username Usestate
  const [username, setUsername] = useState("");
  //adding a password useState
  const [password, setPassword] = useState("");
  //setting the user 
  const [user, setUser] = useState()


  //the asscunc handlesubmit function
  const handleSubmit = async e => {
    
      e.preventDefault();
    
    setUser()
     const user = { username, password };
    console.log(user)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    };
  

// if someone is already logged in the persons username will be displayed
  if (user) {
    return <div> Welcome back {user.name}! </div>;
  }

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
      </div>

      < Link to="/your-plants"><SignUpBtn className="Login" text= 'Login'></SignUpBtn></Link>  
   
    </form>
  );}


  export default Login
  