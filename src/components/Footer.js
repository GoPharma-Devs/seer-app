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
            <a href="https://www.instagram.com/seer.latam/">
              <i>
                <FaFacebookSquare />
              </i>
              seer.latam
            </a>
          </li>
          <li>
            <a href="https://business.facebook.com/latest/home?asset_id=101864688995598&nav_ref=bm_home_redirect">
              <i>
                <FaInstagram />
              </i>
              SEER LATAM
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/seer-latam/?viewAsMember=true">
              <i>
                {" "}
                <FaLinkedin />
              </i>
              SEER LATAM
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SEERLATAM">
              <i>
                {" "}
                <FaTwitterSquare />
              </i>
              SEERLATAM
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default footer;
