import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredItem, getWishListItem } from '../../Utility/addToStoredb';
import Book from '../Book/Book';
const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    
    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredItem();
        const storedReadListInt = storedReadList.map(id=>parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

        const storedWishList = getWishListItem();
        const storedWishListInt = storedWishList.map(id=>parseInt(id));
        const wishBookList = allBooks.filter(book=> storedWishListInt.includes(book.bookId))
        setWishList(wishBookList);
    },[])
    
    return (
        <div>
            <h2 className="text-2xl font-medium bg-gray-300 text-center my-8 py-3">Books</h2>
            <Tabs>
                <TabList>
                <Tab>Read books</Tab>
                <Tab>Wishlist books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I Read:{readList.length}</h2>
                    <div className='max-w-md flex flex-col gap-3'>
                        {
                        readList.map(book => <Book key={book.bookId} book={book}/>)
                        }
                    </div>
                
                </TabPanel>
                <TabPanel>
                <h2>Books I want to read:{wishList.length}</h2>
                <div className='max-w-md flex flex-col gap-3'>
                    {
                        wishList.map(book => <Book key={book.bookId} book={book}/> )
                    }
                </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;