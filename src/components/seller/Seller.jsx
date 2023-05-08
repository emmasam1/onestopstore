import React from "react";

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

const Seller = () => {
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
        <form className="seller_form">
        <Box sx={{ pt: 6, pb: 3, textAlign: "center" }}>
          <Typography variant="h4" fontSize={25}>
            Become a seller
          </Typography>
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
            Add Product
          </ColorButton>
        </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Seller;
