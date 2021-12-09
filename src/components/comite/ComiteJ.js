import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente = "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F10_JuanManuelPolitei.png?alt=media&token=f4f3efa2-15b7-4f52-9347-e4f615a57935";
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
              <p className="nombre">Dr. Juan Manuel Politei </p>
              <p className="titulo-ponente">Médico </p>
              <p className="trayectoria">
                Médico de Staff en el Laboratorio de Neuroquímica Dr Chamoles.
                Fundación para el Estudio de las Enfermedades Neurometabólicas
                (FESEN), Editor de literatura y eventos científicos para
                Circlepress.,Asesor externo en enfermedades huérfanas (poco
                frecuentes) para SANOFI/GENZYME; BIOMARIN; RHYTHM; AMICUS/PINT;
                IDORSIA; AVROBIO; SANGAMO; 4DMT; CELNOVA.
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
        <img src={ImgPonente} alt="comite" />
        <div className="info">
          <h2 className="nombre-ponente">Dr. Juan Manuel Politei </h2>
          <p className="titulo-ponente">Médico </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Juan Manuel Politei </h2>
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
