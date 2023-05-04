import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import apiRequest from "../../utils/apiRequest";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import HomeIcon from "@mui/icons-material/Home";
import QueueIcon from "@mui/icons-material/Queue";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      const res = await apiRequest.get("logout");
      const confirmed = window.confirm("Are you sure you want to logout?");
      if (!confirmed) {
        return; 
      }
        navigate("/");
        localStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        background: "#293556",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
      }}
    >
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          textDecoration: "none",
          textAlign: "center",
          color: "white",
        }}
      >
        LOGO
      </Typography>
      <Container>
        <Box sx={{ mt: 4, mb: 4 }}>
          <NavLink to="/admin" className="link admin_link">
            {" "}
            <HomeIcon /> <Typography>Home</Typography>
          </NavLink>
        </Box>
        <Box sx={{ mb: 5 }}>
          <NavLink to="add_product" className="link admin_link">
            {" "}
            <QueueIcon />
            <Typography>Add Product</Typography>
          </NavLink>
        </Box>
        <Box sx={{ mb: 5 }}>
          <NavLink to="all_products" className="link admin_link">
            <Typography>View all Products</Typography>
          </NavLink>
        </Box>
        <Box sx={{ mb: 5 }}>
          <NavLink className="link admin_link" onClick={handleLogOut}>
            <Typography>
              <LogoutIcon />
              logout
            </Typography>
          </NavLink>
        </Box>
      </Container>
    </Box>
  );
};
export default Sidebar;
