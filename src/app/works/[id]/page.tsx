import React from 'react';
import { IWorkType } from '@/app/types/WorkType';
import Image from 'next/image';
import AddtoPlanButton from '@/app/components/PlanButton';
import SaveButton from '@/app/components/SaveButton';

interface IWorkDetailsProps {
    params: {
        id: string;
    };
}
const getWorkDetails = async () => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
    const data = await res.json();
    return data;
}

const WorkDetails = async ({params} : IWorkDetailsProps) => {

    const { id } = await params;
    const workData = await getWorkDetails();
    const work = workData.find((work: IWorkType) => String(work.id) === String(id)) as IWorkType;
    
    return (
        <div>
            <div className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white">
      <div className="mx-auto flex w-full max-w-265 gap-5">

        <div className="w-[47%] shrink-0">
          <Image
          height={700}
          width={500}
            src={work.image}
            alt={work.name}
            className="h-110 w-full rounded-[5px] object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-[36px] font-extrabold uppercase leading-tight tracking-wide">
            {work.name}
          </h1>
          <p className="mt-2 max-w-130 text-[16px] leading-[1.6] text-[#858993]">
            {work.description}
          </p>
          <div className="mt-3 flex gap-1.5">
            {work.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-lg bg-[#baff00] px-2 py-1 text-[12px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>
          <div className="mt-4 overflow-hidden rounded-smborder border-[#272a30] bg-[#15171c]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[14px] text-bold uppercase tracking-wide text-[#777b84]">
                Equipment
              </span>

              <span className="text-[14px] text-[#c1c4ca]">
                {work.equipment}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[14px] text-bold uppercase tracking-wide text-[#777b84]">
                Difficulty
              </span>

              <span className="text-[14px] text-[#c1c4ca]">
                {work.difficulty}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[14px] text-bold uppercase tracking-wide text-[#777b84]">
                Sets
              </span>

              <span className="text-[14px] text-[#c1c4ca]">
                {work.sets}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[14px] text-bold uppercase tracking-wide text-[#777b84]">
                Reps
              </span>

              <span className="text-[14px] text-[#c1c4ca]">
                {work.reps}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[14px] text-bold uppercase tracking-wide text-[#777b84]">
                Duration
              </span>

              <span className="text-[14px] text-[#c1c4ca]">
                {work.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[14px] uppercase tracking-wide text-[#777b84]">
                Calories
              </span>

              <span className="text-[14px] text-[#c1c4ca]">
                {work.caloriesBurned} kcal
              </span>
            </div>
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-[14px] uppercase tracking-wide text-[#777b84]">
                Rating
              </span>

              <span className="text-[14px] text-[#c1c4ca]">
                {work.rating}
              </span>
            </div>

          </div>
          <div className="mt-5">

            <h2 className="text-[16px] font-extrabold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="mt-2 space-y-1">
              {work.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-[14px] leading-[1.4] text-[#858993]"
                >
                  <span className="text-[#777b84]">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>

          </div>
          <div className="mt-5 flex gap-2">

            <AddtoPlanButton />
            <SaveButton />

          </div>

        </div>
      </div>
    </div>   
        </div>
    );
};

export default WorkDetails;