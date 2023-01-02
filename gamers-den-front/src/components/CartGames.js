import React, { useEffect, useState } from "react";
import SmallGame from "./SmallGame";
import { Box } from "@mui/material";

function CartGames(props) {
  const [games, setGames] = useState([]);
  useEffect(() => {
    if (props.user) {
      setGames(props.user.cart);
    }
  }, [props.user]);
  return (
    <Box
      sx={{
        flexDirection: "row",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {props.user &&
        games.map((game, index) => {
          return (
            <SmallGame
              add={false}
              key={index}
              item={game}
              onClick={() => {}}
              setUser={props.setUser}
              user={props.user}
            />
          );
        })}
    </Box>
  );
}

export default CartGames;
