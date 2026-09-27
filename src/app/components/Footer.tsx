import React from 'react';
import { FaDumbbell } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-950 text-white py-6 sm:py-10 px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
            <div className='flex items-center space-x-2'>
              <FaDumbbell className='text-yellow-300' />
              <h1 className='text-white text-[16px] font-bold'>FitLog</h1>  
            </div>
            <div className='text-center sm:text-right'>
                <p> © 2026 FitLog - Workout Library. Train Hard, Log Honest</p>
            </div>
        </div>
    );
};

export default Footer;
