import React, { useEffect, useState } from "react";

import { DuckZoneContainer, Duck } from "./index.styles";

const DuckZone = ({}) => {
  const [duckArray, setDuckArray] = useState([]);

  const handleClick = (e) => {
    setDuckArray((prevState) => [
      ...prevState,
      {
        x: e.clientX - 100,
        y: e.clientY - 100,
        imgSource: "RubberDuckResource.png",
      },
    ]);
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <DuckZoneContainer>
      {duckArray.map((item, index) => (
        <Duck key={index} src={item.imgSource} x={item.x} y={item.y} />
      ))}
    </DuckZoneContainer>
  );
};

export default DuckZone;
