import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import BrowseBook from './components/BrowseBook.jsx'
import BookList from './components/BookList.jsx'
import Header from './components/Header.jsx'
import BookDetails from './components/BookDetails.jsx'
import AddBook from './components/AddBook.jsx'
import PageNotFound from './components/PageNotFound.jsx'

const approunter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index: true, 
        element: <Header />,
      },
      {
        path:"/books",
        element:<BrowseBook/>
      },
      {
        path:'/books/:category', 
        element:<BookList/>
      },{
        path:'/bookdetails/:bookid',
        element:<BookDetails/>
      },
      {
        path:'/addbook',
        element:<AddBook/>
      }
    ],
    errorElement:<PageNotFound/>

    
  },
  

]
  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={approunter}/>
  </StrictMode>,
)
