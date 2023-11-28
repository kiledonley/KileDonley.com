import React from "react";

const NamePlate = () => {
  return (
    <div
      className="text-white mx-8 my-24 flex flex-col
 md:absolute md:top-1/2 md:my-0 md:ml-24 md:-translate-y-1/2 md:transform"
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
