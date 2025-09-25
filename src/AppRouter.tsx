import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Buying } from "./components/Buying";
import { AllBlogsPage } from "./pages/AllBlogsPage";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import { DashboardPage } from "./components/Dashboard";
import { CategoriesPage } from "./components/CategoriesPage";
import { CommentsPage } from "./components/CommentsPage";
import { PostsPage } from "./components/PostsPage";
import { SettingsPage } from "./components/SettingsPage";
import { TagsPage } from "./components/TagsPage";
import { AdminPanel } from "./pages/admin/AdminPanel";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./components/auth/Login";
import { AccessDeniedPage } from "./components/AccessDeniedPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={<div className="p-8">Home Page Content</div>}
            />
            <Route
              path="about"
              element={<div className="p-8">About Page Content</div>}
            />
            <Route
              path="contact"
              element={<div className="p-8">Contact Page Content</div>}
            />
          </Route>
          <Route path="/rate" element={<Buying />} />
          <Route path="/blog" element={<AllBlogsPage />} />
          <Route path="/blog/:slug" element={<SingleBlogPage />} />
          <Route path="/login" element={<Login />} />
           <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route
              path="posts"
              element={
                <ProtectedRoute requiredArea="posts">
                  <PostsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="comments"
              element={
                <ProtectedRoute requiredArea="comments">
                  <CommentsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="categories"
              element={
                <ProtectedRoute requiredArea="categories">
                  <CategoriesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="tags"
              element={
                <ProtectedRoute requiredArea="categories">
                  <TagsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="settings"
              element={
                <ProtectedRoute requiredArea="settings" adminOnly={true}>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />
            <Route path="access-denied" element={<AccessDeniedPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}