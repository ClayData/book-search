import React from 'react';
import { Button } from '@material-ui/core';



function GoogleBtn(props) {
    return(
    <Button 
    onClick={props.onClick} 
    style={{backgroundColor: "#fff", fontSize: "1rem"}} 
    startIcon={<i className="fab fa-google"></i>}>
        {props.children}
    </Button>
        
    )
}

export default GoogleBtn;