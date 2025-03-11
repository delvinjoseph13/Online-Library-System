import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookList from "./BookList";
import { useEffect, useState } from "react";

function BrowseBook() {
  const books = useSelector((state) => state.books.items); 
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(books);

  const categories = [...new Set(books.map((b) => b.categories))];

  function handleSearch() {
    if (inputValue.trim() === "") {
      setFilteredData(books); 
    } else {
      const filteredBook = books.filter((book) =>
        book.name.toLowerCase().replace(/\s+/g, '').includes(
          inputValue.toLowerCase().replace(/\s+/g, '')
        )
      );
      setFilteredData(filteredBook);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [inputValue, books]); 

  return (
    <div>
      <div className="flex justify-around">
        <h1 className="mb-10 mt-2 font-bold text-4xl p-4">Browse Books</h1>
        <div>
          <input
            type="text"
            className="border-2 h-10 w-80 mt-8 p-2 rounded-md"
            placeholder="Search by Book Name"
            onChange={(e) => setInputValue(e.target.value)}
          />
          {/* <button className="p-2 text-lg rounded-lg ml-4 bg-red-100" onClick={handleSearch}>
            Search
          </button> */}
        </div>
      </div>

      <div className="h-12 mb-4 bg-red-100 flex items-center justify-center px-4 overflow-x-auto whitespace-nowrap">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/books/${category}`}
            className="px-4 py-2 bg-white text-blue-700 font-medium rounded-full border border-red-300 shadow-sm transition duration-200 ease-in-out hover:bg-red-500 hover:text-white hover:border-red-500 mx-2"
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Display all books */}
      <BookList bookdetails={filteredData} />
    </div>
  );
}

export default BrowseBook;
