import React, {Fragment} from "react";

import Nav from "../Nav";
import Column from "../Column";
import Grid from "../Grid";
import Card from "../Card";

// import "style.css"


const Secondpage = () =>{

    return(
        <Fragment>
            <Nav/>
            <Column>
            </Column>
            <Column>
                <Grid>
                    <Card></Card>
                </Grid>
            </Column>
        </Fragment>
    )

}

export default Secondpage

