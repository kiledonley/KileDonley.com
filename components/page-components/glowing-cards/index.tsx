import React, { useState } from "react";

//-->
const GlowingCards = () => {
  // State
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Callbacks
  //   const applyOverlayMask = useCallback((e) => {
  //     const overlayEl = e.currentTarget;
  //     const x = e.pageX - card;
  //   }, []);

  // Child Components
  const renderCard = (title, buttonText, index) => {
    const colorVariants = [
      "bg-[hsla(165,82.26%,51.3%,0.15)] border-[hsla(165,82.26%,51.3%,1)]",
      "bg-[hsla(291.34,95.9%,61.76%,0.15)] border-[hsla(291.34,95.9%,61.76%,1)]",
      "bg-[hsla(338.69,100%,48.04%,0.15)] border-[hsla(291.34,95.9%,61.76%,0.15)]",
    ];

    return (
      <div
        className={`${colorVariants[index]} mx-4 flex h-80 w-96 flex-col justify-around rounded-3xl border border-white text-white `}
      >
        <span className="mx-auto flex-none">{title}</span>
        <button
          className="neutral-950 mx-auto  rounded-lg border border-white p-3"
          onClick={() => console.log("click")}
        >
          {buttonText}
        </button>
      </div>
    );
  };

  const renderOverlay = (cursorX, cursorY) => {
    // const mask = `radial-gradient(25rem 25rem at ${cursorX}px ${cursorY}px #000 1%, transparent 50%)`;

    const maskImage = `radial-gradient(25rem 25rem at ${cursorX}px ${cursorY}px, pink 100%, transparent 50%)`;

    return (
      <div
        id="render-overlay"
        style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}
        className={`[opacity: 1; transition: 400ms -webkit-mask-image ease, 400ms mask-image ease] select-non pointer-events-none absolute inset-0`}
      />
    );
  };

  return (
    <div
      onMouseMove={(e) => setCursorPosition({ x: e.clientX, y: e.clientY })}
      className="overflow-scroll-none overflow-none flex h-screen w-screen items-center justify-center bg-gray-200 bg-home-page-background bg-cover font-bold"
    >
      {renderCard("Here is a fun glowing effect", "Button Text", 0)}
      {renderCard("The Buttons Don't Work", "Button Text", 1)}
      {renderCard("This is just an example", "Button Text", 2)}
      {renderOverlay(cursorPosition.x, cursorPosition.y)}
    </div>
  );
};

export default GlowingCards;
