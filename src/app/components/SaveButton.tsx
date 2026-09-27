"use client";

import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IWorkType } from "../types/WorkType";
import { WorkContext } from "../context/WorkContext";
import { Bounce, toast } from "react-toastify";

const SaveButton = ({ work }: { work: IWorkType }) => {
  const { save, setSave } = React.useContext(WorkContext);

  const isSaved = save.some((item) => item.id === work.id);

  const handleSave = () => {
    if (isSaved) return;

    setSave((prev) => [...prev, work]);

    toast.success(`${work.name} has been saved for later!`, {
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
    <div>
      <button
        onClick={handleSave}
        disabled={isSaved}
        className={`flex items-center gap-1 rounded-2xl px-3 py-2 text-[14px] font-medium text-white transition ${
          isSaved
            ? "cursor-not-allowed bg-gray-500 opacity-50"
            : "hover:bg-[#1d2025] border border-gray-700"
        }`}
      >
        <FaRegBookmark />
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default SaveButton;