import AppBarComponent from "../components/AppBar";
import MainGameComp from "../components/MainGameComp";
import Games from "../components/Games";
import React, { useEffect, useState } from "react";
import StickyFooter from "../components/Footer";

function Home(props) {
  useEffect(() => {
    // console.log(props.games);
  }, [props.games]);
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#DDDDDD" }}>
      <AppBarComponent user={props.user} cart="2" setUser={props.setUser} />
      <MainGameComp />
      <Games games={props.games} />
      <StickyFooter />
    </div>
  );
}

export default Home;
