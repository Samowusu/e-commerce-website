import { Component, ReactNode } from "react";
import { graphql } from "@apollo/react-hoc";
import { Circles } from "react-loader-spinner";
import { productsPageStyles } from "./ProductsPageStyles";
import { FETCH_CATEGORIES } from "../graphql/queries";
import { Container } from "../components/commons/Container";
import { theme } from "../config/theme";
import { Typography } from "../components/commons/Typography";
import { ProductList } from "../components/product/ProductList";
import { withRouter, WithRouterProps } from "../hocs/withRouter";

interface Props {
  filterBy: string;
}

const withFetchCategoriesQuery = graphql<Props>(FETCH_CATEGORIES, {
  options: (props) => ({
    variables: { title: props.filterBy },
  }),
});

class ProductPageComponent extends Component<WithRouterProps<Props>> {
  render(): ReactNode {
    const data = (this.props as any).data;

    if (data.loading) {
      return (
        <Container style={productsPageStyles.loadingContainer}>
          <Circles
            height="80%"
            width="80%"
            color={theme.colors.secondaryText}
            ariaLabel="circles-loading"
            visible={true}
          />
        </Container>
      );
    }

    if (data.error) {
      return (
        <Container style={productsPageStyles.loadingContainer}>
          <img
            src="https://www.freecodecamp.org/news/content/images/2021/03/ykhg3yuzq8931--1-.png"
            alt="error-message"
          />
        </Container>
      );
    }

    return (
      <Container style={productsPageStyles.mainContainer}>
        <Container style={productsPageStyles.contentContainer}>
          <Typography style={productsPageStyles.categoryNameText}>
            {data.category?.name}
          </Typography>
          <ProductList products={data.category?.products || []} />
        </Container>
      </Container>
    );
  }
}

const ProductPage = withRouter<Props>(ProductPageComponent);

export default withFetchCategoriesQuery(ProductPage);
