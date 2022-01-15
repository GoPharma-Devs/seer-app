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
              <p className="nombre">Rafa Navarro</p>
              <p className="titulo-ponente">Médico cirujano </p>
              <p className="trayectoria">
                Médico genetista, fundador y miembro activo del Servicio de Genética Médica del Hospital Universitario, en Porto Alegre. , Brasil. Fundador de “House of Rares”. Responsable de Enfermedades Raras del grupo DASA/GENOME. Editor en Jefe de la Revista de Errores Congénitos del Metabolismo y Cribado, Presidente de la Escuela Latinoamericana de Genética Humana y Médica y Miembro de la Academia Brasileña de Ciencias. Ex director del Centro Colaborador de la OMS para el Desarrollo de la Genética Médica.  Ha sido el IP de más de 50 ensayos clínicos, supervisado la formación de más de 100 MSc y PhD, y siendo autor de más de 500 artículos científicos.
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
          <h2 className="nombre-ponente">Rafa Navarro</h2>
          <p className="titulo-ponente">Médico cirujano </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Rafa Navarro</h2>
          <p className="titulo-ponente">Médico cirujano </p>
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
