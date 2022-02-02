import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente = "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F5_analimon.png?alt=media&token=24748158-19f8-44ab-8771-b9c5c58e0d48";
function ComiteF() {
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
              <p className="nombre">Dra. Ana Limón </p>
              <p className="titulo-ponente">Pediatría </p>
              <p className="trayectoria">
                Pediatra con estudios en epidemiología cllínica. Experiencia como Jefa del Área de Pediatría, Presidenta del Comité de Bioética y Directora General en el Hospital Central Sur de Alta Especialidad de Pemex Picacho. Fundadora de la Asociación Mexicana de Pediatras de Petróleos Mexicanos. Tesorera, vicepresidenta y presidenta de la Academia Mexicana de Pediatría y Presidenta del Consejo Mexicano de Certificación en Pediatría. Actualmente es Secretaria Clínica de la Facultad de Medicina de la UNAM. Cuenta con investigaciones, artículos y libros científicos pediátricos publicados.
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
            <h4 className="name mt-3">Dra. Ana Limón</h4>
            <p className="position">Pediatría</p>
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

export default ComiteF;
