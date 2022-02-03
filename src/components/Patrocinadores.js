import React from "react";
const myArray = [
  {
    name: "Asofarma",
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/Patrocinadores%2Fasofarma-seeklogo.com.png?alt=media&token=f21e8f79-48b3-42f4-af04-d70d3accf3c0"
  },
  {
    name: "Astrazeneca",
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/Patrocinadores%2Fastra_zeneca_logo.png?alt=media&token=f0760c18-ecb0-4e7d-8281-c33e849f0d6a"
  },
  {
    name: "Biogen",
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/Patrocinadores%2FBiogen-Logo.png?alt=media&token=ef91a963-4baf-43e8-9c31-175a993761a2"
  },
  {
    name: "Biomarin",
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/Patrocinadores%2Flogo_new_biomarin.png?alt=media&token=3a799b8c-3704-44d5-8deb-283d34a4027a"
  },
  {
    name: "Janssen",
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/Patrocinadores%2Flogo-janssen-versiones.png?alt=media&token=775b473d-881e-4b89-9cf2-1d38a02b0f36"
  },
  {
    name: "Novartis",
    id: 6,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/Patrocinadores%2FNovartis.png?alt=media&token=db8da876-3809-4439-994f-1a1c875c8dce"
  },
  {
    name: "Roche",
    id: 7,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/Patrocinadores%2FROCHE_LOGO.png?alt=media&token=27048e40-81b7-415d-92fa-19576844055c"
  },
  {
    name: "Sanofi",
    id: 8,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/Patrocinadores%2Fsanofi-vert.png?alt=media&token=d781811a-64d9-4d01-927c-c210f93f0fa9"
  },
  {
    name: "Takeda",
    id: 9,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/Patrocinadores%2FTakeda.png?alt=media&token=984da9ea-da36-4bd7-8169-62fc7df10d09"
  },
  {
    name: "Ultragenyx",
    id: 10,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/Patrocinadores%2FultragenyxPH-.png?alt=media&token=42628f5c-9bd1-47c7-8788-00237eba2ecd"
  }
];
function Patrocinadores() {
  return (
    <div className="patrocinadores" data-aos="fade-up">
      <h4 className="text-center">Nuestros</h4>
      <h3 className="text-center">Patrocinadores</h3>

      <div className="patrocinadores-Contenedor">
        {myArray.map((item, index) => (
          <div key={index} className="patrocinadores-img">
            <img
              src={item.img}
              className="patrocinadoresImg"
              alt="seer 2022"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patrocinadores;