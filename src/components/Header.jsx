import NavigationBar from "./NavigationBar";

function Header(){

const categories=[
    "Fiction",
  "Non-Fiction",
  "Sci-Fi",
  "Mystery",
  "Biography",
  "Fantasy",
  "Self-Help",
  "History",
];

const books=[
  {
    title:"A Tale of Two Cities",
    link:"#"
  },
  {
    title:"The Little Prince ",
    link:"#"
  },
  {
    title:"Harry Potter and the Philosopher's Stone",
    link:"#"
  },
  {
    title:"The Hobbit",
    link:"#"
  },
  {
    title:"The Kite Runner",
    link:"#"
  }
  

]
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            
           
            
            <h1 className="text-2xl font-bold text-blue-400 mb-4">Welcome To Book Haven</h1>
            <p className="text-lg font-bold text-gray-700 mb-2">Discover books across various genres </p>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
              <h1 className="text-2xl font-semibold mb-4">Book Categories</h1>
              <ul className="flex flex-wrap gap-2 space-y-2">
                {categories.map((item,index)=>
                  (
                        
                        <li key={index} className="p-2 bg-gray-200 rounded-md text-center font-medium">{item}</li>
                        
                    )
                )}
              </ul>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mt-5">
              <h1 className="text-lg font-semibold mb-4">List of popular books</h1>
              <ul className="space-y-2">
                {books.map((book,index)=>{
                  return (
                     <li key={index} className="p-2 bg-gray-200 rounded-md text-center font-medium">
                      <a href={book.link} className="text-blue-600 hover:underline">{book.title}</a>
                     </li>
                  )
                })}
              </ul>

            </div>
        </div>
    )
}
export default Header;