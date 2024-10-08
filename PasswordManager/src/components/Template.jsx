import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Template() {
  return (
    <>
      <Header />
      <Outlet ></Outlet>
      <Footer />
    </>
  );
}

export default Template;
