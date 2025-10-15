import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const FirstTimeHomeBuyersPage: React.FC = () => {
  const featuredStory = {
    title: 'What can home buyers learn to navigate market turbulence?',
    description: 'How can current first-time home buyers apply today\'s tools and yesterday\'s lessons to navigate a turbulent housing market?',
    readTime: '8-minute read',
    href: '/learn/navigate-market-turbulence'
  };

  const categories = [
    {
      title: 'What does \'pending\' mean in real estate?',
      description: 'If you\'ve been house hunting, you might have wondered "v" does \'pending\' mean on a real estate listing?" Read on to discover what this status signifies.',
      href: '/learn/pending-real-estate'
    }
  ];

  const articles = [
    {
      title: 'What are prepaid costs of buying a home?',
      description: 'Learn what prepaid costs are, why they matter, and how to plan ahead for them – so you can approach closing day with clarity, confidence, and no surprises.',
      readTime: '6-minute read',
      href: '/learn/prepaid-costs',
      category: 'First-time buyers'
    },
    {
      title: 'What is the average down payment on a house?',
      description: 'The average down payment on a house isn\'t 20%. How much you put down depends on your loan and situation. Here\'s what to know before applying for a m...',
      readTime: '6-minute read',
      href: '/learn/average-down-payment',
      category: 'First-time buyers'
    },
    {
      title: '15 first-time home buyer tips',
      description: 'First-time home buyers may find themselves overwhelmed by the process of purchasing property. Here are 15 tips to help you on your home buying journey.',
      readTime: '12-minute read',
      href: '/learn/first-time-buyer-tips',
      category: 'First-time buyers'
    },
    {
      title: 'What is a down payment and how does it work?',
      description: 'A down payment is the percentage of a home\'s purchase price you pay up front. Learn how down payments work and how much you should put down on a house.',
      readTime: '5-minute read',
      href: '/learn/down-payment-explained',
      category: 'First-time buyers'
    },
    {
      title: 'First-time home buyers classes: A guide',
      description: 'A first-time home buyers class can help you feel better-prepared for the home buying process. See what you can expect from a class for first-time home buyers...',
      readTime: '4-minute read',
      href: '/learn/first-time-buyer-classes',
      category: 'First-time buyers'
    },
    {
      title: '13 common first-time home buyer mistakes and how to avoid them',
      description: 'First-time buyers often make mistakes when looking at homes, but this doesn\'t have to be you. Learn how to avoid 13 common first-time home buyer mistakes...',
      readTime: '9-minute read',
      href: '/learn/first-time-buyer-mistakes',
      category: 'First-time buyers'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="First time home buyers"
      pageDescription="Explore resources that can make home buying easier and more affordable"
      breadcrumb="Home / Learn / Home buying / First-time home buyers"
      heroImage="/image3.png"
      featuredStory={featuredStory}
      categories={categories}
      articles={articles}
    />
  );
};

export { FirstTimeHomeBuyersPage };
