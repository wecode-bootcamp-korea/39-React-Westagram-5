// 라우터 컴포넌트를 만들고 엑스포트 할것임
//대체로 이러한 모양

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CheonLogin from './pages/Cheon/CheonLogin';
// import Nav from './components/Nav/Nav';
import HongLogin from './pages/Hong/HongLogin';
import KimLogin from './pages/Kim/KimLogin';
import OhLogin from './pages/Oh/OhLogin';
import NamLogin from './pages/Nam/Login/NamLogin';
import NamMain from './pages/Nam/Main/NamMain';
import Parent from './pages/Nam/practice/Parent';

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/cheon" element={<CheonLogin />} />
        <Route path="/hong" element={<HongLogin />} />
        <Route path="/kim" element={<KimLogin />} />
        <Route path="/oh" element={<OhLogin />} />
        <Route path="/namlogin" element={<NamLogin />} />
        <Route path="/nammain" element={<NamMain />} />
        <Route path="/parent" element={<Parent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
