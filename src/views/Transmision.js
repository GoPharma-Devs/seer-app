import React from 'react'

const Transmision = () => {
  const Logout = () => {
    localStorage.removeItem("user")
    window.location.replace("/");
  }
  return (
    <section className="contenedor">
      <div className="video-contenedor">
        <button onClick={Logout} className="btn-primario cerrar-sesion">Cerrar Sesión</button>


        <div style={{ padding: '75% 0 0 0', position: 'relative' }}><iframe src="https://player.vimeo.com/video/672597737?h=2a59ce282a&badge=0&autopause=0&player_id=0&app_id=58479" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title="SEER_Bienvenidos_Loop.mp4" /></div>



      </div>

      {/* <div className="chat-contenedor">
          <h1>chat</h1>
        </div> */}

    </section>
  )
}

export default Transmision
