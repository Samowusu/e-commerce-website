import gql from "graphql-tag";

export const FETCH_CATEGORIES = gql`
  query Categories {
    category {
      products {
        id
        name
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
