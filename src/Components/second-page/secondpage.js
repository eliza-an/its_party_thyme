//React
import React, {Fragment} from "react";

//Components
import Nav from "../Nav";
import Column from "../Column";
import Grid from "../Grid";
import Search from "../Search";
import Plants from "../Plants";



const Secondpage = () =>{

    return(
        <Fragment>
            <Nav/>
            <Column>
                <Search/>
                
            </Column>
            <Column>
                <Grid>   
                    <Plants/>
                </Grid>
            </Column>
        </Fragment>
    )

}

export default Secondpage;