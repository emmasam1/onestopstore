import React, { useState, useContext } from "react";
import { store } from "../../context/Context";
import { Link } from "react-router-dom";
import apiRequest from "../../utils/apiRequest";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = [
  "Products",
  "Men section",
  "Women section",
  "Tech",
  "Auto mobile",
  "Gift card",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function FixedNav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [fixedNav, setFixedNav, cartCount] = useContext(store);

  const isIn = localStorage.getItem("firstLogin");
  const whoLoggedin = parseInt(localStorage.getItem("whoLoggedIn"));

  const changeNavbar = () => {
    if (window.scrollY >= 20) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = async () => {
    try {
      const res = await apiRequest.get("logout");
      localStorage.clear();
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppBar
      position={fixedNav ? "fixed" : "static"}
      style={{ backgroundColor: "rgb(12 12 12)", transition: "9s all" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {fixedNav ? "OSS" : null}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                {/* <Typography textAlign="center"> */}
                  <Link to="/" className="mobile_link">
                    Products
                  </Link>

                  <Link to='/' className="mobile_link">
                  Men section
                  </Link>

                  <Link to='/' className="mobile_link">
                  Women section
                  </Link>

                  <Link to='/' className="mobile_link">
                  Tech
                  </Link>

                  <Link to='/' className="mobile_link">
                  Auto mobile
                  </Link>

                  <Link to='/authentication' className="mobile_link">
                  Login
                  </Link>
                {/* </Typography> */}
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 10,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {fixedNav ? "OSS" : null}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-evenly",
              },
              pr: 10,
              pl: 10,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                className="hover"
                sx={{
                  my: 2,
                  color: "gray",
                  display: "block",
                  fontWeight: "700",
                }}
              >
                <Link to="/" className="nav_link">
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          {isIn ? (
            <>
              <Box
                sx={{
                  display: { xs: "flex" },
                  justifyContent: "space-between",
                  pt: 1,
                }}
              >
                {/* <Badge color="primary" badgeContent={10} max={9} sx={{ mr: 3 }}>
                  <EmailIcon sx={{ fontSize: 30 }} />
                </Badge> */}

                {whoLoggedin === 1 ? null : (
                  <Link to="/cart">
                    <Badge color="primary" badgeContent={10} max={cartCount}>
                      <ShoppingCartIcon sx={{ fontSize: 30 }} />
                    </Badge>
                  </Link>
                )}
              </Box>
              <Box sx={{ ml: 7 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 3 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/" className="link">
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/" className="link">
                      Dashboard
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/" className="link" onClick={handleLogOut}>
                      Logout
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : null}
          <Box
            sx={{ flexGrow: 0, mr: 4, display: { xs: "none", lg: "block" } }}
          >
            {isIn ? null : (
              <>
                <Link to="authentication" style={{ textDecoration: "none" }}>
                  <Button sx={{ color: "white", textTransform: "capitalize" }}>
                    Sgin in
                  </Button>
                </Link>
                |
                <Link
                  to="authentication/signup"
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={{ color: "white", textTransform: "capitalize" }}>
                    Register
                  </Button>
                </Link>
              </>
            )}
          </Box>
          {fixedNav ? (
            whoLoggedin === 1 ? (
              <Link to="/admin">
                <Button variant="contained" color="success">
                  go to dashboard
                </Button>
              </Link>
            ) : isIn ? (
              <Link to="become_a_seller">
                <Button variant="contained" color="success">
                  SELL
                </Button>
              </Link>
            ) : null
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default FixedNav;
