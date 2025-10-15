import React from 'react';
import { Button } from './ui/Button';

interface FinalCTAProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  title,
  description,
  buttonText,
  onButtonClick
}) => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          {description}
        </p>
        <Button 
          onClick={onButtonClick}
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg backdrop-blur-sm"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};
