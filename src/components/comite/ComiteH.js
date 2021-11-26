import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F8_juanainesnavarrete.png?alt=media&token=e80f2ee2-cdc2-4a6d-81dd-c29263984f2a";
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
              <p className="nombre">Dra. Juana Inés Navarrete</p>
              <p className="titulo-ponente">Genética Médica </p>
              <p className="trayectoria">
                Médico Genetista egresada de la UNAM. Actualmente Jefa del
                Servicio de Genética del Hospital Central Sur de Alta
                Especialidad PEMEX Profesor titular de Genética Médica de la
                carrera de Médico Cirujano, Facultad de Medicina UNAM Miembro de
                la Asociación Mexicana de Genética Humana y del Consejo Mexicano
                de Especialistas en Genética Humana. Miembro Fundador del Grupo
                de Estudios al Nacimiento.
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
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F8_juanainesnavarrete.png?alt=media&token=e80f2ee2-cdc2-4a6d-81dd-c29263984f2a"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Juana Inés Navarrete</h2>
          <p className="titulo-ponente">Genética Médica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Juana Inés Navarrete</h2>
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
