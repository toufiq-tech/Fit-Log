import React from 'react';
import Logo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-gray-950 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <Image src={Logo} alt="Logo" width={28} height={28} />
            <h1>FitLog</h1>
          </div> 
          <div className='flex space-x-4'>
            <Link href="/" >Workouts</Link>
            <Link href="/myplan" >My Plan</Link>
          </div>
          <div className='flex space-x-4'>
            <Link href="/myplan" >Plan</Link>
            <Link href="/myplan" >Saved</Link>
            </div> 
        </div>
        </div>
    );
};

export default Navbar;