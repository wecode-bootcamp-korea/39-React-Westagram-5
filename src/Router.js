// 라우터 컴포넌트를 만들고 엑스포트 할것임
//대체로 이러한 모양

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Cheon from './pages/Cheon/Cheon-login';
import Hong from './pages/Hong/Hong-login';
import Kim from './pages/Kim/Kim-login';
import Oh from './pages/Oh/Oh-login';
import Nam from './pages/Nam/Nam-login';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/cheon" element={<Cheon />} />
        <Route path="/hong" element={<Hong />} />
        <Route path="/kim" element={<Kim />} />
        <Route path="/oh" element={<Oh />} />
        <Route path="/nam" element={<Nam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
