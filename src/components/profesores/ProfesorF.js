import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/colaboradores-seer%2F6_KenjiLo%CC%81pez.png?alt=media&token=aa75a7ac-c531-4c09-968d-828300b348a0";
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
              <p className="nombre">Kenji Lopez</p>
              <p className="titulo-ponente">Licenciado en Derecho con Maestría en Políticas Públicas</p>
              <p className="trayectoria">
                Licenciado en Derecho con Maestría en Políticas Públicas en el Tecnológico de Monterrey. Con estudios en las Universidades de Harvard, Georgetown y en la Universidad Pontificia Comillas, en España. Director para Organismos Especializados de la ONU. Miembro de la Barra Mexicana de Abogados. En 2017, formalizó la constitución de la organización Cáncer Warriors de México.
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
            <h4 className="name mt-3">Kenji Lopez</h4>
            <p className="position">Abogado</p>
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
