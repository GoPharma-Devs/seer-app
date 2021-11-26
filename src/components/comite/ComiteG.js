import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F7_leticiamunive.png?alt=media&token=e1d43738-41de-4cc7-a746-8aaf4f5348cf";
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
              <p className="nombre">Dra. Leticia Munive </p>
              <p className="titulo-ponente">Médico pediatra </p>
              <p className="trayectoria">
                Médico Pediatra y Neurólogo Pediatra certificada por la UNAM,
                por el Consejo Mexicano de Pediatría y por el Consejo Mexicano
                de Neurología Maestría en Ciencias Médicas y Neuroinmunología
                Neuróloga Pediatra Adscrita al Servicio de Neurología del
                Instituto Nacional de Pediatría y al servicio de Pediatría del
                Hospital Médica Sur y Angeles Pedregal Ex Presidente de la
                Sociedad Mexicana de Neurología Pediátrica AC (2015 – 2017)
                Consultora en enfermedades raras para el Institutito Nacional de
                Pediatría e ISSSTE Autora y coautora de diversos capítulos y
                artículos relacionados a Epilepsia, Trastornos del
                Neurodesarrollo, Enfermedades Neuroinmunológicas y metabólicas
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
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F7_leticiamunive.png?alt=media&token=e1d43738-41de-4cc7-a746-8aaf4f5348cf"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Leticia Munive </h2>
          <p className="titulo-ponente">Médico pediatra </p>
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
