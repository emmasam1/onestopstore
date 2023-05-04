import React, { useState, useEffect } from "react";
import TextTruncate from "react-text-truncate";
import { RotatingLines } from "react-loader-spinner";

import apiRequest from "../../utils/apiRequest";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Posts = () => {
  const [products, setProducts] = useState();
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

  const handleDelete = async (_id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this item"
      );
      if (!confirmed) {
        return;
      }
      const res = await apiRequest.delete(`delProduct/${_id}`);

      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ width: "90%", margin: "auto" }}>
      <Box sx={{ pt: 5, pb: 2, textAlign: "center" }}>
        <Typography variant="h4" fontSize={25}>
          All products
        </Typography>
      </Box>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 4 }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: '100%',
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
          <>
            {products?.map((product) => {
              return (
                <Grid xs={3} key={product._id}>
                  <Card sx={{ maxWidth: 250, mb: 3, position: "relative" }}>
                    <CardMedia
                      sx={{ width: "100%", height: 150 }}
                      image={product.image.url}
                    />

                    <IconButton
                      sx={{ position: "absolute", top: 0, right: 0 }}
                      onClick={() => handleDelete(product._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontSize: "1rem", fontWeight: "500" }}
                      >
                        {product.title}
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
                      {/* <Link to="/details" className="link">
                <Button size="small">see details</Button>
              </Link> */}
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default Posts;
