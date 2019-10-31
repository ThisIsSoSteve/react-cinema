import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom";
import Featured from "./pages/featured";
import Cinemas from "./pages/cinemas";
import Login from "./pages/login";
import Error from "./pages/error";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Featured} />
            <Route exact path="/cinemas" component={Cinemas} />
            <Route exact path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
