import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <div className='min-h-[calc(100vh-(292px))]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;