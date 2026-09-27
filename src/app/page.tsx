import React from 'react'; 
import Hero from '@/app/assets/banner.png' 
import Image from 'next/image'; 
import LibraryCard from './components/LibraryCard'; 
import Link from 'next/link'; 
 
const page = () => { 
  return ( 
    <div className='bg-gray-950 py-10'> 
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center py-10 md:py-20 bg-gray-800 rounded-3xl px-4 sm:px-6 md:px-8'> 
        <div className='w-full md:w-auto text-center md:text-left'> 
          <p className='text-lime-400 text-[11px] font-bold'>Workout Library</p> 
          <h1 className='text-white text-[32px] sm:text-[40px] md:text-[50px] font-bold'>TRAIN WITH INTENT. LOG <br/> EVERY SET</h1> 
          <p className='text-gray-300 py-6 md:py-8'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className='hidden md:block'/> 
             into today's plan, and watch the week's work add up.</p> 
             <Link href="#Library" className='bg-lime-400 hover:bg-lime-600 font-bold py-2 px-4 rounded'>Browse Workouts</Link> 
        </div> 
        <div className='mt-8 md:mt-0'> 
          <Image src={Hero} alt="Hero" width={334} height={334} className='w-[220px] sm:w-[280px] md:w-[334px] h-auto' /> 
        </div> 
      </div> 
      <LibraryCard /> 
    </div> 
  ); 
}; 
 
export default page;
