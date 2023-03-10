import React, { Component } from "react";

interface Dimension {
  width?: string;
  heigth?: string;
}

interface PlusIconProps {
  dimension: Dimension;
}
export class PlusIcon extends Component<PlusIconProps> {
  static defaultProps: PlusIconProps = {
    dimension: {
      width: "24",
      heigth: "24",
    },
  };
  render() {
    return (
      <svg
        width={this.props.dimension.width}
        height={this.props.dimension.heigth}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_92234_46)">
          <path
            d="M12 8V16"
            stroke="#1D1F22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12H16"
            stroke="#1D1F22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="0.5" y="0.5" width="23" height="23" stroke="#1D1F22" />
        </g>
        <defs>
          <clipPath id="clip0_92234_46">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}
