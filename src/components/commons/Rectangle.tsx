import React, { Component } from "react";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { theme } from "../../config/theme";

interface Props {
  max?: boolean;
  text?: string;
  border?: boolean;
  background?: string;
  color?: string;
}
export class Rectangle extends Component<Props> {
  static defaultProps: Props = {
    max: false,
    border: true,
    text: "",
    background: "transparent",
    color: `${theme.colors.primaryText}`,
  };

  render() {
    return (
      <Container
        border={this.props.border}
        borderColor="black"
        width={this.props.max ? "50px" : "30px"}
        height={this.props.text === "" ? "20px" : ""}
        maxWidth={this.props.text === "" ? "20px" : ""}
        justifyContent="center"
        pV="5px"
        bg={this.props.background}
      >
        <Typography
          textTransform="uppercase"
          fontSize={this.props.max ? `${theme.fontSize.s}` : "12px"}
          color={this.props.color}
        >
          {this.props.text}
        </Typography>
      </Container>
    );
  }
}
