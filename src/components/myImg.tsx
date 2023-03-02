type Props = {
  src: string;
};

const Index = ({ src }: Props) => {
  return <img className="my-img" src={src} draggable="false" />;
};

export default Index;
