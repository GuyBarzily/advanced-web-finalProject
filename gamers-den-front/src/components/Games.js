import { Box, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import GameModal from "./GameModal";
import GamesTitle from "./GamesTitle";
import SmallGame from "./SmallGame";

function Games() {
  const [openGame, setOpenGame] = useState(false);
  const [modalItem, setModalItem] = useState("");
  const items = [
    {
      id: 508,
      title: "Enlisted",
      thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
      short_description:
        "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
      game_url: "https://www.freetogame.com/open/enlisted",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Gaijin Entertainment",
      developer: "Darkflow Software",
      release_date: "2021-04-08",
      freetogame_profile_url: "https://www.freetogame.com/enlisted",
      price: "10$",
    },
    {
      id: 516,
      title: "PUBG: BATTLEGROUNDS",
      thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
      short_description:
        "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
      game_url: "https://www.freetogame.com/open/pubg",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "KRAFTON, Inc.",
      developer: "KRAFTON, Inc.",
      release_date: "2022-01-12",
      freetogame_profile_url: "https://www.freetogame.com/pubg",
      price: "10$",
    },
    {
      id: 540,
      title: "Overwatch 2",
      thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
      short_description:
        "A hero-focused first-person team shooter from Blizzard Entertainment.",
      game_url: "https://www.freetogame.com/open/overwatch-2",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Activision Blizzard",
      developer: "Blizzard Entertainment",
      release_date: "2022-10-04",
      freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
      price: "free",
    },
    {
      id: 521,
      title: "Diablo Immortal",
      thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
      short_description:
        "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
      game_url: "https://www.freetogame.com/open/diablo-immortal",
      genre: "MMOARPG",
      platform: "PC (Windows)",
      publisher: "Blizzard Entertainment",
      developer: "Blizzard Entertainment",
      release_date: "2022-06-02",
      freetogame_profile_url: "https://www.freetogame.com/diablo-immortal",
      price: "20$",
    },
    {
      id: 517,
      title: "Lost Ark",
      thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg",
      short_description:
        "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
      game_url: "https://www.freetogame.com/open/lost-ark",
      genre: "ARPG",
      platform: "PC (Windows)",
      publisher: "Amazon Games",
      developer: "Smilegate RPG",
      release_date: "2022-02-11",
      freetogame_profile_url: "https://www.freetogame.com/lost-ark",
      price: "10$",
    },
  ];

  const openModal = (item) => {
    setOpenGame(true);
    setModalItem(item);
  };
  const closeModal = () => {
    setOpenGame(false);
  };

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
