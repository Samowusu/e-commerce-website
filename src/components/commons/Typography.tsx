import React, { ReactNode, Component } from "react";
import styled from "styled-components";

type StyleProps = Partial<Props>;

const Text = styled.p<StyleProps>`
  color: ${({ theme, color }) => color ?? theme.colors.primaryText};
  font-size: ${({ theme, fontSize }) => fontSize ?? theme.fontSize.s};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ?? theme.fontWeight.regular};
  text-transform: ${({ textTransform }) => textTransform ?? "capitalize"};
  line-height: ${({ lineHeight }) => lineHeight ?? ""};
`;

interface Props {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textTransform?: string;
  lineHeight?: string;
}

export class Typography extends Component<Props> {
  render(): ReactNode {
    return (
      <Text
        textTransform={this.props.textTransform}
        color={this.props.color}
        fontSize={this.props.fontSize}
        fontWeight={this.props.fontWeight}
        lineHeight={this.props.lineHeight}
      >
        {this.props.children}
      </Text>
    );
  }
}
