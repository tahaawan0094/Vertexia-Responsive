"use client";

import React from "react";
import CountUp from "./CountUp";
import Link from "next/link";

interface TrustedUsersProps {
  avatars: string[];
  rating?: number;
  totalUsersText?: number;
  caption?: string;
  className?: string;
  starColorClass?: string;
  ringColors?: string[];
}

const Star = ({ className, fill, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill || "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

function cn(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export const TrustedUsers: React.FC<TrustedUsersProps> = ({
  avatars,
  rating = 5,
  totalUsersText = 1000,
  caption = "Trusted by",
  className = "",
  starColorClass = "text-[#ffb600]", // premium gold/yellow
  ringColors = [],
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-6 bg-transparent text-white py-4 px-4",
        className
      )}
    >
      {/* Avatars */}
      <div className="flex -space-x-3.5">
        {avatars.map((src, i) => (
          <div
            key={i}
            className={cn(
              "w-10 h-10 rounded-full overflow-hidden ring-2 ring-offset-2 ring-offset-[#030a4b] border border-white/10 shadow-lg transition-transform hover:scale-110 duration-200",
              ringColors[i] || "ring-blue-500"
            )}
          >
            <img
              src={src}
              alt={`Avatar ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Ratings & CountUp */}
      <div className="flex flex-col items-start gap-1">
        <div className={cn("flex gap-1", starColorClass)}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} fill="currentColor" className="w-4 h-4" aria-hidden="true" />
          ))}
        </div>
        <div className="text-white/80 text-xs md:text-sm font-medium flex items-center flex-wrap">
          <span>{caption}</span>
          <CountUp
            value={totalUsersText}
            duration={2}
            separator=","
            className="ml-1 text-[17px] font-extrabold text-blue-400"
            suffix="+"
            colorScheme="normal"
          />
          <Link href="/pricing" className="underline text-blue-400 hover:text-blue-300 ml-1.5 transition-colors font-semibold">
            Pro users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrustedUsers;
