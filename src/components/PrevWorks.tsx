import React from "react";
import {Grid} from "@material-ui/core";
import {WorkCard} from "./WorkCard";
import placeholder from '../resources/placeholderImg.png'


export const PrevWorks: React.FC = () =>{
    return(
        <div>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard title={'test 1'} description={'I\'m the test 1 description!'} imgFilePath={placeholder} imgAlt={'placeholder alt'} chips={['test','test2','test3','test4']}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard title={'Project'} description={'I\'m the project description!'} imgFilePath={placeholder} imgAlt={'placeholder alt'} chips={['javascript','react','material-ui']}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard title={'Foo'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n'} imgFilePath={placeholder} imgAlt={'placeholder alt'} chips={['java','sql','test3','test4','test5', 'test6']}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorkCard title={'Bar'} description={'I\'m the test description!'} imgFilePath={placeholder} imgAlt={'placeholder alt'} chips={['test','test2','test3','test4']}/>
                </Grid>
            </Grid>
        </div>
    )
}
