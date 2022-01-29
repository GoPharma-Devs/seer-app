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
              <p className="titulo-ponente">Alergia Pediátrica</p>
              <p className="trayectoria">Médico Pediatra con subespecialidad en Alergia Pediátrica e Inmunología Clínica. Autor del libro de Enfermedades Raras en Pediatría. Ex presidente de la Sociedad Mexicana de Pediatría. Vicepresidente del Colegio Mexicano de Pediatras Especialistas en Inmunología Clínica y Alergia. (Compedia). Jefe depto de Integración Clínica. Pregrado . Facultad de Medicina, UNAM.</p>
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
            <h4 className="name mt-3">Dra. Araceli Arellano</h4>
            <p className="position">Reumatología Pediátrica</p>
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
