import React from 'react';
import { LearnPageLayout } from '../components/LearnPageLayout';

const HomeownershipPage: React.FC = () => {
  const featuredStory = {
    title: '9 tips to increase house value',
    description: 'Upgrading parts of your home is a great way to increase its value. Here are 9 tips about how to get started and finance your renovation projects.',
    readTime: '8-minute read',
    href: '/learn/increase-house-value'
  };

  const categories = [
    {
      title: 'Multigenerational homes: What it\'s like living in one',
      description: 'Multigenerational homes have more than one adult generation living under one roof. Learn what it\'s like to live in a home that unifies multiple generations.',
      href: '/learn/multigenerational-homes'
    }
  ];

  const articles = [
    {
      title: 'What happens if you can\'t pay your mortgage?',
      description: 'If financial issues make your mortgage unaffordable you may have options. What happens if you can\'t pay your mortgage? Here\'s what to know.',
      readTime: '10-minute read',
      href: '/learn/cant-pay-mortgage',
      category: 'Homeownership'
    },
    {
      title: 'What are real estate property rights, and why do they matter?',
      description: 'Property rights determine your control over your home, land, and more. Learn the types of property rights in real estate and what each means for homeowners.',
      readTime: '7-minute read',
      href: '/learn/real-estate-property-rights',
      category: 'Homeownership'
    },
    {
      title: 'Life estate: What is it and how does it work?',
      description: 'A life estate is a legal way to pass the ownership rights of your home to another person. Learn about how a life estate works and how and why to create one.',
      readTime: '8-minute read',
      href: '/learn/life-estate',
      category: 'Homeownership'
    },
    {
      title: 'What to do when you inherit a house with a sibling',
      description: 'Inheriting property with your siblings can lead to legal and emotional challenges. Here\'s how to resolve property disputes while protecting your rights.',
      readTime: '9-minute read',
      href: '/learn/inherit-house-with-sibling',
      category: 'Homeownership'
    },
    {
      title: 'Are home warranties worth it? What to consider',
      description: 'Whether home warranties are worth it depends on many factors. Learn the benefits and drawbacks, plus key considerations so you can decide if it\'s right fo.',
      readTime: '11-minute read',
      href: '/learn/home-warranties-worth-it',
      category: 'Homeownership'
    },
    {
      title: 'Does home insurance cover natural disasters? What to know when filing a claim',
      description: 'If you\'re thinking about filing a homeowners insurance claim to repair your house in the wake of a natural disaster, you may wonder, "Does home insu.',
      readTime: '9-minute read',
      href: '/learn/home-insurance-natural-disasters',
      category: 'Homeownership'
    }
  ];

  return (
    <LearnPageLayout
      pageTitle="Homeownership"
      pageDescription="Learn key tips for a smooth homeownership experience"
      breadcrumb="Home / Learn / Home buying / Homeownership"
      heroImage="/image6.png"
      featuredStory={featuredStory}
      categories={categories}
      articles={articles}
      showCTA={false}
    />
  );
};

export default HomeownershipPage;
