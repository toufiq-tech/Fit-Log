"use client";

import React, { useContext } from 'react';
import Logo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { WorkContext } from '../context/WorkContext';

const Navbar = () => {
  const { plan, save } = useContext(WorkContext);

  return (
    <div className='flex items-center justify-between bg-gray-950 p-2 text-white sm:p-4'>
      <div className='container mx-auto flex items-center justify-between gap-2'>
        
        <div className='flex items-center space-x-1 sm:space-x-2'>
          <Image src={Logo} alt="Logo" width={28} height={28} />
          <h1 className='text-xs sm:text-base'>FitLog</h1>
        </div>

        <div className='flex space-x-2 text-xs sm:space-x-4 sm:text-base'>
          <Link href="/" >Workouts</Link>
          <Link href="/myplan" >My Plan</Link>
        </div>

        <div className='flex space-x-2 text-xs sm:space-x-4 sm:text-base'>
          
          <div className='flex items-center gap-1 sm:gap-2'>
            <Link href="/myplan" >Plan</Link>
            <h1 className="rounded-2xl border bg-lime-300 px-1.5 text-gray-900 sm:px-2">
              {plan.length}
            </h1>
          </div>

          <div className='flex items-center gap-1 sm:gap-2'>
            <Link href="/myplan" >Saved</Link>
            <h1 className="rounded-2xl border border-gray-800 bg-gray-950 px-1.5 text-white sm:px-2">
              {save.length}
            </h1>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;
