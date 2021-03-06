import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Divider } from '@material-ui/core';
import Item from '../components/List/Item';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

function Saved() {
    const classes = useStyles();
    const currentUser = sessionStorage.getItem("currentEmail")
    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.userBooks(currentUser).then((results) => {
            setBooks(results.data)
        });
    }, []);

    const handleOnClick = (id) => {
        
        API.deleteBook(id).then((res) => {
            API.getBooks(currentUser).then((results) => {
                setBooks(results.data)
            })
        })
    }
    
    return(
        <div>
            <List className={classes.root}>
            {books.map((book) => {
                        return(
                            <div>
                            <Item 
                            key={book._id}
                            id={book.id}
                            authors={book.authors}
                            title={book.title}
                            image={book.image}
                            description={book.description}
                            />
                            <button type="button">
                                <a href={book.view}>
                                    view
                                </a>
                         </button>
                         <button type="button">
                                <a onClick={() => handleOnClick(book._id)}>
                                    remove
                                </a>
                         </button>
                         <Divider />
                         </div>
                        )
                    })}
            </List>
        </div>
    )
}

export default Saved;