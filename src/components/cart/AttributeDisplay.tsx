import React, { Component } from "react";
import { Typography } from "../commons/Typography";
import { Container } from "../commons/Container";
import { Rectangle } from "../commons/Rectangle";
import type { Attribute } from "../../config/types";

interface Props {
  items: Attribute[];
  cartPage?: boolean;
  title: string;
  type: string;
}
export class AttributeDisplay extends Component<Props> {
  render() {
    return (
      <Container flexDirection="column" gap="5px">
        <Typography>{this.props.title}:</Typography>
        <Container gap="8px">
          {this.props.items?.map((item, index) => (
            <Rectangle
              key={item.id}
              text={this.props.type === "text" ? item.value : ""}
              color={index === 1 ? "white" : "black"}
              background={
                this.props.type === "text"
                  ? index === 1
                    ? "black"
                    : "white"
                  : item.value
              }
              max={this.props.cartPage ? true : false}
              border={this.props.type === "text" ? true : false}
            />
          ))}
        </Container>
      </Container>
    );
  }
}
