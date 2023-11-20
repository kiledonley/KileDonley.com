import React from "react";

const NamePlate = () => {
  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
-translate-y-1/2 flex flex-col items-center font-serif text-gray-300 mix-blend-difference"
    >
      <span className="text-4xl md:text-8xl whitespace-nowrap">
        Kile Donley
      </span>
      <span className="text-2xl md:text-4xl whitespace-nowrap">
        Web Developer
      </span>
    </div>
  );
};

export default NamePlate;
