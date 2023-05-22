import React, { useState, useEffect, useContext } from "react";
import TextTruncate from "react-text-truncate";
import apiRequest from "../../utils/apiRequest";
import { store } from "../../context/Context";
import { ToastContainer, toast } from "react-toastify";

import { RotatingLines } from "react-loader-spinner";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { grey, orange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Cart() {
  const [item, setItem] = useState({});
  const user_id = localStorage.getItem("firstLogin");
  const [, , cartCount, setCartCount] = useContext(store);
  const [loading, setLoading] = useState(true);
  let single_product_total_price;

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700],
    },
  }));

  const increment = async (product) => {
   
    product.quantity = 1;
    product.user_id = user_id;
    
      if( user_id === null){
        navigate("/authentication")
      }
      else{
        try {
        await apiRequest.post("carts", product);
        apiRequest.get(`single/${user_id}`).then((res) => {
          setCartCount(res.data.items);
          setItem(res.data);
        });
      } catch (err) {
        console.log(err);
      }
      }
  };

  const decrement = async (product) => {
    user_id ? null : navigate("/authentication");
    product.quantity = -1;
    product.user_id = user_id;

    try {
      await apiRequest.post("carts", product);
      apiRequest.get(`single/${user_id}`).then((res) => {
        setCartCount(res.data.items);
        setItem(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiRequest
      .get(`single/${user_id}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const checkOut = async (item) => {
    // try {
    //  const res = await apiRequest.post('create-checkout-session', {item})
    //  console.log(res)
    // } catch (err) {
    //   console.log(err)
    console.log(item)
    // }
  }

  return (
    <Container sx={{ pt: 3, pb: 3 }}>
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
        <>
          {cartCount > 0 ? (
            <Box>
              <Typography variant="h1" fontWeight="bold" fontSize={25}>
                Cart
              </Typography>
              {item.products?.map((e) => (
                <Box key={e._id}>
                  <Container>
                    <Box sx={{ display: "flex", mt: 2 }}>
                      <Box>
                        <Typography
                          color={grey[500]}
                          fontWeight="bold"
                          fontSize={12}
                        >
                          ITEM
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            border: 1,
                            borderColor: "grey.200",
                          }}
                        >
                          <Box>
                            <CardMedia
                              sx={{ height: 70 }}
                              image={e.image.url}
                              component="img"
                              // title="green iguana"
                            />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              width: 400,
                              p: 2,
                            }}
                          >
                            <Typography
                              color={grey[500]}
                              fontWeight="bold"
                              fontSize={13}
                            >
                              {e.shortDescription}
                            </Typography>
                            <Typography
                              fontWeight="bold"
                              fontSize={13}
                              sx={{ mb: 1 }}
                            >
                              <TextTruncate
                                line={1}
                                element="span"
                                truncateText="…"
                                text={e.description}
                                // textTruncateChild={<p></p>}
                              />
                            </Typography>

                            {/* <Button
                          startIcon={<DeleteIcon size="small" />}
                          sx={{
                            width: 100,
                            color: "orange",
                            border: 0,
                            fontSize: 11,
                          }}
                        >
                          REMOVE
                        </Button> */}
                          </Box>
                        </Box>
                      </Box>
                      <Box>
                        <Container>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: 400,
                            }}
                          >
                            <Typography
                              color={grey[500]}
                              fontWeight="bold"
                              fontSize={12}
                            >
                              QUANTITY
                            </Typography>
                            <Typography
                              color={grey[500]}
                              fontWeight="bold"
                              fontSize={12}
                            >
                              UNIT PRICE
                            </Typography>
                            <Typography
                              color={grey[500]}
                              fontWeight="bold"
                              fontSize={12}
                            >
                              SUBTOTAL
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              border: 1,
                              borderColor: "grey.200",
                              display: "flex",
                              justifyContent: "space-between",
                              p: 1.7,
                            }}
                          >
                            <Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  width: 100,
                                  alignItems: "center",
                                  height: 55,
                                }}
                              >
                                <RemoveCircleOutlineIcon
                                  onClick={() => decrement(e)}
                                  className="cart_icon"
                                />
                                {e.quantity}

                                <AddCircleOutlineIcon
                                  onClick={() => increment(e)}
                                  className="cart_icon"
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={12} fontWeight="bold">
                                &#8358; {e.price}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                fontSize={12}
                                fontWeight="bold"
                                color={orange[200]}
                              >
                                &#8358;{" "}
                                {
                                  (single_product_total_price =
                                    e.price * e.quantity)
                                }
                              </Typography>
                            </Box>
                          </Box>
                        </Container>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            pl: 15,
                          }}
                        ></Box>
                      </Box>
                    </Box>
                  </Container>
                </Box>
              ))}
              <Container sx={{ width: "69%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                  }}
                >
                  <Box
                    sx={{
                      mt: 4,
                      display: "flex",
                      justifyContent: "space-between",
                      width: 248,
                    }}
                  >
                    <Typography fontSize={12} fontWeight="bold">
                      TOTAL
                    </Typography>
                    <Typography
                      fontSize={12}
                      fontWeight="bold"
                      color={orange[200]}
                    >
                      &#8358; {item.total_price}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <ColorButton
                      variant="contained"
                      type="submit"
                      sx={{ width: 250, mt: 2 }}
                      onClick={checkOut}
                    >
                      PROCEED TO CHECKOUT
                    </ColorButton>
                  </Box>
                </Box>
              </Container>
            </Box>
          ) : (
            <Box
              sx={{
                width: "100%",
                height: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" color={grey[500]}>
                No item in your cart
              </Typography>
            </Box>
          )}
        </>
      )}
    </Container>
  );
}

export default Cart;
