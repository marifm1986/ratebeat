import React from 'react';
import { HomeIcon, RefreshCwIcon, PercentIcon, DollarSignIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
export const MortgageOptions = () => {
  const options = [{
    title: 'Home Purchase',
    description: 'Find the perfect mortgage for your new home purchase with competitive rates.',
    icon: <HomeIcon className="h-8 w-8 text-gray-700" />,
    cta: 'Get Started'
  }, {
    title: 'Refinance',
    description: 'Lower your monthly payment or shorten your loan term with our refinance options.',
    icon: <RefreshCwIcon className="h-8 w-8 text-gray-700" />,
    cta: 'See Rates'
  }, {
    title: 'Cash-Out Refinance',
    description: "Access your home's equity to consolidate debt or fund home improvements.",
    icon: <DollarSignIcon className="h-8 w-8 text-gray-700" />,
    cta: 'Learn More'
  }, {
    title: "Today's Rates",
    description: 'View current mortgage rates and see how much you could save.',
    icon: <PercentIcon className="h-8 w-8 text-gray-700" />,
    cta: 'Check Rates'
  }];
  return <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Mortgage Options to Fit Your Needs
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Whether you're buying, refinancing, or looking to access your home's
            equity, we have options for you.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {options.map((option, index) => <Card key={index} className="bg-gray-50 hover:shadow-md transition-shadow">
              <CardHeader className="flex items-center justify-center pt-8 pb-2">
                {option.icon}
              </CardHeader>
              <CardContent className="text-center px-8">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600">{option.description}</p>
              </CardContent>
              <CardFooter className="justify-center pt-2 pb-8">
                <Button variant="outline" size="sm">
                  {option.cta}
                </Button>
              </CardFooter>
            </Card>)}
        </div>
      </div>
    </div>;
};