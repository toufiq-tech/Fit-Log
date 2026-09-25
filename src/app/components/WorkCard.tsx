import React from 'react';
import { IWorkType } from '../types/WorkType';
import Image from 'next/image';

interface IWorkCardProps {
    work: IWorkType;
}

const WorkCard = ({ work }: IWorkCardProps) => {
    return (
        <div className="w-full max-w-[470px] overflow-hidden rounded-[20px] border border-[#292d35] bg-[#15171c] text-white shadow-lg">

      {/* Image */}
      <div className="h-[230px] w-full overflow-hidden">
        <Image
          width={400}
          height={350}
          src={work.image}
          alt={work.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="px-7 py-7">

        {/* Muscle Groups */}
        <div className="mb-5 flex gap-2.5">
          {work.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#baff00] px-3 py-1 text-[13px] font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="mb-1 text-[23px] font-extrabold uppercase tracking-wide">
          {work.name}
        </h2>

        {/* Equipment */}
        <p className="text-[15px] text-[#858993]">
          {work.equipment}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-[#292d35]" />

        {/* Bottom Information */}
        <div className="flex items-center gap-5 text-[14px] text-[#9da2ad]">

          {/* Duration */}
          <div className="flex items-center gap-2">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            <span>{work.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.5 2.5c.4 3-1.3 4.6-2.7 6.1-1.2 1.3-2.2 2.5-2.2 4.4 0 1.4.7 2.6 1.8 3.4-.1-.4-.1-.8-.1-1.2 0-1.7 1-2.8 2.2-4.1.8 1.4 2.8 2.5 2.8 5 0 .8-.2 1.5-.6 2.2 1.8-.9 3-2.7 3-4.8 0-3.1-2.2-5.4-4.2-7.2z" />
            </svg>

            <span>{work.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 3.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.5z" />
            </svg>

            <span>{work.rating}</span>
          </div>

        </div>
      </div>
    </div>
    );
};

export default WorkCard;