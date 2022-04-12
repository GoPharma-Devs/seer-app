import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";
import axios from "../api/axios";
//import { Modal, Button } from "react-bootstrap";
//import Transmision from "./Transmision";
//import logo3 from "../img/LOGO_SEER_WHITE_3.png";
//import Chat from "./Chat";
import Loby from "./Loby";
const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState(
    localStorage.getItem("user") != null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  //const [thirdDay, setthirdDay] = useState(localStorage.getItem("thirdDay"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  //const [modalShow, setModalShow] = useState(true);



  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Session Iniciada");

      setAuth({ user });
      setEmail("");
      setPassword("");

      if (response?.status === 200) {
        console.log("usuario");
        setSuccess(true);
        localStorage.setItem("user", JSON.stringify({ ...user, form: false }));
        setUser({ ...user, form: false });
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Sin respuesta del servidor");
      } else if (err.response?.status === 400) {
        setErrMsg("Falta el nombre de usuario o la contraseña");
      } else if (err.response?.status === 401) {
        setErrMsg("Correo ó Contraseña erronea, verifique sus datos");
      } else {
        setErrMsg("Usuario no encontrado, favor de registrarse de nuevo");
      }
      errRef.current.focus();
    }
  };


  if (success === true) {
    return (
      <section className="section transmision-contenedor Hero">
        <div className="contenedor">
          <Loby />
        </div>
      </section>
    );
  }


  return (
    <section>
      <div className="contenedor">


        <h3 className="text-center">
          <br /> Bienvenid@, <br /> Inicia sesión para continuar
        </h3>

        <div className="contenedor-login mt-4">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Correo electrónico:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                autoComplete="off"
              />
            </div>
            <p

              ref={errRef}
              className={errMsg ? "errmsg text-danger" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <button className="btn btn-primario">Entrar</button>
          </form>
          <div className="container text-center">
            <small className="">
              ¿Aún no tienes cuenta?
              <span className="line">
                {/*put router link here*/}
                <Link to="/registro"> Regístrate  </Link>


              </span>
              <br />
              <span className="line">Click para revisar nuestro
                <Link to="/aviso-de-privacidad"> aviso de privacidad​           </Link>
              </span>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
