import React from 'react';
import WorkCard from './WorkCard';
import { IWorkType } from '../types/WorkType';
import Link from 'next/link';


const getLibraryData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const LibraryCard = async () => {
    const libraryData = await getLibraryData();
    return (
        <div className='container mx-auto'>
            <h1 className="text-white text-[30px] font-bold">The Library</h1>
            <p className="text-white text-[14px] font-bold">Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {libraryData.map((work: IWorkType, index: number) =>{
                    return <Link key={index} href={`/works/${work.id}`}>
        <WorkCard work={work} />
      </Link>
                })}
            </div>
        </div>
    );
};

export default LibraryCard;