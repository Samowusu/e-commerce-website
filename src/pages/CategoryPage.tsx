import { Component } from "react";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import ProductCard from "../components/ProductCard";
import { DUMMY_PRODUCTS } from "../config/utils";
import type { Product } from "../config/types";
import { categoryPageStyles } from "./CategoryPageStyles";

interface CategoryProps {
  categoryName: string;
  products?: Product[];
}
export class CategoryPage extends Component<CategoryProps> {
  static defaultProps: CategoryProps = {
    categoryName: "clothes",
    products: DUMMY_PRODUCTS,
  };
  render() {
    return (
      <Container style={categoryPageStyles.mainContainer}>
        <Container style={categoryPageStyles.contentContainer}>
          <Typography style={categoryPageStyles.categoryNameText}>
            {this.props.categoryName}
          </Typography>
          <Container style={categoryPageStyles.cardContainer}>
            {this.props.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Container>
        </Container>
      </Container>
    );
  }
}
