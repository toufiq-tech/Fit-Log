import React from 'react';
import Logo from '../assets/logo.png';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-gray-950 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <Image src={Logo} alt="Logo" width={28} height={28} />
            <h1>FitLog</h1>
          </div> 
          <div className='flex space-x-4'>
            <button className='hover:bg-green-700'>Workouts</button>
            <button className='hover:bg-green-700'>My Plan</button>
          </div>
          <div className='flex space-x-4'>
            <h1>Plan</h1>
            <h1>Saved</h1>
            </div> 
        </div>
        </div>
    );
};

export default Navbar;