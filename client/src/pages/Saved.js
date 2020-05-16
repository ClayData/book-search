import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
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

    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.getBooks().then((results) => {
            setBooks(results.data)
        });
    }, [])

    return(
        <div>
            <List className={classes.root}>
            {books.map((book) => {
                        return(
                            <div>
                            <Item 
                            key={book.etag}
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
                         </div>
                        )
                    })}
            </List>
        </div>
    )
}

export default Saved;