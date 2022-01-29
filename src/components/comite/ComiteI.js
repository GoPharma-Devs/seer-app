import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F9_andreanavarrete.png?alt=media&token=5021d486-a872-4f29-be46-f8697c8c7f08";
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
              <p className="nombre">Dra. Andrea Navarrete </p>
              <p className="titulo-ponente">Pediatra </p>
              <p className="trayectoria">
                Pediatra con diplomados en Epidemiología Clínica. Experiencia como Médica adscrita de la Unidad de Terapia Intermedia e Intensiva Neonatal del Hospital General Regional “Carlos Mac Gregor Sanchez Navarro” y profesora universitaria de la carrera de medicina. Actualmente es Técnico Académico Asociado “C” de la Facultad de Medicina de la UNAM y cuenta con investigaciones y artículos científicos pediátricos publicados, ha participado como ponente en diversos eventos nacionales e internacionales.
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
            <h4 className="name mt-3">Dra. Andrea Navarrete</h4>
            <p className="position">Pediatra</p>
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
