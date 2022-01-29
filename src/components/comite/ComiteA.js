import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F2_alejandracamacho.png?alt=media&token=94b754df-f1fe-4786-aae7-f75a5f4dc39f";
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
              <p className="nombre">Dra. Alejandra Camacho
              </p>
              <p className="titulo-ponente">Genética Médica</p>
              <p className="trayectoria">
                Médica Genetista con maestría en Ciencias con Especialidad en Farmacología. Experiencia como Jefa del Departamento de Neurogenética e investigadora en Ciencias Médicas en el Insituto Nacional de Neurología y Neurocirugía Manuel Velasco Suárez. Miembro del Sistema Nacional de Investigadores, cuenta con diversas publicaciones nacionales e internacionales. Actualmente Vicepresidenta del Consejo Mexicano de Genética, Coordinadora del Programa de Enfermedades Huérfanas Lisosomales y Laboratorios de Genómica  en el Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado.
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
            <h4 className="name mt-3">Dra. Alejandra Camacho
            </h4>
            <p className="position">Genética Médica</p>
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
