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
// import ModuleSchreiben from "./components/pages/schreiben/Module_schreiben";
import ModuleSprechen from "./components/pages/sprechen/Module_sprechen";
// import ModuleHoren from "./components/pages/horen/Module_horen";

import HorenModule1 from "./components/pages/horen/horenModule/HorenModule1";
import LesenModule1 from "./components/pages/lesen/lesenModule/SubLesenModule1";
import SchreibenModule1 from "./components/pages/schreiben/schreibenModule/SchreibenModule1";


//  ** module part
import LesenTeilen from "./components/pages/lesen/lesenModule/LesenTeilen";
import HorenPart from "./components/pages/horen/horenModule/HorenPart";
import SchreibenPart from "./components/pages/schreiben/schreibenModule/SchreibenPart";

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

        {/* ** Teil  */}
        <Route path="/lesen" element={<Lesen />} />
        <Route path="/horen" element={<Horen />} />
        <Route path="/schreiben" element={<Schreiben />} />
        <Route path="/sprechen" element={<Sprechen />} />

        {/* ** Module  */}
        {/* <Route path="/lesenteilen/:id/:id" element = {<Module/> } /> */}
        <Route path="/lesenModule1" element={<LesenModule1 />} />
        <Route path="horenModule1" element={<HorenModule1 />} />
        <Route path="schreibenModule1" element={<SchreibenModule1 />} />

        {/* <Route path="/module2/:id" element={<ModuleSchreiben />} /> */}
        <Route path="/module3/:id" element={<ModuleSprechen />} />

        {/* ** Module  part*/}
        <Route path="/lesenModule1/:id" element={<LesenTeilen />} />
        <Route path="/horenModule1/:id" element={<HorenPart />} />
        <Route path="/schreibenModule1/:id" element={<SchreibenPart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
