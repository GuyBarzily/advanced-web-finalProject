import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

function GamesTitle() {
  const [sortBy, setSortBy] = useState("Featured");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "inline-flex",
        justifyContent: "space-between",
        width: "80vw",
        paddingLeft: "2vw",
      }}
    >
      <Typography variant="h4" style={{ marginLeft: "10vw" }}>
        Games by {sortBy}
      </Typography>
      <Box sx={{ minWidth: "10vw" }}>
        <FormControl fullWidth>
          <InputLabel id="sort-select">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="sort-select"
            value={sortBy}
            label="Sort"
            onChange={handleChange}
          >
            <MenuItem value={"Featured"}>Featured</MenuItem>
            <MenuItem value={"Release Date"}>Release Date</MenuItem>
            <MenuItem value={"Popularity"}>Popularity</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default GamesTitle;
