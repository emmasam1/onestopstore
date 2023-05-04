import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import SginIn from "./SignIn";
import { Outlet } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Auth() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} columns={16}>
        <Grid
          xs={8}
          sx={{
            height: "100vh",
            width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          }}
        >
          <Outlet />
        </Grid>
        <Grid
          xs={8}
          sx={{
            height: "100vh",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
          className="loginImage"
        ></Grid>
      </Grid>
    </Box>
  );
}
