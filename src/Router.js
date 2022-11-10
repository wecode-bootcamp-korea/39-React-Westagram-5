import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CheonLogin from './pages/Cheon/CheonLogin';

import Nav from './components/Nav/Nav';
import HongLogin from './pages/Hong/Login/HongLogin';
import HongMain from './pages/Hong/Main//HongMain';
import KimLogin from './pages/Kim/KimLogin';
import OhLogin from './pages/Oh/OhLogin';
import NamLogin from './pages/Nam/NamLogin';
import SignUp from './pages/Hong/SignUp/SignUp';

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/cheon" element={<CheonLogin />} />
        <Route path="/HongLogin" element={<HongLogin />} />
        <Route path="/HongMain" element={<HongMain />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/kim" element={<KimLogin />} />
        <Route path="/oh" element={<OhLogin />} />
        <Route path="/nam" element={<NamLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
