import React, { useState, useEffect } from "react";

const Navabr = ({ onMenuClick }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Helper function to format date with suffix
  const formatDate = (date) => {
    const day = date.getDate();
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${day}${suffix} ${month} ${year}`;
  };

  return (
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4">
      <button
        className="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden"
        onClick={onMenuClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="ml-auto text-gray-600 text-md font-bold">
        {formatDate(dateTime)} {dateTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Navabr;
