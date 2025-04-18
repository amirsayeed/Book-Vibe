import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredReadList,addToStoredWishList } from '../../Utility/addToStoredb';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)
import { ToastContainer, toast } from 'react-toastify';
const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book=> book.bookId === id)
    // console.log(book);
    const {bookId:newBookId,bookName, author, rating, publisher, review, image,totalPages,category, tags, yearOfPublishing} = book || {};

    const handleMarkAsRead = (id) =>{
        // MySwal.fire({
        // title: "Good job!",
        // text: "You clicked the button!",
        // icon: "success"
        // });
        toast("Book Added to readlist");
        addToStoredReadList(id);
    }

    const handleAddToWishList = (id) =>{
        toast("Book Added to wishlist");
        addToStoredWishList(id);
    }
    
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row items-start p-5 gap-10">
                    <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl bg-gray-300 p-5" />
                    <div>
                    <h1 className="text-5xl font-bold mb-3">{bookName}</h1>
                    <p>By : {author}</p>
                    <div className='border-t border-dashed my-2'></div>
                    <p>{category}</p>
                    <div className='border-t border-dashed my-2'></div>
                    <p className="py-6">
                       Review: {review}
                    </p>
                    <div className='border-t border-dashed my-2'></div>
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
                        <ToastContainer />
                        <button onClick={()=>handleMarkAsRead(newBookId)} className='btn btn-accent'>Read</button>
                        <button onClick={()=>handleAddToWishList(newBookId)} className='btn btn-primary'>Wishlist</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default BookDetail;