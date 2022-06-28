import React from 'react';
import './VideoFooter.css';

import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
          <h3>Title</h3>
          <p>Description</p>
          <div className="videoFooter_ticker">
            <MusicNoteIcon />
          </div>
      </div>
    </div>
  )
}

export default VideoFooter;