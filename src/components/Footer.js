import React from "react";

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
            </a>
          </li>
          <li>
            <a href="https://business.facebook.com/latest/home?asset_id=101864688995598&nav_ref=bm_home_redirect">
              <i>
                <FaInstagram />
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/seer-latam/?viewAsMember=true">
              <i>
                {" "}
                <FaLinkedin />
              </i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SEERLATAM">
              <i>
                {" "}
                <FaTwitterSquare />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default footer;
