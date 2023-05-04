import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../../utils/validation/Validation";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import google from "../../assets/google.svg";
import apiRequest from "../../utils/apiRequest";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
  width: "100%",
}));

const initialState = {
  name: "",
  email: "",
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [pwd2, setPwd2] = useState(false);
  const handleRetypePass = () => setPwd2((show) => !show);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [user, setUser] = useState(initialState);

  const { name, email, password, cf_password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(name) || isEmpty(password))
      return setUser({
        ...user,
        err: "Please fill in all fields.",
        success: "",
      });

    if (!isEmail(email))
      return setUser({ ...user, err: "Invalid emails.", success: "" });

    if (isLength(password))
      return setUser({
        ...user,
        err: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setUser({ ...user, err: "Password did not match.", success: "" });

    try {
      const res = await apiRequest.post("register", {
        name,
        email,
        password,
      });

      setUser({ ...user, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <Container sx={{ width: "100%", position: "relative" }}>
      <Box
        sx={{
          borderRadius: "50%",
          background: "lightgray",
          height: 35,
          width: 35,
          position: "absolute",
          left: 20,
          top: 20,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/" className="link">
          <NavigateBeforeIcon />{" "}
        </Link>
      </Box>
      <form onSubmit={handleSubmit}>
        <Container
          sx={{ pl: 0, width: { xs: "40", sm: "50%", md: "70%", lg: "50%" } }}
        >
          <Box
            sx={{
              textAlign: "center",
              pt: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" fontWeight="bold" fontSize={40}>
              O
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              ne
            </Typography>
            <Typography variant="h4" fontWeight="bold" fontSize={40}>
              S
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              top
            </Typography>
            <Typography variant="h4" fontWeight="bold" fontSize={40}>
              S
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              tore
            </Typography>
          </Box>

          <Box sx={{ pt: 3, pb: 3, textAlign: "center" }}>
            <Typography variant="h5" fontSize={20}>
              Welcome to OneStopStroe
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
              label="Full Name"
              variant="outlined"
              size="small"
              value={name}
              name="name"
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
              label="Email"
              variant="outlined"
              size="small"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </Box>

          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
              position: "relative",
            }}
            noValidate
          >
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              value={password}
              name="password"
              onChange={handleChangeInput}
              type={showPassword ? "text" : "password"}
            ></TextField>
            <InputAdornment
              position="end"
              sx={{ position: "absolute", top: 20 }}
            >
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ position: "absolute", right: 10 }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          </Box>

          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
              position: "relative",
            }}
            noValidate
          >
            <TextField
              id="outlined-basic"
              label="Re-Type Password"
              variant="outlined"
              size="small"
              value={cf_password}
              name="cf_password"
              onChange={handleChangeInput}
              type={pwd2 ? "text" : "password"}
            ></TextField>
            <InputAdornment
              position="end"
              sx={{ position: "absolute", top: 20 }}
            >
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleRetypePass}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ position: "absolute", right: 10 }}
              >
                {pwd2 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          </Box>

          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
              position: "relative",
            }}
          >
            <ColorButton variant="contained" type="submit">
              Sign in
            </ColorButton>
          </Box>

          <Box
            sx={{
              "& > :not(style)": { mt: 2, width: "100%" },
              position: "relative",
              textAlign: "center",
              pl: 1,
            }}
          >
            <p className="login_options">or</p>
          </Box>

          <Box
            sx={{
              "& > :not(style)": { mt: 2, width: "100%" },
              position: "relative",
              textAlign: "center",
              pl: 1,
              display: "flex",
            }}
          >
            <Link to="" className="link">
              <div className="login_div_options">
                <img src={google} alt="" className="google_img" />
                <Typography variant="h5" fontSize={12}>
                  Sign up with Google
                </Typography>
              </div>
            </Link>
          </Box>

          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
              position: "relative",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" fontSize={12} color="gray">
              Already have an account?{" "}
              <Link to="/authentication" className="link">
                Sign in
              </Link>
            </Typography>
          </Box>
        </Container>
      </form>
    </Container>
  );
}
