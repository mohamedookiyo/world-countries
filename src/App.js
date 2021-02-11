import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <main>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
