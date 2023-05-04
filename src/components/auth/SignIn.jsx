import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import apiRequest from "../../utils/apiRequest";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import { isEmpty } from "../../utils/validation/Validation";
import { dispatchLogin } from "../../components/redux/actions/authAction";
import { useDispatch } from "react-redux";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import google from "../../assets/google.svg";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
  width: "100%",
}));

const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

export default function SignIn() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password))
      return setUser({
        ...user,
        err: "Please fill in all fields.",
        success: "",
      });

    try {
      const res = await apiRequest.post("login", { email, password });
      setUser({ ...user, err: "", success: res.data.msg });
      toast.success("Login successfully");
        navigate("/");

      localStorage.setItem("firstLogin", res.data.data._id);
      localStorage.setItem("whoLoggedIn", res.data.data.role);

      dispatch(dispatchLogin());
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

          <Box sx={{ pt: 5, pb: 3, textAlign: "center" }}>
            <Typography variant="h5" fontSize={20}>
              Welcome to OneStopStroe
            </Typography>
          </Box>

          <Box>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
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

          <Box sx={{ textAlign: "right" }}>
            <Link to="" className="forget_password">
              Forget password?
            </Link>
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
              "& > :not(style)": { mt: 6, width: "100%" },
              position: "relative",
              textAlign: "center",
              pl: 1,
            }}
          >
            <p className="login_options">or</p>
          </Box>

          <Box
            sx={{
              "& > :not(style)": { mt: 5, width: "100%" },
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
                  Sign in with Google
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
              New to Done~With?{" "}
              <Link to="signup" className="link">
                Create Account
              </Link>
            </Typography>
          </Box>
        </Container>
      </form>
    </Container>
  );
}
