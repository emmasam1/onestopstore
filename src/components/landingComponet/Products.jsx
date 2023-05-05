import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { store } from "../../context/Context";
import apiRequest from "../../utils/apiRequest";
import Slider from "../imageSlider/Slider";

import { RotatingLines } from "react-loader-spinner";

import ontime from "../../assets/images/ontime.jpg";
import online from "../../assets/images/online.jpg";
import img_store from "../../assets/images/store.jpg";
import s from "../../assets/images/s.jpg";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function Products() {
  const [, , , , products, setProducts] = useContext(store);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiRequest
      .get("products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 1, height: 395}}>
        <Box sx={{ flexGrow: 1, p: 0 }}>
          <Grid container spacing={1} sx={{ height: 400 }}>
            <Grid xs sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                component="img"
                alt="Slider"
                src={img_store}
                sx={{ height: 191, width: "100%", mb: 1 }}
              ></Box>

              <Box
                component="img"
                alt="Slider"
                src={online}
                sx={{ height: 191, width: "100%" }}
              ></Box>
            </Grid>
            <Grid xs={7}>
              <Slider />
            </Grid>
            <Grid xs sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                component="img"
                alt="Slider"
                src={s}
                sx={{ height: 191, width: "100%", mb: 1 }}
              ></Box>

              <Box
                component="img"
                alt="Slider"
                src={ontime}
                sx={{ height: 191, width: "100%" }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container sx={{ mt: 5, mb: 3 }}>
        <Typography
          variant="h4"
          fontSize={25}
          fontWeight="bold"
          className="product_heading"
          sx={{ mb: 4 }}
        >
          Products
        </Typography>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 3,
              height: 200,
            }}
          >
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 18, md: 24 }}>
              {products.map((product) => {
                return (
                  <Grid xs={6} key={product._id}>
                    <Card>
                      <CardMedia
                        sx={{ width: "100%", height: 250 }}
                        image={product.image.url}
                        component="img"
                        // title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <TextTruncate
                            line={1}
                            element="span"
                            truncateText="…"
                            text={product.title}
                            // textTruncateChild={<p></p>}
                          />
                        </Typography>

                        <TextTruncate
                          line={1}
                          element="span"
                          truncateText="…"
                          text={product.shortDescription}
                          // textTruncateChild={<p></p>}
                        />
                      </CardContent>
                      <CardActions sx={{ justifyContent: "space-between" }}>
                        <Typography variant="h6" fontSize={15}>
                          &#8358;{product.price}
                        </Typography>
                        <Link
                          to="details"
                          state={{ product }}
                          className="link"
                        >
                          <Button size="small">see details</Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}
      </Container>
    </>
  );
}

export default Products;
