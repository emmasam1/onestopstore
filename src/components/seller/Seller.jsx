import React, { useState } from "react";
import apiRequest from "../../utils/apiRequest";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import { isEmpty } from "../../utils/validation/Validation";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
  width: "100%",
}));

const initialState = {
  store_name: "",
  phone: "",
  address: "",
  err: "",
  success: "",
};

const Seller = () => {
  const [seller, setSeller] = useState(initialState);
  // const user_id = localStorage.getItem("firstLogin");
  // console.log(user_id)

  const { store_name, phone, address, err, success } = seller;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setSeller({ ...seller, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(store_name) || isEmpty(phone) || isEmpty(address))
      return setSeller({
        ...seller,
        err: "Please fill in all fields.",
        success: "",
      });

    try {
      const res = await apiRequest.post("become_a_seller", {
        store_name,
        phone,
        address,
      });
      setSeller({...seller, err: "", success: res.data.msg})
      console.log(res)
    } catch (err) {
      err.response.data.msg &&
        setSeller({ ...seller, err: err.response.data.msg, success: "" });
    }
  };
  return (
    <Container>
      <Box
        sx={{
          ml: 0,
          mt: 5,
          width: { xs: "40", sm: "50%", md: "50%", lg: "50%" },
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form className="seller_form" onSubmit={handleSubmit}>
          <Box sx={{ pt: 6, pb: 3, textAlign: "center" }}>
            <Typography variant="h4" fontSize={25}>
              Become a seller
            </Typography>
          </Box>

          <Box>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
          </Box>

          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="on"
          >
            <TextField
              id="outlined-basic"
              label="Store name"
              variant="outlined"
              size="small"
              value={store_name}
              name="store_name"
              onChange={handleChangeInput}
            />
          </Box>

          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="on"
          >
            <TextField
              id="outlined-basic"
              label="Phone number"
              type="number"
              variant="outlined"
              size="small"
              value={phone}
              name="phone"
              onChange={handleChangeInput}
            />
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
              placeholder="Store addres"
              value={address}
              name="address"
              onChange={handleChangeInput}
              style={{ width: "98%", height: 100, resize: "none" }}
            />
          </Box>

          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
              position: "relative",
            }}
          >
            <ColorButton variant="contained" type="submit">
              Become a seller
            </ColorButton>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Seller;
