import React, { useContext, useEffect, useState } from "react";
import apiRequest from "../../utils/apiRequest";
import { store } from "../../context/Context";
import { Link, useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { grey, orange, red, green } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CheckOut = () => {
  const [value, setValue] = useState("female");
  const [, , , , products, setProducts] = useContext(store);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [Shipping, setShipping] = useState(1200);
  const total = products?.price + Shipping;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const params = useParams();

  useEffect(() => {
    apiRequest
      .get(`oneProduct/${params.id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700],
    },
  }));

  const validateInputValues = () => {
    let errors = {};

    if (fullName.trim() === "") {
      errors.fullName = "Please enter full name";
    }

    if (phone === "") {
      errors.phone = "Phone number is required";
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (address === "") {
      errors.address = "Address is required";
    }

    return errors;
  };

  let errors = validateInputValues();

  const CheckOut = (e) => {
    e.preventDefault();
    console.log(errors);
    if (!Object.keys(errors).length) {
      handleOpen();
      setAddress("");
      setEmail("");
    }
  };

  // const test = () => {
  //   if(errors){

  //     console.log(errors)
  //   }
  //   else{
  //     setOpen(true)
  //   }
  // }

  return (
    <Container>
      <form onSubmit={CheckOut}>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="h6"
                  fontSize={14}
                  color={grey[500]}
                  fontWeight="bold"
                >
                  CHECKOUT
                </Typography>

                <Card sx={{ maxWidth: "100%", pl: 2, pr: 2 }}>
                  <CardContent>
                    <Box
                      sx={{
                        borderBottom: 1,
                        borderColor: "grey.200",
                        pb: 1,
                      }}
                    >
                      <Typography fontWeight="bold" fontSize={14} variant="h6">
                        SHIPPING ADDRESS
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "99%" },
                      }}
                      noValidate
                      autoComplete="on"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        size="small"
                        value={fullName}
                        onChange={handleFullNameChange}
                      />
                      {errors.fullName && (
                        <Typography fontSize={10} color={red[500]}>
                          {errors.fullName}
                        </Typography>
                      )}
                    </Box>

                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "99%" },
                      }}
                      noValidate
                      autoComplete="on"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        size="small"
                        onChange={handleEmailChange}
                        value={email}
                      />
                      {errors.email && (
                        <Typography fontSize={10} color={red[500]}>
                          {errors.email}
                        </Typography>
                      )}
                    </Box>

                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "99%" },
                      }}
                      noValidate
                      autoComplete="on"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        type="number"
                        variant="outlined"
                        size="small"
                        onChange={handlePhoneChange}
                        value={phone}
                      />
                      {errors.phone && (
                        <Typography fontSize={10} color={red[500]}>
                          {errors.phone}
                        </Typography>
                      )}
                    </Box>

                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "100%" },
                      }}
                      noValidate
                      autoComplete="on"
                    >
                      <TextareaAutosize
                        maxRows={8}
                        aria-label="maximum height"
                        placeholder="Address"
                        onChange={handleAddressChange}
                        value={address}
                        style={{ width: "98%", height: 100, resize: "none" }}
                      />
                      {errors.address && (
                        <Typography fontSize={10} color={red[500]}>
                          {errors.address}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </Card>

                <Card sx={{ maxWidth: "100%", pl: 2, pr: 2, mt: 2 }}>
                  <CardContent>
                    <Box
                      sx={{ borderBottom: 1, borderColor: "grey.200", pb: 1 }}
                    >
                      <Typography fontWeight="bold" fontSize={14} variant="h6">
                        DELIVERY METHOD
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      <Typography fontWeight="bold" fontSize={12} variant="h6">
                        How do you want your order delivered?
                      </Typography>
                    </Box>

                    <Box>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="Door Delivery"
                            control={<Radio size="small" />}
                            label="Door Delivery"
                          />
                          <Box sx={{ display: "flex", ml: 3.5 }}>
                            <Typography
                              color={grey[500]}
                              fontSize={12}
                              variant="h6"
                            >
                              Delivered between
                            </Typography>
                            &nbsp;
                            <Typography
                              fontSize={12}
                              variant="h6"
                              fontWeight="bold"
                            >
                              Monday
                            </Typography>
                            &nbsp;
                            <Typography
                              color={grey[500]}
                              fontSize={12}
                              variant="h6"
                            >
                              and
                            </Typography>{" "}
                            &nbsp;
                            <Typography
                              fontSize={12}
                              variant="h6"
                              fontWeight="bold"
                            >
                              Friday
                            </Typography>
                            &nbsp;
                            <Typography
                              fontSize={12}
                              variant="h6"
                              fontWeight="bold"
                            >
                              &#8358;1200
                            </Typography>
                            &nbsp;
                          </Box>

                          <Box
                            sx={{
                              border: 1,
                              borderColor: "grey.200",
                              ml: 3.5,
                              mt: 2,
                              height: 50,
                              p: 2,
                              mb: 2,
                            }}
                          >
                            <Typography
                              fontSize={10}
                              variant="h6"
                              fontWeight="bold"
                            >
                              * Large items may arrive 2 business days later
                              than other products.
                            </Typography>
                          </Box>
                          <FormControlLabel
                            value="Pickup at station"
                            control={<Radio size="small" />}
                            label="Pickup at station"
                          />

                          <Box sx={{ display: "flex", ml: 3.5 }}>
                            <Typography
                              color={grey[500]}
                              fontSize={12}
                              variant="h6"
                            >
                              Ready for pick up between
                            </Typography>
                            &nbsp;
                            <Typography
                              fontSize={12}
                              variant="h6"
                              fontWeight="bold"
                            >
                              Monday
                            </Typography>
                            &nbsp;
                            <Typography
                              color={grey[500]}
                              fontSize={12}
                              variant="h6"
                            >
                              and
                            </Typography>{" "}
                            &nbsp;
                            <Typography
                              fontSize={12}
                              variant="h6"
                              fontWeight="bold"
                            >
                              Friday
                            </Typography>
                            &nbsp;
                            <Typography
                              fontSize={12}
                              variant="h6"
                              fontWeight="bold"
                            >
                              Time 9am - 5pm
                            </Typography>
                            &nbsp;
                          </Box>
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </CardContent>
                </Card>

                <Card sx={{ maxWidth: "100%", pl: 2, pr: 2, mt: 2 }}>
                  <CardContent>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                            width: "100%",
                            mt: 2,
                            ml: 3.5,
                          }}
                        >
                          <Typography fontSize={12} fontWeight="bold">
                            Subtotal
                          </Typography>
                          <Typography fontSize={12} fontWeight="bold">
                            &#8358; {products.price}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex" }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                            width: "100%",
                            mt: 2,
                            ml: 3.5,
                          }}
                        >
                          <Typography fontSize={12} fontWeight="bold">
                            Shipping amount
                          </Typography>
                          <Typography fontSize={12} fontWeight="bold">
                            &#8358; {Shipping}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex" }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                            width: "100%",
                            mt: 2,
                            ml: 3.5,
                          }}
                        >
                          <Typography fontSize={12} fontWeight="bold">
                            Total
                          </Typography>
                          <Typography
                            fontSize={12}
                            fontWeight="bold"
                            color={orange[500]}
                          >
                            &#8358; {total}
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                          width: "100%",
                          mt: 2,
                          ml: 3.5,
                        }}
                      >
                        <ColorButton
                          variant="contained"
                          type="submit"
                          sx={{ width: "96%" }}
                          // onClick={test}
                        >
                          CHECKOUT
                        </ColorButton>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="h6"
                  fontSize={14}
                  color={grey[500]}
                  fontWeight="bold"
                >
                  ORDER SUMMARY
                </Typography>
              </Box>

              <Card sx={{ maxWidth: 345, pl: 2, pr: 2 }}>
                <Box sx={{ pt: 1, pl: 1, pb: 1 }}>
                  <Typography fontSize={14} variant="h6" fontWeight="bold">
                    YOUR ORDER SUMMARY
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: 1,
                    borderColor: "grey.200",
                    pt: 1,
                    pb: 1,
                  }}
                >
                  <Box sx={{ mr: 2, width: 260 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={products?.image?.url}
                      component="img"
                      // title="green iguana"
                    />
                  </Box>
                  <Box sx={{ pr: 2, display: "flex", flexDirection: "column" }}>
                    <Typography variant="body2" fontSize={12}>
                      Lizards are a widespread group of squamate reptiles,
                    </Typography>
                    <Typography
                      fontSize={12}
                      fontWeight="bold"
                      color={orange[500]}
                      sx={{ pt: 1 }}
                    >
                      &#8358; {products.price}
                    </Typography>
                    <Typography
                      fontSize={12}
                      fontWeight="bold"
                      color={grey[500]}
                      sx={{ pt: 1 }}
                    >
                      Qty: 1
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ borderTop: 1, borderColor: "grey.200" }}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        borderBottom: 1,
                        borderColor: "grey.200",
                        pb: 1,
                      }}
                    >
                      <Typography fontSize={12} fontWeight="bold">
                        Subtotal
                      </Typography>
                      <Typography fontSize={12} fontWeight="bold">
                        &#8358; {products.price}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography fontSize={12} fontWeight="bold">
                        Shipping amount
                      </Typography>
                      <Typography fontSize={12} fontWeight="bold">
                        &#8358; {Shipping}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardContent sx={{ borderTop: 1, borderColor: "grey.200" }}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography fontSize={12} fontWeight="bold">
                        Total
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontWeight="bold"
                        color={orange[500]}
                      >
                        &#8358; {total}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </form>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            CHECKED OUT SUCCESSFULLY
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <CheckCircleOutlineIcon sx={{ fontSize: 150, color: green[500] }} />
          </Box>
        <Link to="/">
          <ColorButton
            variant="contained"
            type="submit"
            sx={{ width: "96%" }}
            // onClick={test}
          >
            continue shopping
          </ColorButton>
        </Link>
        </Box>
      </Modal>
    </Container>
  );
};
export default CheckOut;
