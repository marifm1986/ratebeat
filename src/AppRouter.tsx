import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Buying } from "./components/Buying";
export function AppRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/buying" element={<Buying />} />
    </Routes>
  </BrowserRouter>;
}