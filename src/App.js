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
          <Route path="*">
            <div className="flex flex-col p-4 items-center space-y-4 ">
              <div className="font-bold text-3xl">
                ERROR 404 (Page not found)
              </div>
              <Link to="/" className="bg-blue-600 text-gray-200 font-bold p-4">
                GO HOME
              </Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
