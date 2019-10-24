import React from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

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
          <Nav />
          <main className="main">
            {this.state.movies.map(movie => (
              <div key={movie.id} className="movie">
                <img src={movie.image} alt={movie.title}></img>
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
          <Footer />
        </div>
      </>
    );
  }
}
