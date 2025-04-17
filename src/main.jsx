import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/ListedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {index: true, Component: Home},
      {
        path:'/books/:bookId', 
        loader: ()=> fetch('booksData.json'),
        Component: BookDetail
      },
      {
        path: 'listedBooks',
        loader: ()=>fetch('booksData.json'),
        Component: ListedBooks
      },
      {path:'dashboard', Component: Dashboard}
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
