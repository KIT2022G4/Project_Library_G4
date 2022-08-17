import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_guess from './Page/Home/home_guess';
import Detail from './Page/Detail/Detail';
import Customers from "./Component/Customer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home_guess />} />
          <Route path="detail" element={<Detail />} />
          <Route path="edit" element={<Customers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
