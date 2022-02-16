
const AgendaImg = "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/PROGRAMA_ACADEMICO_17_18_19_FEB_SEER_2022(1).png?alt=media&token=1e31b154-b939-4710-bb8f-e4ef1dc76ce3"
export default function Agenda() {
  return (
    <section data-aos="fade-up">
      <div className="contenedor-img">
        <img src={AgendaImg} alt="agenda seer" className="agenda" />
      </div>

    </section>
  )
}
