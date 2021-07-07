import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation RegisterUser($name: String!, $email: String!, $password: String!) {
    addUser(userInput: { name: $name, email: $email, password: $password }) {
      token
      type
    }
  }
`;
