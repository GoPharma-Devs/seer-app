import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F6_Charles%20Marques.png?alt=media&token=b88dff08-a095-4368-97cb-08a630951d87";
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
              <p className="nombre">Dr. Charles Marques </p>
              <p className="titulo-ponente">Neurogenética </p>
              <p className="trayectoria">
                Doctor en Neurogenética, miembro de diversas sociedades profesionales, incluida la Sociedad Brasileña de Genética Clínica, la Sociedad Estadounidense de Genética Humana, la Sociedad Internacional de Displasia Esquelética, la Sociedad para el Estudio de Errores Congénitos del Metabolismo y la Sociedad Latinoamericana de Errores Congénitos de Detección de Metabolismo y Recién Nacidos. Con numerosas publicaciones en revistas y libros, se desempeña como editor de Neurology Genetics y Journal of Inherited Metabolic Disease.
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
            <h4 className="name mt-3">Dr. Charles Marques</h4>
            <p className="position">Neurogenética</p>
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
