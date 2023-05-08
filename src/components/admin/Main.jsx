import  React, {useEffect, useContext, useState} from "react";
import { store } from "../../context/Context";
import apiRequest from "../../utils/apiRequest";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {  orange, red, blue } from "@mui/material/colors";

import Grid from "@mui/material/Grid";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Usertbable from "./Usertbable";


const Main = () => {
  const [, , , , products, setProducts] = useContext(store);
  const [users, setUsers] = useState()

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <Box sx={{ flexGrow: 1, mb: 3}}>
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

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="users" value="1" />
            <Tab label="Sellers" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <Usertbable />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>

     
    </Container>
  );
};

export default Main;
