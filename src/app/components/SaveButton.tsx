'use client';

import React from 'react';
import { FaRegBookmark } from "react-icons/fa";

const SaveButton = () => {
    return (
        <div>
            <button
              className="
              flex items-center gap-1
                rounded-2xl
                border
                border-[#34373d]
                bg-[#15171c]
                px-3
                py-2
                text-[14px]
                font-medium
                text-white
                transition
                hover:bg-[#1d2025]
              "
            >
              <FaRegBookmark /> Save for later
            </button>
        </div>
    );
};

export default SaveButton;