import AppBarComponent from "../components/AppBar";
import MainGameComp from "../components/MainGameComp";
import Games from "../components/Games";
import React, { useEffect, useState } from "react";
import StickyFooter from "../components/Footer";
import { getGames, gameByName, getGroupBy } from "../axios";
import ScrollToTop from "react-scroll-to-top";

function Home(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAll = async () => {
    setLoading(true);
    const games = await getGames();
    setData(games);
    setLoading(false);
  };
  const getByName = async (nameSearch) => {
    setLoading(true);
    const title = { title: { $regex: nameSearch, $options: "i" } };
    const games = await gameByName(title);
    setData(games);
    setLoading(false);
  };
  const getBySort = async (sortGenre, sortPlatform) => {
    setLoading(true);
    const games = await getGroupBy(sortGenre, sortPlatform);
    setData(games);
    setLoading(false);
  };

  useEffect(() => {
    getAll();
  }, [props.games]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#DDDDDD" }}>
      <AppBarComponent
        user={props.user}
        setUser={props.setUser}
        cart={props.cart}
      />
      <ScrollToTop smooth="true" />
      <MainGameComp user={props.user} />
      <Games
        games={data}
        loading={loading}
        setUser={props.setUser}
        user={props.user}
        getBySort={getBySort}
        getByName={getByName}
        getAll={getAll}
        handleAddToCart={props.handleAddToCart}
      />

      <StickyFooter />
    </div>
  );
}

export default Home;
