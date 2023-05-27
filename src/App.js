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

import Module from "./components/pages/lesen/Module";
import ModuleSchreiben from "./components/pages/schreiben/Module_schreiben";
import ModuleSprechen from "./components/pages/sprechen/Module_sprechen";
import ModuleHoren from "./components/pages/horen/Module_horen";

import LesenTeilen from "./components/pages/lesen/Teilen/LesenTeilen";




function App() {

 

  const subjects = [
    {
      id: '1',
      name: 'Предмет 1',
      parts: [
        { title: 'Часть 1', info: 'Информация о части 1 предмета 1' },
        { title: 'Часть 2', info: 'Информация о части 2 предмета 1' },
        { title: 'Часть 3', info: 'Информация о части 3 предмета 1' },
        { title: 'Часть 4', info: 'Информация о части 4 предмета 1' }
      ]
    },
    {
      id: '2',
      name: 'Предмет 2',
      parts: [
        { title: 'Часть 1', info: 'Информация о части 1 предмета 2' },
        { title: 'Часть 2', info: 'Информация о части 2 предмета 2' },
        { title: 'Часть 3', info: 'Информация о части 3 предмета 2' },
        { title: 'Часть 4', info: 'Информация о части 4 предмета 2' }
      ]
    }
    // Добавьте остальные предметы и их части аналогичным образом
  ];
  return (
    <div className="App">
      <Header/>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='registration' element={<Registration/>}/>
            <Route path='schedule' element={<Schedule/>}/>
            <Route path='exams' element={<Exams/>}/>

            <Route path="/lesenteilen/:id/:id" element = {<Module/> } />
            <Route path="/module1/:id" element = {<ModuleHoren/> } />
            <Route path="/module2/:id" element = {<ModuleSchreiben/> } />
            <Route path="/module3/:id" element = {<ModuleSprechen/> } />

            <Route path='/lesen' element={<Lesen/>}/>
            <Route path='/horen' element={<Horen/>}/>
            <Route path='/schreiben' element={<Schreiben/>}/>
            <Route path='/sprechen' element={<Sprechen/>}/>


            <Route path='/lesenteilen/:id' element={<LesenTeilen/>}/>


          

        </Routes>
      <Footer/>

     
     
    </div>
  );
}

export default App;
