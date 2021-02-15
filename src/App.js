import { useEffect, useRef } from 'react';
import './App.css';
import albumCover from './images/album-cover.png';
import { ReactComponent as SimpleTree } from './images/simple-tree.svg';
import { ReactComponent as TrollFace } from './images/troll-face.svg';
import treezyClip from './media/treezy.mp3';
import doingItRuinItClip from './media/treezy-doing-it.mp3';

function App() {
  const trollFaceRef = useRef(null);
  const mainAudioPlayerRef = useRef(null);
  const treeAudioPlayerRef = useRef(null);

  useEffect(() => {
    if (mainAudioPlayerRef.current) {
      const currentAudioPlayerRef = mainAudioPlayerRef.current;
      currentAudioPlayerRef.addEventListener('ended', removeTransition);

      return () =>
        currentAudioPlayerRef.removeEventListener('ended', removeTransition);
    }
  }, []);

  const removeTransition = () => {
    trollFaceRef.current.classList.remove('rotate');
  };

  const handleTreeOrAlbumClick = () => {
    treeAudioPlayerRef.current.play();
  };

  const handleDownloadButtonClick = () => {
    mainAudioPlayerRef.current.play();
    trollFaceRef.current.classList.add('rotate');
  };

  return (
    <div className="app">
      <SimpleTree className="tree-logo" onClick={handleTreeOrAlbumClick} />
      <div className="hype-text">
        <span className="first-text">Long-awaited</span>
        <span className="second-text">Highly anticipated</span>
        <span className="third-text">Finally here!</span>
      </div>
      <div className="album-container">
        <TrollFace className="troll-face" ref={trollFaceRef} />
        <img
          src={albumCover}
          alt="Album Cover"
          className="album-cover"
          onClick={handleTreeOrAlbumClick}
        />
      </div>
      <button className="download-button" onClick={handleDownloadButtonClick}>
        DOWNLOAD
      </button>
      <audio ref={treeAudioPlayerRef} src={treezyClip} preload="true" />
      <audio ref={mainAudioPlayerRef} src={doingItRuinItClip} preload="true" />
    </div>
  );
}

export default App;
