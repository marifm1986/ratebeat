import { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MortgageOptionFooter } from '../components/MortgageOptionFooter';

interface MortgageOptionLayoutProps {
  children: ReactNode;
}

export const MortgageOptionLayout = ({ children }: MortgageOptionLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {children}
      <MortgageOptionFooter />
      <Footer />
    </div>
  );
};
