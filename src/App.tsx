import Calculator from './components/Calculator';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OnlineFeatures } from './components/OnlineFeatures';
import { TrustAndHook } from './components/trust-hook';


export function App() {
  return <div className="min-h-screen w-full bg-gray-50">
    <Header />
    <main>
      <Hero />
      {/* below sections temporary off */}
      
      {/* <GoalSelector /> */}
      {/* <ResourceCards /> */}
      <TrustAndHook />
      <OnlineFeatures />
      <Calculator />
      <BlogSection />
      {/* <QuickTools /> */}
      {/* <MortgageOptions />
        <Benefits />
        <Testimonials /> */}
      {/* <Resources /> */}
    </main>
    <Footer />
  </div>;
}