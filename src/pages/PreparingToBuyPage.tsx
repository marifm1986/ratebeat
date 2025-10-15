import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const PreparingToBuyPage: React.FC = () => {
  const featuredStory = {
    title: 'How to determine if you should buy a house',
    description: 'A lot of factors go into determining whether or not you should buy a house. Here\'s what you need to know when making the decision to buy now, or hold off.',
    readTime: '8-minute read',
    href: '/learn/should-you-buy-house'
  };

  const categories = [
    {
      title: 'The 25 cheapest places to live in the US in 2024',
      description: 'Looking to move somewhere that\'s a bit more affordable? Read our article to learn about the 25 cheapest places to live in the U.S. for renters and buyers.',
      href: '/learn/cheapest-places-to-live'
    }
  ];

  const articles = [
    {
      title: 'How to repair credit for first-time home buyers',
      description: 'First-time home buyers with bad credit can focus on strategies to boost their score, decreasing their buying costs and improving their loan approval chances. Le.',
      readTime: '7-minute read',
      href: '/learn/repair-credit-first-time-buyers',
      category: 'Preparing to buy'
    },
    {
      title: 'How to prepare your finances to buy a house in 2026',
      description: 'Thinking about buying a home in 2026? Discover how to prepare your finances and decide if you should buy now or wait.',
      readTime: '7-minute read',
      href: '/learn/prepare-finances-buy-house',
      category: 'Preparing to buy'
    },
    {
      title: 'Cost-of-living calculator',
      description: 'Can you maintain your current standard of living if you move to a new city? Calculate the cost of living between two cities to find out.',
      readTime: '5-minute read',
      href: '/learn/cost-of-living-calculator',
      category: 'Preparing to buy'
    },
    {
      title: 'Buying a house with unpermitted work: What you need to know',
      description: 'Buying a house with unpermitted work requires extra steps. Learn about the risks, how it affects financing and insurance, and ways to protect your investment.',
      readTime: '7-minute read',
      href: '/learn/buying-house-unpermitted-work',
      category: 'Preparing to buy'
    },
    {
      title: 'How to invest in property when you\'re a student',
      description: 'Buying a house while in college may be a viable option if you have the financial means and meet lender requirements. Learn how to buy a house as a student.',
      readTime: '6-minute read',
      href: '/learn/invest-property-student',
      category: 'Preparing to buy'
    },
    {
      title: 'Buying a historic home: The pros and cons',
      description: 'Buying a charming historic home can be tempting, but it can also come with costly complications. Read on to find out whether a historic home is right for you.',
      readTime: '10-minute read',
      href: '/learn/buying-historic-home',
      category: 'Preparing to buy'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="Preparing to buy"
      pageDescription="Find out if now is the right time for you to buy a home"
      breadcrumb="Home / Learn / Home buying / Preparing to buy"
      heroImage="/image5.png"
      featuredStory={featuredStory}
      categories={categories}
      articles={articles}
    />
  );
};

export default PreparingToBuyPage;
