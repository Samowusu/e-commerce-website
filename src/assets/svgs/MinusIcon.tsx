import React, { Component } from "react";

interface Props {
  width?: string;
  heigth?: string;
}
export class MinusIcon extends Component<Props> {
  static defaultProps: Props = {
    width: "24",
    heigth: "24",
  };

  render() {
    return (
      <svg
        width={this.props.width}
        height={this.props.heigth}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12H16"
          stroke="#1D1F22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="0.5" y="0.5" width="23" height="23" stroke="#1D1F22" />
      </svg>
    );
  }
}
