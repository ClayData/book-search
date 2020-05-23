import React from 'react';
import API from '../../utils/API'
import { List, Divider } from '@material-ui/core';
import Item from './Item';
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Books = ({ books, loading }) => {
    const classes = useStyles();

    function handleOnClick(event) {
        event.preventDefault()
        let book = (event.target)
        console.log(books)
        for(let i = 0; i < books.length; i++){
            if(books[i].id === book.id){
                let dataPacket = {
                    title: books[i].volumeInfo.title,
                    authors: books[i].volumeInfo.authors,
                    image: books[i].volumeInfo.imageLinks.smallThumbnail,
                    description: books[i].volumeInfo.description,
                    view: books[i].volumeInfo.infoLink
                }
                console.log(dataPacket)
                API.saveBook(dataPacket)
            }
        }
    }

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <List className={classes.root}>
                    {books.map((book) => {
                        return(
                            <div>
                            <Item 
                            key={book.etag}
                            id={book.id}
                            authors={book.volumeInfo.authors}
                            title={book.volumeInfo.title}
                            image={book.volumeInfo.imageLinks.smallThumbnail}
                            description={book.volumeInfo.description}
                            />
                            <button
                            id={book.id}
                            onClick={handleOnClick}
                            type="submit"
                            >
                              Save
                            </button>
                            <button type="button">
                              <a href={book.volumeInfo.infoLink}>
                                view
                              </a>
                            </button>
                            <Divider />
                            </div>
                        )
                    })}
                </List>
    )
}

export default Books;

