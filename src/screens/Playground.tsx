import React, { Component } from "react";
import { CartPage } from "../pages/CartPage";
import { CartItemCard } from "../components/cart/CartItemCard";
import { CartOverlay } from "../components/cart/CartOverlay";
import { Button } from "../components/commons/Button";
import { Container } from "../components/commons/Container";
import { Rectangle } from "../components/commons/Rectangle";
import { Typography } from "../components/commons/Typography";
import CurrencySwitcherCard from "../components/CurrencySwitcherCard";
import Header from "../components/header/Header";
import { NavBar } from "../components/header/NavBar";
import ProductCard from "../components/ProductCard";
import { DUMMY_SIZES, DUMMY_COLORS } from "../config/utils";
import { ProductDescriptionPage } from "../pages/ProductDescriptionPage";
import { CartModal } from "../components/cart/CartModal";

export class Playground extends Component {
  render() {
    return (
      <Container flexDirection="column">
        <Header />
        <CartModal />
      </Container>
    );
    return <CartModal />;
    // return <ProductDescriptionPage />;
    // return <Rectangle />;
    // return <CartPage />;
    // return <QuantityDisplay />;
    // return <CurrencySwitcherCard />;
    // return <Button>Click Me</Button>;
    // return <CartItemCard />;
    // return <CartOverlay />;
    // return <ProductCard />;
    // return <NavBar />;
    // return <Header />;
    // return <Typography>From playground...</Typography>
  }
}
