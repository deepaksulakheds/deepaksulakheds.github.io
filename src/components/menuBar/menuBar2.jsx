import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import "./menuBar.css";

const pages = ["Home", "About", "Experience", "Education", "Skills"];

export function HorizontalMenu(props) {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#242424",
        height: "auto",
        borderRadius: "1vh",
      }}
    >
      <Container maxWidth={false}>
        <Toolbar>
          <Box sx={{ flexGrow: 0 }}>
            <Avatar variant="rounded" alt="The image" src="/deepak-1.jpg" />
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            marginLeft="20px"
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={props.handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={props.anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(props.anchorElNav)}
              onClose={props.handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  sx={{
                    ":hover": {
                      backgroundColor: "#242424",
                      color: "white",
                    },
                  }}
                  key={page}
                  onClick={() => props.pageHandler(index)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* -------------full phase/normal window phase--------------------------------------- */}

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            marginLeft="65px"
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => props.pageHandler(index)}
                sx={{
                  fontWeight: "Bold",
                  width: "auto",
                  margin: "0 2vw 0 0",
                  my: 2,
                  color: "white",
                  display: "block",
                  ":hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
