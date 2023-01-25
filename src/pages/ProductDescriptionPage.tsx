import React, { Component } from "react";
import ProductDetails from "../components/product/ProductDetails";
import { withRouter, WithRouterProps } from "../hocs/withRouter";

interface Props {}
class ProductDescriptionComponent extends Component<WithRouterProps<Props>> {
  render() {
    const { id } = this.props.params;
    return <ProductDetails id={id} />;
  }
}
const ProductDescriptionPage = withRouter<Props>(ProductDescriptionComponent);

export default ProductDescriptionPage;
