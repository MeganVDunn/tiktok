import React from 'react';
import './App.css';
import Video from "./Video";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app_videos">
        <Video url="https://v16m-webapp.tiktokcdn-us.com/a391204c0847a83f6916285a13f6f4e5/62bcafad/video/tos/useast5/tos-useast5-pve-0068-tx/76094cc840ab472db0b3c95037cec2e1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2778&bt=1389&cs=0&ds=3&ft=ebtHKH-qMyq8ZYqC7we2N3Uufl7Gb&mime_type=video_mp4&qs=0&rc=NTc0OTg0aDw0ZTdlOjtpOUBpanh3bTM6ZjNvPDMzZzczNEAuL140MTE2NjAxMTBeLV5eYSNhMWpicjRvYzJgLS1kMS9zcw%3D%3D&l=202206291401340100040030077350020530961F776"
        channel='graffitilion'
        description='Aries Sticker Pack'
        song='Dancing Queen'
        likes={123}
        messages={456}
        shares={789}
        />
         <Video url="https://v16m-webapp.tiktokcdn-us.com/54a0be54e034e65c4b4176f77f3e4e79/62bcafa6/video/tos/useast5/tos-useast5-pve-0068-tx/cd826dbdd406427fb053238800346ca8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=3928&bt=1964&cs=0&ds=3&ft=ebtHKH-qMyq8ZYqC7we2N3Uufl7Gb&mime_type=video_mp4&qs=0&rc=ZTo6aTg6NjZlZztkZzc3aEBpanY8ZTs6ZjVlPDMzZzczNEAzNjUuLV4vXzMxLWA2YS0wYSMyNDI2cjRnZzNgLS1kMS9zcw%3D%3D&l=202206291401340100040030077350020530961F776"
        channel='graffitilion'
        description='Aries Sticker Pack'
        song='Dancing Queen'
        likes={111}
        messages={222}
        shares={333}
        />
       
      </div>
      
      {/* app container */}
        {/* videos */}
        {/* Video */}
        {/* Video */} 
        {/* Video */} 
    </div>
  );
}

export default App;
