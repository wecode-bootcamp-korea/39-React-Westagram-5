// 라우터 컴포넌트를 만들고 엑스포트 할것임
//대체로 이러한 모양

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main/Main';
import Cheon from "./pages/cheonjeonghwan/sample";
import Hong from "./pages/hongseokhyun/sample";
import Kim from "./pages/kimkunwoo/sample";
import Oh from "./pages/ohjuhyung/sample";
import Nam from "./pages/yeonwoonam/sample";


function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/cheon' element={<Cheon />} />
            <Route path='/hong' element={<Hong />} />
            <Route path='/kim' element={<Kim />} />
            <Route path='/oh' element={<Oh />} />
            <Route path='/nam' element={<Nam />} />
            
            
        </Routes>
        </BrowserRouter>
    )
}

export default Router;
