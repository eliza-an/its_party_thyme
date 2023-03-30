import React, {Fragment} from "react";
import Login from "../Login/login";
import Column from "../Column";
import SignupBtn from "../SignupBtn";
import { Link } from "react-router-dom";

//CSS
import "./signup.css"


const SignUp= () =>{

return(
    <Fragment>
        <div className="row-container">
            <Column>
                <div className="col-left">
                    <h1>Plantly</h1>
                    <h2>Sign up now & commit to keeping happier, healthier plants today!</h2>
                    <p>Sign in below</p>
                    <Login />
                    <p>Already have an account? <Link to= "/">
                        <SignupBtn className="signupBtn" text= 'Login'></SignupBtn>
                    </Link></p>
                </div>
            </Column>
            <img className="flowerImg" alt="flower" src="./img/flower.jpg"/>
        </div>
    </Fragment>
    )
}

export default SignUp