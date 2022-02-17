import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/colaboradores-seer%2F7_RafaelNavarro.png?alt=media&token=8aa96a0c-3793-453c-a658-2fc9295c4dde";
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
              <p className="nombre">Dr. Rafael Navarro</p>
              <p className="titulo-ponente">Médico Cirujano- Sistemas de salud y Política Pública </p>
              <p className="trayectoria">
                Médico Cirujano por la Universidad Anahuac de México, con estudios en Biología Molecular, Sistemas de Salud y Política Pública. Actualmente es director médico en Go Pharma. Ha sido profesor de posgrado en farmacoeconomía e investigación clínica y cuenta con más de 12 años de experiencia en áreas de alta especialidad dentro la industria farmacéutica, en laboratorios transnacionales y nacionales; teniendo a su cargo México, Centroamérica, Perú, Ecuador y El Caribe.
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
            <h4 className="name mt-3">Dr. Rafael Navarro</h4>
            <p className="position">Médico Cirujano-Sistemas de salud y Política Pública </p>
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
