import React, { Component } from "react";
import { FaFilm, FaSearch } from "react-icons/fa";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <header role="navigation">
        <div className={styles.logo}>
          <h1>
            Cinema UI <FaFilm />
          </h1>
        </div>
        <nav className={styles.navigation}>
          <Link to="/">What's on</Link>
          <Link to="/cinemas">Cinemas</Link>
          <Link to="/login">Log in</Link>
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
