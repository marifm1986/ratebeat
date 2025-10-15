import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const EquityAndHomeValuePage: React.FC = () => {
  const featuredStory = {
    title: 'What is home equity and how can I access it?',
    description: 'Home equity is the value of the portion of your home you own. Discover the multiple ways to tap into that equity and how to calculate it.',
    readTime: '',
    href: '/learn/what-is-home-equity'
  };

  const categories: never[] = [];

  const articles = [
    {
      title: 'How much money can you borrow with a HELOC?',
      description: 'Considering a home equity line of credit (HELOC)? Learn how to calculate how much money you can expect to borrow, alternative financing options, and more.',
      readTime: '6-minute read',
      href: '/learn/heloc-borrow-amount',
      category: 'Home Equity'
    },
    {
      title: 'What to consider before getting a home equity line of credit (HELOC)',
      description: 'A home equity line of credit, just like other types of home financing, have significant pros and cons. Here\'s what you should know before applying for a H...',
      readTime: '7-minute read',
      href: '/learn/heloc-considerations',
      category: 'Home Equity'
    },
    {
      title: '8 tips for building equity in a home',
      description: 'Building equity in a home is good because it can provide many opportunities, and possibly profit. Read about the ways you can build equity in your home.',
      readTime: '6-minute read',
      href: '/learn/building-equity-tips',
      category: 'Home Equity'
    },
    {
      title: 'What is negative equity and how does it work?',
      description: 'Learn about negative equity and how it can affect you. Read on to see what you can do if your assets are underwater.',
      readTime: '5-minute read',
      href: '/learn/negative-equity',
      category: 'Home Equity'
    },
    {
      title: 'Step-up in basis defined: How does it work?',
      description: 'If you\'re deciding between gifting your home or bequeathing it, you may want to weigh the tax implications first. Learn how a step-up in basis benefits...',
      readTime: '5-minute read',
      href: '/learn/step-up-in-basis',
      category: 'Home Equity'
    },
    {
      title: 'What is a home equity agreement?',
      description: 'A home equity agreement is a contract that gives homeowners money in exchange for their home equity and future appreciation. Learn more here.',
      readTime: '10-minute read',
      href: '/learn/home-equity-agreement',
      category: 'Home Equity'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="Equity and home value"
      pageDescription="Learn what equity is and the different ways it can benefit you"
      breadcrumb="Home / Learn / Refinancing / Equity and home value"
      heroImage="/image9.png"
      featuredStory={featuredStory}
      categories={categories}
      articles={articles}
      showCTA={false}
    />
  );
};

export default EquityAndHomeValuePage;
