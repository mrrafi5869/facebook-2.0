import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Home/Footer/Footer';
import LeftSideNav from '../components/Home/LeftSideNav/LeftSideNav';
import Navbar from '../components/Home/Navbar/Navbar';
import RightSideNav from '../components/Home/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='grid grid-cols-12 mx-4'>
                <div className='col-span-2'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-8 mx-auto'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-2'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;