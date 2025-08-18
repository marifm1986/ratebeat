import React from 'react';
import { StarIcon } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    quote: 'RateBeat made my first-time home buying experience so much easier than I expected. Their team was patient and answered all my questions.',
    author: 'Sarah J.',
    location: 'Denver, CO',
    rating: 5
  }, {
    quote: 'I saved over $300 a month by refinancing with RateBeat. The process was quick and their online portal made document submission simple.',
    author: 'Michael T.',
    location: 'Atlanta, GA',
    rating: 5
  }, {
    quote: "After being turned down by my bank, RateBeat found me a great rate for my home purchase. I couldn't be happier with the service.",
    author: 'Rebecca L.',
    location: 'Portland, OR',
    rating: 5
  }];
  return <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Don't just take our word for it - hear from some of our satisfied
            clients.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-50 rounded-2xl shadow-sm p-8">
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-gray-500" fill="currentColor" />)}
              </div>
              <p className="mt-6 text-gray-600 italic text-lg">
                "{testimonial.quote}"
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-800">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};