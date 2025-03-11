import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/CreateBookSlice";
import { useNavigate } from "react-router-dom";

function AddBook(){
    
    const dispatch=useDispatch();
    const [book,setBook]=useState({
        "name":"",
        "author":"",
        "categories":"",
        "published_year":"",
        "description":"",
        "image_url":"",
        "id":""

    })

    const navigate=useNavigate();

    function handleChange(e){
        setBook({...book,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        if (!book.name.trim() || !book.author.trim() || !book.categories.trim() || !book.published_year.trim() || !book.description.trim() || !book.id.trim() || !book.image_url.trim()) {

            alert("add all book details");
            return;
        }
        console.log("added details",book)
        dispatch(addBook({...book,id:book.id}))
        setBook(
            {
                name:"",
                author:"",
                categories:"",
                published_year:"",
                description:"",
                image_url:"",
                id:""
            }
        )

        navigate('/books')
        
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">📚 Add a New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
          type="number"
          name="id"
          placeholder="Enter book id"
          value={book.id}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-3 "
          />
          <input
            type="text"
            name="name"
            placeholder="Book Name"
            value={book.name}
            onChange={handleChange}
          
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
            
            
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="categories"
            placeholder="Genre"
            value={book.categories}
            onChange={handleChange}
            
        
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="published_year"
            placeholder="published year"
            value={book.published_year}
            onChange={handleChange}
            
        
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
           <input
            type="text"
            name="description"
            placeholder="description"
            value={book.description}
            onChange={handleChange}
            
        
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="image_url"
            placeholder="image url"
            value={book.image_url}
            onChange={handleChange}
            
        
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            ➕ Add Book
          </button>
        </form>
      </div>
    )
}

export default AddBook;