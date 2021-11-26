import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente = "IMAGEN";
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
              <p className="nombre">Dr. Jorge Alberto Ramos </p>
              <p className="titulo-ponente">Médico Cirujano y Partero </p>
              <p className="trayectoria">
                Médico Cirujano y Partero, Especialista en Pediatría por la
                Universidad de Guadalajara, con Maestría en Desarrollo Humanos
                (ITESO) y Máster Universitario de Cuidados Paliativos en el
                Enfermo Oncológico (Universidad de Salamanca). Actualmente
                adscrito al Servicio de Medicina Paliativa y Dolor del Hospital
                General de Occidente (Secretaría de Salud Jalisco) y Profesor
                Adjunto de la Especialidad (UDG). Con experiencia en atención
                clínica, docencia de pregrado y posgrado, investigación y
                política pública en medicina paliativa y soporte para la calidad
                de vida para niñas y niños con condiciones limitantes o
                amenazantes para la vida y a sus familias.
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
        <img src="IMAGEN" alt="comite" />
        <div className="info">
          <h2 className="nombre-ponente">Dr. Jorge Alberto Ramos </h2>
          <p className="titulo-ponente">Médico Cirujano y Partero </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Jorge Alberto Ramos </h2>
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
