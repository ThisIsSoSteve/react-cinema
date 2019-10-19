import React from "react";
import axios from "axios";
import "./App.css";
import logoImage from "./images/cinema-logo-500.png";

export default class App extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios.get(`https://www.cinema-api.co.uk/movie/featured`).then(res => {
      console.log(res);

      const movies = res.data;
      this.setState({ movies });
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <header className="header" role="navigation">
            <div className="logo">
              <h1>Cinema UI</h1>
              <div>
                <img src={logoImage} alt="logo" />
              </div>
            </div>
            <nav className="navigation">
              <ul>
                <li>
                  <a href="/">What's on</a>
                </li>
                <li>
                  <a href="/">Cinemas</a>
                </li>
                <li>
                  <a href="/">Log in</a>
                </li>
              </ul>
            </nav>
          </header>
          <main className="main">
            main content
            <ul>
              {this.state.movies.map(movie => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          </main>
          <footer className="footer">footer</footer>
        </div>
      </>
    );
  }
}
