import React, { Component } from "react";

interface CategoryProps {
  categoryName: string;
}
export class CategoryPage extends Component<CategoryProps> {
  render() {
    return <div>{this.props.categoryName} page</div>;
  }
}
