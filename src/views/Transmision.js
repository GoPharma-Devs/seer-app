import React from 'react'

const Transmision = () => {
  const Logout = () => {
    localStorage.removeItem("user")
    window.location.replace("/");
  }
  return (
    <section className="contenedor contenedor-transmision">

      <div className="video-contenedor">



        <div style={{ padding: "54.25% 0 0 0", position: 'relative' }}><iframe src="https://player.vimeo.com/video/678461259?h=bd5b3bf1a5&badge=0&autopause=0&player_id=0&app_id=58479" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title="SEER_Bienvenidos_Loop.mp4" /></div>

        {/* <div style={{padding: '56.25% 0 0 0', position: 'relative'}}><iframe src="https://vimeo.com/event/1855019/embed/5845e89727" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} /></div> */}


      </div>

      <div className="chat-contenedor">
        <iframe title="chat" src="https://minnit.chat/SEER?embed&&nickname=" style={{ border: 'none', width: '90%', height: 500 }} allowTransparency="true" />

      </div>
      <button onClick={Logout} className="btn-primario cerrar-sesion">Cerrar Sesión</button>


    </section>
  )
}

export default Transmision

