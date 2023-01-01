import React, { useEffect, useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import SearchInput from "./SearchInput";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function GamesTitle(props) {
  const [genreSort, setGenreSort] = useState("All");
  const [platformSort, setPlatformSort] = useState("All");

  const handleChangeGenre = (event) => {
    setGenreSort(event.target.value);
    props.getBySort(event.target.value, platformSort);
  };

  const handleChangePlatfrom = (event) => {
    setPlatformSort(event.target.value);
    props.getBySort(genreSort, event.target.value);
  };

  useEffect(() => {}, []);
  return (
    <Box
      sx={{
        display: "inline-flex",
        justifyContent: "space-around",
        width: "90vw",
        paddingLeft: "2vw",
      }}
    >
      <SearchInput getByName={props.getByName} />
      <Box sx={{ minWidth: "20vw", display: "flex" }}>
        <FormControl fullWidth>
          <InputLabel id="sort-genre">By Genre</InputLabel>
          <Select
            labelId="select-genre"
            id="sort-genre"
            value={genreSort}
            label="By Genre"
            onChange={handleChangeGenre}
            MenuProps={MenuProps}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Shooter"}>Shooter</MenuItem>
            <MenuItem value={"Strategy"}>Strategy</MenuItem>
            <MenuItem value={"Action RPG"}>Action RPG</MenuItem>
            <MenuItem value={"Battle Royale"}>Battle Royale</MenuItem>
            <MenuItem value={"MMOARPG"}>MMOARPG</MenuItem>
            <MenuItem value={"Fighting"}>Fighting</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="sort-plattform">By Plattform</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="sort-select"
            value={platformSort}
            label="By Genre"
            onChange={handleChangePlatfrom}
            MenuProps={MenuProps}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"PC (Windows)"}>PC (Windows)</MenuItem>
            <MenuItem value={"Web Browser"}>Web Browser</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default GamesTitle;
