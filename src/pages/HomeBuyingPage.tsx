import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const HomeBuyingPage: React.FC = () => {
  const featuredStory = {
    title: '15 first-time home buyer tips',
    description: 'Learn everything you need to know about buying your first home with these essential tips to help you navigate the home buying process with confidence.',
    readTime: '12-minute read',
    href: '/learn/first-time-home-buyer-tips'
  };

  const categories = [
    {
      title: 'First time home buyers',
      description: 'Explore resources that can make home buying easier and more affordable',
      href: '/learn/first-time-home-buyers'
    },
    {
      title: 'Moving tips',
      description: 'Get tips to pave the way for a well organized, cost-saving move',
      href: '/learn/moving-tips'
    },
    {
      title: 'Preparing to buy',
      description: 'Find out if now is the right time for you to buy a home',
      href: '/learn/preparing-to-buy'
    },
    {
      title: 'Homeownership',
      description: 'Learn key tips for a smooth homeownership experience',
      href: '/learn/homeownership'
    }
  ];

  const articles = [
    {
      title: 'How to repair credit for first-time home buyers',
      description: 'First-time home buyers with bad credit can focus on strategies to boost their score, decreasing their buying costs and improving their loan approval chances. Le.',
      readTime: '7-minute read',
      href: '/learn/repair-credit-first-time-buyers',
      category: 'Home buying'
    },
    {
      title: 'What happens if you cannot pay your mortgage?',
      description: 'If financial issues make your mortgage unaffordable, you may have options. What happens if you cannot pay your mortgage? Here is what to know.',
      readTime: '10-minute read',
      href: '/learn/cant-pay-mortgage',
      category: 'Home buying'
    },
    {
      title: 'How to find a home inspector',
      description: 'Hiring a qualified home inspector can save you thousands of dollars down the road. Learn what credentials to look for and how to find a good home inspector.',
      readTime: '7-minute read',
      href: '/learn/find-home-inspector',
      category: 'Home buying'
    },
    {
      title: 'How to prepare your finances to buy a house in 2026',
      description: 'Thinking about buying a home in 2026? Discover how to prepare your finances and decide if you should buy now or wait.',
      readTime: '7-minute read',
      href: '/learn/prepare-finances-2026',
      category: 'Home buying'
    },
    {
      title: 'Moving for a job: How to prepare',
      description: 'Moving for a job may be an exciting opportunity, but it also requires a lot of logistics. Here are some tips to streamline the transition and make it easier.',
      readTime: '5-minute read',
      href: '/learn/moving-for-job',
      category: 'Moving tips'
    },
    {
      title: 'How buyers can negotiate house price',
      description: 'Are you ready to purchase your dream home? Learn how to negotiate house prices to increase your chances of getting the best deal on your future home.',
      readTime: '5-minute read',
      href: '/learn/negotiate-house-price',
      category: 'Home buying'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="Home buying"
      pageDescription="Learn everything you need to know about buying a home."
      breadcrumb="Home / Learn / Home buying"
      heroImage="/image2.png"
      featuredStory={featuredStory}
      categories={categories}
      articles={articles}
    />
  );
};

export { HomeBuyingPage };
