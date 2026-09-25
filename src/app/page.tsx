import React from 'react';
import Hero from '@/app/assets/banner.png'
import Image from 'next/image';
import LibraryCard from './components/LibraryCard';

const page = () => {
  return (
    <div className='bg-gray-950'>
      <div className='container mx-auto flex justify-between items-center py-20 bg-gray-800 rounded-3xl px-8'>
        <div>
          <p className='text-lime-400 text-[11px] font-bold'>Workout Library</p>
          <h1 className='text-white text-[50px] font-bold'>TRAIN WITH INTENT. LOG <br/> EVERY SET</h1>
          <p className='text-gray-300 py-8'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/>
             into today's plan, and watch the week's work add up.</p>
             <button className='bg-lime-400 hover:bg-lime-600 font-bold py-2 px-4 rounded'>Browse Workouts</button>
        </div>
        <div>
          <Image src={Hero} alt="Hero" width={334} height={334} />
        </div>
      </div>
      <LibraryCard />
    </div>
  );
};

export default page;