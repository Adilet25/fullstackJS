import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";
import FavoritePage from "./pages/FavoritePage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ProductPage from "./pages/ProductPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
    {
      link: "/register",
      element: <RegisterPage />,
      id: 3,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 4,
    },
    {
      link: "/favorite",
      element: <FavoritePage />,
      id: 5,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 6,
    },
    {
      link: "/details/:id",
      element: <DetailsPage />,
      id: 7,
    },
    {
      link: "/product",
      element: <ProductPage />,
      id: 8,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
