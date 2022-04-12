import React from "react";
import { Link } from "react-router-dom";
function Loby() {
  const Logout = () => {
    localStorage.removeItem("user");
    window.location.replace("/");
  };
  return (
    <>

      <button onClick={Logout} className="btn-primario cerrar-sesion">
        Cerrar Sesión
      </button>

      <section className="section Lobby ">
        <div className="container px-4 text-left">
          <div className="row gx-5">
            <h3 classname="h5">Revive el 1er Congreso Internacional de la Sociedad de Especialistas en Enfermedades Raras 2022​</h3>
          </div>
        </div>


        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch p-5 g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg dia"

            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h5 className="pt-5 mt-5 mb-4  lh-1 fw-bold">
                  CLICK PARA <br />LAS PONENCIAS <br /> DEL 1 ER DÍA                </h5>
                <ul className="d-flex list-unstyled mt-auto">

                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>17 DE FEBRERO​</small>
                  </li>
                  <li className="me-auto">

                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>NO DISPONIBLE</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg dia"

            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h5 className="pt-5 mt-5 mb-4  lh-1 fw-bold">
                  CLICK PARA <br />REVIVIR<br /> EL 2 DO DÍA
                </h5>
                <ul className="d-flex list-unstyled mt-auto">

                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>18 DE FEBRERO​</small>
                  </li>
                  <li className="me-auto">

                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>NO DISPONIBLE</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg dia"

            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h5 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
                  CLICK PARA <br />
                  REVIVIR EL 3 ER DÍA
                </h5>
                <ul className="d-flex list-unstyled mt-auto">

                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>19 DE FEBRERO​</small>
                  </li>
                  <li className="me-auto">

                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>NO DISPONIBLE</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Loby;
