import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F4_albertohidalgo.png?alt=media&token=31421042-b65d-438a-a452-87e61e6d3294";
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
              <p className="nombre">Dr. Alberto Hidalgo</p>
              <p className="titulo-ponente">Genética Médica</p>
              <p className="trayectoria">
                Médico Especialista en Genética Médica Doctorado en Genética.
                Investigador en Ciencias Médicas D, Miembro del Sistema Nacional
                de Investigadores: Nivel 1, Certificado por el Consejo Mexicano
                de Genética Humana.
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
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F4_albertohidalgo.png?alt=media&token=31421042-b65d-438a-a452-87e61e6d3294"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dr. Alberto Hidalgo</h2>
          <p className="titulo-ponente">Genética Médica</p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Alberto Hidalgo</h2>
          <p className="titulo-ponente">Genética Médica</p>
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
