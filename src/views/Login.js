import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import { Link } from 'react-router-dom'
import BgBanner from '../img/registro-bg-banner.png'
import axios from 'axios';
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
    <section className="contenedor">
      <img src={BgBanner} alt="" className="bgbanner" />
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
          <h1>Iniciar Sesión</h1>
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              /></div>

            <div className="form-group">  <label htmlFor="password">Password:</label>
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
    </section >
  )
}

export default Login