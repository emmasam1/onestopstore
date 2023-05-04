import React from "react";
import LandingPage from "../landingComponet/LandingPage";
import NavContainer from "../navBar/NavContainer";
import Footer from "../footer/Footer";

export default function Home() {
  return (
    <>
      <NavContainer />
      <LandingPage />
      <Footer />
    </>
  );
}
