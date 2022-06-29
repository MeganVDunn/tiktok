import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
const [playing, setPlaying] = useState(false);
const videoRef = useRef(null);

const handleVideoPress = () => {
    if (playing) {
        videoRef.current.pause();
        setPlaying(false);
    } else {
        videoRef.current.play();
        setPlaying(true);
    }
    //if video is playing
    // stop it...

    //otherwise if it not playing
    //play it...
}

  return (
    <div className="video">
        <video 
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        src="https://v16m-webapp.tiktokcdn-us.com/a391204c0847a83f6916285a13f6f4e5/62bcafad/video/tos/useast5/tos-useast5-pve-0068-tx/76094cc840ab472db0b3c95037cec2e1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2778&bt=1389&cs=0&ds=3&ft=ebtHKH-qMyq8ZYqC7we2N3Uufl7Gb&mime_type=video_mp4&qs=0&rc=NTc0OTg0aDw0ZTdlOjtpOUBpanh3bTM6ZjNvPDMzZzczNEAuL140MTE2NjAxMTBeLV5eYSNhMWpicjRvYzJgLS1kMS9zcw%3D%3D&l=202206291401340100040030077350020530961F776"></video>
        
        <VideoFooter />
        <VideoSidebar />


    </div>


  )
}

export default Video;