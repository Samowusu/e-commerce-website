import React, { Component } from "react";
import { CartIcon } from "../../assets/svgs/CartIcon";
import { ShopIcon } from "../../assets/svgs/ShopIcon";
import { Typography } from "../commons/Typography";
import { Header } from "../header";
import { NavBar } from "../header/NavBar";
import { Playground } from "./Playground";

export class Glossary extends Component {
  render() {
    return <Playground />;
    return (
      <>
        <Typography>Testig typography component...</Typography>
        <NavBar />
        <ShopIcon />
        <CartIcon />
        <Header />
      </>
    );
  }
}
