"use client";

import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { WorkContext } from "../context/WorkContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { plan, save } = useContext(WorkContext);
  const pathname = usePathname();

  return (
    <div className="bg-gray-950 px-2 py-3 text-white sm:px-4">
      <div className="container mx-auto flex items-center justify-between gap-2 sm:gap-4">

        <div className="flex shrink-0 items-center space-x-1 sm:space-x-2">
          <Image
            src={Logo}
            alt="Logo"
            width={28}
            height={28}
            className="h-6 w-6 sm:h-7 sm:w-7"
          />
          <h1 className="text-xs font-medium sm:text-base">FitLog</h1>
        </div>

        <div className="flex items-center gap-1 text-xs sm:gap-2 sm:text-base">
          <Link
            href="/"
            className={`rounded-2xl px-2.5 py-1.5 sm:px-4 sm:py-2 ${
              pathname === "/"
                ? "text-lime-400"
                : "text-gray-300"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/myplan"
            className={`rounded-2xl px-2.5 py-1.5 sm:px-4 sm:py-2 ${
              pathname === "/myplan"
                ? "text-lime-400"
                : "text-gray-300"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 text-xs sm:gap-4 sm:text-base">
          <Link
            href="/myplan"
            className="flex items-center gap-1 sm:gap-2"
          >
            <span>Plan</span>
            <span className="rounded-full border bg-lime-300 px-1.5 py-0.5 text-gray-900 sm:px-2">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/myplan"
            className="flex items-center gap-1 sm:gap-2"
          >
            <span>Saved</span>
            <span className="rounded-full border border-gray-800 bg-gray-950 px-1.5 py-0.5 text-white sm:px-2">
              {save.length}
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;