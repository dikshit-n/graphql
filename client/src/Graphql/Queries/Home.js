import gql from "graphql-tag";

export const FETCH_POST_QUERRY = gql`
  query FetchUserQuery {
    getUsers {
      name
    }
  }
`;
