import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import Root from '../Components/Root/Root';
import ListedBooks from '../Components/ListedBooks/ListedBooks';
import BookDetail from '../Components/BookDetail/BookDetail';
import Home from '../Components/Home/Home';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import PagesDashboard from '../Components/PagesDashboard/PagesDashboard';

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
        loader: ()=>fetch('../booksData.json'),
        Component: ListedBooks
      },
      {
        path: '/pagesDashboard',
        loader: ()=>fetch('../booksData.json'),
        Component: PagesDashboard
      }
    ]
  },
  
]);
