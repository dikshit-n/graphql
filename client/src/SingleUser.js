import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { FETCH_SINGLE_USER } from "./Graphql/Queries/SingleUser";

const SingleUser = (props) => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(FETCH_SINGLE_USER);
  console.log(data);
  return <div>Hello</div>;
};

export default SingleUser;
