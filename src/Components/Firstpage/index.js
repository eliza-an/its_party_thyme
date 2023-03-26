import React from "react";
import Login from "../Login";
//import Column from "../Column";
import SignUpBtn from "../SignupButton";
import './style.css';


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

