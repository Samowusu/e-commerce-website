import React, { Component } from "react";
import { CartItemCard } from "../cart/CartItemCard";
import { CartOverlay } from "../cart/CartOverlay";
import { Button } from "../commons/Button";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import { CurrencySwitcherCard } from "../currencySwitcher/CurrencySwitcherCard";
import { Header } from "../header/Header";
import { NavBar } from "../header/NavBar";
import { ProductCard } from "../product/ProductCard";

export class Playground extends Component {
  render() {
    // return <QuantityDisplay />;
    // return <CurrencySwitcherCard />;
    // return <Button>Click Me</Button>;
    // return <CartItemCard />;
    // return <CartOverlay />;
    // return <ProductCard />;
    // return <NavBar />;
    return <Header />;
    // return <Typography>From playground...</Typography>
  }
}
