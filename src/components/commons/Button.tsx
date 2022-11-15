import React, { Component, ReactNode } from "react";
import styled from "styled-components";

type StyleProps = Partial<Props>;
const CustomButton = styled.button<StyleProps>`
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor ?? "blue"};
  width: ${({ width }) => width ?? "100%"};
  max-width: ${({ maxWidth }) => maxWidth ?? "200px"};
  background-color: ${({ bg }) => bg ?? "transparent"};
  color: ${({ color }) => color ?? "black"};

  /* padding vertical */
  padding: ${({ padding }) => padding ?? ""};
  padding: ${({ pV }) => pV ?? ""} ${({ pV, pH }) => (pV ? pH ?? 0 : "")};

  /* padding horizontal */
  padding: ${({ pH, pV }) => (pH ? pV ?? 0 : "")} ${({ pH }) => pH ?? ""};

  padding-top: ${({ paddingTop }) => paddingTop ?? ""};
  padding-bottom: ${({ paddingBottom }) => paddingBottom ?? ""};
  padding-right: ${({ paddingRight }) => paddingRight ?? ""};
  padding-left: ${({ paddingLeft }) => paddingLeft ?? ""};

  /* margin vertical */
  margin: ${({ margin }) => margin ?? ""};
  margin: ${({ mV }) => mV ?? ""} ${({ mV, mH }) => (mV ? mH ?? 0 : "")};

  /* margin horizontal */
  margin: ${({ mH, mV }) => (mH ? mV ?? 0 : "")} ${({ mH }) => mH ?? ""};

  margin-top: ${({ marginTop }) => marginTop ?? ""};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? ""};
  margin-right: ${({ margintRight }) => margintRight ?? ""};
  margin-left: ${({ marginLeft }) => marginLeft ?? ""};

  cursor: pointer;
`;

interface Props {
  children: ReactNode;
  bg?: string;
  width?: string;
  maxWidth?: string;
  color?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  pV?: string;
  pH?: string; //pV and pH stand for padding vertical and padding horizontal respectively
  padding?: string;
  marginTop?: string;
  marginBottom?: string;
  margintRight?: string;
  marginLeft?: string;
  mH?: string;
  mV?: string; //mH and mV stand for margin horizontal and margin vertical respectively
  margin?: string;
  borderColor?: string;
  onClick?: () => void;
}

export class Button extends Component<Props> {
  render(): ReactNode {
    return (
      <CustomButton
        bg={this.props.bg}
        width={this.props.width}
        maxWidth={this.props.maxWidth}
        color={this.props.color}
        paddingTop={this.props.paddingTop}
        paddingBottom={this.props.paddingBottom}
        paddingRight={this.props.paddingRight}
        paddingLeft={this.props.paddingLeft}
        pV={this.props.pV}
        pH={this.props.pH}
        padding={this.props.padding}
        marginBottom={this.props.marginBottom}
        marginTop={this.props.marginTop}
        margintRight={this.props.margintRight}
        marginLeft={this.props.marginLeft}
        mH={this.props.mH}
        mV={this.props.mV}
        margin={this.props.margin}
        borderColor={this.props.borderColor}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </CustomButton>
    );
  }
}
