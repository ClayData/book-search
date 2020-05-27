import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
  }));

function Item(props) {
    const classes = useStyles();
    

    return(
      <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={props.title} src={props.image} variant="square"/>
      </ListItemAvatar>
      <ListItemText
        primary={`${props.title}, by: ${props.authors}`}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              
            </Typography>
            {props.description}
          </React.Fragment>
        }
      />
      
        
    </ListItem>
    )
}

export default Item;
