import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MortgageOptions } from './components/MortgageOptions';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Resources } from './components/Resources';
import { Footer } from './components/Footer';
import { GoalSelector } from './components/GoalSelector';
import { ResourceCards } from './components/ResourceCards';
import { QuickTools } from './components/QuickTools';
import { OnlineFeatures } from './components/OnlineFeatures';
import { ProductSpotlight } from './components/ProductSpotlight';


export function App() {
  return <div className="min-h-screen w-full bg-gray-50">
      <Header />
      <main>
        <Hero />
        <GoalSelector />
        <ResourceCards />
        <OnlineFeatures/>
        <ProductSpotlight/>
        <QuickTools/>
        {/* <MortgageOptions />
        <Benefits />
        <Testimonials /> */}
        {/* <Resources /> */}
      </main>
      <Footer />
    </div>;
}