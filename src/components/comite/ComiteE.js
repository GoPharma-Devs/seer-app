import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F5_analimon.png?alt=media&token=24748158-19f8-44ab-8771-b9c5c58e0d48";
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
              <p className="nombre">Dra. Ana Limón</p>
              <p className="titulo-ponente">Medico pediatra </p>
              <p className="trayectoria">
                Egresada de la carrera de Medicina por la Universidad La Salle,
                con especialidad en Pediatría Médica (Hospital Central Norte de
                Pemex) y estudios en epidemiología clínica. Ha sido Jefa del
                Área de Pediatría, Presidenta del Comité de Bioética y Directora
                General del Hospital Central Sur de Alta Especialidad de Pemex
                Picacho. Es profesor titular del Curso de Pediatría por la UNAM,
                en 2000 fue nombrada miembro asesor del Comité Académico de
                Pediatría de Posgrado de la UNAM y miembro del Comité Técnico de
                Postgrado del 2006 al 2017. En el Consejo Mexicano de
                Certificación en Pediatría ha participado como tesorera y
                vicepresidenta. Ha sido miembro de distintas asociaciones
                médicas, fundadora de la Asociación Mexicana de Pedíatras de
                Petróleos Mexicanos. Tesorera, vicepresidenta y presidenta de la
                Academia Mexicana de Pediatría y Presidenta del Consejo Mexicano
                de Certificación en Pediatria. Actualmente es Secretaria Clinica
                de la Facultad de Medicina de la UNAM. Cuenta con
                investigaciones y artículos científicos pediátricos publicados,
                ha participado como ponente en diversos eventos nacionales e
                internacionales. Coautora de 2 libros Tópicos en Pediatria 2017
                y Sepsis 2018.
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
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F5_analimon.png?alt=media&token=24748158-19f8-44ab-8771-b9c5c58e0d48"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Ana Limón</h2>
          <p className="titulo-ponente">Medico pediatra </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Ana Limón</h2>
          <p className="titulo-ponente">Medico pediatra </p>
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
