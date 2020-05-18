import axios from "axios";


export default {

    searchGoogle: async function(params) {
    try {
    const key = "AIzaSyAJT0LGjYn_LQfcLFppiJQzdoSzP_BqHuw";
    let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params}&filter=ebooks&maxResults=40&startIndex=0&key=${key}`) 
    return response.data
    }
    catch (err){
        console.err(err)
    }
    },
    getBooks: function(){
        return axios.get("/api/books")
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }

}   


