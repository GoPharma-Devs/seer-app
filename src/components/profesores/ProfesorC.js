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
                Cargo actual: Presidenta y Fundadora de la Fundación Mexicana de Prevención y Salud Materna "Mujer México", Líder de la Sociedad Civil desde el año 2008; experiencia de más de 13 años en el ámbito de las enfermedades raras, especialmente en la parte estratégica legislativa, promoción y difusión de la importancia de la detección, diagnóstico y atención del tamiz neonatal ampliado a nivel nacional
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
            <h4 className="name mt-3">Jacqueline Tovar</h4>
            <p className="position">Licenciada en Derecho</p>
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
