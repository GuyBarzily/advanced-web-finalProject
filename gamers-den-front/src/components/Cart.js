import React from "react";
import { Box } from "@mui/material";
import CartTitle from "./CartTitle";
import AppBarComponent from "./AppBar";
import StickyFooter from "./Footer";
function Cart(props) {
  return (
    <div>
      <AppBarComponent user={props.user} setUser={props.setUser} />
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CartTitle name="Guy" />
      </Box>
      <StickyFooter />
    </div>
  );
}

export default Cart;
