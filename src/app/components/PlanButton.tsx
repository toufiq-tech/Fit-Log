'use client';

import React from 'react';
import { FaRegCalendarPlus } from "react-icons/fa";

const AddtoPlanButton = () => {
    return (
        <div>
           <button
              className="
              flex items-center gap-1
                rounded-2xl
                bg-[#baff00]
                px-3
                py-2
                text-[14px]
                font-bold
                text-black
                transition
                hover:bg-[#c9ff33]
              "
            >
              <FaRegCalendarPlus /> Add to today’s plan
            </button> 
        </div>
    );
};

export default AddtoPlanButton;