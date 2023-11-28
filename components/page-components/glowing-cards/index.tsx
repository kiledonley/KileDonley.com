import React, { useState, useRef, useEffect } from "react";

interface CardData {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  glowColor: "green" | "purple" | "red";
}

const cardsData: CardData[] = [
  {
    title: "Lorem Ipsum",
    price: "$99.99",
    features: ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit"],
    ctaText: "Lorem Ipsum",
    glowColor: "green",
  },
  {
    title: "Dolor Sit",
    price: "$399.99",
    features: [
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
      "Ullamco laboris nisi ut aliquip",
    ],
    ctaText: "Dolor Sit",
    glowColor: "purple",
  },
  {
    title: "Amet Consectetur",
    price: "$999.99",
    features: [
      "Adipiscing elit, sed do eiusmod tempor",
      "Incididunt ut labore et dolore",
      "Magna aliqua, ut enim ad minim veniam",
      "Quis nostrud exercitation ullamco laboris",
    ],
    ctaText: "Amet Consectetur",
    glowColor: "red",
  },
];

const getMaskGradient = (x, y) => {
  const gradient = `radial-gradient(
    25rem 25rem at ${x}px ${y}px,
    #000 1%,
    transparent 50%
  )`;

  const cssProperties = {
    "-webkit-mask": gradient,
    mask: gradient,
  };

  return cssProperties;
};

const hslColors = {
  green: { hue: 165, saturation: 82.26, lightness: 51.3 },
  purple: { hue: 291.34, saturation: 95.9, lightness: 61.76 },
  red: { hue: 338.69, saturation: 100, lightness: 48.04 },
};

const createColorStyle = (color, isCta = false) => {
  const { hue, saturation, lightness } = color;
  const hsl = `${hue},${saturation}%,${lightness}%`;

  const hslaBackground = `hsla(${hsl}, ${isCta ? 1 : 0.15})`;
  const hslaBorder = `hsla(${hsl},1)`;
  const hslBoxShadow = `0 0 0 1px hsl(${hsl})`;

  if (isCta)
    return {
      backgroundColor: hslaBackground,
      boxShadow: hslBoxShadow,
    };

  return {
    backgroundColor: hslaBackground,
    borderColor: hslaBorder,
    boxShadow: hslBoxShadow,
  };
};

const ctaSharedStyles =
  "self-end mt-4 mb-2 text-center text-white bg-gray-900 p-3 rounded-lg text-base font-semibold";

const cardSharedStyles =
  "flex-grow flex basis-56 px-8 py-6 grid items-start gap-5 bg-[#2b2b2b] text-white border border-[#eceff133] rounded-xl";

const CardOverlay = ({ ctaText, color }) => (
  <div
    id="card-overlay"
    className={`card ${cardSharedStyles}`}
    style={createColorStyle(color)}
  >
    <div
      className={`row-span-full ${ctaSharedStyles}`}
      aria-hidden="true"
      style={createColorStyle(color, true)}
    >
      {ctaText}
    </div>
  </div>
);

const Overlay = (x, y) => (
  <div
    className="pointer-events-none absolute inset-0 flex select-none flex-wrap gap-10"
    style={getMaskGradient(x, y) as React.CSSProperties}
  >
    {cardsData.map((card, index) => (
      <CardOverlay
        key={`card_overlay_${index}`}
        ctaText={cardsData[index].ctaText}
        color={hslColors[card.glowColor]}
      />
    ))}
  </div>
);

const Card = ({ title, price, features, ctaText, index }) => {
  return (
    <div className={`card ${cardSharedStyles}`}>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{price}</p>
      <ul role="list" className="card__bullets">
        {features.map((feature, index) => (
          <li key={index} className="mt-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className={`card__cta ${ctaSharedStyles}`}>{ctaText}</button>
    </div>
  );
};

const GlowingCards = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const updateCursorPosition = (e) => {
      const x = e.clientX - containerRef.current.offsetLeft;
      const y = e.clientY - containerRef.current.offsetTop;

      setCursorPosition({ x: x, y: y });
    };

    document.body.addEventListener("pointermove", updateCursorPosition);

    return () =>
      document.body.removeEventListener("pointermove", updateCursorPosition);
  }, []);

  return (
    <div
      id="page"
      className="grid h-screen w-screen place-items-center bg-[#1e1e1e]"
    >
      <div id="page-container" className="margin-auto max-w-7xl">
        <h1 className="text-white mb-6 text-center text-6xl font-semibold">
          Glowing Card Demo
        </h1>
        <div className="relative" ref={containerRef}>
          <div className="flex flex-wrap gap-10">
            {cardsData.map((card, index) => (
              <Card key={`card_${index}`} {...card} index={index} />
            ))}
          </div>
          {Overlay(cursorPosition.x, cursorPosition.y)}
        </div>
      </div>
    </div>
  );
};

export default GlowingCards;
