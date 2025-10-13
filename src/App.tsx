import { Outlet } from 'react-router-dom';
import { Benefits } from './components/Benefits';
import { BlogSection } from './components/BlogSection';
import Calculator from './components/Calculator';
import { FeaturedProducts } from './components/FeaturedProducts';
import { GoalSelector } from './components/GoalSelector';
import { Hero } from './components/Hero';
import { MortgageOptions } from './components/MortgageOptions';
import { OnlineFeatures } from './components/OnlineFeatures';
import { QuickTools } from './components/QuickTools';
import { ResourceCards } from './components/ResourceCards';
import { Resources } from './components/Resources';
import { Testimonials } from './components/Testimonials';
import { TrustAndHook } from './components/trust-hook';



export function App() {
  return <div className="min-h-screen w-full bg-gray-50">
    {/* <Header /> */}
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
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
      <Resources />
    </main>
    {/* <Footer /> */}
    <Outlet />
  </div>;
}