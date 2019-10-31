import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </div>
    );
  }
}
