import React from "react";
import {
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Paper,
    Avatar
} from "@material-ui/core";
import logo from '../resources/placeholderImg.png'
import {makeStyles} from "@material-ui/styles";
import {createStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) =>
createStyles({
    card:{
        maxWidth: '320px',
        padding: '10px',
        margin: '10px',
    },
    paper:{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        backgroundColor: theme.palette.primary.dark,
        margin: 0,
    },
    chip:{
        margin: theme.spacing(0.5)
    }
}))

export const WorkCard: React.FC = () =>{
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component={"img"}
                    alt={"Placeholder"}
                    height={'240'}
                    image={logo}
                    title={'Placeholder'}
                />
                <CardContent>
                    <Typography variant={'h5'}>PlaceHolder Title</Typography>
                    <Typography variant={'body2'} color={'textSecondary'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Paper component={'ul'} className={classes.paper}>
                    <li>
                        <Chip label={'Example'} avatar={<Avatar style={{color:'black', backgroundColor: 'yellow'}}>JS</Avatar>} className={classes.chip}/>
                    </li>
                    <li>
                        <Chip label={'Example 1'} className={classes.chip}/>
                    </li>
                    <li>
                        <Chip label={'Example 2'} className={classes.chip}/>
                    </li>
                    <li>
                        <Chip label={'Example 3'} className={classes.chip}/>
                    </li>
                    <li>
                        <Chip label={'Example 4'} className={classes.chip}/>
                    </li>
                </Paper>

            </CardActions>
        </Card>
    )
}
