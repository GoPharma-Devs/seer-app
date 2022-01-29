import React from "react";
//import { Link } from 'react-router-dom';

import ComiteA from "./comite/ComiteA";
import ComiteB from "./comite/ComiteB";
import ComiteC from "./comite/ComiteC";
import ComiteD from "./comite/ComiteD";
import ComiteE from "./comite/ComiteE";
import ComiteF from "./comite/ComiteF";
import ComiteG from "./comite/ComiteG";
import ComiteH from "./comite/ComiteH";
import ComiteI from "./comite/ComiteI";
import ComiteJ from "./comite/ComiteJ";
import ComiteK from "./comite/ComiteK";
import ComiteL from "./comite/ComiteL";
import ComiteM from "./comite/ComiteM";
import ComiteN from "./comite/ComiteN";
import ComiteO from "./comite/ComiteO";
import ComiteP from "./comite/ComiteP";
import ComiteR from "./comite/ComiteR";
import ComiteS from "./comite/ComiteS";
import ComiteT from "./comite/ComiteT";
import { Section } from 'react-scroll-section';
function ListaComite() {
  return (
    <Section id="comite">


      <section className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 col-md-9 mt-5" >
            <div className="section-tittle section-tittle2 mb-50">
              <h2 className="titulo">Conoce al comité científico<br /> que integra SEER</h2>
              <p>El Comité Científico del SEER esta conformado por médicos expertos en enfermedades de baja prevalencia y con una gran trayectoria en sus áreas.</p>
            </div>
          </div>

          <ComiteA />
          <ComiteB />
          <ComiteC />
          <ComiteD />
          <ComiteE />
          <ComiteF />
          <ComiteG />
          <ComiteH />
          <ComiteI />
          <ComiteJ />
          <ComiteK />
          <ComiteL />
          <ComiteM />
          <ComiteN />
          <ComiteO />
          <ComiteP />
          <ComiteR />
          <ComiteS />
          <ComiteT />

        </div>


      </section>


    </Section >
  );
}

export default ListaComite;
