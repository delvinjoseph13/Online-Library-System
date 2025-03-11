import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookList(props) {
    
    const book=useSelector((state)=>state.books.items)
    
    const {category}=useParams();

    const filteredData=category ? book.filter((b)=>b.categories.includes(category)) :props.bookdetails;
   
    return (
        <div className="flex flex-wrap justify-center gap-10 p-5 mt-10">
            
            {
                filteredData.length >0 ? (
                    filteredData.map(book => (
                        <div key={book.id} className="w-72 bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                            <img src={book.image_url} alt={book.name} className="w-full h-60 object-cover" />
                            
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-900">{book.name}</h2>
                                <p className="text-sm text-gray-700 mt-1">by <span className="font-medium">{book.author}</span></p>
                                <p className="text-xs text-gray-600 mt-2">{book.categories} • {book.published_year}</p>
                                
                                <p className="text-sm text-gray-800 mt-3 line-clamp-3">{book.description}</p>
                                
                                <Link to={`/bookdetails/${book.id}`}>
                                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
                                    View Details
                                </button>
                                </Link>
                                
                            </div>
                        </div>
                    ))
                )
               : (<h1>No book in this categories</h1> )
            } 
            :  
 
        </div>
    );
}

export default BookList;
