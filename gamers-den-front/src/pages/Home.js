import AppBarComponent from "../components/AppBar";
import MainGameComp from "../components/MainGameComp";
import Games from "../components/Games";
import React, { useEffect, useState } from "react";
import Copyright from "../components/Copyright";

function Home(props) {
  const [cart, setCart] = useState([{ name: "guy" }]);
  return (
    <div style={{ backgroundColor: "#DDDDDD" }}>
      <AppBarComponent
        user={props.user}
        cart={cart.length}
        setUser={props.setUser}
      />
      <MainGameComp />
      <Games />
      <Copyright />
    </div>
  );
}

export default Home;
