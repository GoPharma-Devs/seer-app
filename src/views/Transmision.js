import React from 'react'

const Transmision = () => {
  const Logout = () => {
    localStorage.removeItem("user")
    window.location.replace("/");
  }
  return (
    <section className="contenedor">
      <div className="contenedor-transmision">
        <div className="video-contenedor">
          <button onClick={Logout} className="btn-primario">Cerrar Sesión</button>
          <h1 style={{ textAlign: 'center' }}><strong>SEER 2022</strong> <br /> 17, 18 y 19 de febrero</h1>




        </div>
        {/* <div className="chat-contenedor">
          <h1>chat</h1>
        </div> */}
      </div>

    </section>
  )
}

export default Transmision
