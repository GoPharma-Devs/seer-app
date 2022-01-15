import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2FGenerico_1.png?alt=media&token=95154929-c408-4e38-a8bd-3855524f27be";
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
              <p className="nombre">Kenji Lopez</p>
              <p className="titulo-ponente">Abogado</p>
              <p className="trayectoria">
                Abogado con Maestría en Políticas Públicas en el Tecnológico de Monterrey. Con estudios en las Universidades de Harvard, Georgetown y en la Universidad Pontificia Comillas, en España. Director para Organismos Especializados de la ONU. Miembro de la Barra Mexicana de Abogados. En 2017, formalizó la constitución de la organización Cáncer Warriors de México.
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
          <h2 className="nombre-ponente">Kenji Lopez</h2>
          <p className="titulo-ponente">Abogado</p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Kenji Lopez</h2>
          <p className="titulo-ponente">Abogado</p>
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
