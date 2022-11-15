import React, { Component, ReactNode } from "react";
import { ShopIcon } from "../../assets/svgs/ShopIcon";
import { Container } from "../commons/Container";
import { NavBar } from "./NavBar";
import { DropDownIcon } from "../../assets/svgs/DropDownIcon";
import { CartIcon } from "../../assets/svgs/CartIcon";
import { Typography } from "../commons/Typography";
import { theme } from "../../config/theme";

export class Header extends Component {
  render(): ReactNode {
    return (
      <>
        <Container
          paddingTop="24px"
          justifyContent="space-between"
          pH="60px"
          position="relative"
        >
          <NavBar />
          <ShopIcon />
          <Container
            maxWidth="50px"
            alignItems="center"
            height="fit-content"
            justifyContent="space-between"
          >
            <Typography
              fontSize={theme.fontSize.m}
              fontWeight={theme.fontWeight.normal}
            >
              $
            </Typography>
            <DropDownIcon />
            {/* the container below displays the qty of products */}
            <Container
              width="20px"
              height="20px"
              justifyContent="center"
              alignItems="center"
              borderRadius="50%"
              bg={theme.colors.black}
              position="absolute"
              right="50px"
              top="15px"
            >
              <Typography
                fontSize={theme.fontSize.vs}
                fontWeight={theme.fontWeight.veryBold}
                color={theme.colors.primaryBackground}
              >
                3
              </Typography>
            </Container>
            <CartIcon />
          </Container>
        </Container>
      </>
    );
  }
}
