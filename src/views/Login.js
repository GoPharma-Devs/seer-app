import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import { Link } from 'react-router-dom'
import LogoBanner from '../img/LOGO_SEER_WHITE_SLOGAN.png'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const LOGIN_URL = 'https://seer-be.herokuapp.com/login';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {

    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: 'ease-in-out',
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: 'bottom-top',
    });
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing email or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }

  return (
    <section className="contenedor" data-aos="fade-up">
      <img src={LogoBanner} alt="" className="logobanner" />
      {success ? (
        <section className="contenedor-logeado">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to="/" href="#">Go to Home</Link>
          </p>
        </section>
      ) : (
        <section className="contenedor-login ">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

          <form className="formulario" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo:</label>
              <input
                type="text"
                id="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              /></div>

            <div className="form-group">  <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"

                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              /></div>
            <button className="btn-primario">iniciar Sesión</button>
          </form>
          <p>
            Desea registrarse o actualizar sus datos<br />
            <span className="line">
              {/*put router link here*/}
              <Link to="/registro">Ir a registro</Link>
            </span>
          </p>
        </section>
      )
      }
      <section className="contacto-section" data-aos="fade-up">
        <br />
        <h2>
          Cualquier duda, comentario o interés por favor comunicarse al correo:
        </h2>

        <a href="mailto:comunicacion@seerlatam.org">
          comunicacion@seerlatam.org
        </a>
      </section>
    </section >
  )
}

export default Login