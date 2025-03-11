import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="bg-blue-600 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
     
        <h1 className="text-white text-2xl font-bold">📚 Book Heaven</h1>

       
        <ul className="flex space-x-10">
          <li>
            <Link to="/" className="text-white font-medium text-lg px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="text-white font-medium text-lg px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300">
              Browse Books
            </Link>
          </li>
          <li>
            <Link to="/addbook" className="text-white font-medium text-lg px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300">
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
