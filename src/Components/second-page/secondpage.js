import React, {Fragment} from "react";

import Nav from "../Nav";
import Column from "../Column";
import Grid from "../Grid";
import Plant from "../Plant";
import Plants from "../Plants";

// import "style.css"


const Secondpage = ( ) =>{

    return(
        <Fragment>
            <Nav/>
            <Column>
            </Column>
            <Column>
                <Grid>
                    <Plant ></Plant>
                </Grid>
            </Column>
        </Fragment>
    )

}

export default Secondpage