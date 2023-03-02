import React from "react";

type Props = {
  children: JSX.Element[];
};

const Index = ({ children }: Props) => {
  return (
    <div id="image-track" data-mouse-down-at="0">
      {children}
    </div>
  );
};

export default Index;
