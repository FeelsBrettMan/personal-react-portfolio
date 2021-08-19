import React from "react";
import {Typography} from "@material-ui/core";
type myState = {
    time?: Date;
    interval?: NodeJS.Timeout;
}

export default class Clock extends React.Component<{}, myState>{
    state: myState ={
        time : undefined,
        interval: undefined,
    }
    constructor() {
        super({});
        this.checkTime=this.checkTime.bind(this);
    }


    checkTime(){
        this.setState({
            time: new Date()
        });
        console.log("hi! checkTime() was called")
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(this.checkTime,1000)
        })
    }
    componentWillUnmount() {
        if (this.state.interval !== undefined) {
            clearInterval(this.state.interval)
        }
    }

    conditionalRender(){
        if(this.state.time instanceof Date) {
            return (<Typography variant={'body1'} color={'textPrimary'}>Current Time: {this.state.time.toLocaleTimeString()}</Typography>)
        }
        else return null
    }

    render() {
        return (
            <div>
                {this.state.time !== undefined ? <Typography variant={'body1'} color={'textPrimary'}>Current Time: {this.state.time.toLocaleTimeString()}</Typography> : null}
            </div>
        );
    }
}
