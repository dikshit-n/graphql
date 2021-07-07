import { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { REGISTER_USER } from "./Graphql/Queries/Register";
// import { FETCH_POST_QUERRY } from "./Graphql/Queries/Home";

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChange = ({ target: { value, name } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [registerUser, { loading, data, error }] = useMutation(REGISTER_USER, {
    onCompleted(proxy, data) {
      console.log(proxy, data);
    },
    onError(err) {
      console.log(err);
    },
    variables: formData,
  });

  // const [/* Submit function */ addUser, { loading, error }] = useMutation(
  //   REGISTER_USER,
  //   {
  //     /* Success callback */ update(proxy, data) {
  //       /*
  //         // use cached data (kind of redux global state)
  //         const data = proxy.readQuery({ query: FETCH_POST_QUERRY });
  //         data.getPosts = [ result.data.createPosts, ...data.getPosts ]
  //         proxy.writeQuery({ query: FETCH_POST_QUERRY, data })
  //         */
  //       console.log(data);
  //       props.history.push("/");
  //     },
  //     /* Error Callback */ onError(err) {
  //       console.log(err);
  //     },
  //     /* Submit Data */ variables: formData,
  //   }
  // );

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={formData.name}
        name="name"
        placeholder="name"
        onChange={onChange}
      />
      <input
        value={formData.email}
        name="email"
        placeholder="email"
        onChange={onChange}
      />
      <input
        value={formData.password}
        name="password"
        placeholder="password"
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
