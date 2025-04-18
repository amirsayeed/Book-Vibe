import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import Root from '../Components/Root/Root';
import ListedBooks from '../Components/ListedBooks/ListedBooks';
import Dashboard from '../Components/Dashboard/Dashboard';
import BookDetail from '../Components/BookDetail/BookDetail';
import Home from '../Components/Home/Home';
import ErrorPage from '../Components/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage/>,
    children:[
      {
        index: true,
        path:'/', 
        Component: Home
      },
      {
        path:'/books/:bookId', 
        loader: ()=> fetch('booksData.json'),
        Component: BookDetail
      },
      {
        path: '/listedBooks',
        loader: ()=>fetch('booksData.json'),
        Component: ListedBooks
      },
      {path:'dashboard', Component: Dashboard}
    ]
  },
  
]);
