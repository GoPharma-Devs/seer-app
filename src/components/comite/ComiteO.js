import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente = "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F15_franciscozun%CC%83iga.png?alt=media&token=5c32afc1-2275-479f-939f-e2bbd6743fbd";
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
              <p className="nombre">Dr. Francisco Zuñiga </p>
              <p className="titulo-ponente">Genética medica </p>
              <p className="trayectoria">
                Médico Genetista con Alta Especialidad en Genodermatosis y Neurogenética, actualmente cursando una maestría en Ciencias Médicas y Odontológicas. Miembro de la Asociación Mexicana de Genética Humana. Actualmente es médico Especialista Adscrito al Servicio de Genética del Hospital Regional de Alta Especialidad Ciudad Salud en Tapachula, Chiapas y Práctica privada. Vocal de los Comités de Bioética y Ética en Investigación del Hospital Regional de Alta Especialidad Ciudad Salud.
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
            <h4 className="name mt-3">Dr. Francisco Zuñiga</h4>
            <p className="position">Genética medica</p>
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
