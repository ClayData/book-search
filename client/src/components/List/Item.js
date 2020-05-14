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
        <Avatar alt="Remy Sharp" src={props.image} />
      </ListItemAvatar>
      <ListItemText
       
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {props.title}
            </Typography>
            {props.description}
          </React.Fragment>
        }
      />
    </ListItem>
    )
}

export default Item;
