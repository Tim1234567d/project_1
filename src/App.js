import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// ** pages
import Home from "./components/home/Home";
import Login from "./components/pages/login";
import Registration from "./components/pages/rigistration";
import Schedule from "./components/pages/schedule/Schedule";
import Exams from "./components/pages/exams/Exams";
import Lesen from "./components/pages/lesen/Lesen";
import Horen from "./components/pages/horen/Horen";
import Schreiben from "./components/pages/schreiben/Schreiben";
import Sprechen from "./components/pages/sprechen/Sprechen";

// ** module
import HorenModule1 from "./components/pages/horen/horenModule/horenModule1/HorenModule1";
import LesenModule1 from "./components/pages/lesen/lesenModule/LesenModule1/LesenModule1";
import SchreibenModule1 from "./components/pages/schreiben/schreibenModule/SchreibenModule1";
import SprechenModule1 from "./components/pages/sprechen/sprechenModule/SprechenModule1";

//  ** module parts
import LesenPart from "./components/pages/lesen/lesenModule/LesenModule1/LesenPart";
import HorenPart from "./components/pages/horen/horenModule/horenModule1/HorenPart";
import SchreibenPart from "./components/pages/schreiben/schreibenModule/SchreibenPart";
import SprechenPart from "./components/pages/sprechen/sprechenModule/SprechenPart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* ** Main  */}
        <Route path="/" element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="exams" element={<Exams />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />

        {/* ** Parts  */}
        <Route path="/lesen" element={<Lesen />} />
        <Route path="/horen" element={<Horen />} />
        <Route path="/schreiben" element={<Schreiben />} />
        <Route path="/sprechen" element={<Sprechen />} />

        {/* ** Module  */}
        <Route path="/lesenModule1" element={<LesenModule1 />} />
        <Route path="horenModule1" element={<HorenModule1 />} />
        <Route path="schreibenModule1" element={<SchreibenModule1 />} />
        <Route path="sprechenModule1" element={<SprechenModule1 />} />

        {/* ** Module  parts*/}
        <Route path="/lesenModule1/:id" element={<LesenPart />} />
        <Route path="/horenModule1/:id" element={<HorenPart />} />
        <Route path="/schreibenModule1/:id" element={<SchreibenPart />} />
        <Route path="/sprechenModule1/:id" element={<SprechenPart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
