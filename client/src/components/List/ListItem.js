import React from 'react';
import { Card, CardMedia, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  }));

function ListItem(props) {
    const classes = useStyles();
    const theme = useTheme();

    return(
        <Card>
            <CardMedia 
            className={classes.cover}
            image={props.image}
            />
            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {props.name}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}