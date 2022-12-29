import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Alert,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function SmallGame(props) {
  const [value, setValue] = useState(0);
  const [item, setItem] = useState("");
  const [addAlert, setAddAlert] = useState(false);
  const [faildAlert, setFailedAlert] = useState(false);

  const handleShopCartAdd = () => {
    console.log(item);
    // setAddAlert(true);
    // setTimeout(() => {
    //   setAddAlert(false);
    // }, 3000);
    setFailedAlert(true);
    setTimeout(() => {
      setFailedAlert(false);
    }, 3000);
  };

  const handleClick = () => {
    props.onClick(item);
  };

  useEffect(() => {
    setItem(props.item);
    setValue(props.item.rating);
  }, [props.item]);

  return (
    <div>
      <Card
        sx={{
          margin: "1vw",
          borderRadius: "15px",
        }}
      >
        <CardMedia
          component="img"
          image={item.thumbnail}
          title="small game"
          sx={{ cursor: "pointer" }}
          onClick={handleClick}
        />
        <CardContent>
          {item.title.length > 20 && (
            <Typography
              onClick={handleClick}
              gutterBottom
              variant="h6"
              component="div"
              sx={{ cursor: "pointer" }}
            >
              {item.title}
            </Typography>
          )}
          {item.title.length <= 20 && (
            <Typography
              onClick={handleClick}
              gutterBottom
              variant="h5"
              component="div"
              sx={{ cursor: "pointer" }}
            >
              {item.title}
            </Typography>
          )}

          <Typography variant="body2" color="text.secondary">
            {"Release date: " + item.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"Genre: " + item.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"Price: " + item.price + "$"}
          </Typography>
        </CardContent>
        <CardActions>
          <AddShoppingCartIcon
            sx={{ cursor: "pointer" }}
            onClick={handleShopCartAdd}
          />
          <Rating
            sx={{ paddingLeft: "1vw" }}
            name="simple-controlled"
            value={value}
            readOnly
          />
        </CardActions>
      </Card>
      {addAlert && <Alert severity="success">Item Added To Cart</Alert>}
      {faildAlert && <Alert severity="error">Item Allredy in Cart</Alert>}
    </div>
  );
}

export default SmallGame;
