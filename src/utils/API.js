import axios from "axios";
const API_KEY = process.env.API_KEY;

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" +id);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    findBook: function() {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${API_KEY}`)
    }
};