import ImageTrack from "./components/imageTrack";
import MyImg from "./components/myImg";
import Mario from './assets/mario0.png';
import Luigi from './assets/luigi0.png';

function App() {
  return (
    <ImageTrack>
      <MyImg src={Mario}/>
      <MyImg src={Mario}/>
      <MyImg src={Luigi}/>
      <MyImg src={Mario}/>
      <MyImg src={Luigi}/>
      <MyImg src={Mario}/>
    </ImageTrack>
  );
}

export default App;
