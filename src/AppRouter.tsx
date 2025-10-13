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
import { FifteenYearFixedPage } from "./pages/FifteenYearFixedPage";
import { ThirtyYearFixedPage } from "./pages/ThirtyYearFixedPage";
import { RefinancePage } from "./pages/RefinancePage";
import { VALoansPage } from "./pages/VALoansPage";
import { JumboLoansPage } from "./pages/JumboLoansPage";
import { ConventionalLoansPage } from "./pages/ConventionalLoansPage";
import MortgageCalculator from "./pages/calculators/MortgageCalculator";
import RefinanceLowerPayment from "./pages/calculators/RefinanceLowerPayment";
import RentVsBuyCalculator from "./pages/calculators/RentVsBuyCalculator";
import AmortizationCalculator from "./pages/calculators/AmortizationCalculator";
import HomeEquityCalculator from "./pages/calculators/HomeEquityCalculator";
import DownPaymentCalculator from "./pages/calculators/DownPaymentCalculator";
import MortgagePayoffCalculator from "./pages/calculators/MortgagePayoffCalculator";
import { HelocPage } from "./pages/HelocPage";
import { OneDayMortgagePage } from "./pages/OneDayMortgagePage";
import { PurchaseGetStartedPage } from "./pages/PurchaseGetStartedPage";
import { HomeLoansPage } from "./pages/HomeLoansPage";
import AffordabilityCalculator from "./pages/calculators/AffordabilityCalculator";
import HomeAffordabilityCalculator from "./pages/calculators/AffordabilityCalculator";
import { VAMilitaryHomebuyerPage } from "./pages/VAMilitaryHomebuyerPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
          <Route path="/purchase/get-started" element={<PurchaseGetStartedPage />} />
          <Route path="/purchase/va-military-homebuyer" element={<VAMilitaryHomebuyerPage />} />
          <Route path="/home-loans" element={<HomeLoansPage />} />
          
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