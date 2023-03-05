import React, { useState } from "react";
import ImageTrackContext from "../context/index";

type Props = {
  children: JSX.Element[];
};

const calcNextPercentage = (perc: number) => Math.max(Math.min(perc, 0), -100);

const Index = ({ children }: Props) => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  function handleOnDown(e: React.MouseEvent) {
    setMouseDownAt(e.clientX);
  }

  function handleOnUp(e: React.MouseEvent) {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  }

  function handleOnMove(e: React.MouseEvent) {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const _percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + _percentage;
    const nextPercentage = calcNextPercentage(nextPercentageUnconstrained);

    setPercentage(nextPercentage);
  }

  const cssProps: React.CSSProperties = {
    display: "flex",
    gap: "4vmin",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: `translate(${percentage}%, -50%)`,
    animationDuration: "1200ms",
    animationFillMode: "forwards",
    userSelect: "none",
  };

  return (
    <div
      onMouseDown={handleOnDown}
      onMouseUp={handleOnUp}
      onMouseMove={handleOnMove}
      style={cssProps}
    >
      <ImageTrackContext.Provider value={percentage}>
        {children}
      </ImageTrackContext.Provider>
    </div>
  );
};

export default Index;
