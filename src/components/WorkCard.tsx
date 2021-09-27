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
} from "@material-ui/core";
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
        width: '300px',
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
interface CardProps{
    title: string;
    imgFilePath: string;
    imgAlt: string;
    description: string;
    chips: string[];
}
interface ChipData{
    key: number;
    label: string;
}

export const WorkCard=({title, imgFilePath, imgAlt, description, chips}: CardProps) =>{
    const classes = useStyles();
    let chipArray: ChipData[] = [];

     for (let i = 0; i < chips.length; i++) {
         chipArray.push( {key:i, label:chips[i]})
     }

    return(
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component={"img"}
                    alt={imgAlt}
                    image={imgFilePath}
                    title={title}
                />
                <CardContent>
                    <Typography variant={'h5'}>{title}</Typography>
                    <Typography variant={'body2'} color={'textSecondary'}>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                {
                    //these will be replaced with a list with key!
                }
                <Paper component={'ul'} className={classes.paper}>
                    {chipArray.map((data)=>{
                        return(
                            <li key={data.key}>
                                <Chip label={data.label} className={classes.chip}/>
                            </li>
                        )
                    })}
                </Paper>

            </CardActions>
        </Card>
    )
}
