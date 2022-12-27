import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Badge, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function AppBarComponent(props) {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartValue, setCartValue] = useState(0);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const open = Boolean(anchorEl);
  const openMenuHandle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    const id = event.currentTarget.id;
    if (id === "logIn") {
      navigate("/sign-in");
    } else if (id === "logOut") {
      props.setUser(null);
      setUser(null);
    }
    setAnchorEl(null);
  };

  const handleSearch = () => {
    console.log(search);
    setSearch("");
  };

  const handleShopingCartClick = () => {
    console.log("shoping cart pressed");
  };

  useEffect(() => {
    setUser(props.user);
    setCartValue(props.cart);
  }, [props.user]);

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: "2vh" }}>
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

          {user && (
            <div style={{ paddingRight: "1vw", paddingLeft: "1vw" }}>
              <Badge color="secondary" badgeContent={cartValue}>
                <ShoppingCartIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleShopingCartClick}
                />
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
            {user && (
              <Avatar
                alt={user.email}
                src="/static/images/avatar/2.jpg"
                fontSize="large"
              />
            )}
            {!user && (
              <Avatar
                alt=""
                src="/static/images/avatar/2.jpg"
                fontSize="large"
              />
            )}
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
            {user && (
              <MenuItem id="logOut" onClick={handleClose}>
                Log Out
              </MenuItem>
            )}
            {!user && (
              <MenuItem id="logIn" onClick={handleClose}>
                Log In
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarComponent;
