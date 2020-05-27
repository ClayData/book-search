import React from 'react';
import { Button } from '@material-ui/core';
import './GoogleBtn.css';


function GoogleBtn(props) {
    return(
    <Button onClick={props.onClick} style={{backgroundColor: "#fff", fontSize: "1rem"}} startIcon={<i class="fab fa-google"></i>}>{props.children}</Button>
        
    )
}

export default GoogleBtn;