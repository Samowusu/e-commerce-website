import React, { Component } from "react";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import ProductCard from "../components/ProductCard";
import { theme } from "../config/theme";
import { DUMMY_PRODUCTS } from "../config/utils";
import type { Product } from "../config/types";

interface CategoryProps {
  categoryName: string;
  products?: Product[];
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
            {this.props.products?.map(
              ({ id, name, prices, gallery, inStock }) => (
                <ProductCard
                  key={id}
                  productName={name}
                  currencySymbol={prices[0].currency.symbol}
                  productPrice={prices[0].amount}
                  image={gallery[0]}
                  inStock={inStock}
                />
              )
            )}
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
