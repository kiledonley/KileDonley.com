import React from "react";

import Wave from "./wave";

const Ocean = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <Wave position={10} />
      <Wave position={8} />
      <Wave position={6} />
      <Wave position={4} />
      <Wave position={2} />
      <Wave position={0} />
      <Wave position={-2} />
    </div>
  );
};

export default Ocean;
