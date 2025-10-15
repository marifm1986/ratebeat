import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const RefinancingLearnPage: React.FC = () => {
  const featuredStory = {
    title: 'When should I refinance my mortgage?',
    description: '',
    readTime: '8-minute read',
    href: '/learn/when-to-refinance'
  };

  const categories = [
    {
      title: 'Refinancing guide',
      description: 'Learn how refinancing can help you save money',
      href: '/learn/refinancing-guide'
    },
    {
      title: 'Types of refinancing',
      description: 'Learn the difference between cash-out, rate-and-term, and more',
      href: '/learn/types-of-refinancing'
    },
    {
      title: 'Equity and home value',
      description: 'Learn what equity is and the different ways it can benefit',
      href: '/learn/equity-home-value'
    }
  ];

  const articles = [
    {
      title: 'Refinancing: What is it and how does it work?',
      description: 'Refinancing lets you freeze your home\'s mortgage for a new one. Ideally with a lower interest rate or monthly payment. Learn why and how to refinance a ..',
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
      title: 'How much money can you borrow with a HELOC?',
      description: 'Considering a home equity line of credit (HELOC)? Learn how to calculate how much money you can expect to borrow, alternative financing options, and more.',
      readTime: '6-minute read',
      href: '/learn/heloc-borrow-amount',
      category: 'Refinancing'
    },
    {
      title: 'Combat high rates with debt consolidation',
      description: 'If you feel stuck with high interest rates, debt consolidation may be the key to relief. Learn more about how to use home equity to consolidate other debt.',
      readTime: '8-minute read',
      href: '/learn/debt-consolidation',
      category: 'Refinancing'
    },
    {
      title: 'What is delayed financing for cash deals?',
      description: 'If you purchase a home with cash, you may still qualify for a mortgage. Learn about delayed financing, how it works for cash deals, and if it\'s right for ..',
      readTime: '8-minute read',
      href: '/learn/delayed-financing',
      category: 'Refinancing'
    },
    {
      title: 'Can you refinance an ARM loan to a fixed-rate mortgage?',
      description: 'Yes, you can refinance an ARM loan. You may even be able to get a fixed-rate loan instead. But before you refinance, consider these key factors.',
      readTime: '6-minute read',
      href: '/learn/refinance-arm-to-fixed',
      category: 'Refinancing'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="Refinancing"
      pageDescription="Understand the ins and outs of refinancing"
      breadcrumb="Home / Learn / Refinancing"
      heroImage="/image7.png"
      featuredStory={featuredStory}
      categories={categories}
      articles={articles}
      showCTA={false}
    />
  );
};

export default RefinancingLearnPage;
