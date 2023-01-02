import React from "react";
import { Box } from "@mui/material";
import CartTitle from "./CartTitle";
import AppBarComponent from "./AppBar";
import StickyFooter from "./Footer";
import CartGames from "./CartGames";
import CartTotal from "./CartTotal";
function Cart(props) {
  return (
    <div>
      <AppBarComponent user={props.user} setUser={props.setUser} />
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",

          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {props.user && (
          <>
            <CartTitle name={props.user.firstName} />
            <CartGames user={props.user} setUser={props.setUser} />
            <CartTotal user={props.user} />
          </>
        )}
      </Box>
      <StickyFooter />
    </div>
  );
}

export default Cart;
