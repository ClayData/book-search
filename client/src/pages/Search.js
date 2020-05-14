import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, List } from '@material-ui/core';
import Item from '../components/List/Item';
import searchBooks from '../utils/API';

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
        let response = await searchBooks(val);
        console.log(response)
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
                            <Item 
                            title={book.volumeInfo.title}
                            image={book.volumeInfo.imageLinks.smallThumbnail}
                            description={book.volumeInfo.description}
                            />
                        )
                    })}
                </List>
            </form>
        </div>
    )
}

export default Search;