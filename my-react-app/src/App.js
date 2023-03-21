import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //adding a username Usestate
  const [username, setUsername] = useState("");
  //adding a password useState
  const [password, setPassword] = useState("");
  //setting the user 
  const [user, setUser] = useState()


  //the asscunc handlesubmit function
  const handleSubmit = async e => {
    
  };

// if someone is already logged in the persons username will be displayed
  if (user) {
    return <div> Welcome back {user.name}! </div>;
  }

  // if no ones is logged in, the login form will be shown
  return (
    <form onSubmit={handleSubmit}>
      {/* The user will imut their username using this imput */}
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="Please enter your Username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">Password: </label>
        {/* The user will enter thier password with this input */}
        <input
          type="password"
          value={password}
          placeholder="Please enter your Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      {/*  a submit button to save your information */}
      <button type="submit">Login</button>
    </form>
  );
};

export default App;