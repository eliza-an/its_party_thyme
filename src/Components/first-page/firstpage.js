import "../first-page/firstpage.css"
import React from "react";
import Login from "../first-page/login/login"

import SignUpBtn from "../signupButton/index"


const Firstpage= () =>{

return(

<div>
    <h1>PLANTLY</h1>
<h3>Sign up Now</h3>
<h4>Commit to keeping happier Healthier plants today!</h4>


    <Login />
    
    <SignUpBtn />
    <img className="flowerImg" alt="flower" src="./img/flower.jpg"></img>
</div>

)



}

export default Firstpage

