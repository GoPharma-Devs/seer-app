import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F18_AlbertoOrtiz.png?alt=media&token=c6777766-a656-4a74-a860-aad84380a014";
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
              <p className="nombre">Dr. Alberto Ortiz </p>
              <p className="titulo-ponente">Nefrología</p>
              <p className="trayectoria">
                Médico con especilaidad en Nefrología. Jefe de Nefrología e Hipertensión en el Instituto de Investigaciones Sanitarias de la Fundación Jiménez Díaz y Hospital Universitario (IIS-FJD-UAM), Madrid, España. Fue investigador postdoctoral en la Sección de Electrolitos Renales de la Universidad de Pennsylvania. Es el presidente del Registro de Nefrología Clínica de la Asociación Renal Europea (ERA), editor en jefe de Clinical Kidney Journal, coordinador de la Red de Investigación Renal (REDINREN). Recibió el Premio ERA-EDTA 2020 a la excelencia en investigación.
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
            <h4 className="name mt-3">Alberto Ortiz</h4>
            <p className="position">Nefrología Pediátrica</p>
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
