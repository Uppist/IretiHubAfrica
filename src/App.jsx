/** @format */

import React from "react";
import Home from "./components/Home/Home";
import Aboutus from "./components/About/Aboutus";
import Contactus from "./components/Contact/Contactus";
import Services from "./components/Service/Services";
import { HashRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
    </HashRouter>
  );
}
