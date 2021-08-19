import React from "react";
import {Typography} from "@material-ui/core";
type myState = {
    resumeFilePath: String;

}

export default class Resume extends React.Component<{}, myState>{
    state: myState ={
        resumeFilePath: '',
    }

    render() {
        return (
            <div>
                <Typography variant={"h1"}>Resume goes here</Typography>
            </div>
        );
    }
}
