import { Component } from "react";
import { Typography } from "../commons/Typography";
import { Container } from "../commons/Container";
import { Rectangle } from "../commons/Rectangle";
import { theme } from "../../config/theme";
import { attributeDisplayStyles } from "./AttributeDisplayStyles";
import type { Attribute } from "../../config/types";

interface Props {
  items: Attribute[];
  cartPage?: boolean;
  productDescription?: boolean;
  title: string;
  type: string;
  onChange?: (val: number) => void;
  value?: string;
}

interface States {
  isSelected: boolean;
  selectedValue: string;
}
export class AttributeDisplay extends Component<Props, States> {
  state: Readonly<States> = {
    isSelected: false,
    selectedValue: this.props.value ?? this.props.items[0].id,
  };

  handleSelectAttribute = (id: string, index: number) => {
    this.setState({ selectedValue: id });
    this.props.onChange?.(index);
  };
  render() {
    return (
      <Container style={attributeDisplayStyles.mainContainer}>
        <Typography
          style={attributeDisplayStyles.attributeTitle(
            this.props.productDescription!
          )}
        >
          {this.props.title}:
        </Typography>
        <Container style={attributeDisplayStyles.rectanglesContainer}>
          {this.props.items?.map((item, index) => (
            <Rectangle
              key={item.id}
              text={this.props.type === "text" ? item.value : ""}
              color={this.state.selectedValue === item.id ? "white" : "black"}
              background={
                this.props.type === "text"
                  ? this.state.selectedValue === item.id
                    ? "black"
                    : "white"
                  : item.value
              }
              max={this.props.cartPage ? true : false}
              border={
                this.props.type === "text"
                  ? true
                  : this.state.selectedValue === item.id
                  ? true
                  : false
              }
              onClick={
                this.props.productDescription
                  ? () => this.handleSelectAttribute(item.id, index)
                  : () => console.log("read only")
              }
              borderColor={
                this.props.type === "text"
                  ? "black"
                  : this.state.selectedValue === item.id
                  ? `${theme.colors.secondaryText}`
                  : "black"
              }
              borderWidth={this.props.type !== "text" ? "2px" : "1px"}
            />
          ))}
        </Container>
      </Container>
    );
  }
}
