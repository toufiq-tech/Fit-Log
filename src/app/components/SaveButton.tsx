'use client';

import React from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { IWorkType } from '../types/WorkType';
import { WorkContext } from '../context/WorkContext';

const SaveButton = ({work}: {work: IWorkType}) => {

    const {save, setSave} = React.useContext(WorkContext);

    const handleSave = () => {
        setSave([...save, work]);
        alert(`${work.name} has been saved for later!`);
    };

    return (
        <div>
            <button
              className="flex items-center gap-1 rounded-2xl  px-3  py-2 text-[14px] font-medium text-white transition hover:bg-[#1d2025]"
                onClick={() => handleSave()}
            >
              <FaRegBookmark /> Save for later
            </button>
        </div>
    );
};

export default SaveButton;