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

export const getCarouselGames = async () => {
  const games = await axios.post("http://localhost:8080/Carousel");
  return games.data;
};

export const getGroupBy = async (genre, platform) => {
  let sort = {};
  if (genre !== "All") {
    sort.genre = genre;
  }
  if (platform !== "All") {
    sort.platform = platform;
  }
  const data = { $match: sort };
  const games = await axios.post("http://localhost:8080/groupBy", data);
  let ret = [];
  games.data.forEach((sort) => {
    ret = [...ret, ...sort.games];
  });
  return ret;
};
