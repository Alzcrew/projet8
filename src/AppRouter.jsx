import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logements from "./pages/Logements/Logements";
import Error from "./pages/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/projet8">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/fiche-logement/:id" element={<Logements />} />
        <Route path="*" element={<Error />} />
        <Route path="/erreur" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

