import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom"
import axios from '../api/axios';
import { Modal, Button } from 'react-bootstrap';
import Transmision from './Transmision';
const LOGIN_URL = '/login';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [modalShow, setModalShow] = useState(true)
  useEffect(() => {
    userRef.current.focus();
  }, [])
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user])
  useEffect(() => {
    setErrMsg('');
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      console.log("Session Iniciada");

      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.role;
      setAuth({ user, email, password, roles, accessToken });
      setEmail('');
      setPassword('');
      setSuccess(true);
      setUser(true)
      if (response?.status === 200) {
        console.log("usuario")
        localStorage.setItem("user", user);
        console.log(localStorage.getItem("user"));
      }




    } catch (err) {
      if (!err?.response) {
        setErrMsg('Sin respuesta del servidor');
      } else if (err.response?.status === 400) {
        setErrMsg('Falta el nombre de usuario o la contraseña');
      } else if (err.response?.status === 401) {
        setErrMsg('Correo no registrado');

      } else {
        setErrMsg('Usuario no encontrado');
      }
      errRef.current.focus();
    }
  }
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Body>
          <iframe id="JotFormIFrame-212609285006048" title="SEER 2022" src="https://form.jotform.com/212609285006048" frameBorder={0} style={{ height: 539, border: 'none' }} scrolling="no">
          </iframe>
        </Modal.Body>
        <Modal.Footer>

          <Button className='btn btn-danger' onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      {success ? (
        <section className="Home">
          <div className="contenedor">


            {!user && (
              <>

                <div className="texto"><h1>You are not logged in!</h1>
                  <br />
                  <p>
                    <Link to="/">Ir a home</Link>
                  </p></div>
              </>

            )}
            {user && (
              <section className="section transmision-contenedor">
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

                <Transmision />

              </section>

            )}
          </div>
        </section>
      ) : (
        <section>
          <div className="contenedor">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Iniciar sesión</h1>
            <div className="contenedor-login">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
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
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    autoComplete="off"
                  />
                </div>
                <button className="btn btn-primario">Sign In</button>
              </form>
              <p>
                Desea registrarse o actualizar sus datos<br />
                <span className="line">
                  {/*put router link here*/}
                  <Link to="/registro">Ir a registro</Link>
                </span>
              </p>
            </div>


          </div>
        </section>
      )
      }
    </>
  )
}

export default Login