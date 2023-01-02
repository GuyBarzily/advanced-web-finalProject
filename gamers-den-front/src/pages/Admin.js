import React, { useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";

function Admin(props) {
  useEffect(() => {}, []);
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Hello admin</h1>
      <h2>Add new game:</h2>
      <Box
        component="form"
        sx={{
          width: "50vw",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Game Name"
            placeholder="Game Name"
          />
          <TextField
            required
            id="outlined-required"
            placeholder="Game Name"
            type="date"
          />
          <TextField
            required
            id="outlined-required"
            label="Game Name"
            placeholder="Game Name"
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="large" variant="contained">
              Send
            </Button>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default Admin;
