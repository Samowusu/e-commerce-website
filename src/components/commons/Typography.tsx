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

  /* margin vertical */
  margin: ${({ margin }) => margin ?? ""};
  margin: ${({ mV }) => mV ?? ""} ${({ mV, mH }) => (mV ? mH ?? 0 : "")};

  /* margin horizontal */
  margin: ${({ mH, mV }) => (mH ? mV ?? 0 : "")} ${({ mH }) => mH ?? ""};

  margin-top: ${({ marginTop }) => marginTop ?? ""};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? ""};
  margin-right: ${({ marginRight }) => marginRight ?? ""};
  margin-left: ${({ marginLeft }) => marginLeft ?? ""};
  ${({ style }) => style};
`;

interface Props {
  children: ReactNode;
  style?: any;

  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textTransform?: string;
  lineHeight?: string;
  margin?: string;

  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  mH?: string;
  mV?: string; //mH and mV stand for margin horizontal and margin vertical respectively
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
        marginBottom={this.props.marginBottom}
        marginTop={this.props.marginTop}
        marginRight={this.props.marginRight}
        marginLeft={this.props.marginLeft}
        mH={this.props.mH}
        mV={this.props.mV}
        margin={this.props.margin}
        style={this.props.style}
      >
        {this.props.children}
      </Text>
    );
  }
}
