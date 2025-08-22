import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-gray-200 py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 items-center">
          <div className="lg:col-span-3 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <p className="text-green-500 mb-3 text-sm font-medium">Rate Shopping?</p>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
              Get your low rate
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/buying')}>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium text-sm lg:text-base">I'm buying</span>
                  <ArrowRightIcon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
                </div>
              </div>
              <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium text-sm lg:text-base">
                    See today's rates
                  </span>
                  <ArrowRightIcon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
                </div>
              </div>
              <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer sm:col-span-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium text-sm lg:text-base">
                    Estimate my monthly payment
                  </span>
                  <ArrowRightIcon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 hidden lg:block">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] w-full">
              <img
                src="/hero.jpg"
                alt="Family at home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
