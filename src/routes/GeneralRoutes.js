import React, { useEffect, useState, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Home from "../views/Home";
import Login from "../views/Login";
import Registro from "../views/Registro";
import Transmision from "../views/Transmision";
import ErrorPage from "../views/ErrorPage";
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
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user])
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
        </ScrollingProvider>
      </Wrapper>
    </BrowserRouter>
  );
}

export default GeneralRoutes;
