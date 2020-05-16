import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, List } from '@material-ui/core';
import Item from '../components/List/Item';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));


function Search() {
    const classes = useStyles();

    const [books, setBooks] = useState([]);
    const [formString, setFormString] = useState({
        title: ""
    })

   async function getData(val) {
       try{
        let response = await API.searchGoogle(val);
        console.log(response.items)
        setBooks(response.items)
        
       } catch (err){
        console.err(err)
    }
    }

    function handleInputChange(event) {
        const value = event.target.value.trim().toLowerCase();
        setFormString({ title: value});
        
    }

    function handleFormSubmit(event) {
        event.preventDefault();
            getData(formString.title);
    }

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

    return(
        <div>
            <form>
                <TextField
                id="standard-full-width"
                label="Search For Books"
                style={{ margin: 8 }}
                placeholder="Book Title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleInputChange}
                />
                <Button 
                onClick={handleFormSubmit}
                type="submit" 
                variant="contained" 
                color="primary">
                    Submit
                </Button>
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
                            </div>
                        )
                    })}
                </List>
            </form>
        </div>
    )
}

export default Search;