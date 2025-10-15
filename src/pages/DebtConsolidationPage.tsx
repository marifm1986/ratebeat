import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const DebtConsolidationPage: React.FC = () => {
  const featuredStory = {
    title: 'Combat high rates with debt consolidation',
    description: 'When interest rates climb, your debt can feel overwhelming. A cash-out refinance could help you consolidate high-interest debt into a single, lower payment.',
    readTime: '5-minute read',
    href: '/learn/combat-high-rates-debt-consolidation'
  };

  const categories: never[] = [];

  const articles = [
    {
      title: 'Cash-out refinance vs. home equity loans',
      description: 'Cash-out refinance or home equity loan? Both can help you achieve your financial goals. Learn how they differ and see which loan option is right for you.',
      readTime: '7-minute read',
      href: '/learn/cash-out-refinance-vs-home-equity',
      category: 'Debt Consolidation'
    },
    {
      title: 'Using a home equity loan to tackle credit card debt: A guide',
      description: 'Tackling credit card debt? Learn about using a home equity loan to pay it down, along with the benefits, drawbacks and alternative methods.',
      readTime: '6-minute read',
      href: '/learn/home-equity-loan-for-credit-card-debt',
      category: 'Debt Consolidation'
    },
    {
      title: '7 ways to refinance a mortgage if you have \'bad\' credit',
      description: 'Looking to refinance with \'bad\' credit? Learn the options of how to refinance your mortgage with \'bad\' credit and what steps you can take to improve your situation.',
      readTime: '5-minute read',
      href: '/learn/refinance-bad-credit',
      category: 'Debt Consolidation'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="Debt consolidation"
      pageDescription="Discover how to manage high-interest debt with smart refinancing strategies"
      breadcrumb="Home / Learn / Refinancing / Debt consolidation"
      heroImage="/image10.png"
      featuredStory={featuredStory}
      categories={categories}
      articles={articles}
      showCTA={false}
    />
  );
};

export default DebtConsolidationPage;
