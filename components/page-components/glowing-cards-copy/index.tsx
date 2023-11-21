import React, { useCallback, useState, useRef, useEffect } from "react";
import "./style.css";

interface CardData {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
}

const cardsData: CardData[] = [
  {
    title: "Lorem Ipsum",
    price: "$99.99",
    features: ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit"],
    ctaText: "Lorem Ipsum",
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
  },
];
const CardOverlay = ({ ctaText }) => (
  <div id="card-overlay" className="card">
    <div className="cta" aria-hidden="true">
      {ctaText}
    </div>
  </div>
);

const Overlay = (cursorPosition) => (
  <div
    className="overlay cards__inner"
    style={
      {
        "--opacity": 1,
        "--x": `${cursorPosition.x}px`,
        "--y": `${cursorPosition.y}px`,
      } as React.CSSProperties
    }
  >
    {cardsData.map((card, index) => (
      <CardOverlay
        key={`card_overlay_${index}`}
        ctaText={cardsData[index].ctaText}
      />
    ))}
  </div>
);

const Card = ({ title, price, features, ctaText }) => {
  return (
    <div className="cards__card card">
      <h2 className="card__heading">{title}</h2>
      <p className="card__price">{price}</p>
      <ul role="list" className="card__bullets flow">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="card__cta cta">{ctaText}</button>
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
    <main className="main flow">
      <h1 className="main__heading">Glowing Card Demo</h1>
      <div className="main__cards cards" ref={containerRef}>
        <div className="cards__inner">
          {cardsData.map((card, index) => (
            <Card key={`card_${index}`} {...card} />
          ))}
        </div>
        {Overlay(cursorPosition)}
      </div>
    </main>
  );
};

export default GlowingCards;
