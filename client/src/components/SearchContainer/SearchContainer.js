import React from 'react';
import './SearchContainer.css';

function SearchContainer(props) {

    return(
        <div className="holder">
            {props.children}
        </div>
    )
}

export default SearchContainer;