import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { AccessDeniedPage } from "./components/AccessDeniedPage";
import { Buying } from "./components/Buying";
import { CategoriesPage } from "./components/CategoriesPage";
import { CommentsPage } from "./components/CommentsPage";
import { DashboardPage } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PostsPage } from "./components/PostsPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { SettingsPage } from "./components/SettingsPage";
import { TagsPage } from "./components/TagsPage";
import { Login } from "./components/auth/Login";
import { AuthProvider } from "./context/AuthContext";
import { AllBlogsPage } from "./pages/AllBlogsPage";
import { ConventionalLoansPage } from "./pages/ConventionalLoansPage";
import { FifteenYearFixedPage } from "./pages/FifteenYearFixedPage";
import { HelocPage } from "./pages/HelocPage";
import { JumboLoansPage } from "./pages/JumboLoansPage";
import { OneDayMortgagePage } from "./pages/OneDayMortgagePage";
import { RefinancePage } from "./pages/RefinancePage";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import { ThirtyYearFixedPage } from "./pages/ThirtyYearFixedPage";
import { VALoansPage } from "./pages/VALoansPage";
import { AdminPanel } from "./pages/admin/AdminPanel";
import HomeAffordabilityCalculator from "./pages/calculators/AffordabilityCalculator";
import DownPaymentCalculator from "./pages/calculators/DownPaymentCalculator";
import HomeEquityCalculator from "./pages/calculators/HomeEquityCalculator";
import MortgageCalculator from "./pages/calculators/MortgageCalculator";
import MortgagePayoffCalculator from "./pages/calculators/MortgagePayoffCalculator";
import RefinanceLowerPayment from "./pages/calculators/RefinanceLowerPayment";
import RentVsBuyCalculator from "./pages/calculators/RentVsBuyCalculator";
import AmortizationCalculator from "./pages/calculators/AmortizationCalculator";

export function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route
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
            /> */}
          </Route>
          <Route path="/affordability-calculator" element={<HomeAffordabilityCalculator />} />
          <Route path="/mortgage-Calculator" element={<MortgageCalculator />} />
          <Route path="/refinance-calculator" element={<RefinanceLowerPayment />} />
          <Route path="/rent-vs-buy-calculator" element={<RentVsBuyCalculator />} />
          <Route path="/amortization-calculator" element={<AmortizationCalculator />} />
          <Route path="/home-equity-calculator" element={<HomeEquityCalculator />} />
          <Route path="/mortgage-payoff-calculator" element={<MortgagePayoffCalculator />} />
          <Route path="/down-payment-calculator" element={<DownPaymentCalculator />} />
          <Route path="/rate" element={<Buying />} />
          <Route path="/blog" element={<AllBlogsPage />} />
          <Route path="/blog/:slug" element={<SingleBlogPage />} />
          <Route path="/login" element={<Login />} />
          
          {/* Mortgage Detail Pages */}
          <Route path="/fifteen-year-fixed" element={<FifteenYearFixedPage />} />
          <Route path="/thirty-year-fixed" element={<ThirtyYearFixedPage />} />
          <Route path="/refinance" element={<RefinancePage />} />
          <Route path="/va-loans" element={<VALoansPage />} />
          <Route path="/jumbo-loans" element={<JumboLoansPage />} />
          <Route path="/conventional-loans" element={<ConventionalLoansPage />} />
          <Route path="/heloc" element={<HelocPage />} />
          <Route path="/one-day-mortgage" element={<OneDayMortgagePage />} />
          
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
        <Footer/>
      </AuthProvider>
      
    </BrowserRouter>
  )
}