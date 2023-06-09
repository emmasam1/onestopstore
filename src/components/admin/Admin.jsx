import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Admin = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2.4}>
          <Sidebar />
        </Grid>
        <Grid item xs={9.6}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;
