import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuButton from './MenuButton';
import GoogleAuth from '../GoogleAuth/GoogleAuth'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [user, SetUser] = useState();

  const updateUser = () =>{
      if((sessionStorage.getItem("currentUser"))){
        SetUser(sessionStorage.getItem("currentUser"))
    }
    else{
      SetUser("")
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuButton />
          <Typography variant="h6" className={classes.title}>
            Book-Zelf
          </Typography>
          <Typography variant="h6" className={classes.title}>
           
          </Typography>
          <Typography variant="h6" className={classes.title}>
           
          </Typography>
          <Typography variant="h6" className={classes.title}>
           
           </Typography>
          <Typography variant="h6" className={classes.title}>
           {user} 
           </Typography>
           <Typography variant="h6" className={classes.title}>
           
           </Typography>
           <Typography variant="h6" className={classes.title}>
           
           </Typography>
           <Typography variant="h6" className={classes.title}>
           
           </Typography>
           <Typography variant="h6" className={classes.title}>
              <GoogleAuth 
              updateUser={updateUser}
              />
           </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

