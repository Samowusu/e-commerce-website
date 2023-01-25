import gql from "graphql-tag";

export const FETCH_CATEGORIES = gql`
  query Categories {
    category {
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
