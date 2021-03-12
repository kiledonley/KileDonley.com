import React, {useEffect, useState} from 'react';

import {DuckZoneContainer, Duck} from "./index.styles"


const DuckZone = ({}) => {
    const [duckArray, setDuckArray] = useState([]);
    var audio = typeof Audio != "undefined" ? new Audio('sfx_goose_honk_b_03.wav') : null;

    const handleClick = e => {
      setDuckArray(prevState => [...prevState, { x: e.clientX - 100, y: e.clientY - 100, imgSource: prevState.length == 2 ? "EntitledGoose.png" : "RubberDuckResource.png" }])
    };
  
    useEffect(() => {
        if(audio && duckArray.length == 3) audio.play() 
      }, [duckArray]);

    useEffect(() => {
      window.addEventListener("click", handleClick) 
      return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <DuckZoneContainer>
            {duckArray.map((item, index) => (
                <Duck key={index} src={item.imgSource} x={item.x} y={item.y}/>
            ))}
        </DuckZoneContainer>
    )
} 

export default DuckZone;