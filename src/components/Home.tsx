import React from "react";
import {Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Icon} from "@iconify/react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const Home: React.FC = () =>{
    return(
        <div>
            <Typography variant={'h3'} color={'textPrimary'}>About Me!</Typography>
            <Typography variant={'body1'} color={"textPrimary"}>From: Hershey, PA</Typography>
            <Typography variant={'body1'} color={"textPrimary"}>Degree: B.S. in Computer Science</Typography>
            <Typography variant={'body1'} color={"textPrimary"}>Education: Penn State Harrisburg</Typography>
            <Typography variant={'body1'} color={"textPrimary"}>Interest: game development, app development, multiplayer games, music, movies</Typography>
            <Typography variant={'body1'} color={"textPrimary"}>Email: bkreiser98@gmail.com</Typography>
            <Typography variant={'body1'} component={"span"} color={"textPrimary"}>Socials: </Typography>

            <a href={'https://www.linkedin.com/in/brett-kreiser/'} style={{textDecoration: 'none'}}>
                <LinkedInIcon style={{color: "#0A66C2"}} fontSize={'large'}/>
                <Typography variant={'body1'} component={"span"} color={"textPrimary"}> brett-kreiser</Typography>
            </a>

            <Typography variant={'h3'} component={"span"} color={"textPrimary"}> | </Typography>
            <a href={'https://github.com/FeelsBrettMan'} style={{textDecoration: 'none'}}>
                <GitHubIcon style={{color: "#FFFFFF"}} fontSize={'large'}/>
                <Typography variant={'body1'} component={"span"} color={"textPrimary"}> FeelsBrettMan</Typography>
            </a>

            <Typography variant={'h3'} component={"span"} color={"textPrimary"} > | </Typography>
            <a href={'https://twitter.com/feelsbrettman'} style={{textDecoration: 'none'}}>
                <TwitterIcon style={{color: "#1CA0F1"}} fontSize={'large'}/>
                <Typography variant={'body1'} component={"span"} color={"textPrimary"}>@FeelsBrettMan</Typography>
            </a>
            <Typography variant={'h3'} component={"span"} color={"textPrimary"}> | </Typography>
                <Icon icon="mdi:discord" color="#5865f2" inline={true} width={'35'}/>
                <Typography variant={'body1'} component={"span"} color={"textPrimary"}> FeelsBrettMan#7597</Typography>

        </div>
    )
}
