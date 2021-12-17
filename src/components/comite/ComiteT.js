import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F19_ArmandoPartida.png?alt=media&token=fa0f517a-b46a-4bbd-89f8-71bf22447c39";
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
              <p className="nombre">Dr. Armando Partida</p>
              <p className="titulo-ponente">Alergia Pediátrica</p>
              <p className="trayectoria">
                Médico Pediatra con subespecialidad en Alergia e Inmunología Clínica, Alta Especialidad en Inmunodeficiencias Primarias, Maestría en Ciencias Médicas, y Maestría en Terapia Génica y Celular. Miembro colaborador de la Fundación Mexicana para Niñas y Niños con Inmunodeficiencias Primarias (FUMENI, A.C.) Socio Fundador de Healthy Kids Polanco S.C. y actualmente Gerente Médico de Alergia y Alta Especialidad para GSK México.
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
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F19_ArmandoPartida.png?alt=media&token=fa0f517a-b46a-4bbd-89f8-71bf22447c39"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Armando Partida</h2>
          <p className="titulo-ponente">Alergia Pediátrica</p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Armando Partida</h2>
          <p className="titulo-ponente">Nefrología Pediátrica </p>
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
