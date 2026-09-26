'use client';
  
import React, { useContext } from 'react';
import { FaRegCalendarPlus } from "react-icons/fa";
import { WorkContext } from '../context/WorkContext';
import { IWorkType } from '../types/WorkType';

const AddtoPlanButton = ({work}:{work: IWorkType}) => {

  const {plan, setPlan} = useContext(WorkContext);

    const handleAddToPlan = () => {
      setPlan([...plan, work]);
      alert(`${work.name} has been added to your plan!`);
    };
    return (
        <div>
           <button
              className=" flex items-center gap-1 rounded-2xl bg-[#baff00] px-3   py-2 text-[14px] font-bold text-black transition hover:bg-[#c9ff33]"
              onClick={() => handleAddToPlan()}
            >
              <FaRegCalendarPlus /> Add to today’s plan
            </button> 
        </div>
    );
};

export default AddtoPlanButton;