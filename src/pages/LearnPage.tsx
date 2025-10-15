import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const LearnPage: React.FC = () => {
  const featuredStory = {
    title: 'How to get a mortgage preapproval',
    description: 'Get preapproved for a mortgage and understand what you can afford before you start house hunting.',
    readTime: '8-minute read',
    href: '/learn/mortgage-preapproval'
  };

  const categories = [
    {
      title: 'Home buying',
      description: 'Learn everything you need to know about buying a home.',
      href: '/learn/home-buying'
    },
    {
      title: 'Loan types',
      description: 'Understand the different loan types to figure out which ones might be right for you.',
      href: '/learn/loan-types'
    },
    {
      title: 'Mortgage basics',
      description: 'Learn about general mortgage topics and terms.',
      href: '/learn/mortgage-basics'
    },
    {
      title: 'Refinancing',
      description: 'Understand the ins and outs of refinancing.',
      href: '/learn/refinancing'
    },
    {
      title: 'Real estate',
      description: 'Find a real estate agent, unlock investing insights and learn more about home types.',
      href: '/learn/real-estate'
    },
    {
      title: 'Home. Made. Podcast',
      description: 'Discover the meaning of home in America on Home. Made. Podcast.',
      href: '/learn/podcast'
    },
    {
      title: 'News',
      description: 'Get timely updates on the world of mortgages and housing.',
      href: '/learn/news'
    }
  ];

  const articles = [
    {
      title: 'Reverse mortgage foreclosure: Everything you need to know',
      description: 'If an event triggers the foreclosure process on your reverse mortgage, you can still avoid losing the property. Learn more about the timeline and your options.',
      readTime: '6-minute read',
      href: '/learn/reverse-mortgage-foreclosure',
      category: 'Mortgage basics'
    },
    {
      title: 'What is a mortgage maturity date and how does it work?',
      description: 'A mortgage maturity rate indicates when you are expected to make your last mortgage payment. Learn more about how maturity dates work and how to find yours.',
      readTime: '4-minute read',
      href: '/learn/mortgage-maturity-date',
      category: 'Mortgage basics'
    },
    {
      title: 'How to repair credit for first-time home buyers',
      description: 'First-time home buyers with bad credit can focus on strategies to boost their score, decreasing their buying costs and improving their loan approval chances. Le.',
      readTime: '7-minute read',
      href: '/learn/repair-credit',
      category: 'Home buying'
    },
    {
      title: 'Easement appurtenant: What it means and how it works',
      description: 'An easement appurtenant gives homeowners limited access rights to a property. Find out how this type of easement might affect your property.',
      readTime: '5-minute read',
      href: '/learn/easement-appurtenant',
      category: 'Real estate'
    },
    {
      title: 'How the federal funds rate affects mortgage rates',
      description: 'The federal funds rate helps regulate the U.S. economy, but it can also affect mortgage rates. Learn how it can affect you as a home buyer and homeowner.',
      readTime: '8-minute read',
      href: '/learn/federal-funds-rate',
      category: 'Mortgage basics'
    },
    {
      title: 'What happens if you cannot pay your mortgage?',
      description: 'If financial issues make your mortgage unaffordable, you may have options. What happens if you cannot pay your mortgage? Here is what to know.',
      readTime: '10-minute read',
      href: '/learn/cant-pay-mortgage',
      category: 'Mortgage basics'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="Learn"
      pageDescription="Explore expert articles, guides, and resources to help you navigate your home buying and mortgage journey with confidence."
      breadcrumb="Home / Learn"
      heroImage="/image.png"
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

export { LearnPage };
