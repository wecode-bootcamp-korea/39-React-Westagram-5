import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CheonLogin from './pages/Cheon/CheonLogin';

import Nav from './components/Nav/Nav';
import HongLogin from './pages/Hong/HongLogin';
import KimLogin from './pages/Kim/KimLogin';
import OhLogin from './pages/Oh/Login/OhLogin';
import OhMain from './pages/Oh/Main/OhMain';
import NamLogin from './pages/Nam/NamLogin';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cheon" element={<CheonLogin />} />
        <Route path="/hong" element={<HongLogin />} />
        <Route path="/kim" element={<KimLogin />} />
        <Route path="/ohLogin" element={<OhLogin />} />
        <Route path="/ohMain" element={<OhMain />} />
        <Route path="/nam" element={<NamLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
