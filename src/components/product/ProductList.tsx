import { Component } from "react";
import { Product } from "../../config/types";
import { Container } from "../commons/Container";
import ProductCard from "./ProductCard";
import { productListStyles } from "./ProductListStyles";

interface Props {
  products: Product[];
}

export class ProductList extends Component<Props> {
  render() {
    return (
      <Container style={productListStyles.mainContainer}>
        {this.props.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    );
  }
}
