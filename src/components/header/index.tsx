import React, { Component, ReactNode } from "react";
import { ShopIcon } from "../../assets/svgs/ShopIcon";
import { DollarIcon } from "../../assets/svgs/DollarIcon";
import { Container } from "../commons/Container";
import { NavBar } from "./NavBar";
import { DropDownIcon } from "../../assets/svgs/DropDownIcon";
import { CartIcon } from "../../assets/svgs/CartIcon";

export class Header extends Component {
  render(): ReactNode {
    return (
      <>
        <Container paddingTop="24px" justifyContent="space-between" pH="60px">
          <NavBar />
          <ShopIcon />
          <Container
            maxWidth="50px"
            alignItems="center"
            height="fit-content"
            justifyContent="space-between"
          >
            <DollarIcon />
            <DropDownIcon />
            <CartIcon />
          </Container>
        </Container>
      </>
    );
  }
}
