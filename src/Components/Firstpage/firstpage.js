import React, {Fragment} from "react";
import { Link } from 'react-router-dom';

import Login from "../Login/login";
import SignupBtn from "../SignupBtn";
import Column from "../Column";

// CSS
import "./firstpage.css";
import "../Favourites/favourite.css";


const Firstpage= () =>{

    return(
        <Fragment>
            <div className="row-container">
                <Column>
                    <div className="col-left">
                        <h1>Plantly</h1>
                        <h2>Sign up now & commit to keeping happier, healthier plants today!</h2>
                        <p>Login in below</p>
                        <Login />
                        <p>Don't have an account yet? <Link to="/sign-up">
                            <SignupBtn className="signupBtn" text= 'Sign up'>
                            </SignupBtn>
                        </Link></p>
                    </div>
                </Column>
                <img className="flowerImg" alt="flower" src="./img/flower.jpg"/>
            </div>
        </Fragment>
    );
};

export default Firstpage;

