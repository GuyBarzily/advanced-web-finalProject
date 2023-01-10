import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Rating,
  ButtonGroup,
  Alert,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

function Game(props) {
  const [item, setItem] = useState("");
  const [value, setValue] = useState(0);
  const [addAlert, setAddAlert] = useState(false);
  const [faildAlert, setFailedAlert] = useState(false);
  const [failedText, setFaildText] = useState("");

  const navigate = useNavigate();

  const doesExists = () => {
    let ret = props.user.cart.some((element) => {
      return JSON.stringify(element) === JSON.stringify(item);
    });
    return ret;
  };

  const handleAdd = () => {
    setAddAlert(true);
    setTimeout(() => {
      setAddAlert(false);
    }, 3000);
  };
  const handleFailed = () => {
    setFailedAlert(true);
    if (!props.user) {
      setFaildText("Log In Requierd");
    } else {
      setFaildText("Item Already In Cart");
    }

    setTimeout(() => {
      setFailedAlert(false);
    }, 3000);
  };

  const handleAddToCart = () => {
    console.log(props.user);
    if (props.user) {
      if (!doesExists()) {
        props.setUser({
          ...props.user,
          cart: [...props.user.cart, item],
        });
        handleAdd();
      } else {
        handleFailed();
      }
    } else {
      handleFailed();
    }
  };

  const handlePurchaseNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  useEffect(() => {
    setItem(props.game);
    setValue(props.game.rating);
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
      <Typography
        variant="h3"
        sx={{ fontFamily: "Segoe UI Symbol", paddingBottom: "2vh" }}
      >
        {item.title}
      </Typography>
      <Box sx={{ paddingBottom: "1vh", display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            alt=""
            src={item.thumbnail}
            style={{
              marginBottom: "5vh",
              borderRadius: "20px",
            }}
          />
          <Rating
            sx={{ paddingBottom: "2vh" }}
            name="simple-controlled"
            value={value}
            readOnly
          />
          <ButtonGroup sx={{ color: "Highlight" }} variant="contained">
            <Button onClick={handlePurchaseNow}>
              Purchase Now <CheckIcon sx={{ paddingLeft: "1vw" }} />
            </Button>
            <Button onClick={handleAddToCart}>Add To Cart </Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ paddingLeft: "2vw", paddingBottom: "2vh" }}>
          {item && item.short_description.length < 40 && (
            <Typography
              sx={{
                paddingBottom: "3vw",
                textAlign: "center",
                fontFamily: "fantasy",
              }}
              variant="h4"
            >
              {item.short_description}
            </Typography>
          )}
          {item && item.short_description.length >= 40 && (
            <Typography
              sx={{
                paddingBottom: "3vw",
                textAlign: "center",
                fontFamily: "fantasy",
              }}
              variant="h5"
            >
              {item.short_description}
            </Typography>
          )}

          <Typography sx={{}} variant="h6">
            {"Released: " + item.release_date}
          </Typography>
          <Typography variant="h6">{"Genre: " + item.genre}</Typography>

          <Typography variant="h6">
            {"Publisher : " + item.publisher}
          </Typography>
          <Typography variant="h6">
            {"Develper: : " + item.developer}
          </Typography>
          <Typography variant="h6">{"Price : " + item.price + "$"}</Typography>
        </Box>
      </Box>
      {addAlert && <Alert severity="success">Item Added To Cart</Alert>}
      {faildAlert && <Alert severity="error">{failedText}</Alert>}
    </Box>
  );
}

export default Game;
