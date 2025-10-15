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
import ScrollToHashElement from './utils/scrollToHashElement';
import { useEffect, useState } from 'react';
import { IframeModal } from './components/IframeModal';



export function App({ headerEventData }: any) {

  const [isBuyingModalOpen, setIsBuyingModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    title: string;
    iframeUrl: string;
    isOpen: boolean;
  }>({
    title: '',
    iframeUrl: '',
    isOpen: false,
  });

  useEffect(() => {
    if (headerEventData?.payload) {
      openBuyingModal(`I'm Buying`, `https://ratebeat.floify.com/apply-now`)
    }
  }, [headerEventData]);



  const openBuyingModal = (title: any, iframeUrl: any) => {
    setModalData({
      title: title,
      iframeUrl: iframeUrl,
      isOpen: true,
    });
    setIsBuyingModalOpen(true)
  };

  return <div className="min-h-screen w-full bg-gray-50">
    {/* <Header /> */}
    <ScrollToHashElement />

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
    {
      modalData.isOpen ? <IframeModal
        isOpen={isBuyingModalOpen}
        onClose={() => setIsBuyingModalOpen(false)}
        iframeUrl={modalData.iframeUrl}
        title={modalData.title}
      /> : null
    }
  </div>;
}