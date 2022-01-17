
import React, { useEffect } from 'react';
//import { Link } from "react-router-dom"
import logo from "../img/LOGO_SEER_WHITE_SLOGAN.png";
//import HeroSlider1 from "../img/fondo-hero-slider.png";
import ListaComite from "../components/ListaComite";
import ListaPonente from "../components/ListaPonentes";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { ExternalLink } from "react-external-link";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

//import Carousel from 'react-bootstrap/Carousel'
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
      {/* <section className="Home" data-aos="fade-in">
        <Carousel className="Carousel-hero container" fade data-aos="fade-in">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HeroSlider1}
              alt="First slide"
            />
            <Carousel.Caption>
              <img src={logo} className="App-logo" alt="logo" />
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link className="btn-primario" to="/registro" >Registro</Link>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HeroSlider1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link className="btn-primario" to="/registro" >Registro</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HeroSlider1}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Link className="btn-primario" to="/inicio-sesion" >Congreso</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </section> */}
      <section className="Home" data-aos="fade-in">
        <div className="contenedor">
          <img src={logo} className="App-logo" alt="seer 2022" />
          <h1>SEER 2022</h1>
          <h2>17, 18 y 19 de febrero</h2>
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
              Sensibilizar y educar ExternalLinkla comunidad médica sobre las enfermedades raras, con base en nuestros cuatro pilares: Concientización,
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
                <ExternalLink to="https://www.instagram.com/seer.latam/">
                  <i>
                    <FaFacebookSquare />
                  </i>
                  seer.latam
                </ExternalLink>
              </li>
              <li>
                <ExternalLink to="https://business.facebook.com/latest/home?asset_id=101864688995598&nav_ref=bm_home_redirect">
                  <i>
                    <FaInstagram />
                  </i>
                  SEER LATAM
                </ExternalLink>
              </li>
              <li>
                <ExternalLink to="https://www.linkedin.com/company/seer-latam">
                  <i>
                    {" "}
                    <FaLinkedin />
                  </i>
                  SEER LATAM
                </ExternalLink>
              </li>
              <li>
                <ExternalLink to="https://twitter.com/SEERLATAM">
                  <i>
                    {" "}
                    <FaTwitterSquare />
                  </i>
                  SEERLATAM
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="comite-contenedor" >
        <div className="contenedor">

          <ListaComite />

          {/* <Agendas />
        <br />
        <h4>Conoce a nuestros </h4>
        <h2>PROFESORES</h2>
         */}
          <ListaPonente />
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
