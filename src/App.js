import React from "react";
import axios from "axios";
import "./App.css";
import logoImage from "./images/cinema-logo-500.png";
import {
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

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
              <div className="search">
                <span className="searchIcon">
                  <FaSearch />
                </span>
                <input type="text" placeholder="Search..."></input>
              </div>
            </nav>
          </header>
          <main className="main">
            {this.state.movies.map(movie => (
              <div key={movie.id} className="movie">
                <div className="image">
                  <img src={movie.image} alt={movie.title}></img>
                </div>
                <div className="details">
                  <h2>{movie.title}</h2>
                  <p>{movie.description}</p>
                  <h4>Cast</h4>
                  <p>{movie.cast}</p>
                  <h4>Director</h4>
                  <p>{movie.director}</p>
                  <h4>Running time</h4>
                  <p>{movie.runningTime} mins</p>
                </div>
              </div>
            ))}
          </main>
          <footer className="footer">
            <section className="footer-about-us">
              <h3>About Us</h3>
              <ul>
                <li>FAQs</li>
                <li>Feedback</li>
                <li>Careers</li>
              </ul>
            </section>
            <section className="footer-legal">
              <h3>Legal</h3>
              <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </section>
            <section className="footer-social">
              <h3>Social</h3>
              <ul>
                <li>
                  <FaFacebook />
                  Facebook
                </li>
                <li>
                  <FaTwitter />
                  Twitter
                </li>
                <li>
                  <FaInstagram />
                  Instagram
                </li>
                <li>
                  <FaYoutube />
                  Youtube
                </li>
              </ul>
            </section>
          </footer>
        </div>
      </>
    );
  }
}
