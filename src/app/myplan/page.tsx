'use client';

import React, { useContext } from 'react';
import { WorkContext } from '../context/WorkContext';

const MyPlan = () => {
    const {save, plan}=useContext(WorkContext);
    console.log('Saved works:', save);
    console.log('Planned works:', plan);
    return (
        <div className="bg-gray-950 p-4 text-white">
            <div className="container mx-auto p-4">
                <h1 className="text-[30px] font-bold">My Plan</h1>
            <p className="text-[14px] text-[#858993]">
                Cap of five lifts for today. Finish them, then load more.
            </p>
            </div>
            <div className="flex items-center justify-between gap-4 p-4 bg-gray-800 rounded-2xl">
                <div><h2 className="text-[16px] font-bold">Exercises</h2>
                <p className="text-[36px]">{plan.length}</p></div>
                <hr />
                <div><h2 className="text-[16px] font-bold">minutes</h2>
                <p className="text-[36px]">{plan.length}</p></div>
                <hr />
                <div><h2 className="text-[16px] font-bold">calories</h2>
                <p className="text-[36px]">{plan.length}</p></div>
            </div>
        </div>
    );
};

export default MyPlan;