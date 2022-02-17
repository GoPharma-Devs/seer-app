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
              <p className="titulo-ponente">Doctorado en Médicina</p>
              <p className="trayectoria">
                Dra. en Medicina y Maestra en Ciencias. Jefa del Departamento de Genética. Profesora e Investigadora de tiempo completo en la Universidad Autónoma de Nuevo León desde 1982. Áreas de investigación: 1.- Interacción Genético-Nutricional y Metabolismo de Folatos relacionados con Enfermedades Crónico-Degenerativas y Defectos al Nacimiento. 2.- Defectos del Tubo Neural 3.- Tamiz Neonatal y Errores Innatos del Metabolismo.
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
            <h4 className="name mt-3">Dra. Laura Martinez</h4>
            <p className="position">Doctorado en Médicina</p>
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
