import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function Paginate(props) {
    const classes = useStyles()
    
    

    return(
        <div className={classes.root}>
            
            <Pagination count={props.count} color="secondary" onChange={props.onChange} page={props.page}/> 
        </div>
    )
}

export default Paginate;
