import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const TypesOfRefinancingPage: React.FC = () => {
  const featuredStory = {
    title: 'Cash-out refinance: Rates and guide for homeowners',
    description: 'Cash-out refinancing helps you leverage your home equity into cash. Learn more about the pros and cons, and check current rates to see if it\'s right for you.',
    readTime: '',
    href: '/learn/cash-out-refinance-rates-guide'
  };

  const categories: never[] = [];

  const articles = [
    {
      title: '7 ways to refinance a mortgage if you have \'bad\' credit',
      description: 'Looking to refinance with \'bad\' credit? Learn the options of how to refinance your mortgage with \'bad\' credit and what steps you can tak...',
      readTime: '5-minute read',
      href: '/learn/refinance-bad-credit',
      category: 'Refinancing'
    },
    {
      title: 'Understanding current jumbo loan rates',
      description: 'Considering whether to refinance your jumbo loan? Learn more about the refinancing process, plus how to compare today\'s jumbo refinance rates.',
      readTime: '7-minute read',
      href: '/learn/current-jumbo-loan-rates',
      category: 'Refinancing'
    },
    {
      title: 'What is a cash-in refinance?',
      description: 'A cash-in refinance is a type of refinancing that occurs when a lump-sum payment is made, lowering the principal. Here\'s how to decide if it\'s right for y...',
      readTime: '5-minute read',
      href: '/learn/cash-in-refinance',
      category: 'Refinancing'
    },
    {
      title: 'Cash-out refinance vs. HELOC: Which is best for you?',
      description: 'Cash-out refinances and HELOCs can help homeowners secure funds when they need them. Learn the difference between the two and choose which is best for you.',
      readTime: '7-minute read',
      href: '/learn/cash-out-refinance-vs-heloc',
      category: 'Refinancing'
    },
    {
      title: 'What is a limited cash-out refinance and how does it work?',
      description: 'A limited cash-out refinance replaces your current loan with a higher amount. Learn if a limited cash-out refinance is right for you.',
      readTime: '10-minute read',
      href: '/learn/limited-cash-out-refinance',
      category: 'Refinancing'
    },
    {
      title: 'How to refinance an FHA loan to a conventional loan',
      description: 'Refinancing from an FHA loan to a conventional one offers several benefits. Learn how to refinance from an FHA loan as well as other pros and cons.',
      readTime: '8-minute read',
      href: '/learn/fha-to-conventional-refinance',
      category: 'Refinancing'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="Types of refinancing"
      pageDescription="Learn the difference between cash-out, rate-and-term, and more"
      breadcrumb="Home / Learn / Refinancing / Types of refinancing"
      heroImage="/image7.png"
      featuredStory={featuredStory}
      categories={categories}
      articles={articles}
      showCTA={false}
    />
  );
};

export default TypesOfRefinancingPage;
