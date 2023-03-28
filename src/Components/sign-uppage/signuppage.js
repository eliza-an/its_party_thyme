import "./signup.css"
import React from "react";
import Login from "../first-page/login/login";

import SignupBtn from "../SignupBtn";
import { Link } from "react-router-dom";


const SignUp= () =>{

return(

<div className="First">
    <img className="flowerImg" alt="flower" src="./img/flower.jpg"></img>< div className="plantly"><h1>PLANTLY</h1></div> 

    <div className="plantly"><h3>Please enter your name and create a password</h3></div>
    <div className="plantly"><Login /></div>
    <div className="plantly"><Link to= "/"><SignupBtn className="signupBtn" text= ' <== Already have an account?'></SignupBtn></Link> </div>  
</div>

)



}
export default SignUp