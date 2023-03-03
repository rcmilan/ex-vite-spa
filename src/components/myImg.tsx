type Props = {
  src: string;
};

const Index = ({ src }: Props) => {
  return (
    <img
      src={src}
      draggable="false"
      style={{
        width: "40vmin",
        height: "56vmin",
        objectFit: "cover",
        objectPosition: "100% center",
      }}
    />
  );
};

export default Index;
