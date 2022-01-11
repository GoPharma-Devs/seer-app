import React from 'react'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <section className="contenedor">
      <div className="contenedor-error">
        <h1>Página no encontrada</h1>
        <p>la página que busca no fue encontrada, vuelva al inicio</p>
        <Link onClick={console.log("hola")} to="/" className="btn-primario">Inicio</Link>
      </div>

    </section>
  )
}

export default ErrorPage
