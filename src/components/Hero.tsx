import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
            <p className="text-green-500 mb-4">Rate Shopping?</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
              Get your low rate
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" onClick={() => navigate('/buying')}>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">I'm buying</span>
                  <ArrowRightIcon className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">
                    See today's rates
                  </span>
                  <ArrowRightIcon className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">
                    Estimate my monthly payment
                  </span>
                  <ArrowRightIcon className="h-5 w-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden ml-auto h-full w-1/2">
              <img
                src="/hero.webp"
                alt="Woman with basket"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
