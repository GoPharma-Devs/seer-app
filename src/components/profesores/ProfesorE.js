import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/colaboradores-seer%2F5_DimitriProffe%CC%81.png?alt=media&token=286111b1-84a7-442f-b7da-b9e149004716";
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
              <p className="nombre">Dimitri Proffé</p>
              <p className="titulo-ponente">Licenciado</p>
              <p className="trayectoria">
                Viajes internacionales – 2 años Viajes y voluntariado junio 2018 Marzo 2020, Middle office Cash Management (Departamento de Banca Electrónica y Liquidez) BNP Paribas París (Francia) Diciembre de 2015 – Mayo de 2018, Embajador de servicio al cliente Marquise Group-Aeropuerto Internacional de Vancouver Vancouver (Canadá – Columbia Británica) Enero de 2015 – Julio de 2015, Representante de Servicio al Cliente BNP Paribas Le Touquet Paris-Plage (Francia) - Septiembre de 2012 – septiembre de 2013, Asesor de recepción Crédit Agricole · Dunkerque (Francia) ·
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
            <h4 className="name mt-3">Dimitri Proffé</h4>
            <p className="position">Licenciado</p>
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
