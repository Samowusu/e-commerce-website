import React, { Children, Component, ReactNode } from "react";
import styled from "styled-components";

type StyleProps = Partial<Props>;
const Box = styled.div<StyleProps>`
  display: flex;
  /* border: 1px solid red; */
  width: ${({ width }) => width ?? "100%"};
  max-width: ${({ maxWidth }) => maxWidth ?? ""};
  min-width: ${({ minWidth }) => minWidth ?? ""};
  height: ${({ height }) => height ?? ""};
  flex-direction: ${({ flexDirection }) => flexDirection ?? "row"};
  justify-content: ${({ justifyContent }) => justifyContent ?? ""};
  align-items: ${({ alignItems }) => alignItems ?? ""};

  /* padding vertical */
  padding: ${({ pV }) => pV ?? ""} ${({ pV, pH }) => (pV ? pH ?? 0 : "")};

  /* padding horizontal */
  padding: ${({ pH, pV }) => (pH ? pV ?? 0 : "")} ${({ pH }) => pH ?? ""};

  padding-top: ${({ paddingTop }) => paddingTop ?? ""};
  padding-bottom: ${({ paddingBottom }) => paddingBottom ?? ""};
  padding-right: ${({ paddingRight }) => paddingRight ?? ""};
  padding-left: ${({ paddingLeft }) => paddingLeft ?? ""};

  /* margin vertical */
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
  gap?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
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
        gap={this.props.gap}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        {this.props.children}
      </Box>
    );
  }
}
