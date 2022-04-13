import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
function DiaUno() {
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
  }, [user]);

  return (
    <>
      {user && (<section className='section App-header ' data-aos="fade-up">
        <div className='container'>

          <div className='row' style={{ padding: '56.25% 0 0 0', position: 'relative' }}><iframe title='dia-uno' src="https://vimeo.com/showcase/9444749/embed" allowFullScreen frameBorder={0} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} /></div>

          <div className="row d-flex justify-content-around ">
            <button className='goback mt-2' onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Regresar</button>
            <button onClick={Logout} className="goback mt-2 ">
              Cerrar Sesión
            </button>
          </div>
        </div>

      </section>)}

      {!user && (<section className="row App-header  ">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h1>Sesión terminada...</h1>
          <p>regresa al inicio</p>
          <br />
          <button onClick={Logout} className="btn btn-primario"> Ir al incio</button>
        </div>
      </section>)}
      <div className="row">
        <div className="container d-flex alig-items-center">


        </div>
      </div>
    </>
  )
}

export default DiaUno