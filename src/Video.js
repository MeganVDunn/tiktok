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
        src="https://v16m-webapp.tiktokcdn-us.com/92b145184286a9e754aa01e5164ce6a6/62bb65ae/video/tos/useast5/tos-useast5-ve-0068c004-tx/d2af0a8f5d9b49bca8165e7c0443349b/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=560&bt=280&cs=0&ds=3&ft=ebtHKH-qMyq8Zd.B8we2N5Cyfl7Gb&mime_type=video_mp4&qs=0&rc=NWY1ZWRmNGY7aDg5ZDg5N0Bpam85eTs6Zjp2PDMzZzczNEA2NTU0NDVhXl8xMzYuLjUzYSMzZ2E2cjRvNTNgLS1kMS9zcw%3D%3D&l=202206281433400100040050060030000E16E45A"></video>
        
        <VideoFooter />
        <VideoSidebar />


    </div>


  )
}

export default Video;