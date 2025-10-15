import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const MovingTipsPage: React.FC = () => {
  const featuredStory = {
    title: 'New home checklist: Everything to do before and after moving day',
    description: 'A checklist for moving into a new home can make for a smooth relocation. Learn everything you need to do when moving with this new home checklist.',
    readTime: '8-minute read',
    href: '/learn/new-home-checklist'
  };

  const categories = [
    {
      title: 'Moving costs',
      description: 'How much will it cost you to move?',
      href: '/learn/moving-costs'
    },
    {
      title: 'Moving checklist',
      description: 'Everything to do before and after moving day',
      href: '/learn/moving-checklist'
    },
    {
      title: 'Cross-country moves',
      description: 'Tips for moving across state lines',
      href: '/learn/cross-country-moves'
    },
    {
      title: 'Moving for work',
      description: 'Relocating for a new job opportunity',
      href: '/learn/moving-for-work'
    }
  ];

  const articles = [
    {
      title: 'Moving for a job: How to prepare',
      description: 'Moving for a job may be an exciting opportunity, but it also requires a lot of logistics. Here are some tips to streamline the transition and make it easier.',
      readTime: '5-minute read',
      href: '/learn/moving-for-job',
      category: 'Moving tips'
    },
    {
      title: 'The average cost to move cross-country (and how to save money)',
      description: 'Wondering how to budget relocating across multiple states? Learn the average cost to move across the country and how to save money on a long-distance move.',
      readTime: '6-minute read',
      href: '/learn/cost-to-move-cross-country',
      category: 'Moving tips'
    },
    {
      title: 'A guide to moving cross-country',
      description: 'When moving across the country, there are steps you can take to help the process go smoothly. Explore our guide for tips on how to move across the country.',
      readTime: '7-minute read',
      href: '/learn/guide-moving-cross-country',
      category: 'Moving tips'
    },
    {
      title: 'When to rent vs. buy a house: Weighing the pros and cons',
      description: 'When relocating to a new place for a job, you have a choice between renting or buying a home. Explore the pros and cons of each approach before deciding.',
      readTime: '5-minute read',
      href: '/learn/rent-vs-buy',
      category: 'Moving tips'
    },
    {
      title: 'Relocation mortgage loans: How to relocate with a low down payment',
      description: 'Employees relocating for work may feel their down payment isn\'t enough. If this is you, learn more about relocation loans and how they may help you mak.',
      readTime: '7-minute read',
      href: '/learn/relocation-mortgage-loans',
      category: 'Moving tips'
    },
    {
      title: 'Moving assistance programs and resources',
      description: 'There are many moving assistance programs and resources available to homeowners who need extra help affording a move. Explore them here.',
      readTime: '5-minute read',
      href: '/learn/moving-assistance-programs',
      category: 'Moving tips'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="Moving tips"
      pageDescription="Get tips to pave the way for a well organized, cost-saving move"
      breadcrumb="Home / Learn / Home buying / Moving tips"
      heroImage="/image4.png"
      featuredStory={featuredStory}
      categories={categories}
      articles={articles}
      ctaTitle="Take the first step toward the right mortgage"
      ctaDescription="Apply online for expert recommendations with real interest rates and payments"
      ctaButton1Text="I want to buy a home"
      ctaButton1Href="/purchase/get-started"
      ctaButton2Text="I'd like to refinance"
      ctaButton2Href="/refinance"
    />
  );
};

export default MovingTipsPage;
