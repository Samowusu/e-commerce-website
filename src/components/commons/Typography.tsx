import React, { ReactNode, Component } from "react";
import styled from "styled-components";

type StyleProps = Partial<Props>;

const Text = styled.p<StyleProps>`
  color: ${({ theme, color }) => color ?? theme.colors.primaryText};
  font-size: ${({ theme, fontSize }) => fontSize ?? theme.fontSize.s};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ?? theme.fontWeight.light};
  text-transform: ${({ textTransform }) => textTransform ?? "capitalize"};
`;

interface Props {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textTransform?: string;
}

export class Typography extends Component<Props> {
  render(): ReactNode {
    return (
      <Text
        textTransform={this.props.textTransform}
        color={this.props.color}
        fontSize={this.props.fontSize}
        fontWeight={this.props.fontWeight}
      >
        {this.props.children}
      </Text>
    );
  }
}
