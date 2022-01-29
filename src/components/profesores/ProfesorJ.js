import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/colaboradores-seer%2F10_AlejandroRey.png?alt=media&token=96229a50-c77f-4f40-b10a-d249a02c8e1c";
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
              <p className="nombre">Alejandro Rey</p>
              <p className="titulo-ponente">Medico Cirujano</p>
              <p className="trayectoria">
                Médico Genetista, con experiencia en asuntos médicos, consultoría, bioética, farmacología, diagnóstico y apoyo clínico para pacientes con enfermedades raras. Enfoque orientado hacia las ciencias sociales al contar con una Licenciatura en Ciencias Religiosas y una Maestría en Estudios Judaicos. Actualmente Enlace Médico Científico para Ultragenyx Pharmaceutical Latinoamérica y Director Médico del centro de desarrollo infantil Desarrollo Dinámico.
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
            <h4 className="name mt-3">Dr. Armando Partida</h4>
            <p className="position">Alergia Pediátrica</p>
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
