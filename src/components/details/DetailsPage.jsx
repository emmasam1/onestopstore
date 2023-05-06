import React, { useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";

import ImagePage from "./ImagePage";
import apiRequest from "../../utils/apiRequest";
import { store } from "../../context/Context";

export default function DetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const user_id = localStorage.getItem("firstLogin");
  const [, , , setCartCount] = useContext(store);

  const handleCart = async () => {
    user_id ? null : navigate("/authentication");
    product.quantity = 1;
    product?.product_id = product._id;
    product.user_id = user_id;
    try {
      await apiRequest.post("carts", product);
      toast.success("Item added to cart");

      apiRequest.get("get_cart_items").then((res) => {
        setCartCount(res.data[0].items);
      });
    } catch (err) {
      toast.error("Something went worng");
      console.log(err);
    }
  };

  return (
    <Container sx={{ pb: 10, mt: 3 }}>
      <Box sx={{ width: "100%" }}>
        <Box>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1 }}
          columns={{ xs: 1, sm: 1, md: 12 }}
        >
          <Grid xs={6}>
            <ImagePage product={product} />
          </Grid>
          <Grid xs={5}>
            <Typography
              variant="h6"
              color={grey[500]}
              fontSize={12}
              fontWeight="bold"
            >
              {product?.title}
            </Typography>
            <Typography variant="h6" fontSize={15} fontWeight="bold">
              {product.shortDescription}
            </Typography>

            <Typography
              variant="h6"
              color={grey[500]}
              fontSize={15}
              fontWeight="bold"
              sx={{ mt: 3 }}
            >
              &#8358;{product.price}
            </Typography>

            <Box
              className="box_color"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                p: 5,
              }}
            >
              <Tooltip title="Add to cart">
                <IconButton onClick={handleCart}>
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Share">
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </Tooltip>

              <Link to={`/check_out/${product._id}`}>
                <Button variant="contained" color="success" size="small">
                  Buy now
                </Button>
              </Link>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">Details</Typography>
              <Typography variant="body2" fontSize={12}>
                {product.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
     
    </Container>
  );
}
