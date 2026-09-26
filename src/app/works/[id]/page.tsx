import React from 'react';
import { IWorkType } from '@/app/types/WorkType';
import Image from 'next/image';

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
      <div className="mx-auto flex w-full max-w-[1050px] gap-5">

        {/* ================= LEFT IMAGE ================= */}
        <div className="w-[47%] shrink-0">
          <Image
          height={700}
          width={500}
            src={work.image}
            alt={work.name}
            className="h-[440px] w-full rounded-[5px] object-cover"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex-1">

          {/* Title */}
          <h1 className="text-[18px] font-extrabold uppercase leading-tight tracking-wide">
            {work.name}
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-[520px] text-[7px] leading-[1.6] text-[#858993]">
            {work.description}
          </p>

          {/* Tags */}
          <div className="mt-3 flex gap-1.5">
            {work.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-[4px] bg-[#baff00] px-2 py-[3px] text-[6px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= INFORMATION ================= */}
          <div className="mt-4 overflow-hidden rounded-[4px] border border-[#272a30] bg-[#15171c]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[6px] uppercase tracking-wide text-[#777b84]">
                Equipment
              </span>

              <span className="text-[6px] text-[#c1c4ca]">
                {work.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[6px] uppercase tracking-wide text-[#777b84]">
                Difficulty
              </span>

              <span className="text-[6px] text-[#c1c4ca]">
                {work.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[6px] uppercase tracking-wide text-[#777b84]">
                Sets
              </span>

              <span className="text-[6px] text-[#c1c4ca]">
                {work.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[6px] uppercase tracking-wide text-[#777b84]">
                Reps
              </span>

              <span className="text-[6px] text-[#c1c4ca]">
                {work.reps}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[6px] uppercase tracking-wide text-[#777b84]">
                Duration
              </span>

              <span className="text-[6px] text-[#c1c4ca]">
                {work.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#272a30] px-3 py-2">
              <span className="text-[6px] uppercase tracking-wide text-[#777b84]">
                Calories
              </span>

              <span className="text-[6px] text-[#c1c4ca]">
                {work.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-[6px] uppercase tracking-wide text-[#777b84]">
                Rating
              </span>

              <span className="text-[6px] text-[#c1c4ca]">
                {work.rating}
              </span>
            </div>

          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-5">

            <h2 className="text-[9px] font-extrabold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="mt-2 space-y-[5px]">
              {work.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-[6px] leading-[1.4] text-[#858993]"
                >
                  <span className="text-[#777b84]">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>

          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-5 flex gap-2">

            {/* Add to Work Plan */}
            <button
              className="
                rounded-[4px]
                bg-[#baff00]
                px-3
                py-2
                text-[6px]
                font-bold
                text-black
                transition
                hover:bg-[#c9ff33]
              "
            >
              + Add to today’s plan
            </button>

            {/* Save */}
            <button
              className="
                rounded-[4px]
                border
                border-[#34373d]
                bg-[#15171c]
                px-3
                py-2
                text-[6px]
                font-medium
                text-[#c1c4ca]
                transition
                hover:bg-[#1d2025]
              "
            >
              ☆ Save for later
            </button>

          </div>

        </div>
      </div>
    </div>   
        </div>
    );
};

export default WorkDetails;