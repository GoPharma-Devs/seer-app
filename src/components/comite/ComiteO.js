import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente = "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F15_franciscozun%CC%83iga.png?alt=media&token=5c32afc1-2275-479f-939f-e2bbd6743fbd";
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
              <p className="nombre">Dr. Francisco Zuñiga </p>
              <p className="titulo-ponente">Genética medica </p>
              <p className="trayectoria">
                Egresado de la Universidad Michoacana de San Nicolás de Hidalgo
                con especialidad en Genética Médica (Hospital Infantil de México
                Federico Gómez). Cuenta con posgrados de Alta Especialidad en
                Genodermatosis (Hospital General de México) y Neurogenética
                (Instituto Nacional de Neurología y Neurocirugía “Manuel Velasco
                Suárez”) y se encuentra cursando la maestría en Ciencias Médicas
                y Odontológicas (Hospital Infantil de México Federico Gómez) y
                cuenta con estudios en formación docente. Miembro de la
                Asociación Mexicana de Genética y certificado por el Consejo
                Mexicano de Genética Ha sido vocal en la región sur de la
                Asociación Mexicana de Genética, profesor de pregrado de la
                Facultad de Medicina Humana Campus IV Tapachula de la
                Universidad Autónoma de Chiapas y profesor de la Escuela de
                Medicina del Instituto de Estudios Superiores de Chiapas
                “Universidad Salazar” Actualmente es médico Especialista
                Adscrito de Genética del Hospital Regional de Alta Especialidad
                Ciudad Salud en Tapachula, Chiapas y Práctica privada. Vocal de
                los Comités de Bioética y Ética en Investigación del Hospital
                Regional de Alta Especialidad Ciudad Salud.
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
        <img src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F15_franciscozun%CC%83iga.png?alt=media&token=5c32afc1-2275-479f-939f-e2bbd6743fbd" alt="comite" />
        <div className="info">
          <h2 className="nombre-ponente">Dr. Francisco Zuñiga </h2>
          <p className="titulo-ponente">Genética medica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Francisco Zuñiga </h2>
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
