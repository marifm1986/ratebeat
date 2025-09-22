import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Buying } from "./components/Buying";
import { AllBlogsPage } from "./pages/AllBlogsPage";
import { SingleBlogPage } from "./pages/SingleBlogPage";

export function AppRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/rate" element={<Buying />} />
      <Route path="/blog" element={<AllBlogsPage />} />
      <Route path="/blog/:slug" element={<SingleBlogPage />} />
    </Routes>
  </BrowserRouter>;
}