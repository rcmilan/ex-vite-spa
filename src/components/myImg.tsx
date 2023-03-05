type Props = {
  src: string;
};

const Index = ({ src }: Props) => {
  const nextPercentage = 100;

  return (
    <img
      src={src}
      draggable="false"
      style={{
        width: "40vmin",
        height: "56vmin",
        objectFit: "cover",
        objectPosition: `${100 + nextPercentage}% center`,
        animationDuration: "1200ms",
        animationFillMode: "forwards",
      }}
    />
  );
};

export default Index;
