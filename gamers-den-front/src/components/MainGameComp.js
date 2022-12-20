import React from "react";
import Iframe from 'react-iframe'
import Box from "@mui/material/Box";
function MainGameComp() {
  return <section style ={{display: "flex", paddingLeft: "2vw", paddingTop: "3vh"}}>
    <div >        
      <iframe src="https://cdn.akamai.steamstatic.com/steam/apps/256919601/movie480_vp9.webm?t=1670316051"
          width="500vw"
          height="284vh"
          id=""
          className=""
          //display="block"
          //position="relative"
          />
    </div>
    <div style={{  display: "flex", flexDirection: "column", maxWidth: "20vw"}}>
      <img style={{maxHeight:"20vh"}}src="https://www.freetogame.com/g/516/thumbnail.jpg"></img>
      <p>pubgpubgpubgpubgpubgpubgpubgpubgpubg</p>
    </div>

    
    {/* <div style={{}}>
    <img src="https://www.freetogame.com/g/516/thumbnail.jpg"></img>
    </div> */}
    
  </section>;
}

export default MainGameComp;
