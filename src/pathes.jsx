import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header'; // Import Header here!
import Home from './pages/home';
import Exbition from './pages/exbition';

const Routess = () => {
    return (
     <BrowserRouter>
       <Header /> 
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/exbition" element={<Exbition />} />
       </Routes>
     </BrowserRouter>
    );
}
export default Routess;