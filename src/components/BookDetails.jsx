import { useParams } from "react-router-dom";
import { book } from "../utils/mockData";
import { Link } from "react-router-dom";

function BookDetails(){
    const {bookid}=useParams();
    
    const bookdetails = book.filter(b => b.id === parseInt(bookid));
    console.log("Filtered Book Details:", bookdetails); 
    
    return (
        <>
        {
           bookdetails.map(book=>{
            return (
                <>
                <Link to={'/books'}>
                <div className=" flex">
                <i class="material-icons" style={{marginTop:"18px",marginLeft:"10px"}}>chevron_left</i>
                <h2 className="p-4">Back to Brower Books Page</h2>
                </div>
                
                </Link>
                
                <h1 className=" text-3xl text-center mt-10 mb-10 font-bold underline">{`Book Details of ${bookid}`}</h1>

                
                <div key={book.id} className="w-72 mx-auto mt-10 bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                
                <img src={book.image_url} alt={book.name} className="w-full h-60 object-cover" />
                
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900">{book.name}</h2>
                    <p className="text-sm text-gray-700 mt-1">by <span className="font-medium">{book.author}</span></p>
                    <p className="text-xs text-gray-600 mt-2">{book.categories} • {book.rating}</p>
                    
                    <p className="text-sm text-gray-800 mt-3 line-clamp-3">{book.description}</p>
                    
                    
                </div>
              </div>
                </>

            )
           }

           ) 
        }
        </>
    )
}

export default BookDetails;