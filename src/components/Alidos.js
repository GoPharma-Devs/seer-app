import React from "react";
const myArray = [
  {
    name: "Fermex",
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2Ffemexer_logo_1000x670.png?alt=media&token=a1c660b3-86ca-4987-a091-0dc2f9813e3e"
  },
  {
    name: "Fumeni",
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2FFUMENI.jpeg?alt=media&token=dc88f447-24c7-4583-a504-cb83e129de7f"
  },
  {
    name: "Huntington",
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2FlogoCompletoHungtinton.png?alt=media&token=fc5ed0d9-2281-4a99-b75a-ee59ec316cec"
  },
  {
    name: "ppudm",
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2FPPuDM.png?alt=media&token=f6f9462c-9334-4e74-8193-83ace51080ef"
  }
];
function Aliados() {
  return (
    <>

      <div className=" bg-white container-fluid pt-4 pt-5 pb-4" data-aos="fade-up">

        <h3 className="text-center titulo">Aliados</h3>

        <div className="aliados">
          <div className="aliados-Contenedor">
            {myArray.map((item, index) => (
              <div key={index} className="aliados-img">
                <img
                  src={item.img}
                  className="patrocinadoresImg"
                  alt="seer 2022"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Aliados;