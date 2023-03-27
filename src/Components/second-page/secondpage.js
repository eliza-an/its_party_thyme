import React, {Fragment} from "react";

import Nav from "../Nav";
import Column from "../Column";
import Grid from "../Grid";
import Card from "../Card";
import Search from "../Search";

// import "style.css"
import {data} from '../data'


const Secondpage = () =>{

    return(
        <Fragment>
            <Nav/>
            <Column>
                <Search/>
            </Column>
            <Column>
                <Grid>
                    <Card plants={data}/>
                </Grid>
            </Column>
        </Fragment>
    )

}

export default Secondpage