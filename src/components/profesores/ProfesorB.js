import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/colaboradores-seer%2F2_AdrianaOchoa.png?alt=media&token=f1fe60fe-f3ea-41c0-8775-97613e82caf9";
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
              <p className="nombre">Adriana Ochoa</p>
              <p className="titulo-ponente">Licenciada </p>
              <p className="trayectoria">
                Secretaria del Comité de ética en Investigación, coordinadora del Programa de Diagnóstico Presintomático para enfermedad de Huntington y ataxias espinocerebelosas, perteneciente al Sistema Nacional de Investigadores Nivel 1. Participación en múltiples reuniones científicas nacionales e internacionales. Autora y coautora de diversos artículos publicados en revistas nacionales e internacionales. Áreas de investigación: Bioética, cuidados paliativos, sociogenética, diagnóstico presintomático, discriminación y estigma en enfermedades neurodegenerativas, entre otras.
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
            <img src={ImgProfesor} alt="comite" />
          </div>
          <div className="info_box ">
            <h4 className="name mt-3">Adriana Ochoa</h4>
            <p className="position">Licenciada</p>
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

export default ProfesorA;
