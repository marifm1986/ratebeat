import { useEffect, useState } from "react";
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
import { AdjustableRateMortgage } from "./pages/AdjustableRateMortgage";
import { AllBlogsPage } from "./pages/AllBlogsPage";
import { BridgeLoan } from "./pages/BridgeLoan";
import { CashOutRefinance } from "./pages/CashOutRefinance";
import { ConventionalLoansPage } from "./pages/ConventionalLoansPage";
import DebtConsolidationPage from "./pages/DebtConsolidationPage";
import EquityAndHomeValuePage from "./pages/EquityAndHomeValuePage";
import { FHALoan } from "./pages/FHALoan";
import { FHARefinanceRates } from "./pages/FHARefinanceRates";
import { FedRateDropArticle } from "./pages/FedRateDropArticle";
import { FederalFundsArticle } from "./pages/FederalFundsArticle";
import { FifteenYearFixedPage } from "./pages/FifteenYearFixedPage";
import { FirstTimeHomeBuyersPage } from "./pages/FirstTimeHomeBuyersPage";
import { HelocPage } from "./pages/HelocPage";
import { HomeBuyingPage } from "./pages/HomeBuyingPage";
import { HomeEquityLoan } from "./pages/HomeEquityLoan";
import { HomeLoansPage } from "./pages/HomeLoansPage";
import { HomeReadyHomePossible } from "./pages/HomeReadyHomePossible";
import HomeownershipPage from "./pages/HomeownershipPage";
import { JumboLoansPage } from "./pages/JumboLoansPage";
import { JumboRefinanceRates } from "./pages/JumboRefinanceRates";
import { LearnPage } from "./pages/LearnPage";
import { MortgageRateLockArticle } from "./pages/MortgageRateLockArticle";
import { MortgageRateUpdates } from "./pages/MortgageRateUpdates";
import MovingTipsPage from "./pages/MovingTipsPage";
import { OneDayMortgagePage } from "./pages/OneDayMortgagePage";
import { OnePlus } from "./pages/OnePlus";
import PreparingToBuyPage from "./pages/PreparingToBuyPage";
import { PurchaseGetStartedPage } from "./pages/PurchaseGetStartedPage";
import RefinanceGetStartedPage from "./pages/RefinanceGetStartedPage";
import { RefinancePage } from "./pages/RefinancePage";
import { RefinanceRatesPage } from "./pages/RefinanceRatesPage";
import RefinancingGuidePage from "./pages/RefinancingGuidePage";
import RefinancingLearnPage from "./pages/RefinancingLearnPage";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import { ThirtyYearFixedPage } from "./pages/ThirtyYearFixedPage";
import { ThirtyYearRefinanceRates } from "./pages/ThirtyYearRefinanceRates";
import TypesOfRefinancingPage from "./pages/TypesOfRefinancingPage";
import { VALoansPage } from "./pages/VALoansPage";
import { VAMilitaryHomebuyerPage } from "./pages/VAMilitaryHomebuyerPage";
import VAMilitaryRefinancePage from "./pages/VAMilitaryRefinancePage";
import { VARefinanceRates } from "./pages/VARefinanceRates";
import { AdminPanel } from "./pages/admin/AdminPanel";
import HomeAffordabilityCalculator from "./pages/calculators/AffordabilityCalculator";
import AmortizationCalculator from "./pages/calculators/AmortizationCalculator";
import DownPaymentCalculator from "./pages/calculators/DownPaymentCalculator";
import HomeEquityCalculator from "./pages/calculators/HomeEquityCalculator";
import MortgageCalculator from "./pages/calculators/MortgageCalculator";
import MortgagePayoffCalculator from "./pages/calculators/MortgagePayoffCalculator";

import { RefinanceCalculator } from "./pages/calculators/RefinanceLowerPayment";
import { RentVsBuyCalculator } from "./pages/calculators/RentVsBuyCalculator";


export function AppRouter() {

  const [headerEventData, setHeaderEventData] = useState(null);

  const handleHeaderEvent = (data: any) => {
    setHeaderEventData(data);
  };
  console.log('headerEventData', headerEventData)


  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);




  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header onEvent={handleHeaderEvent} />

          <Routes>
            <Route path="/" element={<App headerEventData={headerEventData} />}></Route>
            <Route path="/rate" element={<Buying />} />
            <Route path="/blog" element={<AllBlogsPage />} />
            <Route path="/blog/:slug" element={<SingleBlogPage />} />
            <Route path="/login" element={<Login />} />

            {/* Mortgage Detail Pages */}
            <Route path="/15-year-fixed-rate-mortgage" element={<FifteenYearFixedPage />} />
            <Route path="/30-year-fixed-rate-mortgage" element={<ThirtyYearFixedPage />} />
            <Route path="/adjustable-rate-mortgage" element={<AdjustableRateMortgage />} />
            <Route path="/bridge-loan" element={<BridgeLoan />} />
            <Route path="/refinance-cash-out" element={<CashOutRefinance />} />
            <Route path="/fha-loan" element={<FHALoan />} />
            <Route path="/home-equity-loan" element={<HomeEquityLoan />} />
            <Route path="/home-ready-and-home-possible" element={<HomeReadyHomePossible />} />
            <Route path="/one-plus" element={<OnePlus />} />
            <Route path="/refinance" element={<RefinancePage />} />
            <Route path="/refinance/get-started" element={<RefinanceGetStartedPage />} />
            <Route path="/refinance/va-military-refinance" element={<VAMilitaryRefinancePage />} />
            <Route path="/va-loan" element={<VALoansPage />} />
            <Route path="/jumbo-loan" element={<JumboLoansPage />} />
            <Route path="/conventional-loan" element={<ConventionalLoansPage />} />
            <Route path="/heloc" element={<HelocPage />} />
            <Route path="/one-day-mortgage" element={<OneDayMortgagePage />} />
            <Route path="/purchase/get-started" element={<PurchaseGetStartedPage />} />
            <Route path="/purchase/va-military-homebuyer" element={<VAMilitaryHomebuyerPage />} />
            <Route path="/refinance/va-military-refinance" element={<VAMilitaryRefinancePage />} />
            <Route path="/home-loans" element={<HomeLoansPage />} />

            {/* calculators */}

            <Route path="/affordability-calculator" element={<HomeAffordabilityCalculator />} />
            <Route path="/mortgage-Calculator" element={<MortgageCalculator />} />
            <Route path="/refinance-calculator" element={<RefinanceCalculator />} />
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
            <Route path="/refinance/get-started" element={<RefinanceGetStartedPage />} />
            <Route path="/va-loans" element={<VALoansPage />} />
            <Route path="/jumbo-loans" element={<JumboLoansPage />} />
            <Route path="/conventional-loans" element={<ConventionalLoansPage />} />

            {/* rates */}

            <Route path="/rate-updates" element={<MortgageRateUpdates />} />
            <Route path="/learn/federal-funds-rate" element={<FederalFundsArticle />} />
            <Route path="/learn/fed-rate-drop" element={<FedRateDropArticle />} />
            <Route path="/learn/should-i-lock-my-mortgage-rate-today" element={<MortgageRateLockArticle />} />
            <Route path="/refinance-rates" element={<RefinanceRatesPage />} />
            <Route path="/refinance-rates/30-year-refinance-rates" element={<ThirtyYearRefinanceRates />} />
            <Route path="/refinance-rates/fha-refinance-rates" element={<FHARefinanceRates />} />
            <Route path="/refinance-rates/va-refinance-rates" element={<VARefinanceRates />} />
            <Route path="/refinance-rates/jumbo-refinance-rates" element={<JumboRefinanceRates />} />

            <Route path="/heloc" element={<HelocPage />} />
            <Route path="/one-day-mortgage" element={<OneDayMortgagePage />} />
            <Route path="/purchase/get-started" element={<PurchaseGetStartedPage />} />
            <Route path="/purchase/va-military-homebuyer" element={<VAMilitaryHomebuyerPage />} />
            <Route path="/refinance/va-military-refinance" element={<VAMilitaryRefinancePage />} />
            <Route path="/home-loans" element={<HomeLoansPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/home-buying" element={<HomeBuyingPage />} />
            <Route path="/learn/first-time-home-buyers" element={<FirstTimeHomeBuyersPage />} />
            <Route path="/learn/moving-tips" element={<MovingTipsPage />} />
            <Route path="/learn/preparing-to-buy" element={<PreparingToBuyPage />} />
            <Route path="/learn/homeownership" element={<HomeownershipPage />} />
            <Route path="/learn/refinancing" element={<RefinancingLearnPage />} />
            <Route path="/learn/refinancing-guide" element={<RefinancingGuidePage />} />
            <Route path="/learn/types-of-refinancing" element={<TypesOfRefinancingPage />} />
            <Route path="/learn/equity-and-home-value" element={<EquityAndHomeValuePage />} />
            <Route path="/learn/debt-consolidation-rising-rates" element={<DebtConsolidationPage />} />

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
          <Footer />
        </AuthProvider>

      </BrowserRouter>

    </>
  )
}