import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book=> book.bookId === id)
    console.log(book);
    const {bookName, author, rating, publisher, review, image,totalPages,category, tags, yearOfPublishing} = book;
    
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row items-start p-5 gap-10">
                    <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p>By: {author}</p>
                    <p>{category}</p>
                    <p className="py-6">
                       Review: {review}
                    </p>
                    <div className='flex gap-5'>
                        <h3>Tags</h3>
                        {
                            tags.map((tag,idx)=> <div key={idx} className='badge badge-primary p-2'>{tag}</div>)
                        }
                    </div>
                    <div className='space-y-1 my-4'>
                        <p>Number of pages: {totalPages}</p>
                        <p>Publisher: {publisher}</p>
                        <p>Year of publishing: {yearOfPublishing}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    
                    <div className='flex gap-4'>
                        <button className='btn btn-accent'>Read</button>
                        <button className='btn btn-primary'>Wishlist</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default BookDetail;