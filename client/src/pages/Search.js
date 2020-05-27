import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@material-ui/core';
import SearchContainer from '../components/SearchContainer/SearchContainer';
import { makeStyles } from '@material-ui/core';
import Paginate from '../components/List/Paginate';
import API from '../utils/API';
import Books from '../components/List/Books';

const useStyles = makeStyles({
    // root: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    textbox: {
        backgroundColor: 'white',
        width: '20vw'
    },
    btn: {
        marginTop: "17px"
    },
    blurbHolder:{
        maxWidth: "20vw",
        height: "92vh",
        backgroundColor: "#4caf50",
        marginTop: ".5rem"
    },
    blurb: {
        fontFamily: "'Courgette', cursive",
        fontSize: "2rem",
        padding: '1rem'
    },
    listHolder: {
        maxWidth: "75vw",
        marginLeft: '.5rem'
    }
})


function Search() {
    

    const [books, setBooks] = useState([]);
    const [formString, setFormString] = useState({
        title: ""
    })
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10)
    const classes = useStyles();

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
            <Grid container direction="row" className={classes.root}>
                <Grid item >
                    <Paper className={classes.blurbHolder} square>
                        <Typography className={classes.blurb}>
                            Find your next great read with Book-Zelf!
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <SearchContainer>
                        <form>
                            <TextField
                            id="standard-full-width"
                            label="Search For Books"
                            style={{ margin: 8 }}
                            placeholder="Book Title"
                            fullWidth
                            variant="filled"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleInputChange}
                            className={classes.textbox}
                            />
                            <Button 
                            onClick={handleFormSubmit}
                            type="submit" 
                            variant="contained" 
                            color="secondary"
                            className={classes.btn}>
                                Submit
                            </Button>
                            </form>
                            </SearchContainer>
                            <Paper className={classes.listHolder}>
                                <Books books={currentBooks} loading={loading}/>
                                {
                                        books.length > 0 ?
                                <Paginate 
                                count={4}
                                page={currentPage}
                                onChange={handleChange}
                                /> : <React.Fragment />
                                }
                            </Paper>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Search;