import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
        <Loader />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
