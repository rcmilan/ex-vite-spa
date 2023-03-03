import React, { useState } from "react";

type Props = {
  children: JSX.Element[];
};

const Index = ({ children }: Props) => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  function handleMouseDown(ev: React.MouseEvent) {
    setMouseDownAt(ev.clientX);
  }

  function handleMouseUp(ev: React.MouseEvent) {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  }

  function handleMouseMove(ev: React.MouseEvent) {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - ev.clientX;
    const maxDelta = window.innerWidth / 2;

    const _percentage = (mouseDelta / maxDelta) * -100;
    const _nextPercentage = Math.max(
      Math.min(prevPercentage + _percentage, 0),
      -100
    );

    setPercentage(_nextPercentage);
  }

  return (
    <div
      onMouseDown={(ev) => handleMouseDown(ev)}
      onMouseUp={(ev) => handleMouseUp(ev)}
      onMouseMove={(ev) => handleMouseMove(ev)}
      style={{
        display: "flex",
        gap: "4vmin",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(${percentage}%, -50%)`,
      }}
    >
      {children}
    </div>
  );
};

export default Index;
