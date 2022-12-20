import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function AppBarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <Button color="inherit">
            <AccountCircleIcon fontSize="large" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarComponent;
