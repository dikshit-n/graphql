import gql from "graphql-tag";

export const FETCH_SINGLE_USER = gql`
  query FetchSingleUser {
    getUser {
      name
    }
  }
`;
