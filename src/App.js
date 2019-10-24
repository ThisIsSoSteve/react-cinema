import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Movie from "./components/movie";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <main className="main">
          <Movie />
        </main>
        <Footer />
      </div>
    );
  }
}
