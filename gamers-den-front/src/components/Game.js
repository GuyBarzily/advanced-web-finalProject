import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Rating, ButtonGroup } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Iframe from "react-iframe";

function Game(props) {
  const [item, setItem] = useState("");
  const [value, setValue] = useState(2);

  useEffect(() => {
    setItem(props.game);
  }, [props.game]);
  return (
    <Box
      sx={{
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>{item.title}</h1>
      <Box sx={{ paddingBottom: "1vh", display: "flex" }}>
        <Iframe
          url="https://cdn.akamai.steamstatic.com/steam/apps/256919601/movie480_vp9.webm?t=1670316051"
          width="500"
          height="284vh"
          id=""
          className=""
          display="block"
          position="relative"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={item.thumbnail}
            style={{
              height: "15vh",
              width: "20vw",
              paddingBottom: "2vh",
              borderRadius: "10px",
            }}
          />
          <Rating
            sx={{ paddingBottom: "2vh" }}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <ButtonGroup sx={{ color: "Highlight" }} variant="contained">
            <Button>
              Purchase Now <CheckIcon sx={{ paddingLeft: "1vw" }} />
            </Button>
            <Button>Add To Cart </Button>
          </ButtonGroup>
        </Box>
      </Box>

      <Box sx={{ paddingBottom: "2vh" }}>
        <Typography variant="h5">{item.short_description}</Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "space-around",
          display: "flex",
          paddingBottom: "1vh",
        }}
      >
        <Typography sx={{ textAlign: "left" }} variant="h6">
          {"Released: " + item.release_date}
        </Typography>
        <Typography variant="h6">{"Genre: " + item.genre}</Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "space-around",
          display: "flex",
          paddingBottom: "1vh",
        }}
      >
        <Typography variant="h6">{"Publisher : " + item.publisher}</Typography>
        <Typography variant="h6">{"Develper: : " + item.developer}</Typography>
      </Box>
    </Box>
  );
}

export default Game;
