import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function AppBarComponent(props) {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartValue, setCartValue] = useState(0);
  const navigate = useNavigate();
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

  const handleShopingCartClick = () => {
    navigate("/cart");
  };

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: "10vh" }}>
      <AppBar
        position="fixed"
        sx={{
          background:
            "linear-gradient(90deg, rgba(32,32,32,1) 0%, rgba(40,40,59,1) 61%, rgba(32,32,32,1) 100%);",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Raleway" }}
            onClick={() => navigate("/")}
          >
            The Gamers Den
          </Typography>

          {props.user && (
            <div style={{ paddingRight: "1vw", paddingLeft: "1vw" }}>
              <Badge color="secondary" badgeContent={props.user.cart.length}>
                <ShoppingCartIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleShopingCartClick}
                />
              </Badge>
              {props.user.isAdmin && (
                <Button
                  sx={{ paddingLeft: "1vw" }}
                  variant="text"
                  onClick={() => {
                    navigate("/admin");
                  }}
                >
                  Go to Admin
                </Button>
              )}
            </div>
          )}

          <Button
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            color="inherit"
            onClick={openMenuHandle}
          >
            {props.user && (
              <Avatar
                alt={props.user.firstName}
                src="/static/images/avatar/2.jpg"
                fontSize="large"
              />
            )}
            {!props.user && (
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
            {user && (
              <MenuItem id="logOut" onClick={handleClose}>
                {"Log Out"}
                <LogoutIcon sx={{ marginLeft: 1 }} />
              </MenuItem>
            )}
            {!user && (
              <MenuItem id="logIn" onClick={handleClose}>
                {"Log In"} <LoginIcon sx={{ marginLeft: 1 }} />
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarComponent;
