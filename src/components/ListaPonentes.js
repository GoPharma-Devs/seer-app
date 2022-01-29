import React from "react";
import ProfesorA from "./profesores/ProfesorA";
import ProfesorB from "./profesores/ProfesorB";
import ProfesorC from "./profesores/ProfesorC";
import ProfesorD from "./profesores/ProfesorD";
import ProfesorE from "./profesores/ProfesorE";
import ProfesorF from "./profesores/ProfesorF";
import ProfesorG from "./profesores/ProfesorG";
import ProfesorH from "./profesores/ProfesorH";
import ProfesorI from "./profesores/ProfesorI";
import ProfesorJ from "./profesores/ProfesorJ";
import { Section } from 'react-scroll-section';
function ListaPonente() {
  return (
    <Section id="colab">
      <div className="container">

        <h3 className="titulo" style={{ textAlign: "center", fontSize: "2.2rem", }}> Conoce a nuestros  <br />colaboradores</h3>
        <br />
        <br />
        <section className="row" data-aos="fade-up">
          <ProfesorA />
          <ProfesorB />
          <ProfesorC />
          <ProfesorD />
          <ProfesorE />
          <ProfesorF />
          <ProfesorG />
          <ProfesorH />
          <ProfesorI />
          <ProfesorJ />
        </section>
      </div>
    </Section>
  );
}

export default ListaPonente;
