import React from 'react'

const Transmision = ({ logout }) => {
  return (
    <section className="contenedor">
      <div className="contenedor-transmision">
        <div className="video-contenedor">
          <button onClick={logout} className="btn-primario">Cerrar Sesion</button>
          <h1>Video</h1>


        </div>
        <div className="chat-contenedor">
          <h1>chat</h1>
        </div>
      </div>

    </section>
  )
}

export default Transmision
