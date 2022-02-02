import React, { useEffect, useState } from "react";

import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="container mt-5 text-center" data-aos="fade-in">
      <div className="row">
        <h3 className="mt-2 titulo">¡No te pierdas el 1er Congreso<br /> Internacional SEER 2022!</h3>
        <h4>Aparta las fechas 17,18 y 19 de febrero.</h4>
        <Link className="btn-primario" to="/registro" >Regístrate </Link>
        <div className="contador">
          <div className="contenedor-contador">
            <div className="Clock-days col">
              <p>{leading0(days)}</p>{" "}
              <span>
                <span id="component.day" >Días</span>
              </span>{" "}
            </div>
            <div className="Clock-hours col">
              <p>{leading0(hours)}</p>{" "}
              <span>
                {" "}
                <span id="component.hours" >Horas</span>
              </span>
            </div>
            <div className="Clock-minutes col">
              <p>{leading0(minutes)}</p>{" "}
              <span>
                {" "}
                <span id="component.minutes" >Minutos</span>
              </span>
            </div >
            <div className="Clock-seconds col">
              <p>{leading0(seconds)}</p>{" "}
              <span>

                {" "}
                <span id="component.seconds" >Segundos</span>
              </span>
            </div >
          </div >
        </div >
      </div>
    </div>
  );
};

export default Clock;