import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
function footer() {
  return (
    <footer>
      <div className="contenedor-footer">
        <ul>
          <li>
            <Link to="/">
              <FaFacebookSquare />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaTwitterSquare />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default footer;
