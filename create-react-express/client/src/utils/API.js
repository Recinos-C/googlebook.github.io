import axios from 'axios';

export default {
    getSavedBooks: function(){
        return axios.get("/api/books");
    },
    SaveBook: function(bookData){
        return axios.get("/api/books", bookData);
    },
    deleteBook: function(id){
        return axios.get("/api/books" + id);
    }
}