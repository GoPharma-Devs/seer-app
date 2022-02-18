
const AgendaImg = "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/PROGRAMA_ACADEMICO_17_18_19_FEB_SEER_2022.png?alt=media&token=323d13f2-5eaf-4d21-8246-c5f94b602986"
export default function Agenda() {
  return (
    <section data-aos="fade-up">
      <div className="contenedor-img">
        <img src={AgendaImg} alt="agenda seer" className="agenda" />
      </div>

    </section>
  )
}
