import { useRef } from 'react';
import './App.css';
import albumCover from './images/album-cover.png';
import treezyClip from './media/treezy.mp3';

function App() {
  const audioPlayerRef = useRef(null);

  const handleAlbumCoverEnter = () => {
    audioPlayerRef.current.play();
  };

  const handleAlbumCoverLeave = () => {
    audioPlayerRef.current.pause();
    audioPlayerRef.current.currentTime = 0;
  };

  return (
    <div className="app">
      <img
        src={albumCover}
        alt="Album Cover"
        className="album-cover"
        onMouseEnter={handleAlbumCoverEnter}
        onTouchStart={handleAlbumCoverEnter}
        onMouseLeave={handleAlbumCoverLeave}
        onTouchEnd={handleAlbumCoverLeave}
      />
      <audio ref={audioPlayerRef} src={treezyClip} />
    </div>
  );
}

export default App;
