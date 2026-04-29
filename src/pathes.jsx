import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/header';
import Home from './pages/home';
import Exbition from './pages/exbition';
import FloorPlan from './pages/floorplan';
import Register from './pages/register';
import Preloader from './components/preloader';
import Contact from './pages/contact';
import Error from './pages/error';


export const ReadyContext = React.createContext(false);

const RouteChangePreloader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLoading(true);
    setReady(false);
  }, [location.pathname]);

  const handleComplete = () => {
    setLoading(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setReady(true);
      });
    });
  };

  return (
    <ReadyContext.Provider value={ready}>
      {loading && (
        <Preloader onComplete={handleComplete} />
      )}
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </ReadyContext.Provider>
  );
};

const Routess = () => {
  return (
    <BrowserRouter>
      <RouteChangePreloader>
        <Header />
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/exbition"  element={<Exbition />} />
          <Route path="/floorplan" element={<FloorPlan />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="*"          element={<Error />} />
        </Routes>
      </RouteChangePreloader>
    </BrowserRouter>
  );
};

export default Routess;