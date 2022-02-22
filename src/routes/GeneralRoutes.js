import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Home from "../views/Home";
import Login from "../views/Login";
import Registro from "../views/Registro";
//import Transmision from "../views/Transmision";
import ErrorPage from "../views/ErrorPage";
import Exito from "../views/Exito";
import Convocatoria from "../views/Convocatoria";
import Agenda from "../components/Agenda";
import Chat from "../views/Chat";
import {
  ScrollingProvider,

} from 'react-scroll-section';
const GeneralRoutes = () => {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Wrapper>
        <ScrollingProvider>
          <Navbar />
          <Routes>

            {!user && (
              <>
                <Route path="/" element={<Home />} />
                <Route
                  path="/congreso"
                  element={<Login authenticate={() => setUser(true)} />}
                />

                <Route
                  path="/registro"
                  element={<Registro authenticate={() => setUser(true)} />}
                />
                <Route
                  path="/chat-history"
                  element={<Chat authenticate={() => setUser(true)} />}
                />

              </>

            )}
            <Route path="/exito" element={<Exito />} />
            <Route path="/convocatoria" element={<Convocatoria />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="*" element={<ErrorPage />} />

          </Routes>
          <Footer data-aos="fade-up" />
        </ScrollingProvider>
      </Wrapper>
    </BrowserRouter>
  );
}

export default GeneralRoutes;
