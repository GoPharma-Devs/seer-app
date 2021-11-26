import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F14_guillermowakida.png?alt=media&token=8307c5be-282e-4319-affd-25f7ba21452b";
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
              <p className="nombre">Dr. Guillermo Wakida </p>
              <p className="titulo-ponente">Pediatra </p>
              <p className="trayectoria">----</p>
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
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F14_guillermowakida.png?alt=media&token=8307c5be-282e-4319-affd-25f7ba21452b"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dr. Guillermo Wakida </h2>
          <p className="titulo-ponente">Pediatra </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Guillermo Wakida </h2>
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
