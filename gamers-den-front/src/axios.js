import axios from "axios";

export const getGames = async () => {
  const games = await axios.post("http://localhost:8080/getGames", {});
  return games.data;
};
