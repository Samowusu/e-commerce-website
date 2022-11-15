import React, { Component, ReactNode } from "react";
import styled from "styled-components";

type StyleProps = Partial<Props>;
const Box = styled.div<StyleProps>`
  display: flex;
  border: ${({ border }) => border && "1px solid red"};
  border-radius: ${({ borderRadius }) => borderRadius ?? ""};
  background: ${({ bg }) => bg ?? "transparent"};
  width: ${({ width }) => width ?? "100%"};
  max-width: ${({ maxWidth }) => maxWidth ?? ""};
  min-width: ${({ minWidth }) => minWidth ?? ""};
  height: ${({ height }) => height ?? ""};
  max-height: ${({ maxHeight }) => maxHeight ?? ""};
  flex-direction: ${({ flexDirection }) => flexDirection ?? "row"};
  justify-content: ${({ justifyContent }) => justifyContent ?? ""};
  align-items: ${({ alignItems }) => alignItems ?? ""};

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

  position: ${({ position }) => position ?? ""};
  top: ${({ top }) => top ?? ""};
  bottom: ${({ bottom }) => bottom ?? ""};
  right: ${({ right }) => right ?? ""};
  left: ${({ left }) => left ?? ""};
  z-index: ${({ zIndex }) => zIndex ?? ""};
  gap: ${({ gap }) => gap ?? ""};

  overflow: ${({ overflow }) => overflow ?? ""};
  scroll-behavior: smooth;

  -ms-overflow-style: none;
  scrollbar-width: none;

  & ::-webkit-scrollbar {
    display: none;
  }

  /* box-shadow: ${({ boxShadow }) =>
    boxShadow ? "-11px -8px 9px 0px rgba(168, 172, 176, 0.19)" : ""};
  -webkit-box-shadow: ${({ boxShadow }) =>
    boxShadow ? "-11px -8px 9px 0px rgba(168, 172, 176, 0.19)" : ""};
  -moz-box-shadow: ${({ boxShadow }) =>
    boxShadow ? "-11px -8px 9px 0px rgba(168, 172, 176, 0.19)" : ""}; */

  /* box-shadow: -11px -8px 9px 0px rgba(168, 172, 176, 0.19);
  -webkit-box-shadow: -11px -8px 9px 0px rgba(168, 172, 176, 0.19);
  -moz-box-shadow: -11px -8px 9px 0px rgba(168, 172, 176, 0.19); */

  box-shadow: ${({ boxShadow }) =>
    boxShadow && "1px 3px 9px 13px rgba(168, 172, 176, 0.15)"};
  -webkit-box-shadow: ${({ boxShadow }) =>
    boxShadow && "1px 3px 9px 13px rgba(168, 172, 176, 0.15)"};
  -moz-box-shadow: ${({ boxShadow }) =>
    boxShadow && "1px 3px 9px 13px rgba(168, 172, 176, 0.15)"};

  ${({ hover, theme }) =>
    hover
      ? `&:hover { background: ${theme.colors.lightGrey}  ; cursor: pointer}`
      : ""}
`;

interface Props {
  children: ReactNode;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  pV?: string;
  pH?: string; //pV and pH stand for padding vertical and padding horizontal respectively
  height?: string;
  maxHeight?: string;
  marginTop?: string;
  marginBottom?: string;
  margintRight?: string;
  marginLeft?: string;
  mH?: string;
  mV?: string; //mH and mV stand for margin horizontal and margin vertical respectively
  position?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  zIndex?: string;
  padding?: string;
  margin?: string;
  boxShadow?: boolean;
  overflow?: string;
  gap?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  border?: boolean;
  borderRadius?: string;
  bg?: string;
  hover?: boolean;
}
export class Container extends Component<Props> {
  render() {
    return (
      <Box
        width={this.props.width}
        flexDirection={this.props.flexDirection}
        maxWidth={this.props.maxWidth}
        minWidth={this.props.minWidth}
        justifyContent={this.props.justifyContent}
        alignItems={this.props.alignItems}
        paddingTop={this.props.paddingTop}
        paddingBottom={this.props.paddingBottom}
        paddingRight={this.props.paddingRight}
        paddingLeft={this.props.paddingLeft}
        pV={this.props.pV}
        pH={this.props.pH}
        height={this.props.height}
        maxHeight={this.props.maxHeight}
        marginBottom={this.props.marginBottom}
        marginTop={this.props.marginTop}
        margintRight={this.props.margintRight}
        marginLeft={this.props.marginLeft}
        mH={this.props.mH}
        mV={this.props.mV}
        position={this.props.position}
        top={this.props.top}
        bottom={this.props.bottom}
        right={this.props.right}
        left={this.props.left}
        zIndex={this.props.zIndex}
        boxShadow={this.props.boxShadow}
        overflow={this.props.overflow}
        padding={this.props.padding}
        margin={this.props.margin}
        gap={this.props.gap}
        border={this.props.border}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        hover={this.props.hover}
        borderRadius={this.props.borderRadius}
        bg={this.props.bg}
      >
        {this.props.children}
      </Box>
    );
  }
}
