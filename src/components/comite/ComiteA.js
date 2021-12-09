import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F1_araceliarellano.png?alt=media&token=6ac2fe5d-976f-495c-8dff-ccb92aba7407";
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
              <p className="nombre">Dra. Araceli Arellano </p>
              <p className="titulo-ponente">Reumatología Pediátrica</p>
              <p className="trayectoria">
                "Médico adscrito al servicio de Reumatología Pediátrica, de la
                UMAE Hospital de Pediatría del CMNO. Médico tratante de
                pacientes lisosomales y con enfermedades metabólicas de baja
                prevalencia. Miembro del GEEL. Profesora titular de Reumatología
                Pediátrica."
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
          src={ImgPonente}
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Araceli Arellano </h2>
          <p className="titulo-ponente">Reumatología Pediátrica</p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Araceli Arellano </h2>
          <p className="titulo-ponente">Reumatología Pediátrica</p>
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
