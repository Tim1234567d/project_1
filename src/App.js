import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

import { Route, Routes } from "react-router-dom";

import { Login } from "./components/pages/login";
import { Registration } from "./components/pages/rigistration";

import Schedule from "./components/pages/schedule/Schedule";
import Exams from "./components/pages/exams/Exams";
import Lesen from "./components/pages/lesen/Lesen";
import Horen from "./components/pages/horen/Horen";
import Schreiben from "./components/pages/schreiben/Schreiben";
import Sprechen from "./components/pages/sprechen/Sprechen";

// import Module from "./components/pages/lesen/Module";
import ModuleSchreiben from "./components/pages/schreiben/Module_schreiben";
import ModuleSprechen from "./components/pages/sprechen/Module_sprechen";
import ModuleHoren from "./components/pages/horen/Module_horen";

import LesenTeilen from "./components/pages/lesen/lesenModule/LesenTeilen";

import LesenModule1 from "./components/pages/lesen/lesenModule/SubLesenModule1";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* ** Main  */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="exams" element={<Exams />} />

        {/* ** Teil  */}
        <Route path="/lesen" element={<Lesen />} />
        <Route path="/horen" element={<Horen />} />
        <Route path="/schreiben" element={<Schreiben />} />
        <Route path="/sprechen" element={<Sprechen />} />

        {/* ** Module  */}
        {/* <Route path="/lesenteilen/:id/:id" element = {<Module/> } /> */}
        <Route path="/module1/:id" element={<ModuleHoren />} />
        <Route path="/module2/:id" element={<ModuleSchreiben />} />
        <Route path="/module3/:id" element={<ModuleSprechen />} />

        {/* **  */}

        <Route path="/lesenModule1/:id" element={<LesenTeilen />} />

        {/* ***** */}
        <Route path="/lesenModule1" element={<LesenModule1 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
