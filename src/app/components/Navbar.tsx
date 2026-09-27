"use client";

import React, { useContext } from 'react';
import Logo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { WorkContext } from '../context/WorkContext';

const Navbar = () => {
  const { plan, save } = useContext(WorkContext);
    return (
        <div className='flex justify-between items-center p-3 sm:p-4 bg-gray-950 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <Image src={Logo} alt="Logo" width={28} height={28} />
            <h1 className='text-sm sm:text-base'>FitLog</h1>
          </div> 
          <div className='flex space-x-2 sm:space-x-4 text-sm sm:text-base'>
            <Link href="/" >Workouts</Link>
            <Link href="/myplan" >My Plan</Link>
          </div>
          <div className='flex space-x-2 sm:space-x-4 text-sm sm:text-base'>
            <div className='flex gap-2'>
              <Link href="/myplan" >Plan</Link>
              <h1 className="border rounded-2xl bg-lime-300 text-gray-900 px-2">{plan.length}</h1>
            </div>
            <div className='flex gap-2'>
              <Link href="/myplan" >Saved</Link>
              <h1 className="border border-gray-800 rounded-2xl bg-gray-950 text-white px-2">{save.length}</h1>
            </div>
            </div> 
        </div>
        </div>
    );
};

export default Navbar;
