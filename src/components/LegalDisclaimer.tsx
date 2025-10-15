import React from 'react';

interface LegalDisclaimerProps {
  content: string;
}

export const LegalDisclaimer: React.FC<LegalDisclaimerProps> = ({ content }) => {
  // Split content by double newlines to create paragraphs
  const paragraphs = content.split('\n\n').filter(p => p.trim());
  
  return (
    <section className="py-8 px-4 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-xs text-gray-500 leading-relaxed">
          <p className="mb-4">® Important legal disclosures</p>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
