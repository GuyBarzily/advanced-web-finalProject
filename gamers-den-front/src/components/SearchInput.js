import React, { useRef, useState } from "react";
import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput(props) {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    props.getByName(search);

    setSearch("");
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "15vw",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Games"
        inputProps={{ "aria-label": "search game" }}
        onChange={handleSearch}
        value={search}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={submitSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
