import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F13_erikavargas.png?alt=media&token=84d4a798-01fe-4ae5-aa54-e76b5c1bce5e";
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
              <p className="nombre">Dra. Erika Vargas </p>
              <p className="titulo-ponente">Medicina Interna Pediátrica </p>
              <p className="trayectoria">
                Medicina Interna Pediátrica, Universidad Nacional Autónoma de México (1991 -
                1997) cp 2581954 pediatría medica issdf secretaria de salud,
                (1998-2001) reconocimiento universidad nacional autónoma de
                méxico. Ced. Esp. 3410098. Avalada por el consejo mexicano de
                certificacion en Pediatría numero 100073 medicina interna
                pediátrica instituto nacional de pediatría. Reconocimiento
                Universidad Nacional Autónoma de México Núm de registro. UNAM
                ca96-03 período 2001-2003 maestría en ciencias de la salud con
                especialidad en investigación. Especialización en investigación.
                Instituto Politécnico Nacional, título con registro oficial
                b141239 cédula (año 2014 - 2016). Master en enfermedades de
                depósito lisosomal (edl) fundación española para el estudio y
                tratamiento de la enfermedad de gaucher y otras lisosomales
                (feeteg). Unidad de investigación traslacional. Instituto
                Aragonés de Ciencias de la Salud. España. (Año 2016 - 2017).
                Créditos 5.1 ects. Master en enfermedades metabólicas
                hereditarias Universidad de Santiago de Compostela, España,
                aceptada septiembre 2020, inicio enero 2021 a la fecha (cursando
                actualmente). MPS disorders, Fabry, Gaucher Disease Training
                certification of fymca medical ltd. Panama city, panama. (Mayo
                2017 a enero 2019).
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
            <h4 className="name mt-3">Dra. Erika Vargas</h4>
            <p className="position">Medicina Interna Pediátrica</p>
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
