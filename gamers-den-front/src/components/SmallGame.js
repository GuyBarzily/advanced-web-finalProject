import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function SmallGame(props) {
  const [value, setValue] = useState(2);
  const [item, setItem] = useState("");

  const handleClick = () => {
    console.log(item.title);
  };

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  return (
    <Card
      sx={{
        margin: "1vw",
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
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Release date: " + item.release_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Genre: " + item.genre}
        </Typography>
      </CardContent>
      <CardActions>
        <AddShoppingCartIcon />
        <Rating
          //  sx={{ paddingLeft: "5vw" }}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </CardActions>
      {/* <CardActions sx={{}}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </CardActions> */}
    </Card>
  );
}

export default SmallGame;
