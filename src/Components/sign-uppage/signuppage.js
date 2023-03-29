import "./signup.css"
import React, {Fragment} from "react";
import Login from "../first-page/login/login";
import Column from "../Column";

import SignupBtn from "../SignupBtn";
import { Link } from "react-router-dom";


const SignUp= () =>{

return(
    <Fragment>
        <div className="Container">
            <Column>
                <div className="col-left">
                    <h1>Plantly</h1>
                    <h2>Sign up now & commit to keeping happier, healthier plants today!</h2>
                    <p>Sign in below</p>
                    <Login />
                    <p>Don't have an account yet? <Link to= "/">
                        <SignupBtn className="signupBtn" text= 'Sign up'></SignupBtn>
                    </Link></p>
                </div>
            </Column>
            <img className="flowerImg" alt="flower" src="./img/flower.jpg"/>
        </div>
    </Fragment>
    )
}

export default SignUp