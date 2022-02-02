import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente = "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F12_LuzMariaSanchez.png?alt=media&token=fa3ee70e-68bc-4017-8659-52933de33ae0";
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
              <p className="nombre">Dra. Luz María Sánchez </p>
              <p className="titulo-ponente">Neonatología </p>
              <p className="trayectoria">
                Neonatóloga, experiencia de 28 años laborando en el Hospital de Especialidades No. 25 del IMSS en Monterrey, NL con experiencia en enfermedades raras desde hace más de 15 años. Miembro de grupos de expertos nacionales e internacionales en enfermedades raras. Profesora de Pediatría por más de 20 años e investigadora clínica del Sistema Nacional de Investigadores. Actualmente ejerce la medicina privada.
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
            <h4 className="name mt-3">Luz María Sánchez</h4>
            <p className="position">Neonatología</p>
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
