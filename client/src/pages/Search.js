import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import searchBooks from '../utils/API';


function Search() {

    const [books, setBooks] = useState([]);
    const [formString, setFormString] = useState({
        title: ""
    })

   async function getData(val) {
       try{
        let response = await searchBooks(val);
        setBooks(response)
        

       } catch (err){
        console.err(err)
    }
    }

    function handleInputChange(event) {
        const value = event.target.value.trim().toLowerCase();
        setFormString({ title: value});
        console.log(formString.title)
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
            </form>
        </div>
    )
}

export default Search;