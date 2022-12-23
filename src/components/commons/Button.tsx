import React, { Component, ReactNode } from "react";
import styled from "styled-components";

type StyleProps = Partial<Props>;
const CustomButton = styled.button<StyleProps>`
  border: ${({ border }) => (border ? "1px solid red" : "none")};

  border-color: ${({ borderColor }) => borderColor ?? ""};
  width: ${({ width }) => width ?? "100%"};
  max-width: ${({ maxWidth }) => maxWidth ?? "200px"};
  height: ${({ height }) => height ?? ""};
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
  margin-right: ${({ marginRight }) => marginRight ?? ""};
  margin-left: ${({ marginLeft }) => marginLeft ?? ""};

  position: ${({ position }) => position ?? ""};
  top: ${({ top }) => top ?? ""};
  bottom: ${({ bottom }) => bottom ?? ""};
  right: ${({ right }) => right ?? ""};
  left: ${({ left }) => left ?? ""};
  z-index: ${({ zIndex }) => zIndex ?? ""};

  cursor: pointer;
  display: ${({ display }) => display ?? ""};
`;

interface Props {
  children: ReactNode;
  bg?: string;
  width?: string;
  height?: string;
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
  marginRight?: string;
  marginLeft?: string;
  mH?: string;
  mV?: string; //mH and mV stand for margin horizontal and margin vertical respectively
  margin?: string;
  borderColor?: string;
  onClick?: () => void;
  border?: boolean;
  position?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  zIndex?: string;
  display?: string;
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
        marginRight={this.props.marginRight}
        marginLeft={this.props.marginLeft}
        mH={this.props.mH}
        mV={this.props.mV}
        margin={this.props.margin}
        borderColor={this.props.borderColor}
        border={this.props.border}
        onClick={this.props.onClick}
        height={this.props.height}
        position={this.props.position}
        top={this.props.top}
        bottom={this.props.bottom}
        right={this.props.right}
        left={this.props.left}
        zIndex={this.props.zIndex}
        display={this.props.display}
      >
        {this.props.children}
      </CustomButton>
    );
  }
}
