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
  static defaultProps: CategoryProps = {
    categoryName: "clothes",
    products: DUMMY_PRODUCTS,
  };
  render() {
    return (
      <Container justifyContent="center">
        <Container width="90%" flexDirection="column">
          <Typography fontSize={theme.fontSize.xxxl} marginLeft="16px">
            {this.props.categoryName}
          </Typography>
          <Container flexWrap="wrap" gap="30px" marginTop="50px">
            {this.props.products?.map(
              ({ id, name, prices, gallery, inStock, category }) => (
                <ProductCard
                  key={id}
                  id={id}
                  productName={name}
                  currencySymbol={prices[0].currency.symbol}
                  productPrice={prices[0].amount}
                  image={gallery[0]}
                  inStock={inStock}
                  category={category}
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
