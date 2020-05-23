import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Paginate from '../components/List/Paginate';
import API from '../utils/API';
import Books from '../components/List/Books';



function Search() {
    

    const [books, setBooks] = useState([]);
    const [formString, setFormString] = useState({
        title: ""
    })
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10)
   

    async function getData(val) {
        try{
            setLoading(true)
         const response = await API.searchGoogle(val);
         setBooks(response.items)
         setLoading(false)
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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentBooks = books.slice(indexOfFirstPost, indexOfLastPost);
    
    const handleChange = (event, value) => {
        setCurrentPage(value);
      };

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
                <Books books={currentBooks} loading={loading}/>
            <Paginate 
            count={4}
            page={currentPage}
            onChange={handleChange}
            />
        </div>
    )
}

export default Search;