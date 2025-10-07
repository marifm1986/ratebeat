import Calculator from './components/Calculator';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OnlineFeatures } from './components/OnlineFeatures';
import { TrustAndHook } from './components/trust-hook';
import { GoalSelector } from './components/GoalSelector';
import { ResourceCards } from './components/ResourceCards';
import { QuickTools } from './components/QuickTools';
import { Outlet } from 'react-router-dom';
import { MortgageOptions } from './components/MortgageOptions';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Resources } from './components/Resources';



export function App() {
  return <div className="min-h-screen w-full bg-gray-50">
    <Header />
    <main>
      <Hero />
      {/* below sections temporary off */}

      <GoalSelector />
      <ResourceCards />
      <TrustAndHook />
      <OnlineFeatures />
      <Calculator />
      <BlogSection />
      <MortgageOptions />
      <QuickTools />
      <Benefits />
      <Testimonials />
      <Resources />
    </main>
    <Footer />
    <Outlet />
  </div>;
}