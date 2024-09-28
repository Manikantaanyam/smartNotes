import React from "react";

const FeatureCard = ({ path, title, description }) => {
  return (
    <div className="w-[33%] pt-12 flex flex-col items-center justify-center gap-y-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.0"
        stroke="currentColor"
        className="w-8 h-8 "
      >
        <path stroke-linecap="round" stroke-linejoin="round" d={path} />
      </svg>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-600 max-w-[300px] text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
