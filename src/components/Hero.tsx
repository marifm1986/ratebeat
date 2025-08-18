import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Card, CardContent } from './ui/Card';
export const Hero = () => {
  return <div className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl md:text-6xl">
              <span className="block mb-2">Find the perfect</span>
              <span className="block text-orange-500">mortgage rate</span>
            </h1>
            <p className="mt-5 text-base text-gray-600 sm:mt-6 sm:text-lg md:mt-6 md:text-xl max-w-3xl">
              Get a personalized rate quote in minutes. RateBeat makes the
              mortgage process simple and straightforward.
            </p>
            <div className="mt-10 sm:mt-12">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <Select id="purpose" name="purpose" label="What's your goal?" className="mt-2 w-full rounded-md">
                        <option>Buy a home</option>
                        <option>Refinance</option>
                        <option>Cash-out refinance</option>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-3">
                        Property Zip Code
                      </label>
                      <Input type="text" name="zipcode" id="zipcode" className="w-full" placeholder="Enter zip code" />
                    </div>
                    <div>
                      <Select id="credit-score" name="credit-score" label="Credit Score Range" className="mt-2 w-full rounded-md">
                        <option>Excellent (740+)</option>
                        <option>Good (700-739)</option>
                        <option>Fair (660-699)</option>
                        <option>Below Average (620-659)</option>
                        <option>Poor (below 620)</option>
                      </Select>
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3">
                    See My Rates
                    <ChevronRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-14 relative lg:mt-0 lg:col-span-4">
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-full flex items-center justify-center">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Happy family in front of new home" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};