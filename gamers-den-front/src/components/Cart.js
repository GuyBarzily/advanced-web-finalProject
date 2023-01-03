import React from "react";
import { Box, Button } from "@mui/material";
import CartTitle from "./CartTitle";
import AppBarComponent from "./AppBar";
import StickyFooter from "./Footer";
import CartGames from "./CartGames";
import CartTotal from "./CartTotal";
import { useNavigate } from "react-router-dom";
function Cart(props) {
  const navigate = useNavigate();
  return (
    <div>
      <AppBarComponent user={props.user} setUser={props.setUser} />
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          marginBottom: "5vh",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {props.user && (
          <>
            <CartTitle name={props.user.firstName} />
            <CartGames
              user={props.user}
              setUser={props.setUser}
              handleRemoveFromCart={props.handleRemoveFromCart}
            />
            <CartTotal user={props.user} />
            <Button
              variant="outlined"
              sx={{ marginBottom: "2vh" }}
              onClick={() => {
                navigate("/checkOut");
              }}
            >
              Check Out
            </Button>
          </>
        )}
      </Box>
      <StickyFooter />
    </div>
  );
}

export default Cart;
