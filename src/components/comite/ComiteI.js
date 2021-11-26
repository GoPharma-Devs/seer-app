import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F9_andreanavarrete.png?alt=media&token=5021d486-a872-4f29-be46-f8697c8c7f08";
function Comite() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        className="text-light"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="contenedor-modal d-flex">
            <Button className="boton-cerrar" onClick={props.onHide}>
              x
            </Button>
            <img
              src={ImgPonente}
              className="imagen-modal"
              alt="imagen-comite a"
            />
            <div className="texto">
              <p className="nombre">Dra. Andrea Navarrete </p>
              <p className="titulo-ponente">Médico pediatra </p>
              <p className="trayectoria">
                Egresada de la carrera de Medicina por la Facultad de Medicina
                UNAM, con especialidad en Pediatría Médica (Hospital de
                Pediatría CMN Siglo XXI IMSS), recertificada ante el Consejo
                Mexicano de Certificación en Pediatría. Cuenta con diplomados en
                Epidemiología Clínica, del Programa Institucional de Tutorías de
                la Facultad de Medicina y Formación de Expertos en el Modelo
                Educativo para Desarrollar Actividades Profesionales Confiables
                (MEDAPROC). Fue médica adscrita de la Unidad de Terapia
                Intermedia e Intensiva Neonatal del Hospital General Regional
                “Carlos Mac Gregor Sanchez Navarro” y profesor universitario de
                la carrera de medicina. Perteneció al Programa de Primas al
                Desempeño del Personal Académico de Tiempo Completo (PRIDE)
                nivel “C” y ha sido coordinadora Core de Pediatría y de Cirugía
                en la revisión y actualización del programa académico de
                Internado y evaluador en la fase práctica del Examen Profesional
                con el “Examen Clínico Objetivo Estructurado modalidad Virtual”.
                Actualmente es Técnico Académico Asociado “C” de la Facultad de
                Medicina de la UNAM y cuenta con investigaciones y artículos
                científicos pediátricos publicados, ha participado como ponente
                en diversos eventos nacionales e internacionales.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <React.Fragment>
      {" "}
      <div className="comite-el" onClick={() => setModalShow(true)}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F9_andreanavarrete.png?alt=media&token=5021d486-a872-4f29-be46-f8697c8c7f08"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Andrea Navarrete </h2>
          <p className="titulo-ponente">Médico pediatra </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Andrea Navarrete </h2>
          <p className="titulo-ponente">Nefrología Pediátrica </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default Comite;
