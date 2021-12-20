import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F17_PilarGiraldo.png?alt=media&token=6a175632-3676-4c2a-9f49-572d129cb05f";
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
              <p className="nombre">Dra. Pilar Giraldo </p>
              <p className="titulo-ponente">Hematología</p>
              <p className="trayectoria">
                Médica con especialidad en hematología. Jefa de Sección en Hospital Universitario Miguel Servet  Servicio de Hematología y Hemoterapia. Con amplia experiencia en ensayos clínicos en diversas Enfermedades Raras. Múltiples publicaciones internacionales. Es Fundadora de Fundación Española para el estudio y terapéutica de la enfermedad de Gaucher.
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
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F17_PilarGiraldo.png?alt=media&token=6a175632-3676-4c2a-9f49-572d129cb05f"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Pilar Giraldo </h2>
          <p className="titulo-ponente">Hematología</p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Pilar Giraldo </h2>
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
