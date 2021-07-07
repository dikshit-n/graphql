import { useQuery } from "@apollo/react-hooks";
import { NavLink } from "react-router-dom";
import { FETCH_POST_QUERRY } from "./Graphql/Queries/Home";

const Home = () => {
  const { loading, data, error } = useQuery(FETCH_POST_QUERRY);
  console.log(loading, data ? data.getUsers : "no", error?.message);
  return (
    <div>
      Home Page
      <NavLink to="/register">Register</NavLink>
      <NavLink to={`/singleuser/${data ? data.getUsers[0]?.name || "" : ""}`}>
        See a random user info
      </NavLink>
    </div>
  );
};

export default Home;
