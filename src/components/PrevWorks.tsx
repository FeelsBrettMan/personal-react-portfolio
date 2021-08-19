import React from "react";
import {Grid} from "@material-ui/core";
import {WorkCard} from "./WorkCard";

export const PrevWorks: React.FC = () =>{
    return(
        <div>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard/>
                </Grid>
            </Grid>
        </div>
    )
}
