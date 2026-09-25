import React from 'react';
import { FaDumbbell } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-950 text-white py-4 px-6 flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
              <FaDumbbell className='text-yellow-300' />
              <h1 className='text-white text-[16px] font-bold'>FitLog</h1>  
            </div>
            <div>
                <p> © 2026 FitLog __ Workout Library. Train Hard, Log Honest</p>
            </div>
        </div>
    );
};

export default Footer;