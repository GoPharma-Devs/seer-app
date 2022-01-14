import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2FDra.%20Belmont.png?alt=media&token=e48819c1-0403-4310-bae4-45a469288040";
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
              <p className="nombre">Dra. Leticia Belmont </p>
              <p className="titulo-ponente">Ciencias Médicas </p>
              <p className="trayectoria">
                Es investigadora en Ciencias Médicas en el Laboratorio de
                Errores Innatos del Metabolismo y Tamiz del Instituto Nacional
                de pediatría (INP), es Académica Numeraria en la Academia
                Mexicana de Pediatría A.C., pertenece al Comité Científico de la
                Confederación Nacional de Pediatras de México A.C. y al Comité
                de Enfermedades Metabolicas y Tamiz de la Academia Mexicana de
                Pediatría A.C.
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
          <h2 className="nombre-ponente">Dra. Leticia Belmont </h2>
          <p className="titulo-ponente">Ciencias Médicas</p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Leticia Belmont </h2>
          <p className="titulo-ponente">Ciencias Médicas</p>
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
