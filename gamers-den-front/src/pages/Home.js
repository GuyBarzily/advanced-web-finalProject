import AppBarComponent from "../components/AppBar";
import MainGameComp from "../components/MainGameComp";
import Games from "../components/Games";
import React, { useEffect, useState } from "react";
import StickyFooter from "../components/Footer";

function Home(props) {
  const [cart, setCart] = useState([{ name: "guy" }]);
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#DDDDDD" }}>
      <AppBarComponent
        user={props.user}
        cart={cart.length}
        setUser={props.setUser}
      />
      <MainGameComp />
      <Games />
      <StickyFooter />
    </div>
  );
}

export default Home;
