
import React, { useEffect } from 'react';
//import { Link } from "react-router-dom"
import logo from "../img/LOGO_SEER_WHITE_SLOGAN.png";
import ListaComite from "../components/ListaComite";
import ListaPonente from "../components/ListaPonentes";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
function Home() {
  useEffect(() => {

    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: 'ease-in-out',
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: 'bottom-top',
    });
  }, [])

  return (
    <>
      <section className="Home" data-aos="fade-in">
        <div className="contenedor">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="contenedor-botones">
            {/* < Link className="btn-primario" to="/registro">Registro</Link> */}

          </div>

        </div>
      </section>
      <section data-aos="fade-up">
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
              SEER la asociación referente en NorLatam en investigación,
              diagnóstico, tratamiento y concientización de las enfermedades
              raras, generando conocimiento en la comunidad médica y la
              sociedad, provocando un impacto positivo en la atención y calidad
              de vida de los pacientes.
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
      <section className="comite-contenedor" data-aos="fade-up">
        <div className="contenedor">
          <h4>Conoce a nuestro </h4>
          <h3 style={{ textAlign: "center" }}>COMITÉ CIENTÍFICO</h3>
          <br />
          <br />
          <ListaComite />
          <br />
          {/* <Agendas />
        <br />
        <h4>Conoce a nuestros </h4>
        <h2>PROFESORES</h2>
         */}<br />
          {/* <br />
          <h4>Conoce a nuestros </h4>
          <h2>COLABORADORES</h2>
          <br />
          <br />
          <ListaPonente /> */}
          {/* <Patrocinadores />
        <Aliados /> */}
        </div>
      </section>
      <section className="contacto-section" data-aos="fade-up">
        <br />
        <h2>
          Cualquier duda, comentario o interés por favor comunicarse al correo:
        </h2>

        <a href="mailto:comunicacion@seerlatam.org">
          comunicacion@seerlatam.org
        </a>
      </section>

    </>
  );
}

export default Home;
