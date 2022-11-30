import React, { Component } from "react";
import { CartPage } from "../../pages/CartPage";
import { CartItemCard } from "../cart/CartItemCard";
import { CartOverlay } from "../cart/CartOverlay";
import { Button } from "../commons/Button";
import { Container } from "../commons/Container";
import { Rectangle } from "../commons/Rectangle";
import { Typography } from "../commons/Typography";
import { CurrencySwitcherCard } from "../currencySwitcher/CurrencySwitcherCard";
import { Header } from "../header/Header";
import { NavBar } from "../header/NavBar";
import { ProductCard } from "../product/ProductCard";
import { DUMMY_SIZES, DUMMY_COLORS } from "../../config/utils";
import { ProductDescriptionPage } from "../../pages/ProductDescriptionPage";
import { CustomModal } from "../commons/CustomModal";

export class Playground extends Component {
  render() {
    return <CustomModal />;
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
