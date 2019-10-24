import React, { Component } from "react";
import { FaFilm, FaSearch } from "react-icons/fa";
import styles from "./nav.module.css";

export default class nav extends Component {
  render() {
    return (
      <header className={styles.header} role="navigation">
        <div className={styles.logo}>
          <h1>
            Cinema UI <FaFilm />
          </h1>
        </div>
        <nav className={styles.navigation}>
          <a href="/">What's on</a>

          <a href="/">Cinemas</a>

          <a href="/">Log in</a>

          <div className={styles.search}>
            <span>
              <FaSearch />
            </span>
            <input type="text" placeholder="Search"></input>
          </div>
        </nav>
      </header>
    );
  }
}
