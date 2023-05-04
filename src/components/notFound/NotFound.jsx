import React from "react";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import notfound from "../../assets/notfound.svg";

export default function NotFound() {
  return (
    <Container sx={{ textAlign: "center", pt: 5 }}>
      <div className="notfound_image_conainer">
        <img src={notfound} alt="icon" className="nf_img" />
      </div>
      <h1>Ooops!</h1>
      <p>Page not found!</p>
      <p>
        We can’t find the page you are lookign for. Either it has been removed,
        had it’s name changed or is temporary unavailable
      </p>

      <Link to="/">Go home</Link>
    </Container>
  );
}
