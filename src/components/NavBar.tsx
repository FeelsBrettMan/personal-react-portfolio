import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        Button:{
            flexGrow: 1,
            color: "white"
        },
        link:{
            flexGrow:1,
            margin: '10px',
            textDecoration: 'none'
        }
    }),
);

export const NavBar: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        Brett Kreiser's Portfolio
                    </Typography>
                        <Link to={"/"} className={classes.link}>
                            <Button color="inherit" className={classes.Button} >Home</Button>
                        </Link>
                        <Link to={"/works"} className={classes.link}>
                            <Button color="inherit" className={classes.Button}>Previous Works</Button>
                        </Link>
                        <Link to={"/resume"} className={classes.link}>
                            <Button color="inherit" className={classes.Button}>Resume</Button>
                        </Link>
                        <Link to={"/fun"} className={classes.link}>
                            <Button color="inherit" className={classes.Button}>Fun Stuff</Button>
                        </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
