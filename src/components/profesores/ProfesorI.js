import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/colaboradores-seer%2F9_IsabelValdes.png?alt=media&token=49a4bc5a-a9a0-4942-98f9-1d7d7e6f37a4";
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
              <p className="nombre">Isabel Valdés</p>
              <p className="titulo-ponente">Kinesióloga Fisioterapeuta</p>
              <p className="trayectoria">
                Directora Kinesióloga del programa "BPM: Beats per minute" desde Agosto 2021, Directora Kinesióloga del programa "Disfruta tu nuevo comienzo" desde Enero 2021, Tratamiento Kinesiología integral a domicilio mayor 2020, Terapia Manual en Dynamic Stability, Terapia Manual en Chropractic & Wellnes y Masaje corporativo en 3 minutes Angels en Melbourne, Australia. Directora técnica en Fundación Las Rosas Chile de marzo 2013 a enero 2017.
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
            <h4 className="name mt-3">Isabel Valdés</h4>
            <p className="position">Kinesióloga Fisioterapeuta</p>
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
