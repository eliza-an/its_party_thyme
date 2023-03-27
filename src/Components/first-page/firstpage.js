import React, {Fragment} from "react";
import Login from "../first-page/login/login";
import { Link } from 'react-router-dom';
import SignupBtn from "../SignupBtn";

// CSS
import "../first-page/firstpage.css"


const Firstpage= () =>{

    return(
        <Fragment className="First">
            <img className="flowerImg" alt="flower" src="./img/flower.jpg"></img>< div className="plantly"><h1>PLANTLY</h1></div> 
            <div className="plantly"><h2>Sign up Now</h2></div>
            <div className="plantly"><h3>Commit to keeping happier Healthier plants today!</h3></div>
            <div className="plantly"><Login /></div>
            <div className="plantly"> 
            <Link to="/sign-up">
                <SignupBtn className="signUpBtn" text= 'Sign up'>
                </SignupBtn>
            </Link>
            </div>  
        </Fragment>
    );
};

export default Firstpage;

