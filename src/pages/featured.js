import React, { Component } from "react";
import Movie from "../components/movie";
import axios from "axios";

export default class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    axios.get(`https://www.cinema-api.co.uk/movie/featured`).then(res => {
      const movies = res.data;
      this.setState({ movies });
    });
  }

  render() {
    // console.log(this.state.movies);
    return (
      <div>
        <Movie movies={this.state.movies} />
      </div>
    );
  }
}
