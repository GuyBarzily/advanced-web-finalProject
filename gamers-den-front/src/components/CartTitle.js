import { Typography } from "@mui/material";
import React from "react";

const CartTitle = (props) => {
  return (
    <Typography variant="h3">
      {"Hello " + props.name + " here is your shoping cart"}
    </Typography>
  );
};

export default CartTitle;
