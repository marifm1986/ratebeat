import React from 'react';
import { CheckCircleIcon, ClockIcon, ShieldIcon, StarIcon } from 'lucide-react';
export const Benefits = () => {
  const benefits = [{
    icon: <ClockIcon className="h-12 w-12 text-gray-700" />,
    title: 'Fast & Easy Process',
    description: 'Our streamlined application process gets you from application to closing quickly and efficiently.'
  }, {
    icon: <StarIcon className="h-12 w-12 text-gray-700" />,
    title: 'Expert Guidance',
    description: 'Our mortgage experts will guide you through every step of the process with personalized advice.'
  }, {
    icon: <CheckCircleIcon className="h-12 w-12 text-gray-700" />,
    title: 'Competitive Rates',
    description: 'We work with multiple lenders to ensure you get the most competitive rates available.'
  }, {
    icon: <ShieldIcon className="h-12 w-12 text-gray-700" />,
    title: 'Secure & Transparent',
    description: 'Your information is always protected, and our process is transparent with no hidden fees.'
  }];
  return <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Why Choose RateBeat
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            We're committed to making your mortgage experience simple, fast, and
            stress-free.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => <div key={index} className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="mt-6 text-lg font-medium text-gray-800 text-center">
                {benefit.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>)}
        </div>
        <div className="mt-16 flex justify-center">
          <a href="#" className="inline-flex items-center px-8 py-4 border border-gray-300 text-base font-medium rounded-xl shadow-sm text-gray-700 bg-white hover:bg-gray-50">
            Get Started Today
          </a>
        </div>
      </div>
    </div>;
};