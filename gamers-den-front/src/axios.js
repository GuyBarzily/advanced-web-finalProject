import axios from "axios";

export const getGames = async (genre, platform) => {
  let data = {};
  if (genre !== "All") {
    data.genre = genre;
  }
  if (platform !== "All") {
    data.platform = platform;
  }

  const games = await axios.post("http://localhost:8080/getGames", data);
  return games.data;
};

export const gameByName = async (name) => {
  const games = await axios.post("http://localhost:8080/gameName", name);
  return games.data;
};
