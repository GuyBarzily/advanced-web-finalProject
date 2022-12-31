import AppBarComponent from "../components/AppBar";
import MainGameComp from "../components/MainGameComp";
import Games from "../components/Games";
import React, { useEffect, useState } from "react";
import StickyFooter from "../components/Footer";
import { getGames, gameByName } from "../axios";
import Circular from "../components/Circular";

function Home(props) {
  const [sortGenre, setSortGenre] = useState("All");
  const [sortPlatform, setSortPlatform] = useState("All");
  const [nameSearch, setNameSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const title = { title: { $regex: nameSearch, $options: "i" } };
      const games = await gameByName(title);
      setData(games);
      setLoading(false);
    };
    fetchData();
  }, [nameSearch]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const games = await getGames(sortGenre, sortPlatform);
      setData(games);
      setLoading(false);
    };
    fetchData();
  }, [sortGenre, sortPlatform]);
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#DDDDDD" }}>
      <AppBarComponent user={props.user} cart="2" setUser={props.setUser} />
      <MainGameComp />
      <Games
        games={data}
        loading={loading}
        setSortGenre={setSortGenre}
        setSortPlatform={setSortPlatform}
        setNameSearch={setNameSearch}
      />

      <StickyFooter />
    </div>
  );
}

export default Home;
