import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/2_DraAlejandra_Camacho.png?alt=media&token=24687803-07e1-471a-bc3d-cde31dea3af7";
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
              <p className="nombre">Dra. Alejandra Camacho </p>
              <p className="titulo-ponente">Genética Médica </p>
              <p className="trayectoria">
                Tiene especialidad en Genética Médica en el Hospital General de
                México (UNAM), maestría en Ciencias con Especialidad en
                Farmacología en la Escuela Superior de Medicina (IPN). Fue Jefa
                del Departamento de Genética e investigadora en ciencias médicas
                en el Insituto Nacional de Neurología y Neurocirugía Manuel
                Velasco Suárez, es miembro del Sistema Nacional de
                Investigadores y cuenta con diversas publicaciones nacionales e
                internacionales. Actualmente es coordinadora del Programa de
                Enfermedades Huérfanas Lisosomales, Estandarización de la
                Prescripción de Medicamentos de Alta Especialidad y de los
                Laboratorios de Genómica del Instituto de Seguridad y Servicios
                Sociales de los Trabajadores del Estado (ISSSTE).
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
        <img
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/2_DraAlejandra_Camacho.png?alt=media&token=24687803-07e1-471a-bc3d-cde31dea3af7"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Alejandra Camacho </h2>
          <p className="titulo-ponente">Genética Médica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Alejandra Camacho </h2>
          <p className="titulo-ponente">Genética Médica </p>
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
