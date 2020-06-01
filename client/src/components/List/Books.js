import React, {useState} from 'react';
import API from '../../utils/API'
import { List, Divider, Snackbar } from '@material-ui/core';
import Item from './Item';
import { makeStyles } from '@material-ui/core';
import SaveAlert from './SaveAlert'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Books = ({ books, loading }) => {
    const classes = useStyles();
    const userEmail = sessionStorage.getItem("currentEmail")
    const [error, setError] = useState(false)

    function handleOnClick(event) {
        event.preventDefault()
        let book = (event.target)
        console.log(books)
        for(let i = 0; i < books.length; i++){
            if(books[i].id === book.id){
                let dataPacket = {
                    title: books[i].volumeInfo.title,
                    user: userEmail,
                    authors: books[i].volumeInfo.authors,
                    image: books[i].volumeInfo.imageLinks.smallThumbnail,
                    description: books[i].volumeInfo.description,
                    view: books[i].volumeInfo.infoLink
                }
                console.log(dataPacket)
                API.saveBook(dataPacket).then(res => {
                  console.log(res)
                }).catch(err => {
                  console.log(err);
                  setError(true)
                })
            }
        }
    }

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <List className={classes.root}>
                    {books.map((book, i) => {
                        return(
                            <div>
                            <Item 
                            key={i}
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
                            <SaveAlert style={error ? {visibility: "visible"} : {visibility: "hidden"}} />
                            <Divider />
                            </div>
                        )
                    })}
                </List>
    )
}

export default Books;

