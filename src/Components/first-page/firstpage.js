import "../first-page/firstpage.css"
import React from "react";
import Login from "../first-page/login/login";
//import Column from "../Column";

import SignUpBtn from "../signupButton/index";


const Firstpage= () =>{

return(

<div className="First">
    <img className="flowerImg" alt="flower" src="./img/flower.jpg"></img>< div className="plantly"><h1>PLANTLY</h1></div> 
    <div className="plantly"><h2>Sign up Now</h2></div>
    <div className="plantly"><h3>Commit to keeping happier Healthier plants today!</h3></div>
    <div className="plantly"><Login /></div>
    <div className="plantly"><SignUpBtn className="signUpBtn" text= 'Sign Up Now!'></SignUpBtn> </div>  
</div>

)



}

export default Firstpage

