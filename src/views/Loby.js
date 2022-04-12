import React from "react";
import Logo from "../img/logo.svg";
//import { Link } from "react-router-dom";
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
        <div className="container px-4">
          <div className="row gx-5">
            <h3 style={{ maxWidth: "1000px", textAlign: "center", margin: "auto" }}>
              Revive el 1er Congreso Internacional de la Sociedad de
              Especialistas en Enfermedades Raras 2022
            </h3>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch p-4 g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-light rounded-5 shadow-lg dia">
              <div className="d-flex flex-column h-100 p-4 pb-3 text-white text-shadow-1">
                <img style={{ maxWidth: "20px" }} src={Logo} alt="" />
                <h5 className=" mt-5 mb-4   fw-bold">
                  CLICK PARA <br />
                  REVIVIR
                  <br /> EL 1<sup>ER</sup> DÍA
                </h5>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <small>17 DE FEBRERO​</small>
                  </li>
                  <li className="me-auto"></li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>6 videos</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-light rounded-5 shadow-lg dia">

              <div className="d-flex flex-column h-100 p-4 pb-3 text-white text-shadow-1">
                <img style={{ maxWidth: "20px" }} src={Logo} alt="" />
                <h5 className=" mt-5 mb-4   fw-bold">
                  CLICK PARA <br />
                  REVIVIR
                  <br /> EL 2<sup>DO</sup> DÍA
                </h5>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <small>18 DE FEBRERO​</small>
                  </li>
                  <li className="me-auto"></li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>6 videos</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-light rounded-5 shadow-lg dia">
              <div className="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                <img style={{ maxWidth: "20px" }} src={Logo} alt="" />
                <h5 className=" mt-5 mb-4  fw-bold">
                  CLICK PARA <br />
                  REVIVIR EL 3<sup>ER</sup> DÍA
                </h5>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <small>19 DE FEBRERO​</small>
                  </li>
                  <li className="me-auto"></li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>6 videos</small>
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
