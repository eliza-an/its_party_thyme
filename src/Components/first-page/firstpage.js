import "../first-page/firstpage.css"
import React from "react";
import Login from "../first-page/login/login";
//import Column from "../Column";

import SignUpBtn from "../signupButton/index";


const Firstpage= () =>{

return(

<div>
    <img className="flowerImg" alt="flower" src="./img/flower.jpg"></img> <h1>PLANTLY</h1>
    <h2>Sign up Now</h2>
    <h3>Commit to keeping happier Healthier plants today!</h3>
    <Login />
    <SignUpBtn> </SignUpBtn>   
</div>

)



}

export default Firstpage

