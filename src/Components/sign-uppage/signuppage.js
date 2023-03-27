import "./signup.css"
import React from "react";
import Login from "../first-page/login/login";
//import Column from "../Column";

import SignUpBtn from "../SignupButton";
import { Link } from "react-router-dom";


const SignUp= () =>{

return(

<div className="First">
    <img className="flowerImg" alt="flower" src="./img/flower.jpg"></img>< div className="plantly"><h1>PLANTLY</h1></div> 

    <div className="plantly"><h3>Please enter your name and create a password</h3></div>
    <div className="plantly"><Login /></div>
    <div className="plantly"><Link to= "/"><SignUpBtn className="signUpBtn" text= ' <== Already have an account?'></SignUpBtn></Link> </div>  
</div>

)



}
export default SignUp