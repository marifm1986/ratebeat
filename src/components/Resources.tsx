import React from 'react';
import { BookOpenIcon, CalculatorIcon, FileTextIcon } from 'lucide-react';
export const Resources = () => {
  const resources = [{
    icon: <CalculatorIcon className="h-8 w-8 text-gray-700" />,
    title: 'Mortgage Calculator',
    description: 'Estimate your monthly payments and see the amortization schedule.',
    link: '#'
  }, {
    icon: <BookOpenIcon className="h-8 w-8 text-gray-700" />,
    title: 'First-Time Homebuyer Guide',
    description: 'Everything you need to know about buying your first home.',
    link: '#'
  }, {
    icon: <FileTextIcon className="h-8 w-8 text-gray-700" />,
    title: 'Refinancing Resources',
    description: 'Learn when and how to refinance your mortgage for maximum benefit.',
    link: '#'
  }];
  return <div className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Resources & Tools
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Helpful resources to guide you through your mortgage journey.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {resources.map((resource, index) => <a key={index} href={resource.link} className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">{resource.icon}</div>
              <h3 className="mt-6 text-lg font-medium text-gray-800 text-center">
                {resource.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                {resource.description}
              </p>
              <div className="mt-6 text-center">
                <span className="text-gray-600 font-medium hover:text-gray-900">
                  Learn more →
                </span>
              </div>
            </a>)}
        </div>
        <div className="mt-16 bg-white rounded-2xl shadow-sm p-10">
          <div className="md:flex md:items-center md:justify-between md:space-x-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Ready to get started?
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Take the first step toward your new mortgage or refinance today.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#" className="inline-flex items-center px-8 py-4 border border-gray-300 text-base font-medium rounded-xl shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>;
};