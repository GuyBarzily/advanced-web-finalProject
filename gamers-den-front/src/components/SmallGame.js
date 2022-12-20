import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import AddIcon from "@mui/icons-material/Add";

function SmallGame(props) {
  const [value, setValue] = useState(2);
  const [item, setItem] = useState("");

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  return (
    <Card sx={{ minWidth: "10vw", margin: "2vw", maxBlockSize: "45vh" }}>
      <CardMedia component="img" image={item.thumbnail} title="small game" />
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
        <Button size="small">
          Add To List
          <AddIcon fontSize="small" />
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardActions
        sx={{
          alignSelf: "baseline-position",
          justifySelf: "baseline-position",
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </CardActions>
    </Card>
  );
}

export default SmallGame;
