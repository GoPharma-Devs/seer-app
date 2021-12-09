import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente = "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/comite-seer%2F6_Charles%20Marques.png?alt=media&token=b88dff08-a095-4368-97cb-08a630951d87";
function ComiteF() {
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
              <p className="titulo-ponente">Genética Médica </p>
              <p className="trayectoria">
                Charles M Lourenço es Profesor de Genética Clínica e
                Investigación Médica Aplicada en la Facultad de Medicina, Centro
                Universitario Estacio en Ribeirão Preto, São Paulo, Brasil y
                Coordinador de consultas externas de Neurogenética y Errores
                Congénitos del Metabolismo en la Faculdade de Medicina de São
                José do Rio Preto (FAMERP). El Dr. Lourenço es un genetista
                bioquímico clínico con un interés especial en los trastornos
                neurodegenerativos genéticos. Obtuvo su título de médico en la
                Universidad Federal de Bahía, Brasil, en 2002, y realizó una
                formación de posgrado en genética médica y luego en
                neurogenética en el Hospital Clínico de la Universidad Estadual
                de São Paulo, y luego en el Hospital de Ribeirão Preto,
                Universidad de São Paulo. Paulo. Tiene un doctorado en
                neurogenética, con su tesis centrada en la ataxia
                espinocerebelosa de inicio temprano, especialmente en un
                subconjunto de pacientes con ataxia e hipogonadismo. Más
                recientemente, ha estado involucrado en una nueva clínica
                multidisciplinaria en la Faculdade de Medicina de São José do
                Rio Preto (FAMERP), que se enfoca principalmente en la
                investigación de trastornos neurodegenerativos infantiles y, en
                particular, pacientes con ataxia cerebelosa de inicio temprano y
                blanco genético. trastornos de la materia. Los intereses del Dr.
                Lourenço incluyen los aspectos clínicos y moleculares de las
                leucodistrofias, la paraparesia espástica hereditaria, las
                causas metabólicas de la colestasis neonatal, las ataxias
                espinocerebelosas hereditarias, las encefalopatías epilépticas
                genéticas, los trastornos lisosomales del cerebro
                (neurolipidosis) y los errores innatos del metabolismo con
                presentación adulta. También trabajó como director en un
                laboratorio comercial de genética clínica en CPDP (Centro
                Paulista de Diagnóstico, Pesquisa e Treinamento,
                https://www.cpdp.com.br/) durante 8 años; ahora es consultor
                clínico para el mismo laboratorio en las áreas de genética
                molecular clínica, citogenética clínica, diagnóstico genético
                preimplantacional y detección de portadores expandidos
                moleculares. El Dr. Lourenço es miembro de muchas sociedades
                profesionales, incluida la Sociedad Brasileña de Genética
                Clínica, la Sociedad Estadounidense de Genética Humana, la
                Sociedad Internacional de Displasia Esquelética, la Sociedad
                para el Estudio de Errores Congénitos del Metabolismo y la
                Sociedad Latinoamericana de Errores Congénitos de Detección de
                metabolismo y recién nacidos. Ha publicado numerosas
                publicaciones en revistas y libros, y se desempeña como revisor
                de pares de Neurology Genetics y Journal of Inherited Metabolic
                Disease.
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
      <div className="comite-el" onClick={() => setModalShow(true)}>
        <img src={ImgPonente} alt="comite" />
        <div className="info">
          <h2 className="nombre-ponente">Dr. Charles Marques </h2>
          <p className="titulo-ponente">Genética Médica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Charles Marques </h2>
          <p className="titulo-ponente">Nefrología Pediátrica </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ComiteF;
