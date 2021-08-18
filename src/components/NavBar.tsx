import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        Button:{
            flexGrow: 1,
            margin: '10px',
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
                    <Button color="inherit" className={classes.Button}>Home</Button>
                    <Button color="inherit" className={classes.Button}>Previous Works</Button>
                    <Button color="inherit" className={classes.Button}>Resume</Button>
                    <Button color="inherit" className={classes.Button}>Fun Stuff</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
