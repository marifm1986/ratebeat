import { ReactNode } from 'react';
import { MortgageOptionFooter } from '../components/MortgageOptionFooter';

interface MortgageOptionLayoutProps {
  children: ReactNode;
}

export const MortgageOptionLayout = ({ children }: MortgageOptionLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
      <MortgageOptionFooter />
    </div>
  );
};
