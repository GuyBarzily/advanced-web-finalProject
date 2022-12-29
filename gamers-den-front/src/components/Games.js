import { Box, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import GameModal from "./GameModal";
import GamesTitle from "./GamesTitle";
import SmallGame from "./SmallGame";

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
    console.log(Object.values(props.games)[0]);
    setItems(Object.values(props.games));
  }, [props.games]);

  return (
    <div style={{ marginTop: "5vh" }}>
      <GamesTitle />
      <GameModal open={openGame} setClose={closeModal} game={modalItem} />
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          p: 1,
          m: 1,
          borderRadius: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {items.map((game, index) => {
          return <SmallGame key={index} item={game} onClick={openModal} />;
        })}
      </Box>
    </div>
  );
}

export default Games;
