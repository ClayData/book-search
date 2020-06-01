import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';

export default function SaveAlert(props) {
    return (
        <MuiAlert elevation={6} variant="filled" {...props} severity="error">
            Must be signed in to save books
        </MuiAlert>
    );
}