import React, {Fragment} from "react";
import Login from "../first-page/login/login";
import { Link } from 'react-router-dom';
import SignupBtn from "../SignupBtn";
import Column from "../Column";

// CSS
import "../first-page/firstpage.css"


const Firstpage= () =>{
    return(
        <Fragment>
            <div className="Container">
                <Column>
                    <div className="col-left">
                        <h1>Plantly</h1>
                        <h2>Sign up now & commit to keeping happier, healthier plants today!</h2>
                        <p>Enter your username & password below to log in</p>
                        <Login />
                        <p>Already have an account? <Link to="/sign-up">
                            <SignupBtn className="signupBtn" text= 'Login here.'></SignupBtn>
                            {/* <SignupBtn className="signupBtn" text= 'Sign up'></SignupBtn> */}
                        </Link></p>
                    </div>
                </Column>
                    <img className="flowerImg" alt="flower" src="./img/flower.jpg"/>
            </div>
        </Fragment>
    );
};

export default Firstpage;

