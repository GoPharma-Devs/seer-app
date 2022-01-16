import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/colaboradores-seer%2F8_IsraelRico.png?alt=media&token=6e35cb38-22d3-40df-9e8c-2064e1d140a2";
function ProfesorA() {
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
              src={ImgProfesor}
              className="imagen-modal"
              alt="imagen-comite a"
            />
            <div className="texto">
              <p className="nombre">Israel Rico</p>
              <p className="titulo-ponente">Médico cirujano </p>
              <p className="trayectoria">
                Médico cirujano con experiencia en áreas de alta especialidad dentro de la industra farmacéutica. Ha sido revisor de las revistas científicas Global Public Health y Latin American Journal of Clinical Sciences and Medical Technology, así como consultor en más de 40 proyectos de investigación de economía de la salud y epidemiología. Actualmente cursa la maestría en políticas públicas comparadas en la Facultad de Estudios Latinoamericanos en Ciencias Sociales (FLACSO).
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
        <img src={ImgProfesor} alt="comite" />
        <div className="info">
          <h2 className="nombre-ponente">Israel Rico</h2>
          <p className="titulo-ponente">Médico cirujano </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Israel Rico</h2>
          <p className="titulo-ponente">Médico cirujano </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ProfesorA;
