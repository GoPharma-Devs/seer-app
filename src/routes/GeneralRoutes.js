import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../views/Home";
import Login from "../views/Login";
import Registro from "../views/Registro";
import Transmision from "../views/Transmision";
import ErrorPage from "../views/ErrorPage";

const GeneralRoutes = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user])
  return (
    <BrowserRouter>
      <Routes>

        {!user && (
          <>
            <Route path="/" element={<Home />} />
            <Route
              path="/inicio"
              element={<Login authenticate={() => setUser(true)} />}
            />

            <Route
              path="/registro"
              element={<Registro authenticate={() => setUser(true)} />}
            />

          </>

        )}
        {user && (
          <Route path="/transmision" element={<Transmision logout={() => setUser(false)} />} />

        )}
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer data-aos="fade-up" />
    </BrowserRouter>
  );
}

export default GeneralRoutes;
