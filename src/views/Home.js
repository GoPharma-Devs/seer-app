
import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import logo from "../img/LOGO_SEER_WHITE_SLOGAN.png";
import Logo from '../img/logo.svg';
import HeroSlider1 from "../img/fondo-hero-slider.png";
import HeroSlider1R from "../img/fondo-hero-slider-r.png";
import ListaComite from "../components/ListaComite";
import ListaPonente from "../components/ListaPonentes";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
//import { ExternalLink } from "react-external-link";
import {
  //FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import {
  useScrollSection,
} from 'react-scroll-section';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import Carousel from 'react-bootstrap/Carousel'
function Home() {

  const homeSection = useScrollSection('comite');
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
        <div className="row" data-aos="fade-in">
          <Carousel className="Carousel-hero container-fluid"  >
            <Carousel.Item interval={5000}    >
              <img
                className="d-block w-100 slider"
                src={HeroSlider1}
                alt="First slide"
              />
              <img
                className="d-block  h-75 w-100 slider-r"
                src={HeroSlider1R}
                alt="First slide responsive"
              />
              <Carousel.Caption>
                <img src={logo} className="App-logo" alt="logo" />

                <h1 className="mt-2">Sociedad De Especialistas <br />en Enferemedades Raras</h1>
                <p>¡No te pierdas el 1er Congreso Internacional SEER 2022!</p>
                <Link className="btn-primario" to="/registro" >Registrate </Link>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}    >
              <img
                className="d-block w-100 slider"
                src={HeroSlider1}
                alt="First slide"
              />
              <img
                className="d-block  h-75 w-100 slider-r"
                src={HeroSlider1R}
                alt="First slide responsive"
              />

              <Carousel.Caption>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>1er Congreso Internacional</h1>
                <p>Aparta las fechas 17,18 y 19 de febrero.</p>
                <Link className="btn-primario" to="/registro" >Registro</Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}    >
              <img
                className="d-block w-100 slider"
                src={HeroSlider1}
                alt="First slide"
              />
              <img
                className="d-block  h-75 w-100 slider-r"
                src={HeroSlider1R}
                alt="First slide responsive"
              />

              <Carousel.Caption>
                <h1>¡No te pierdas el 1er Congreso <br /> internacional SEER 2022!</h1>

                <div className="container  ">
                  <ul className="row temas ">
                    <li className="col-6 col-sm" style={{ textAlign: "left" }}>Actualidades en el Manejo de la Hemofilia</li>
                    <li className="col-6 col-sm" style={{ textAlign: "left" }}>Raquitismo Hipofosfatémico Ligado al cromosoma X</li>
                    <li className="col-6 col-sm" style={{ textAlign: "left" }}>Atrofia Muscular Espinal</li>
                    <li className="col-6 col-sm" style={{ textAlign: "left" }}>Nirmann Pick Tipo C</li>
                    <li className="col-6 col-sm" style={{ textAlign: "left" }}>Neurofibromatosis Tipo 1</li>

                  </ul>
                </div>
                <h2>¡Registrate Ahora!</h2>

                <Link className="btn-primario" to="/congreso" >Saber más</Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

      </section>

      <div className="row mt-5" data-aos="fade-up" >
        <div className="container-fluid mt-5 mb-5 text-center">
          <p>Conoce más de este gran proyecto</p>
          <FaChevronDown className="bounce-2" onClick={homeSection.onClick} selected={homeSection.selected} />
        </div>

        <div className="row mt-5 mb-5  justify-content-center" data-aos="fade-up">
          <div className="col-12 d-flex justify-content-center">
            <img src={logo} className=" img-responsive" alt="SEER 2022" />
          </div>

        </div>



      </div>

      <section id="info" data-aos="fade-up">
        <div className="contenedor" data-aos="fade-up">
          <VerticalTimeline data-aos="fade-up"  >

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#103561', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #103561' }}


              icon={<img src={Logo} alt="" />}
            >
              <h3 className="titulo">¿QUIÉNES SOMOS?</h3>

              <p>
                SEER asociación civil constituída por profesionales de la salud y
                disciplinas que coadyuven con el objeto de promover la educación e
                investigación sobre las Enfermedades Raras; con el propósito de
                mejorar el conocimiento, abordaje y manejo de las mismas para
                favorecer la calidad de vida de los pacientes.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', color: '#103561' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}


              icon={<img src={Logo} alt="" />}
            >
              <h3 className="titulo">MISIÓN</h3>

              <p>
                Sensibilizar y educar a la comunidad médica sobre las enfermedades raras, con base en nuestros cuatro pilares: Concientización,
                Prevención, Diagnóstico y Manejo. Contribuiyendo a la difusión y
                correcto encause de las enfermedades raras, colaborando con los
                diferentes actores del ecosistema de salud y la sociedad civil.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#103561', color: '#fff' }}
              iconStyle={{ background: '#103561', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #103561' }}
              icon={<img src={Logo} alt="" />}
            >
              <h3 className="titulo">VISIÓN </h3>

              <p>
                SEER la asociación referente en NorLatam en investigación,
                diagnóstico, tratamiento y concientización de las enfermedades
                raras, generando conocimiento en la comunidad médica y la
                sociedad, provocando un impacto positivo en la atención y calidad
                de vida de los pacientes.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"

              iconStyle={{ background: '#103561', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #103561' }}
              icon={<img src={Logo} alt="" />}
            >

            </VerticalTimelineElement>

          </VerticalTimeline>
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
