import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';
const Book = ({book}) => {
    const {bookId,image,bookName,author,tags,rating,category} = book || {};
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 shadow-sm p-6">
            <figure className='bg-gray-300 p-4 rounded-2xl'>
                <img
                className='h-[166px]'
                src={image}
                alt="Shoes" />
            </figure>
            <div className='space-y-2 my-5'>
                <div className='flex gap-4'>{
                    tags.map((tag,idx)=> <div key={idx} className='badge badge-primary p-2'>{tag}</div>)
                }
                </div>
                <h2 className="text-xl font-medium">
                {bookName}
                </h2>
                <p>By : {author}</p>
                <div className='divider'></div>
                <div className="card-actions justify-between">
                <div>{category}</div>
                <div className='flex'>{rating}<span><CiStar size={20}/></span></div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;