import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Buying } from "./components/Buying";
import { AllBlogsPage } from "./pages/AllBlogsPage";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import Login from "./components/auth/Login";
import { DashboardPage } from "./components/Dashboard";
import { CategoriesPage } from "./components/CategoriesPage";
import { CommentsPage } from "./components/CommentsPage";
import { PostsPage } from "./components/PostsPage";
import { SettingsPage } from "./components/SettingsPage";
import { TagsPage } from "./components/TagsPage";
import { AdminPanel } from "./pages/admin/AdminPanel";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<div className="p-8">Home Page Content</div>} />
          <Route path="about" element={<div className="p-8">About Page Content</div>} />
          <Route path="contact" element={<div className="p-8">Contact Page Content</div>} />
        </Route>

        <Route path="/rate" element={<Buying />} />
        <Route path="/blog" element={<AllBlogsPage />} />
        <Route path="/blog/:slug" element={<SingleBlogPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminPanel />}>
          <Route index element={<DashboardPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="comments" element={<CommentsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="tags" element={<TagsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}