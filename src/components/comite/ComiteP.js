import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F16_lauramartinez.png?alt=media&token=a83b1534-963d-4246-bbf4-4cd9cd794d60";
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
              <p className="nombre">Dra. Laura Martinez </p>
              <p className="titulo-ponente">Doctora en médicina</p>
              <p className="trayectoria">
                Dra. Med. y Maestra en Ciencias. Jefa del Departamento de
                Genética. Profesor Investigador de tiempo completo Universidad
                Autónoma de Nuevo León desde 1982. Áreas de investigación: 1.-
                Interacción genético -nutricional y metabolismo de folatos
                relacionados con enfermedades crónico-degenerativas y defectos
                al nacimiento. 2.- Defectos del tubo neural 3.- Tamiz Neonatal y
                Errores innatos del metabolismo.
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
          src="https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F16_lauramartinez.png?alt=media&token=a83b1534-963d-4246-bbf4-4cd9cd794d60"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Laura Martinez </h2>
          <p className="titulo-ponente">Doctora en médicina</p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Laura Martinez </h2>
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
