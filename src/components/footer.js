import React, { Component } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
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
    );
  }
}
