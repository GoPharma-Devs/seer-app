import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F13_erikavargas.png?alt=media&token=84d4a798-01fe-4ae5-aa54-e76b5c1bce5e";
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
              <p className="nombre">Dra. Erika Vargas </p>
              <p className="titulo-ponente">Medica cirujana </p>
              <p className="trayectoria">
                Medica cirujana universidad nacional autónoma de méxico. (1991 -
                1997) cp 2581954 pediatría medica issdf secretaria de salud,
                (1998-2001) reconocimiento universidad nacional autónoma de
                méxico. Ced. Esp. 3410098. Avalada por el consejo mexicano de
                certificacion en pediatria numero 100073 medicina interna
                pediátrica instituto nacional de pediatría. Reconocimiento
                universidad nacional autónoma de méxico. Núm de registro. Unam
                ca96-03 período 2001-2003 maestría en ciencias de la salud con
                especialidad en investigación. Especialización en investigación.
                Instituto politécnico nacional, título con registro oficial
                b141239 cédula (año 2014 - 2016). Master en enfermedades de
                depósito lisosomal (edl) fundación española para el estudio y
                tratamiento de la enfermedad de gaucher y otras lisosomales
                (feeteg). Unidad de investigación traslacional. Instituto
                aragonés de ciencias de la salud. España. (Año 2016 - 2017).
                Créditos 5.1 ects. Master en enfermedades metabólicas
                hereditarias universidad de santiago de compostela, españa,
                aceptada septiembre 2020, inicio enero 2021 a la fecha (cursando
                actualmente). Mps disorders, fabry, gaucher disease training
                certification of fymca medical ltd. Panama city, panama. (Mayo
                2017 a enero 2019).
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
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F13_erikavargas.png?alt=media&token=84d4a798-01fe-4ae5-aa54-e76b5c1bce5e"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Erika Vargas </h2>
          <p className="titulo-ponente">Medica cirujana </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Erika Vargas </h2>
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
