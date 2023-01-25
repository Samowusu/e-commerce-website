import gql from "graphql-tag";

export const FETCH_CATEGORIES = gql`
  query Categories($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        description
        brand
        attributes {
          id
          name
          type
          items {
            id
            value
          }
        }
        inStock
        category
        gallery
        prices {
          amount
          currency {
            symbol
          }
        }
      }
    }
  }
`;

export const FETCH_CLOTHES = gql`
  query Categories {
    category(input: { title: "clothes" }) {
      products {
        id
        name
        description
        brand
        attributes {
          id
          name
          type
          items {
            id
            value
          }
        }
        inStock
        category
        gallery
        prices {
          amount
          currency {
            symbol
          }
        }
      }
    }
  }
`;

export const FETCH_CURRENCIES = gql`
  query Categories {
    currencies {
      label
      symbol
    }
  }
`;

export const FETCH_PRODUCT_DETAILS = gql`
  query Categories($id: String!) {
    product(id: $id) {
      id
      name
      description
      brand
      attributes {
        id
        name
        type
        items {
          id
          value
        }
      }
      inStock
      category
      gallery
      prices {
        amount
        currency {
          symbol
        }
      }
    }
  }
`;
