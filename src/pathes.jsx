import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header'; 
import Home from './pages/home';
import Exbition from './pages/exbition';
import FloorPlan from './pages/floorplan';

const Routess = () => {
    return (
     <BrowserRouter>
       <Header /> 
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/exbition" element={<Exbition />} />
         <Route path="/floorplan" element={<FloorPlan />} />
       </Routes>
     </BrowserRouter>
    );
}
export default Routess;