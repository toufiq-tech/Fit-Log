import React from 'react';
import { IWorkType } from '@/app/types/WorkType';
import WorkCard from '@/app/components/WorkCard';

const getWorks = async () => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
  const data = await res.json();
  return data;
}

const WorkSection = async () => {
  const libraryData = await getWorks();
  return (
    <div className='container mx-auto'>
            <h1 className="text-white text-[30px] font-bold">The Library</h1>
            <p className="text-white text-[14px] font-bold">Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {libraryData.map((work: IWorkType, index: number) =>{
                    return <WorkCard key = {index} work={work} />
                })}
            </div>
        </div>
  );
};

export default WorkSection;