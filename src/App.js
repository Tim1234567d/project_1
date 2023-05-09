import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

import { Route, Routes } from "react-router-dom";

import { Login } from "./components/pages/login";
import { Registration } from "./components/pages/rigistration";
import ServiceDetail from "./components/home/services/ServiceDetail";


import Schedule from "./components/pages/schedule/Schedule";
import Exams from "./components/pages/exams/Exams";
import Lesen from "./components/pages/lesen/Lesen";
import Horen from "./components/pages/horen/Horen";


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>

            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
            <Route path='/exams' element={<Exams/>}/>
            <Route path="/serviceDetail/:id" element = {<ServiceDetail/> } />

            <Route path='/lesen' element={<Lesen/>}/>
            <Route path='/horen' element={<Horen/>}/>

        </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
