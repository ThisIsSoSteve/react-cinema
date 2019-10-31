import React, { Component } from "react";
import styles from "./movie.module.css";

export default class Movie extends Component {
  render() {
    return (
      <>
        {this.props.movies.map(movie => (
          <div key={movie.id} className={styles.movie}>
            <img src={movie.image} alt={movie.title}></img>
            <div className={styles.details}>
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
      </>
    );
  }
}
