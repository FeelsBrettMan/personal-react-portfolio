import React from "react";
import {Typography} from "@material-ui/core";
import {WorkCard} from "./WorkCard";

export const PrevWorks: React.FC = () =>{
    return(
        <div>
            <span>I'm prevWorks</span>
            <Typography variant={'body2'} style={{color:'white', display: 'inline'}}>I'm home</Typography>
            <Typography variant={'body1'} color={'textPrimary'}>test</Typography>
            <ul style={{display: 'flex',listStyle: 'none', flexWrap: 'wrap'}}>
                <li>
                    <WorkCard/>
                </li>
                <li>
                    <WorkCard/>
                </li>
                <li>
                    <WorkCard/>
                </li>
            </ul>

        </div>
    )
}
