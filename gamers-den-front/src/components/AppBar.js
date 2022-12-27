import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Badge, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function AppBarComponent() {
  const [logedIn, setLogedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartValue, setCartValue] = useState(2);
  const [search, setSearch] = useState("");
  const open = Boolean(anchorEl);
  const openMenuHandle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event.currentTarget.id);
    setAnchorEl(null);
  };

  const handleSearch = () => {
    console.log(search);
    setSearch("");
  };

  return (
    <Box sx={{ flexGrow: 1 ,paddingBottom: "2vh"}}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(90deg, rgba(32,32,32,1) 0%, rgba(40,40,59,1) 61%, rgba(32,32,32,1) 100%);",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Gamers Den
          </Typography>
          <div style={{ paddingRight: "1vw" }}>
            <input
              style={{
                borderRadius: "10px",
                height: "3vh",
              }}
              type="text"
              id="lname"
              name="lname"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <Button
            size="small"
            sx={{
              color: "white",
              border: 1,
              borderRadius: "10px",
            }}
            onClick={handleSearch}
          >
            Submit
          </Button>

          {/* <TextField
            style={{ alignSelf: "center", outlineColor: "white" }}
            placeholder="search"
          ></TextField> */}
          {!logedIn && (
            <div style={{ paddingRight: "1vw", paddingLeft: "1vw" }}>
              <Badge color="secondary" badgeContent={cartValue}>
                <ShoppingCartIcon />
              </Badge>
            </div>
          )}

          <Button
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            color="inherit"
            onClick={openMenuHandle}
          >
            <AccountCircleIcon fontSize="large" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem id="profile" onClick={handleClose}>
              Profile
            </MenuItem>
            <MenuItem id="acount" onClick={handleClose}>
              My account
            </MenuItem>
            <MenuItem id="logIn" onClick={handleClose}>
              {!logedIn ? "Log In" : "Log Out"}
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarComponent;
