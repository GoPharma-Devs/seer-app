import React from 'react'

function Registro() {
  return (
    <section className="registro" >

      <div className="contenedor-form contenedor">
        <div className="form">
          {/* Begin Mailchimp Signup Form */}
          <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
          <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
          <div id="mc_embed_signup">
            <form action="https://go-pharma.us1.list-manage.com/subscribe/post?u=37892f6a3c3f15b6ba401af59&id=76d3e57aa3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" >
              <div id="mc_embed_signup_scroll">

                <h1>SEER 2022</h1>
                <h2>Registro</h2>


                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
                  <label htmlFor="mce-MMERGE3">Nombre  <span className="asterisk">*</span>
                  </label>
                  <input type="text" defaultValue="" name="MMERGE3" className="required" id="mce-MMERGE3" />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">Apellido Paterno  <span className="asterisk">*</span>
                  </label>
                  <input type="text" defaultValue="" name="FNAME" className="required" id="mce-FNAME" />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">Apellido Materno  <span className="asterisk">*</span>
                  </label>
                  <input type="text" defaultValue="" name="LNAME" className="required" id="mce-LNAME" />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-MMERGE6">Lugar de trabajo o de estudio  <span className="asterisk">*</span>
                  </label>
                  <input type="text" defaultValue="" name="MMERGE6" className="required" id="mce-MMERGE6" />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">Email  <span className="asterisk">*</span>
                  </label>
                  <input type="email" defaultValue="usuario@correo" name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
                <div className="mc-field-group size1of2">
                  <label htmlFor="mce-PHONE">Teléfono  <span className="asterisk">*</span>
                  </label>
                  <input type="text" name="PHONE" className="required" defaultValue="Teléfono" id="mce-PHONE" />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-MMERGE7">Cédula Profesional  <span className="asterisk">*</span>
                  </label>
                  <input type="text" defaultValue="" name="MMERGE7" className="required" id="mce-MMERGE7" />
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                  <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_37892f6a3c3f15b6ba401af59_76d3e57aa3" tabIndex={-1} defaultValue /></div>
                <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
            </form>
          </div>
          {/*End mc_embed_signup*/}
        </div>



      </div>

    </section>
  )
}

export default Registro
