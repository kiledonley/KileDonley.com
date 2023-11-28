import React from "react";

const waveMask = `
    radial-gradient(42.27px at 50% 58.80px,#000 99%,#0000 101%) calc(50% - 48px) 0/96px 100%,
    radial-gradient(42.27px at 50% -34.8px,#0000 99%,#000 101%) 50% 24px/96px 100% repeat-x;
`;

const wavePeakMask = `
radial-gradient(43.27px at 50% calc(100% + 34.80px),#0000 calc(99% - 2px),#000 calc(101% - 2px) 99%,#0000 101%) calc(50% - 48px) calc(50% - 13px + .5px)/96px 26px repeat-x,
    radial-gradient(43.27px at 50% -34.8px,#0000 calc(99% - 2px),#000 calc(101% - 2px) 99%,#0000 101%) 50% calc(50% + 13px)/96px 26px repeat-x;
`;

const maskCssProperties = {
  "-webkit-mask": waveMask,
  mask: waveMask,
};

const maskPeakCssProperties = {
  "-webkit-mask": wavePeakMask,
  mask: wavePeakMask,
};

const Wave = ({ position }) => {
  return (
    <div className={`relative w-screen`} style={{ bottom: `${position}rem` }}>
      <div
        className="absolute bottom-0 h-20 w-full bg-blue-light"
        style={maskCssProperties}
      />
      <div
        className="bg-white absolute bottom-2 h-24 w-full"
        style={maskPeakCssProperties}
      />
    </div>
  );
};

export default Wave;
