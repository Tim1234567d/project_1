import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

import { Route, Routes } from "react-router-dom";

import { Login } from "./components/pages/login";
import { Registration } from "./components/pages/rigistration";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>

            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/rigistration' element={<Registration/>}/>
            {/* <Route path='/services' element={<AllServices/>}/>
            <Route path='/aboutCompany' element={<AboutCompany/>}/>
            <Route path="/serviceDetail/:id" element = {<ServiceDetail/> } /> */}

        </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
