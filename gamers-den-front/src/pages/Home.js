import AppBarComponent from "../components/AppBar";
import MainGameComp from "../components/MainGameComp";
import Games from "../components/Games";
import React, { useEffect, useState } from "react";
import StickyFooter from "../components/Footer";
import { getGames } from "../axios";
import Circular from "../components/Circular";

function Home(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const games = await getGames();
      setData(games);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#DDDDDD" }}>
      <AppBarComponent user={props.user} cart="2" setUser={props.setUser} />
      <MainGameComp />
      {!loading && <Games games={data} />}
      {loading && <Circular />}

      <StickyFooter />
    </div>
  );
}

export default Home;
