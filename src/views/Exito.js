import React from 'react';
import { Link } from 'react-router-dom';

function Exito() {
  return <section className="contenedor">
    <div className="contenedor">
      <h1>Registro exitoso</h1>
      <p>Puedes ingresar con tu correo registrado</p>
      <p><strong>Contraseña: seer2022</strong></p>
      <Link to="/congreso" className="btn-primario"> Congreso</Link>
    </div>

  </section>;
}

export default Exito;
