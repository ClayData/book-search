import React from 'react';



function Button(props) {
    const buttonStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "8px"
    }

    return(
        <button style={buttonStyle}>
            {props.children}
        </button>
    )
}

export default Button