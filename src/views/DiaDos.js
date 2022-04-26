import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function DiaDos() {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("user");
    window.location.replace("/");
  };

  const [user, setUser] = useState(
    localStorage.getItem("user") != null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  useEffect(() => {
    setUser(
      localStorage.getItem("user") != null
        ? JSON.parse(localStorage.getItem("user"))
        : null
    );

  }, [user]);


  return (
    <>
      {user && (
        <section className="section App-header Diauno" >
          <div className="container ">
            <h1>SEER Día 2 - 18 DE FEBRERO</h1>
            <div style={{ padding: "56.25% 0 0 10%", position: "relative", }}>

              <iframe title="dia 2" src="https://vimeo.com/showcase/9460103/embed" allowFullScreen frameBorder={0} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />

            </div>


            <div className="row d-flex justify-content-around ">
              <button className="goback mt-2" onClick={() => navigate(-1)}>
                {" "}
                <FaArrowAltCircleLeft /> Regresar
              </button>
              <button onClick={Logout} className="goback mt-2 ">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </section>
      )}

      {!user && (
        <section className="row App-header  ">
          <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1>Sesión terminada...</h1>
            <p>regresa al inicio</p>
            <br />
            <button onClick={Logout} className="btn btn-primario">
              {" "}
              Ir al incio
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default DiaDos;
