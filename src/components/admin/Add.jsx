import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiRequest from "../../utils/apiRequest";

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

const Add = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [image, setImage] = useState([]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await apiRequest.post("product", {
        title,
        price,
        image,
        description,
        shortDescription,
      });
      if (data.data.success === true) {
        setTitle("");
        setPrice("");
        setImage("");
        setDescription("");
        setShortDescription("");
        toast.success("Product created successfully");
      }
      console.log(data.data);
    } catch (err) {
      toast.error("Can't send an empty product");
    }
  };

  return (
    <Box
      sx={{
        pl: 0,
        mt: 5,
        width: { xs: "40", sm: "50%", md: "50%", lg: "40%" },
        margin: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box sx={{ pt: 6, textAlign: "center" }}>
          <Typography variant="h4" fontSize={25}>
            Add a product
          </Typography>
        </Box>

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

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="on"
        >
          <TextField
            id="outlined-basic"
            label="Product Title"
            variant="outlined"
            size="small"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
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
            label="Product amount"
            type="number"
            variant="outlined"
            size="small"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            name="price"
          />
        </Box>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="on"
        >
          <input
            id="outlined-basic"
            type="file"
            variant="outlined"
            size="small"
            name="file"
            accept="image/"
            onChange={handleImage}
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
            placeholder="Short Discription"
            onChange={(e) => setShortDescription(e.target.value)}
            value={shortDescription}
            name="shortDescription"
            style={{ width: "98%", height: 40, resize: "none" }}
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
            placeholder="Discription"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
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
  );
};

export default Add;
