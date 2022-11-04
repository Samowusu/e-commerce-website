import React, { Children, Component, ReactNode } from "react";
import styled from "styled-components";

type StyleProps = Partial<Props>;
const Box = styled.div<StyleProps>`
  display: flex;
  border: 1px solid red;
  width: ${({ width }) => width ?? "100%"};
  max-width: ${({ maxWidth }) => maxWidth ?? ""};
  min-width: ${({ minWidth }) => minWidth ?? ""};
  height: ${({ height }) => height ?? ""};
  flex-direction: ${({ flexDirection }) => flexDirection ?? "row"};
  justify-content: ${({ justifyContent }) => justifyContent ?? ""};
  align-items: ${({ alignItems }) => alignItems ?? ""};

  /* padding vertical */
  padding: ${({ pV }) => pV ?? ""} ${({ pV }) => (pV ? 0 : "")};

  /* padding horizontal */
  padding: ${({ pH }) => (pH ? 0 : "")} ${({ pH }) => pH ?? ""};

  padding-top: ${({ paddingTop }) => paddingTop ?? ""};
  padding-bottom: ${({ paddingBottom }) => paddingBottom ?? ""};
  padding-right: ${({ paddingRight }) => paddingRight ?? ""};
  padding-left: ${({ paddingLeft }) => paddingLeft ?? ""};
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
      >
        {this.props.children}
      </Box>
    );
  }
}
