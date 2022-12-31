import { Box, Alert } from "@mui/material";
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
    <div style={{ marginTop: "5vh" }}>
      <GamesTitle
        setSortGenre={props.setSortGenre}
        setSortPlatform={props.setSortPlatform}
        setNameSearch={props.setNameSearch}
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
