import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F3_danielcampos.png?alt=media&token=f80272aa-c8da-4353-9bba-023492278cd1";
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
              <p className="nombre">Dr. Daniel Campos</p>
              <p className="titulo-ponente">
                Médico Cirujano especialista en Genética Médica
              </p>
              <p className="trayectoria">
                Médico Cirujano, especialista en Genética Médica por la Facultad
                de médicina UANL. Médico Adscrito al Departamento de Genética
                Titular de la Residencia en Genética Médica Coordinador del Área
                de Genética Molecular
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
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F3_danielcampos.png?alt=media&token=f80272aa-c8da-4353-9bba-023492278cd1"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dr. Daniel Campos</h2>
          <p className="titulo-ponente">Pediatría </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Daniel Campos</h2>
          <p className="titulo-ponente">Pediatría </p>
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
