import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const RefinancingGuidePage: React.FC = () => {
  const featuredStory = {
    title: '8 great tips for refinancing your mortgage',
    description: 'Not sure what to look for or expect when refinancing your mortgage loan? Discover eight valuable refinancing tips to guide you through the process.',
    readTime: '',
    href: '/learn/refinancing-tips'
  };

  const categories: never[] = [];

  const articles = [
    {
      title: 'Refinancing: What is it and how does it work?',
      description: 'Refinancing lets you trade your home\'s mortgage for a new one. Ideally with a lower interest rate or monthly payment. Learn why and how to refinance a ...',
      readTime: '10-minute read',
      href: '/learn/what-is-refinancing',
      category: 'Refinancing'
    },
    {
      title: 'How to refinance your second home',
      description: 'Are you considering refinancing your second home to secure a lower mortgage rate? Learn about the process and requirements of a second home refinance.',
      readTime: '6-minute read',
      href: '/learn/refinance-second-home',
      category: 'Refinancing'
    },
    {
      title: 'What is delayed financing for cash deals?',
      description: 'If you purchase a home with cash, you may still qualify for a mortgage. Learn about delayed financing, how it works for cash deals, and if it\'s right for ...',
      readTime: '5-minute read',
      href: '/learn/delayed-financing-cash-deals',
      category: 'Refinancing'
    },
    {
      title: 'Refinancing with the same lender: Is it a good idea?',
      description: 'Should you refinance your loan with the same lender? It depends on your financial situation and what lenders are offering. Uncover pros and cons to consider...',
      readTime: '3-minute read',
      href: '/learn/refinancing-same-lender',
      category: 'Refinancing'
    },
    {
      title: 'A guide to the tax implications of a cash-out refinance',
      description: 'The interest accrued on a cash-out refinance can be deducted under specific circumstances. Use this guide to learn more about your tax responsibilities.',
      readTime: '8-minute read',
      href: '/learn/cash-out-refinance-tax-implications',
      category: 'Refinancing'
    },
    {
      title: '11 questions to ask when refinancing your mortgage',
      description: 'Thinking about refinancing your mortgage? Get the best refinance for your borrowing needs by asking these questions before making a decision.',
      readTime: '8-minute read',
      href: '/learn/questions-to-ask-refinancing',
      category: 'Refinancing'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="Refinancing guide"
      pageDescription="Learn how refinancing can help you save money"
      breadcrumb="Home / Learn / Refinancing / Refinancing guide"
      heroImage="/image8.png"
      featuredStory={featuredStory}
      categories={categories}
      articles={articles}
      showCTA={false}
    />
  );
};

export default RefinancingGuidePage;
