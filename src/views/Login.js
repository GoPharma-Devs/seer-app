import React from 'react'

function Login() {
  return (
    <section className="login">
      <div className="contenedor">
        <h1>
          <FormattedMessage id="login.title" />
        </h1>
        <div className="contenedor-login">
          <form
            className="formulario"
            onSubmit={ }
          >
            <div className="form-grupo">
              <label>
                <FormattedMessage id="login.email" />{" "}
              </label>
              <input
                placeholder="user@baxter.com"
                type="email"
                id="email"
                value={ }
                onChange={ }
                required
              />
            </div>
            <div className="form-grupo">
              <label>
                {" "}
                <FormattedMessage id="login.password" />{" "}
              </label>
              <input
                placeholder=""
                type="password"
                id="password"
                name="currrent-password"
                value={ }
                onChange={ }
                required
              />
            </div>
            <button className="btn-secondary" type="submit">
              <FormattedMessage id="button.start" defaultMessage="Entrar" />
            </button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Login
