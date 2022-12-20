import AppBarComponent from "../components/AppBar";
import MainGameComp from "../components/MainGameComp";
import MainSortBar from "../components/MainSortBar";
import Games from "../components/Games";
import React from "react";

function Home() {
  return (
    <div>
      <AppBarComponent />
      <MainGameComp />
      <MainSortBar />
      <Games />
    </div>
  );
}

export default Home;
