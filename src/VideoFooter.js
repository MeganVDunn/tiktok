import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
          <h3>Title</h3>
          <p>Description</p>
          <div className="videoFooter_ticker">
            <MusicNoteIcon 
            className="videoFooter_icon" />

            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p></p>
                </>
              )}
            </Ticker>
          </div>
      </div>
      <img
      className="videoFooter_record"
      src="https://pngimg.com/uploads/vinyl/small/vinyl_PNG101.png"
      alt="" 
      />
    </div>
  );
}

export default VideoFooter;