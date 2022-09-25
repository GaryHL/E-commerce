import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../views/home/Home.jsx';
import Welcome from '../views/welcome/Welcome.jsx';


function Router () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router