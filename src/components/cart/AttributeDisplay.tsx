import React, { Component } from "react";
import { Typography } from "../commons/Typography";
import { Container } from "../commons/Container";
import { Rectangle } from "../commons/Rectangle";
import { theme } from "../../config/theme";
import type { Attribute } from "../../config/types";

interface Props {
  items: Attribute[];
  cartPage?: boolean;
  productDescription?: boolean;
  title: string;
  type: string;
}

interface States {
  isSelected: boolean;
}
export class AttributeDisplay extends Component<Props, States> {
  state: Readonly<States> = {
    isSelected: false,
  };

  handleSelectAttribute = () => {
    this.setState((prevState) => {
      return {
        isSelected: !prevState.isSelected,
      };
    });
  };
  render() {
    return (
      <Container flexDirection="column" gap="5px">
        <Typography
          textTransform={
            this.props.productDescription ? "uppercase" : "capitalize"
          }
          fontSize={
            this.props.productDescription ? theme.fontSize.m : theme.fontSize.s
          }
          fontWeight={
            this.props.productDescription
              ? theme.fontWeight.bold
              : theme.fontWeight.regular
          }
        >
          {this.props.title}:
        </Typography>
        <Container gap="8px">
          {this.props.items?.map((item, index) => (
            <Rectangle
              key={item.id}
              text={this.props.type === "text" ? item.value : ""}
              color={this.state.isSelected ? "white" : "black"}
              background={
                this.props.type === "text"
                  ? this.state.isSelected
                    ? "black"
                    : "white"
                  : item.value
              }
              max={this.props.cartPage ? true : false}
              border={
                this.props.type === "text"
                  ? true
                  : this.state.isSelected
                  ? true
                  : false
              }
              onClick={this.handleSelectAttribute}
              borderColor={
                this.props.type === "text"
                  ? "black"
                  : this.state.isSelected
                  ? `${theme.colors.secondaryText}`
                  : "black"
              }
              borderWidth={this.props.type !== "text" ? "2px" : "1px"}
            />
          ))}
        </Container>
      </Container>
    );
  }
}
