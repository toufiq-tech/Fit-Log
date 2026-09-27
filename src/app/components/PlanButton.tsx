"use client";

import React, { useContext } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { WorkContext } from "../context/WorkContext";
import { IWorkType } from "../types/WorkType";
import { Bounce, toast } from "react-toastify";

const AddtoPlanButton = ({ work }: { work: IWorkType }) => {
  const { plan, setPlan } = useContext(WorkContext);

  const isAdded = plan.some((item) => item.id === work.id);

  const handleAddToPlan = () => {
    if (isAdded) return;

    setPlan((prev) => [...prev, work]);

    toast.success(`${work.name} has been added to your plan!`, {
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
    <button
      disabled={isAdded}
      className={`flex items-center gap-1 rounded-2xl px-3 py-2 text-[14px] font-bold transition
        ${
          isAdded
            ? "cursor-not-allowed bg-gray-400 text-black opacity-50"
            : "bg-[#baff00] text-black hover:bg-[#c9ff33]"
        }`}
      onClick={handleAddToPlan}
    >
      <FaRegCalendarPlus />

      {isAdded ? "Added" : "Add to today’s plan"}
    </button>
  );
};

export default AddtoPlanButton;