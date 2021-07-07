import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import SingleUser from "./SingleUser";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/singleuser/:id" component={SingleUser} />
    </Router>
  );
}

export default App;
