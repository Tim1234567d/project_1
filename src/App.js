import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// ******************** pages *******************************
import Home from "./components/home/Home";
import Login from "./components/pages/login";
import Registration from "./components/pages/rigistration";
import Schedule from "./components/pages/schedule/Schedule";
import Exams from "./components/pages/exams/Exams";
import Lesen from "./components/pages/lesen/Lesen";
import Horen from "./components/pages/horen/Horen";
import Schreiben from "./components/pages/schreiben/Schreiben";
import Sprechen from "./components/pages/sprechen/Sprechen";

// ******************** module *******************************
// lesen
import LesenModule1 from "./components/pages/lesen/lesenModule1/LesenModule1";
import LesenModule2 from "./components/pages/lesen/lesenModule2/LesenModule2";
import LesenModule3 from "./components/pages/lesen/lesenModule3/LesenModule3";
import LesenModule4 from "./components/pages/lesen/lesenModule4/LesenModule4";

// horen 
import HorenModule1 from "./components/pages/horen/horenModule1/HorenModule1";
import HorenModule2 from "./components/pages/horen/horenModule2/HorenModule2"
import HorenModule3 from "./components/pages/horen/horenModule3/HorenModule3"
import HorenModule4 from "./components/pages/horen/horenModule4/HorenModule4"

// schreiben 
import SchreibenModule1 from "./components/pages/schreiben/schreibenModule/SchreibenModule1/SchreibenModule1";
import SchreibenModule2 from "./components/pages/schreiben/schreibenModule/SchreibenModule2/SchreibenModule2";
import SchreibenModule3 from "./components/pages/schreiben/schreibenModule/SchreibenModule3/SchreibenModule3";
import SchreibenModule4 from "./components/pages/schreiben/schreibenModule/SchreibenModule4/SchreibenModule4";

// sprechen
import SprechenModule1 from "./components/pages/sprechen/sprechenModule/SprechenModule1/SprechenModule1";
import SprechenModule2 from "./components/pages/sprechen/sprechenModule/SprechenModule2/SprechenModule2";
// import SprechenModule1 from "./components/pages/sprechen/sprechenModule/SprechenModule1/SprechenModule1";
// import SprechenModule1 from "./components/pages/sprechen/sprechenModule/SprechenModule1/SprechenModule1";

// ******************** module parts *******************************
// lesen parts №1
import LesenPart1_1 from "./components/pages/lesen/lesenModule1/lesenParts/LesenPart1_1";
import LesenPart1_2 from "./components/pages/lesen/lesenModule1/lesenParts/LesenPart1_2";
import LesenPart1_3 from "./components/pages/lesen/lesenModule1/lesenParts/LesenPart1_3";
import LesenPart1_4 from "./components/pages/lesen/lesenModule1/lesenParts/LesenPart1_4";
import LesenPart1_5 from "./components/pages/lesen/lesenModule1/lesenParts/LesenPart1_5";

// lesen parts №2
import LesenPart2_1 from "./components/pages/lesen/lesenModule2/lesenParts/LesenPart2_1";
import LesenPart2_2 from "./components/pages/lesen/lesenModule2/lesenParts/LesenPart2_2";
import LesenPart2_3 from "./components/pages/lesen/lesenModule2/lesenParts/LesenPart2_3";
import LesenPart2_4 from "./components/pages/lesen/lesenModule2/lesenParts/LesenPart2_4";
import LesenPart2_5 from "./components/pages/lesen/lesenModule2/lesenParts/LesenPart2_5";

// lesen parts №3
import LesenPart3_1 from "./components/pages/lesen/lesenModule3/lesenParts/LesenPart3_1";
import LesenPart3_2 from "./components/pages/lesen/lesenModule3/lesenParts/LesenPart3_2";
import LesenPart3_3 from "./components/pages/lesen/lesenModule3/lesenParts/LesenPart3_3";
import LesenPart3_4 from "./components/pages/lesen/lesenModule3/lesenParts/LesenPart3_4";
import LesenPart3_5 from "./components/pages/lesen/lesenModule3/lesenParts/LesenPart3_5";

// lesen parts №4
import LesenPart4_1 from "./components/pages/lesen/lesenModule4/lesenParts/LesenPart4_1";
import LesenPart4_2 from "./components/pages/lesen/lesenModule4/lesenParts/LesenPart4_2";
import LesenPart4_3 from "./components/pages/lesen/lesenModule4/lesenParts/LesenPart4_3";
import LesenPart4_4 from "./components/pages/lesen/lesenModule4/lesenParts/LesenPart4_4";
import LesenPart4_5 from "./components/pages/lesen/lesenModule4/lesenParts/LesenPart4_5";

// horen parts №1
import HorenPart1_1 from "./components/pages/horen/horenModule1/horenParts/HorenPart1_1";
import HorenPart1_2 from "./components/pages/horen/horenModule1/horenParts/HorenPart1_2";
import HorenPart1_3 from "./components/pages/horen/horenModule1/horenParts/HorenPart1_3";
import HorenPart1_4 from "./components/pages/horen/horenModule1/horenParts/HorenPart1_4";

// horen parts №2
import HorenPart2_1 from "./components/pages/horen/horenModule2/horenParts/HorenPart2_1";
import HorenPart2_2 from "./components/pages/horen/horenModule2/horenParts/HorenPart2_2";
import HorenPart2_3 from "./components/pages/horen/horenModule2/horenParts/HorenPart2_3";
import HorenPart2_4 from "./components/pages/horen/horenModule2/horenParts/HorenPart2_4";

// horen parts №3
import HorenPart3_1 from "./components/pages/horen/horenModule3/horenParts/HorenPart3_1";
import HorenPart3_2 from "./components/pages/horen/horenModule3/horenParts/HorenPart3_2";
import HorenPart3_3 from "./components/pages/horen/horenModule3/horenParts/HorenPart3_3";
import HorenPart3_4 from "./components/pages/horen/horenModule3/horenParts/HorenPart3_4";

// horen parts №4
import HorenPart4_1 from "./components/pages/horen/horenModule4/horenParts/HorenPart4_1";
import HorenPart4_2 from "./components/pages/horen/horenModule4/horenParts/HorenPart4_2";
import HorenPart4_3 from "./components/pages/horen/horenModule4/horenParts/HorenPart4_3";
import HorenPart4_4 from "./components/pages/horen/horenModule4/horenParts/HorenPart4_4";


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

        {/* ** Module lesen  */}
        <Route path="/lesenModule1" element={<LesenModule1 />} />
        <Route path="/lesenModule2" element={<LesenModule2 />} />
        <Route path="/lesenModule3" element={<LesenModule3 />} />
        <Route path="/lesenModule4" element={<LesenModule4 />} />

        {/* ** Module horen  */}
        <Route path="horenModule1" element={<HorenModule1 />} />
        <Route path="horenModule2" element={<HorenModule2 />} />
        <Route path="horenModule3" element={<HorenModule3 />} />
        <Route path="horenModule4" element={<HorenModule4 />} />

        {/* ** Module schreiben */}
        <Route path="schreibenModule1" element={<SchreibenModule1 />} />
        <Route path="schreibenModule2" element={<SchreibenModule2 />} />
        <Route path="schreibenModule3" element={<SchreibenModule3 />} />
        <Route path="schreibenModule4" element={<SchreibenModule4 />} />

        {/* ** Module sprechen */}
        <Route path="sprechenModule1" element={<SprechenModule1 />} />
        <Route path="sprechenModule2" element={<SprechenModule2 />} />
        {/* <Route path="sprechenModule1" element={<SprechenModule1 />} />
        <Route path="sprechenModule1" element={<SprechenModule1 />} /> */}

        {/* **  Lesen module 1 parts */}
        <Route path="/lesenModule1/lesenPart1_1" element={<LesenPart1_1 />} />
        <Route path="/lesenModule1/lesenPart1_2" element={<LesenPart1_2 />} />
        <Route path="/lesenModule1/lesenPart1_3" element={<LesenPart1_3 />} />
        <Route path="/lesenModule1/lesenPart1_4" element={<LesenPart1_4 />} />
        <Route path="/lesenModule1/lesenPart1_5" element={<LesenPart1_5 />} />

        {/* **  Lesen module 2 parts */}
        <Route path="/lesenModule2/lesenPart2_1" element={<LesenPart2_1 />} />
        <Route path="/lesenModule2/lesenPart2_2" element={<LesenPart2_2 />} />
        <Route path="/lesenModule2/lesenPart2_3" element={<LesenPart2_3 />} />
        <Route path="/lesenModule2/lesenPart2_4" element={<LesenPart2_4 />} />
        <Route path="/lesenModule2/lesenPart2_5" element={<LesenPart2_5 />} />

        {/* **  Lesen module 3 parts */}
        <Route path="/lesenModule3/lesenPart3_1" element={<LesenPart3_1 />} />
        <Route path="/lesenModule3/lesenPart3_2" element={<LesenPart3_2 />} />
        <Route path="/lesenModule3/lesenPart3_3" element={<LesenPart3_3 />} />
        <Route path="/lesenModule3/lesenPart3_4" element={<LesenPart3_4 />} />
        <Route path="/lesenModule3/lesenPart3_5" element={<LesenPart3_5 />} />

        {/* **  Lesen module 4 parts */}
        <Route path="/lesenModule4/lesenPart4_1" element={<LesenPart4_1 />} />
        <Route path="/lesenModule4/lesenPart4_2" element={<LesenPart4_2 />} />
        <Route path="/lesenModule4/lesenPart4_3" element={<LesenPart4_3 />} />
        <Route path="/lesenModule4/lesenPart4_4" element={<LesenPart4_4 />} />
        <Route path="/lesenModule4/lesenPart4_5" element={<LesenPart4_5 />} />

        {/* **  Horen module 1 parts */}
        <Route path="/horenModule1/horenPart1_1" element={<HorenPart1_1 />} />
        <Route path="/horenModule1/horenPart1_2" element={<HorenPart1_2 />} />
        <Route path="/horenModule1/horenPart1_3" element={<HorenPart1_3 />} />
        <Route path="/horenModule1/horenPart1_4" element={<HorenPart1_4 />} />

        {/* **  Horen module 2 parts */}
        <Route path="/horenModule2/horenPart2_1" element={<HorenPart2_1 />} />
        <Route path="/horenModule2/horenPart2_2" element={<HorenPart2_2 />} />
        <Route path="/horenModule2/horenPart2_3" element={<HorenPart2_3 />} />
        <Route path="/horenModule2/horenPart2_4" element={<HorenPart2_4 />} />

        {/* **  Horen module 3 parts */}
        <Route path="/horenModule3/horenPart3_1" element={<HorenPart3_1 />} />
        <Route path="/horenModule3/horenPart3_2" element={<HorenPart3_2 />} />
        <Route path="/horenModule3/horenPart3_3" element={<HorenPart3_3 />} />
        <Route path="/horenModule3/horenPart3_4" element={<HorenPart3_4 />} />

        {/* **  Horen module 4 parts */}
        <Route path="/horenModule4/horenPart4_1" element={<HorenPart4_1 />} />
        <Route path="/horenModule4/horenPart4_2" element={<HorenPart4_2 />} />
        <Route path="/horenModule4/horenPart4_3" element={<HorenPart4_3 />} />
        <Route path="/horenModule4/horenPart4_4" element={<HorenPart4_4 />} />


      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
