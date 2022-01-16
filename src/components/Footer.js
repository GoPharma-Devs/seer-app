import React from "react";
import { ExternalLink } from "react-external-link";
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
            <ExternalLink href="https://www.facebook.com/SEER-LATAM-101864688995598/">
              <i>
                <FaFacebookSquare />
              </i>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.instagram.com/seer.latam/">
              <i>
                <FaInstagram />
              </i>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.linkedin.com/company/seer-latam/?viewAsMember=true">
              <i>
                {" "}
                <FaLinkedin />
              </i>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://twitter.com/SEERLATAM">
              <i>
                {" "}
                <FaTwitterSquare />
              </i>
            </ExternalLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default footer;
