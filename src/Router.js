// 라우터 컴포넌트를 만들고 엑스포트 할것임
//대체로 이러한 모양

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main/Main';

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;
