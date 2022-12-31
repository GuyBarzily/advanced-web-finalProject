import React, { useRef } from "react";
import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput(props) {
  const searchRef = useRef("Search Game");
  const handleSearch = (event) => {
    searchRef.current = event.target.value;
  };

  const submitSearch = (event) => {
    event.preventDefault();
    props.setNameSearch(searchRef.current);

    searchRef.current = "";
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
        ref={searchRef}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Games"
        inputProps={{ "aria-label": "search game" }}
        onChange={handleSearch}
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
