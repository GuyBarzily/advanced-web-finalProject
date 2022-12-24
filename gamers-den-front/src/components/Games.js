import { Box, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import GamesTitle from "./GamesTitle";
import SmallGame from "./SmallGame";

function Games() {
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
    },
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
    },
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
    },
  ];

  return (
    <div style={{ marginTop: "5vh" }}>
      <GamesTitle />
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
          return <SmallGame key={index} item={game} />;
        })}
        {/* <SmallGame item={items[0]} />
        <SmallGame item={items[1]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[1]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[1]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[1]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[1]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[1]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[1]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[1]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[0]} />
        <SmallGame item={items[1]} />
        <SmallGame item={items[0]} /> */}
      </Box>
    </div>
  );
}

export default Games;
