import { Component, ReactNode } from "react";
import { Route, Routes } from "react-router";
import { Container } from "../components/commons/Container";
import CartPage from "../pages/CartPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDescriptionPage from "../pages/ProductDescriptionPage";

export class AppRoutes extends Component {
  render(): ReactNode {
    return (
      <Routes>
        <Route path="/" element={<ProductsPage filterBy="" />} />
        <Route path="/clothes" element={<ProductsPage filterBy="clothes" />} />
        <Route path="/tech" element={<ProductsPage filterBy="tech" />} />
        <Route path="/clothes/:id" element={<ProductDescriptionPage />} />

        <Route path="/tech/:id" element={<ProductDescriptionPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="*"
          element={
            <Container>
              <img
                src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
                alt="404 message"
              />
            </Container>
          }
        />
      </Routes>
    );
  }
}
