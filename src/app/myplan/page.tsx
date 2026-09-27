"use client";

import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { WorkContext } from "../context/WorkContext";
import { PiFireSimpleFill } from "react-icons/pi";
import Image from "next/image";
import { Bounce , toast } from "react-toastify";

type SortType = "duration" | "calories" | "rating";

const MyPlan = () => {
    const { plan, setPlan, save, setSave } = useContext(WorkContext);

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
    const [sortBy, setSortBy] = useState<SortType>("duration");
    const [doneIds, setDoneIds] = useState<number[]>([]);

    const currentData = activeTab === "plan" ? plan : save;

    const works = useMemo(() => {
        return [...currentData].sort((a, b) => {
            if (sortBy === "duration") {
                return b.duration - a.duration;
            }

            if (sortBy === "calories") {
                return b.caloriesBurned - a.caloriesBurned;
            }

            if (sortBy === "rating") {
                return b.rating - a.rating;
            }

            return 0;
        });
    }, [currentData, sortBy]);

    const totalMinutes = works.reduce(
        (total, work) => total + work.duration,
        0
    );

    const totalCalories = works.reduce(
        (total, work) => total + work.caloriesBurned,
        0
    );

    const handleRemove = (id: number) => {
        if (activeTab === "plan") {
            setPlan((prev) =>
                prev.filter((work) => work.id !== id)
            );
        } else {
            setSave((prev) =>
                prev.filter((work) => work.id !== id)
            );
        }

        setDoneIds((prev) =>
            prev.filter((item) => item !== id)
        );

        toast.warn(`Exercise removed from plan`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    const handleDone = (id: number) => {
        setDoneIds((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            }

            return [...prev, id];
        });

        toast.success(`Exercise marked as done`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <div className="min-h-screen bg-[#0b0d10] px-3 py-6 text-white sm:px-4 sm:py-8">
            <div className="mx-auto max-w-5xl">

                <div className="mb-5">
                    <h1 className="text-xl font-bold uppercase tracking-wide sm:text-2xl">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-[10px] text-[#858993] sm:text-xs">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="mb-5 grid grid-cols-3 rounded-xl border border-[#252a32] bg-[#12151b]">

                    <div className="border-r border-[#252a32] px-2 py-4 sm:px-4 sm:py-5">
                        <p className="text-[9px] text-[#858993] sm:text-[10px]">
                            Exercises
                        </p>

                        <p className="mt-1 text-xl font-bold text-lime-400 sm:text-2xl">
                            {works.length}
                        </p>
                    </div>

                    <div className="border-r border-[#252a32] px-2 py-4 sm:px-4 sm:py-5">
                        <p className="text-[9px] text-[#858993] sm:text-[10px]">
                            Minutes
                        </p>

                        <p className="mt-1 text-xl font-bold sm:text-2xl">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="px-2 py-4 sm:px-4 sm:py-5">
                        <p className="text-[9px] text-[#858993] sm:text-[10px]">
                            Calories
                        </p>

                        <p className="mt-1 text-xl font-bold sm:text-2xl">
                            {totalCalories}
                        </p>
                    </div>

                </div>

                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex w-fit rounded-lg border border-[#252a32] bg-[#12151b] p-1">

                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`rounded-md px-3 py-2 text-[10px] font-medium transition sm:px-4 sm:text-[11px] ${
                                activeTab === "plan"
                                    ? "bg-[#20252d] text-white"
                                    : "text-[#858993] hover:text-white"
                            }`}
                        >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-md px-3 py-2 text-[10px] font-medium transition sm:px-4 sm:text-[11px] ${
                                activeTab === "saved"
                                    ? "bg-[#20252d] text-white"
                                    : "text-[#858993] hover:text-white"
                            }`}
                        >
                            Saved
                        </button>

                    </div>

                    <div className="flex items-center gap-2">

                        <span className="hidden text-[10px] text-[#858993] sm:block">
                            Sort By
                        </span>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(e.target.value as SortType)
                            }
                            className="w-full rounded-lg border border-[#252a32] bg-[#12151b] px-3 py-2 text-[10px] text-white outline-none sm:w-auto sm:text-[11px]"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>

                    </div>

                </div>

                <div className="space-y-3">

                    {works.length > 0 ? (
                        works.map((work, index) => {

                            const isDone = doneIds.includes(work.id);

                            return (
                                <div
                                    key={`${activeTab}-${work.id}-${index}`}
                                    className={`flex flex-col gap-3 rounded-xl border border-[#252a32] bg-[#12151b] p-3 transition sm:flex-row sm:items-center ${
                                        isDone ? "opacity-60" : ""
                                    }`}
                                >

                                    <Image
                                        height={80}
                                        width={140}
                                        src={work.image}
                                        alt={work.name}
                                        className="h-40 w-full rounded-lg object-cover sm:h-14 sm:w-24"
                                    />

                                    <div className="min-w-0 flex-1">

                                        <h2
                                            className={`text-xs font-bold uppercase ${
                                                isDone
                                                    ? "text-[#858993] line-through"
                                                    : "text-white"
                                            }`}
                                        >
                                            {work.name}
                                        </h2>

                                        <p className="mt-1 text-[10px] text-[#858993]">
                                            {work.equipment}
                                        </p>

                                        <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] sm:gap-3">

                                            <span className="text-lime-400">
                                                ◷ {work.duration} min
                                            </span>

                                            <span className="flex text-lime-400">
                                                <PiFireSimpleFill/> {work.caloriesBurned} kcal
                                            </span>

                                            <span className="text-lime-400">
                                                ★ {work.rating}
                                            </span>

                                        </div>

                                    </div>

                                    <div className="flex w-full shrink-0 items-center justify-end gap-2 sm:w-auto">

                                        <Link
                                            href={`/works/${work.id}`}
                                            className="hidden rounded-full border border-[#303744] px-4 py-2 text-[10px] text-white transition hover:bg-[#20252d] sm:block"
                                        >
                                            View Details
                                        </Link>

                                        <button
                                            onClick={() => handleDone(work.id)}
                                            className={`rounded-full px-3 py-2 text-[9px] font-semibold transition sm:px-4 sm:text-[10px] ${
                                                isDone
                                                    ? "bg-[#20252d] text-lime-400"
                                                    : "bg-lime-400 text-black hover:bg-lime-300"
                                            }`}
                                        >
                                            {isDone
                                                ? "✓ Done"
                                                : "✓ Mark as Done"}
                                        </button>

                                        <button
                                            onClick={() => handleRemove(work.id)}
                                            className="px-1 text-sm text-[#858993] transition hover:text-white"
                                            aria-label="Remove exercise"
                                        >
                                            ×
                                        </button>

                                    </div>

                                </div>
                            );
                        })
                    ) : (
                        <div className="flex min-h-62 flex-col items-center justify-center rounded-xl border border-dashed border-[#252a32] bg-[#0e1116] px-4 text-center">

                            <h2 className="text-sm font-bold">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-1 text-[10px] text-[#858993]">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/#Library"
                                className="mt-4 rounded-full bg-lime-400 px-5 py-2 text-[10px] font-bold text-black hover:bg-lime-300"
                            >
                                Go to workouts
                            </Link>

                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default MyPlan;
