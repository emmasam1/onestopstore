import  React, {useEffect, useContext, useState} from "react";
import { store } from "../../context/Context";
import apiRequest from "../../utils/apiRequest";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {  orange, red, blue } from "@mui/material/colors";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Main = () => {
  const [, , , , products, setProducts] = useContext(store);
  const [users, setUsers] = useState()
  useEffect(() => {
    apiRequest
      .get("products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    apiRequest
      .get("users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Card sx={{ minWidth: 275, textAlign: 'center', background: blue[900], color: 'white' }}>
              <CardContent>
                <Typography sx={{ fontSize: 100 }} variant="h1">
                  {products.length}
                </Typography>
                <Typography sx={{ fontSize: 12 }} variant="body1">
                  NUMBER OF PRODUCTS 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
          <Card sx={{ minWidth: 275, textAlign: 'center', background: orange[900], color: 'white' }}>
              <CardContent>
                <Typography sx={{ fontSize: 100 }} variant="h1">
                  {users?.length}
                </Typography>
                <Typography sx={{ fontSize: 12 }} variant="body1">
                  NUMBER OF USERS 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
          <Card sx={{ minWidth: 275, textAlign: 'center', background: red[900], color: 'white' }}>
              <CardContent>
                <Typography sx={{ fontSize: 100 }} variant="h1">
                  {products.length}
                </Typography>
                <Typography sx={{ fontSize: 12 }} variant="body1">
                  NUMBER OF PRODUCTS 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Main;
