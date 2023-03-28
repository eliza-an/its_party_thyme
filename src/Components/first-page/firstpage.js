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
            <div className="Row">
                <Column>
                <div className="col-left">
                    <h1>Plantly</h1>
                    <h2>Sign up Now</h2>
                    <h3>Commit to keeping happier Healthier plants today!</h3>
                    <Login />
                    <Link to="/sign-up">
                        <SignupBtn className="signupBtn" text= 'Sign up'>
                        </SignupBtn>
                    </Link>
                    </div>
                </Column>
            
                    <img className="flowerImg" alt="flower" src="./img/flower.jpg"/>
                
            </div>
            
        </Fragment>
    );
};

export default Firstpage;

