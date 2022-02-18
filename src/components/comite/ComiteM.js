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
              <p className="nombre">Dra. Ericka Vargas Quevedo </p>
              <p className="titulo-ponente">Medicina Interna Pediátrica </p>
              <p className="trayectoria">
                Médico Internista Pediatra, con Maestria en Ciencias de la Salud y Especializacion en Investigación (IPN), Master Universitario en Enfermedades Metabolicas Hereditarias (Universidad de Santiago de Compostela), Master en Enfermedades de Depósito Lisosomal (Unidad de Investigación Traslacional, Instituto Aragonés de Ciencias de la Salud, Madrid, España), MPS, Fabry y Gaucher Disease (Training Certification of FYMCA Medical ltd, Panamá City (2017-2019). Profesor adjunto de la especialidad (UNAM), participa cómo speaker en diversos eventos científicos, cuenta con diversas publicaciones nacionales e internacionales y diversos capítulos en el area. Actualmente adscrita al servicio de Medicina Interna Pediatrica del CMN 20 de Noviembre, Fundadora y Coordinadora de la Clínica de Errores Innatos del Metabolismo Pediátricos y Enfermedades Raras a nivel nacional.
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


      <div className="col-lg-3 col-md-6 col-sm-6 ponente-card" onClick={() => setModalShow(true)}>
        <div className="single-team m-2 ">
          <div className="team-img">
            <img src={ImgPonente} alt="comite" />
          </div>
          <div className="info_box ">
            <h4 className="name mt-3">Dra. Ericka Vargas Quevedo</h4>
            <p className="position">Medicina Interna Pediátrica</p>
          </div>
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
