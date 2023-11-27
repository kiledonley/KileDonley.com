import React from "react";

const NamePlate = () => {
  return (
    <div
      className="text-white absolute top-1/2 ml-24
 flex -translate-y-1/2 transform flex-col"
    >
      <span className="mb-10 whitespace-nowrap text-4xl font-bold md:text-8xl">
        Hi, I'm Kile.
      </span>
      <span className="text-2xl md:text-4xl">
        I'm a web developer in Omaha, Nebraska
      </span>
    </div>
  );
};

export default NamePlate;
