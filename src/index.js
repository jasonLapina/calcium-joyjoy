import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Home/Homepage";
import Layout from "./Shared/Layout";
import AuthPage from "./Auth/AuthPage";
import CartPage from "./Cart/CartPage";
import CategoryPage from "./Category/CategoryPage";
import ProductPage from "./Product/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/auth/:action",
        element: <AuthPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/browse/:brand/:category?",
        element: <CategoryPage />,
      },
      {
        path: "/shoe/:productID",
        element: <ProductPage />,
      },
      {
        path: "/shoe/:productID/customize",
        element: <h1>customize</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
