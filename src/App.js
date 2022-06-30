import React from 'react';
import './App.css';
import Video from "./Video";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app_videos">
        <Video url="https://v16m-webapp.tiktokcdn-us.com/68de8428b75ae429614407ee94f3d405/62bdda21/video/tos/useast5/tos-useast5-pve-0068-tx/76094cc840ab472db0b3c95037cec2e1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2778&bt=1389&cs=0&ds=3&ft=ebtHKH-qMyq8ZKG27we2Nl3-fl7Gb&mime_type=video_mp4&qs=0&rc=NTc0OTg0aDw0ZTdlOjtpOUBpanh3bTM6ZjNvPDMzZzczNEAuL140MTE2NjAxMTBeLV5eYSNhMWpicjRvYzJgLS1kMS9zcw%3D%3D&l=20220630111458010004003007735002062000619F8"
        channel='graffitilion'
        description='Aries Sticker Pack'
        song='Dancing Queen'
        likes={123}
        messages={456}
        shares={789}
        />
         <Video url="https://v16m-webapp.tiktokcdn-us.com/95663e0cf835cec05528ac22833211e5/62bdda1a/video/tos/useast5/tos-useast5-pve-0068-tx/cd826dbdd406427fb053238800346ca8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=3928&bt=1964&cs=0&ds=3&ft=ebtHKH-qMyq8ZKG27we2Nl3-fl7Gb&mime_type=video_mp4&qs=0&rc=ZTo6aTg6NjZlZztkZzc3aEBpanY8ZTs6ZjVlPDMzZzczNEAzNjUuLV4vXzMxLWA2YS0wYSMyNDI2cjRnZzNgLS1kMS9zcw%3D%3D&l=20220630111458010004003007735002062000619F8"
        channel='graffitilion'
        description='Monster Sticker Pack'
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
