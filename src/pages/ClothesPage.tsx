import { Component } from "react";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import ProductCard from "../components/product/ProductCard";
import { DUMMY_PRODUCTS } from "../config/utils";
import type { Product } from "../config/types";
import { categoryPageStyles } from "./CategoryPageStyles";
import { graphql } from "@apollo/react-hoc";
import { FETCH_CLOTHES } from "../graphql/queries";

const withFetchClothesQuery = graphql(FETCH_CLOTHES);

class ClothesPage extends Component {
  render() {
    const products = (this.props as any).data.category?.products;

    return (
      <Container style={categoryPageStyles.mainContainer}>
        <Container style={categoryPageStyles.contentContainer}>
          <Typography style={categoryPageStyles.categoryNameText}>
            clothes
          </Typography>
          <Container style={categoryPageStyles.cardContainer}>
            {products?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Container>
        </Container>
      </Container>
    );
  }
}

export default withFetchClothesQuery(ClothesPage);
