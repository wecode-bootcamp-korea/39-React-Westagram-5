// 라우터 컴포넌트를 만들고 엑스포트 할것임
//대체로 이러한 모양

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CheonLogin from './pages/Cheon/Login/CheonLogin';
import CheonMain from './pages/Cheon/Main/CheonMain';

// import Nav from './components/Nav/Nav';
import HongLogin from './pages/Hong/HongLogin';
import KimLogin from './pages/Kim/KimLogin';
import OhLogin from './pages/Oh/OhLogin';
import NamLogin from './pages/Nam/NamLogin';

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/cheon-login" element={<CheonLogin />} />
        <Route path="/cheon-main" element={<CheonMain />} />
        <Route path="/hong" element={<HongLogin />} />
        <Route path="/kim" element={<KimLogin />} />
        <Route path="/oh" element={<OhLogin />} />
        <Route path="/nam" element={<NamLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
