import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/colaboradores-seer%2F1_RobertoGiugliani.png?alt=media&token=0a3e8f9a-eaa2-48a4-ab1e-c8607dbe0589";
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
              <p className="nombre">Roberto Giugliani</p>
              <p className="titulo-ponente">Médico en genética</p>
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
      <div className="col-md-3 col-sm-6">
        <div className="speaker_box">
          <div className="speaker_img">
            <img src={ImgProfesor} alt="comite" />
            <div className="info_box">
              <h5 className="name">Roberto Giugliani</h5>
              <p className="position">Médico en genética</p>
            </div>
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
