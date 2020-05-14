const axios = require('axios');



async function searchBooks(params) {
    try {
    const key = "AIzaSyAJT0LGjYn_LQfcLFppiJQzdoSzP_BqHuw";
    

    let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params}&filter=ebooks&maxResults=40&startIndex=0&key=${key}`)
    
    return response.data
   
    
    
    }
    catch (err){
        console.err(err)
    }
}   

export default searchBooks;