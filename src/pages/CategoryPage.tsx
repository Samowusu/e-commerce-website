import React, { Component } from "react";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import ProductCard from "../components/ProductCard";
import { theme } from "../config/theme";
import { DUMMY_PRODUCTS } from "../config/utils";

interface CategoryProps {
  categoryName: string;
}
export class CategoryPage extends Component<CategoryProps> {
  render() {
    return (
      <Container justifyContent="center">
        <Container width="90%" flexDirection="column">
          <Typography fontSize={theme.fontSize.xxxl} marginLeft="16px">
            {this.props.categoryName}
          </Typography>
          <Container flexWrap="wrap" gap="30px" marginTop="50px">
            {DUMMY_PRODUCTS.map((product, index) => (
              <ProductCard key={index} productName={product} />
            ))}
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </Container>
        </Container>
      </Container>
    );
  }
}
