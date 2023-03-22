import "../first-page/firstpage.css"
import React from "react";
import Login from "../first-page/login/login"
import "./img/flower.jpg"
import SignUpBtn from "../signupButton"


const Firstpage= () =>{

return(

<div>
    <img alt="flower" src="../img/flower.jpg"></img>
    <Login />
    <SignUpBtn />
</div>

)



}

export default Firstpage

