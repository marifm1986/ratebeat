import { Footer } from './components/Footer';
import { GoalSelector } from './components/GoalSelector';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OnlineFeatures } from './components/OnlineFeatures';
import { QuickTools } from './components/QuickTools';
import { ResourceCards } from './components/ResourceCards';
import { TrustAndHook } from './components/trust-hook';


export function App() {
  return <div className="min-h-screen w-full bg-gray-50">
    <Header />
    <main>
      <Hero />
      <GoalSelector />
      <ResourceCards />
      <TrustAndHook />
      <OnlineFeatures />
      <QuickTools />
      {/* <MortgageOptions />
        <Benefits />
        <Testimonials /> */}
      {/* <Resources /> */}
    </main>
    <Footer />
  </div>;
}