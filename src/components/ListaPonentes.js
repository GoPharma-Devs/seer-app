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
      <br />
      <h4>Conoce a nuestros </h4>
      <h3 style={{ textAlign: "center" }}>COLABORADORES</h3>
      <br />
      <br />
      <section className="profesores" data-aos="fade-up">
        <ProfesorA data-aos="fade-up" />
        <ProfesorB data-aos="fade-up" />
        <ProfesorC data-aos="fade-up" />
        <ProfesorD data-aos="fade-up" />
        <ProfesorE data-aos="fade-up" />
        <ProfesorF data-aos="fade-up" />
        <ProfesorG data-aos="fade-up" />
        <ProfesorH data-aos="fade-up" />
        <ProfesorI data-aos="fade-up" />
        <ProfesorJ data-aos="fade-up" />
      </section>
    </Section>
  );
}

export default ListaPonente;
