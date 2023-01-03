import React, { useEffect, useState } from "react";
import { Alert, Box, Button, Divider, Typography } from "@mui/material";
import AppBarComponent from "../components/AppBar";
import CheckOutItem from "../components/CheckOutItem";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";
function CheckOut(props) {
  const [items, setItems] = useState([]);
  const [buyAlert, setBuyAlert] = useState(false);
  const navigate = useNavigate();

  const handleBuy = () => {
    let sum = 0;
    items.forEach((i) => {
      sum += i.price;
    });

    const date = new Date().toISOString();
    const purchase = {
      userID: props.user._id,
      cart: items,
      amount: sum,
      date: date,
    };
    setBuyAlert(true);
    setTimeout(() => {
      setBuyAlert(false);
      navigate("/");
    }, 2000);
    console.log(purchase);
  };
  useEffect(() => {
    if (props.user) {
      setItems(props.user.cart);
    }
  }, [props.user, items]);
  return (
    <div>
      <AppBarComponent user={props.user} setUser={props.setUser} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Check Out</Typography>
        <Box sx={{ width: "50vw" }}>
          {items.map((item, index) => {
            return <CheckOutItem key={index} game={item} />;
          })}
          <Divider />
        </Box>

        <CartTotal user={props.user} />
        <Button variant="outlined" onClick={handleBuy}>
          BUY
        </Button>
        {buyAlert && (
          <Alert severity="success">Thank you for your purchase</Alert>
        )}
      </Box>
    </div>
  );
}

export default CheckOut;
