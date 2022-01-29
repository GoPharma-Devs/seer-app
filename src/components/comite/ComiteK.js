import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente = "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F11_JorgeAlbertoRamos.png?alt=media&token=a27529a2-347f-4993-b72c-e43e106d2703";
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
              <p className="nombre">Dr. Jorge Alberto Ramos </p>
              <p className="titulo-ponente">Médico Cirujano y Partero </p>
              <p className="trayectoria">
                Médico Cirujano y Partero, Especialista en Pediatría por la
                Universidad de Guadalajara, con Maestría en Desarrollo Humanos
                (ITESO) y Máster Universitario de Cuidados Paliativos en el
                Enfermo Oncológico (Universidad de Salamanca). Actualmente
                adscrito al Servicio de Medicina Paliativa y Dolor del Hospital
                General de Occidente (Secretaría de Salud Jalisco) y Profesor
                Adjunto de la Especialidad (UDG). Con experiencia en atención
                clínica, docencia de pregrado y posgrado, investigación y
                política pública en medicina paliativa y soporte para la calidad
                de vida para niñas y niños con condiciones limitantes o
                amenazantes para la vida y a sus familias.
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
            <h4 className="name mt-3">Dra. Araceli Arellano</h4>
            <p className="position">Reumatología Pediátrica</p>
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
