import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { Modal, Button } from "react-bootstrap";
import Transmision from "./Transmision";
const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState(localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [modalShow, setModalShow] = useState(true);


  useEffect(() => {
    // userRef.current.focus();
  }, []);



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
        setErrMsg("Correo no registrado");
      } else {
        setErrMsg("Usuario no encontrado");
      }
      errRef.current.focus();
    }
  };
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>

          <iframe id="JotFormIFrame-212609285006048" title="SEER 2022"
            onLoad={window.parent.scrollTo(0, 0)} src="https://form.jotform.com/212609285006048" frameBorder={0} style={{ minWidth: '100%', height: 539, border: 'none' }} scrolling="no">
          </iframe>

        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={props.onHide}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  if (success && !user?.form) {
    return <section className="section transmision-contenedor Hero">
      <div className="contenedor">
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            setUser({ ...user, form: true });
            localStorage.setItem("user", JSON.stringify({ ...user, form: true }));
          }}
        />
      </div>
    </section>
  }

  if (user?.form) {
    return (
      <section className="section transmision-contenedor">
        <Transmision />
      </section>
    )

  }
  return (<section>
    <div className="contenedor">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>SEER 2022</h1>
      <h2>17, 18 y 19 de febrero</h2>
      <h3>Bienvenid@</h3>

      <div className="contenedor-login">
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
          <button className="btn btn-primario">Entrar</button>
        </form>
        <small>
          Desea registrarse o actualizar sus datos
          <br />
          <span className="line">
            {/*put router link here*/}
            <Link to="/registro">Ir a registro</Link>
          </span>
        </small>
      </div>
    </div>

  </section>)




};

export default Login;
