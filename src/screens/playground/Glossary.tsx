import React, { Component } from "react";
import { CartIcon } from "../../assets/svgs/CartIcon";
import { ShopIcon } from "../../assets/svgs/ShopIcon";
import { CartItemCard } from "../../components/cart/CartItemCard";
import { CartOverlay } from "../../components/cart/CartOverlay";
import { Button } from "../../components/commons/Button";
import { Container } from "../../components/commons/Container";
import { Typography } from "../../components/commons/Typography";
import Header from "../../components/header/Header";
import { NavBar } from "../../components/header/NavBar";
import ProductCard from "../../components/ProductCard";
import { Playground } from "../Playground";

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
        <ProductCard productName="lacoste" />
        <CartOverlay />
        <CartItemCard />
      </>
    );
  }
}
