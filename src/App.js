import React from "react";
import Header from "./component/Header";
import Signup from "./component/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./component/Login";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Signup />
            <Footer />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="*">NOT FOUND</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
