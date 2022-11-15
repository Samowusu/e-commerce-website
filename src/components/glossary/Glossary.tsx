import React, { Component } from "react";
import { CartIcon } from "../../assets/svgs/CartIcon";
import { ShopIcon } from "../../assets/svgs/ShopIcon";
import { CartItemCard } from "../cart/CartItemCard";
import { CartOverlay } from "../cart/CartOverlay";
import { Button } from "../commons/Button";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import { Header } from "../header/Header";
import { NavBar } from "../header/NavBar";
import { ProductCard } from "../product/ProductCard";
import { Playground } from "./Playground";

export class Glossary extends Component {
  render() {
    return <Playground />;
    return (
      <>
        <Typography>Testig typography component...</Typography>
        <Container>This is a container</Container>
        <Button>Click ME!</Button>
        <NavBar />
        <ShopIcon />
        <CartIcon />
        <Header />
        <ProductCard />
        <CartOverlay />
        <CartItemCard />
      </>
    );
  }
}
