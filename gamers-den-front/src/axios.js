import { async } from "@firebase/util";
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

export const addUser = async (data) => {
  const user = await axios.post("http://localhost:8080/addUser", data);
  return user.data;
};

export const getUser = async (userId) => {
  const data = { _id: userId };
  const user = await axios.post("http://localhost:8080/getUser", data);
  return user.data;
};

export const getAllUsers = async () => {
  const users = await axios.post("http://localhost:8080/getAllUsers");
  return users.data;
};

export const getCarouselGames = async () => {
  const games = await axios.post("http://localhost:8080/Carousel");
  return games.data;
};

export const getGroupBy = async (genre, platform, rating) => {
  let sort = {};
  if (genre !== "All") {
    sort.genre = genre;
  }
  if (platform !== "All") {
    sort.platform = platform;
  }
  if (rating !== "All") {
    sort.rating = rating;
  }
  const data = { $match: sort };
  const games = await axios.post("http://localhost:8080/groupBy", data);

  console.log(games.data);
  let ret = [];
  games.data.forEach((sort) => {
    ret = [...ret, ...sort.games];
  });
  return ret;
};

export const updateUser = async (user) => {
  const update = await axios.post("http://localhost:8080/updateUser", user);
  return update.data;
};

export const addGame = async (game) => {
  const newGame = await axios.post("http://localhost:8080/addGame", game);
  return newGame.data;
};

export const addPurchase = async (purchase) => {
  const user = await axios.post("http://localhost:8080/addPurchase", purchase);
  return user.data;
};

export const deleteGame = async (gameName) => {
  const game = await axios.post("http://localhost:8080/deleteGame", gameName);
  return game.data;
};
