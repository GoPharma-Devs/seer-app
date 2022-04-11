import React from 'react'

function Loby() {
  const Logout = () => {
    localStorage.removeItem("user")
    window.location.replace("/");
  }
  return (
    <>
      <section className='section Lobby '>

        <div className="container">
          <h1 className="h4 text-center">
            Revive el 1er Congreso Internacional<br /> de la Sociedad de Especialistas en Enfermedades Raras 2022
          </h1>
          <p className="text-center">
            Trabajando
          </p>

        </div>
      </section>
      <button onClick={Logout} className="btn-primario cerrar-sesion">Cerrar Sesión</button>
    </>
  )
}

export default Loby