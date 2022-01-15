import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/colaboradores-seer%2F3_JacquelineTovar_.png?alt=media&token=198881bf-62c8-499a-bffd-4a4281b5985b";
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
              <p className="nombre">Jacqueline Tovar</p>
              <p className="titulo-ponente">Licenciada en Derecho</p>
              <p className="trayectoria">
                Líder de la Sociedad Civil desde el año 2008, experiencia de más de 13 años en el ámbito de las enfermedades raras, especialmente en la parte estratégica legislativa, promoción y difusión de la importancia de la detección, diagnóstico y atención del tamiz neonatal ampliado a nivel nacional.
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
        <img src={ImgProfesor} alt="comite" />
        <div className="info">
          <h2 className="nombre-ponente">Jacqueline Tovar</h2>
          <p className="titulo-ponente">Licenciada en Derecho</p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Jacqueline Tovar</h2>
          <p className="titulo-ponente">Licenciada en Derecho</p>
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
