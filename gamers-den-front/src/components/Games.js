import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GameModal from "./GameModal";
import GamesTitle from "./GamesTitle";
import SmallGame from "./SmallGame";
import Circular from "./Circular";

function Games(props) {
  const [openGame, setOpenGame] = useState(false);
  const [modalItem, setModalItem] = useState("");
  const [items, setItems] = useState([]);

  const openModal = (item) => {
    setOpenGame(true);
    setModalItem(item);
  };
  const closeModal = () => {
    setOpenGame(false);
  };

  useEffect(() => {
    setItems(Object.values(props.games));
  }, [props.games]);

  return (
    <div
      style={{
        marginTop: "5vh",
        alignContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h3"
        style={{
          paddingBottom: "4vw",
          fontFamily: "Raleway",
          cursor: "pointer",
        }}
        onClick={() => {
          props.getAll();
        }}
      >
        Our Games
      </Typography>
      <GamesTitle
        getBySort={props.getBySort}
        setSortGenre={props.setSortGenre}
        setSortPlatform={props.setSortPlatform}
        getByName={props.getByName}
      />
      <GameModal open={openGame} setClose={closeModal} game={modalItem} />
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {!props.loading &&
          items.map((game, index) => {
            return <SmallGame key={index} item={game} onClick={openModal} />;
          })}
        {props.loading && <Circular />}
      </Box>
    </div>
  );
}

export default Games;
