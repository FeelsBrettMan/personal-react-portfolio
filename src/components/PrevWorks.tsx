import React from "react";
import {Grid} from "@material-ui/core";
import {WorkCard} from "./WorkCard";
import placeholder from '../resources/placeholderImg.png'
import Scavenge from "../resources/Scavenge.png"
import ToDo from "../resources/cloudToDoList.png"
import MusicApp from "../resources/angularMusicApp.png"
import Vue2048 from "../resources/Vue2048.png"



export const PrevWorks: React.FC = () =>{
    return(
        <div>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard title={'Reactaurant Reviews'} description={'A restaurant review app,backed by a SpringBoot api and MySQL database. Users can create, update, and delete reviews. Admins can create, update, and delete restaurants. Built as part of the JUMP program'} imgFilePath={placeholder} imgAlt={'placeholder alt'} chips={['Java','Javascript','React', 'SpringBoot', 'SQL']}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard title={'Cloud To-Do List'} description={'An android to-do list application backed by Google Firebase. Users can create and join multiple list, share list to other users, and update the list in real time across all devices.'} imgFilePath={ToDo} imgAlt={'placeholder alt'} chips={['Java','Android','NoSQL']}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard title={'Scavenge'} description={'A virtual reality space survival game, a group project for the Penn State Harrisburg Capstone conference. In Scavenge, the player travels from derelict ship to derelict ship, collecting items and avoiding hazards in order to craft and upgrade themselves and their ship. As the player progresses, they will unlock the ability to find new more dangerous and better equipped derelict to discover.'} imgFilePath={Scavenge} imgAlt={'placeholder alt'} chips={['Unity','C#','Steam VR']}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard title={'Angular Music Player'} description={'A music app built for Netcentric using the Angular CLI. Features a small library of royalty-free music (see attribution.txt for information) and plays music using Howler. '} imgFilePath={MusicApp} imgAlt={'placeholder alt'} chips={['Javascript','Angular','Node']}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard title={'Vue 2048 game'} description={'A basic 2048 game built for Netcentric using the Vue 2 CDN. Features a Firestore database for storing scores, which are displayed after the game or by clicking a button. '} imgFilePath={Vue2048} imgAlt={'placeholder alt'} chips={['Javascript','Vue 2','NoSQL']}/>
                </Grid>
            </Grid>
        </div>
    )
}
