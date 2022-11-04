import React, { Component } from "react";
import { Typography } from "../commons/Typography";
import { Header } from "../header/Header";
import { NavBar } from "../header/NavBar";
import { ProductCard } from "../product/ProductCard";

export class Playground extends Component {
  render() {
    return <ProductCard />;
    // return <NavBar />;
    // return <Header />;
    // return <Typography>From playground...</Typography>
  }
}
