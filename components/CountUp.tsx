"use client";

import React, { useEffect, useState } from "react";

interface CountUpProps {
  value: number;
  duration?: number; // in seconds
  separator?: string;
  className?: string;
  suffix?: string;
  colorScheme?: "gradient" | "normal";
}

export function CountUp({
  value,
  duration = 2,
  separator = ",",
  className = "",
  suffix = "",
  colorScheme = "normal",
}: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const endValue = value;
    const totalMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / totalMs, 1);
      const easeProgress = progress * (2 - progress); // ease-out quadratic
      const currentValue = Math.floor(easeProgress * endValue);
      setCount(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  if (colorScheme === "gradient") {
    return (
      <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-extrabold ${className}`}>
        {formattedCount}{suffix}
      </span>
    );
  }

  return (
    <span className={className}>
      {formattedCount}{suffix}
    </span>
  );
}

export default CountUp;
