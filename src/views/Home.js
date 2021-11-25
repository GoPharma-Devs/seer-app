import React from "react";
import logo from "../img/LOGO_SEER_WHITE.png";
import Footer from "../components/Footer";

import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
function Home() {
  return (
    <>
      <section className="Home">
        <div className="contenedor">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </section>
      <section>
        <div className="contenedor-nosotros">
          <div className="nosotros-el">
            <h2 className="titulo">¿QUIENES SOMOS?</h2>
            <br />
            <p>
              SEER asociación civil constituída por profesionales de la salud y
              disciplinas que coadyuven con el objeto de promover la educación e
              investigación sobre las Enfermedades Raras; con el propósito de
              mejorar el conocimiento, abordaje y manejo de las mismas para
              favorecer la calidad de vida de los pacientes.
            </p>
          </div>
          <div className="nosotros-el">
            <h2 className="titulo">MISIÓN</h2>
            <br />
            <p>
              Sensibilizar y educar a la comunidad médica sobre las enfermedades
              raras, con base en nuestros cuatro pilares: Concientización,
              Prevención, Diagnóstico y Manejo. Contribuiyendo a la difusión y
              correcto encause de las enfermedades raras, colaborando con los
              diferentes actores del ecosistema de salud y la sociedad civil.
            </p>
          </div>
          <div className="nosotros-el">
            <h2 className="titulo">VISIÓN </h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              excepturi dolorum, mollitia veniam accusantium corrupti omnis iste
              quis laborum quasi non, optio, incidunt consequatur dolore.
              Aspernatur nulla similique adipisci maxime. Minima autem quia
              beatae doloremque quas itaque harum ab, temporibus quidem quaerat
              rem praesentium aliquam iste, id, modi libero voluptatibus facilis
              dolorum aut voluptas amet cumque labore. Laborum, voluptas
              blanditiis?
            </p>
          </div>
          <div className="nosotros-el">
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
        </div>
      </section>
      <section className="contacto-section">
        <br />
        <h2>
          Cualquier duda, comentario o interés por favor comunicarse al correo:
        </h2>

        <a href="mailto:comunicacion@seerlatam.org">
          comunicacion@seerlatam.org
        </a>
      </section>
      <Footer />
    </>
  );
}

export default Home;
