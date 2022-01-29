import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F7_leticiamunive.png?alt=media&token=e1d43738-41de-4cc7-a746-8aaf4f5348cf";
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
              <p className="nombre">Dra. Leticia Munive</p>
              <p className="titulo-ponente">Neurología pediátrica </p>
              <p className="trayectoria">
                Médico Genetista egresada de la UNAM. Actualmente Jefa del
                Servicio de Genética del Hospital Central Sur de Alta
                Especialidad PEMEX Profesor titular de Neurología pediátrica de la
                carrera de Médico Cirujano, Facultad de Medicina UNAM Miembro de
                la Asociación Mexicana de Genética Humana y del Consejo Mexicano
                de Especialistas en Genética Humana. Miembro Fundador del Grupo
                de Estudios al Nacimiento.
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
            <h4 className="name mt-3">Dra. Leticia Munive</h4>
            <p className="position">Neurología pediátrica</p>
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
