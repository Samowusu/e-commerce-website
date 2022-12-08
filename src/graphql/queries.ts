import gql from "graphql-tag";

export const FETCH_CATEGORIES = gql`
  query Categories {
    category {
      products {
        id
        name
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
