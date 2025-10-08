import { useState } from 'react';
import { Check, Star, ChevronDown } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { IframeModal } from '../components/IframeModal';

export const OneDayMortgagePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Header />
      <main>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#2c5aa0] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-blue-100">
                <div className="w-2 h-2 bg-[#2c5aa0] rounded-full mr-3 animate-pulse"></div>
                <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide">
                  One Day Mortgage™
                </span>
              </div>
              
              {/* Main heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Speed up the process and 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c5aa0] to-blue-600">
                    {" "}head straight home
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Get your Commitment Letter in <span className="font-semibold text-[#2c5aa0]">24 hours</span> instead of weeks. 
                  Skip the red tape, skip the worry, and move straight to "move forward."
                </p>
              </div>
              
              {/* Features list */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#2c5aa0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Commitment Letter in 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#2c5aa0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Simple online application process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#2c5aa0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Available in all 50 states</span>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative bg-[#2c5aa0] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="relative z-10">Start Application</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#2c5aa0] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">4.9/5 Excellent</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Modern Card Design */}
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2c5aa0] to-blue-600 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                {/* Top section with logo */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-2xl">1</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">One Day</h3>
                      <p className="text-lg text-[#2c5aa0] font-semibold">Mortgage™</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">24hrs</p>
                    <p className="text-sm text-gray-500">Approval Time</p>
                  </div>
                </div>
                
                {/* Progress section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Application Progress</span>
                    <span className="text-sm font-bold text-[#2c5aa0]">Ready to Start</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#2c5aa0] to-blue-600 h-3 rounded-full w-0 animate-pulse"></div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <p className="text-2xl font-bold text-gray-900">$100B+</p>
                      <p className="text-xs text-gray-500">Loans Funded</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <p className="text-2xl font-bold text-gray-900">400k+</p>
                      <p className="text-xs text-gray-500">Happy Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: The mortgage process isn't a race */}
      <div className="relative bg-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full shadow-sm border border-blue-100 mb-8">
              <div className="w-2 h-2 bg-[#2c5aa0] rounded-full mr-3 animate-pulse"></div>
              <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide">Speed & Efficiency</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The mortgage process 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c5aa0] to-blue-600">
                {" "}isn't a race
              </span>
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-700 mb-8">
              (But if it was, we'd totally win.)
            </h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed">
                We truly value speed in a mortgage – One day's One Day Mortgage™ speeds up the process so you can 
                <span className="font-semibold text-[#2c5aa0]"> skip the red tape and worry</span>, 
                and move straight to "move forward."
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-4">
                <div className="w-3 h-3 bg-[#2c5aa0] rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Real estate agents - The fastest way to close more homes */}
      <div className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#2c5aa0] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-blue-100">
                <div className="w-8 h-8 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">🏠</span>
                </div>
                <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide">
                  Real estate agents
                </span>
              </div>
              
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  The fastest way to 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c5aa0] to-blue-600">
                    {" "}close more homes
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Give One Day Mortgage™ clients a discount that doesn't get them offers. 
                  According to the National Association of Realtors, their home offers that help their homes.
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center text-[#2c5aa0] hover:text-blue-700 font-semibold text-lg transition-all duration-300"
                >
                  Get started 
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="relative">
              {/* Background card glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2c5aa0] to-blue-600 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <img
                  src="/oneDay.webp"
                  alt="Family looking at home options"
                  className="w-full h-auto rounded-2xl mb-6"
                />
                
                {/* Progress card */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#2c5aa0] rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-700">One Day Mortgage™</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-600">Processing</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-[#2c5aa0]">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#2c5aa0] to-blue-600 h-3 rounded-full w-3/4 transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: How it works - Faster than a speeding mortgage */}
      <div className="relative bg-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full shadow-sm border border-blue-100 mb-6">
                  <div className="w-2 h-2 bg-[#2c5aa0] rounded-full mr-3 animate-pulse"></div>
                  <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide">How it works</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Faster than a 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c5aa0] to-blue-600">
                    {" "}speeding mortgage
                  </span>
                </h2>
              </div>

              {/* Steps */}
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Offer accepted? Now it's time to lock a rate with Better Mortgage.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">$</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Upload financial info and get a Commitment Letter in 24 hrs, instead of waiting weeks.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Yes, really!
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Get peace of mind through title, appraisal, and final closing!
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2c5aa0] to-blue-600 rounded-3xl blur-2xl opacity-20 transform -rotate-6"></div>
              
              {/* Mobile mockup card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-xl">
                  <img
                    src="/mobile.webp"
                    alt="Mobile application"
                    className="w-full max-w-sm mx-auto rounded-xl"
                  />
                </div>
                
                {/* Stats overlay */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#2c5aa0]">24hrs</p>
                    <p className="text-sm text-gray-600">Average Process Time</p>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">98%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: What makes us Better */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2c5aa0] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-blue-100 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">⭐</span>
              </div>
              <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide">
                Our Impact
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-16 leading-tight">
              What makes us 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c5aa0] to-blue-600">
                {" "}Better
              </span>
            </h2>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group">
                <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-white font-bold text-2xl">$</span>
                    </div>
                    <h3 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">$100B</h3>
                    <p className="text-lg text-gray-600 font-medium">Home loans funded among some</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#2c5aa0] rounded-full opacity-20"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-white font-bold text-2xl">👥</span>
                    </div>
                    <h3 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">400k</h3>
                    <p className="text-lg text-gray-600 font-medium">Customers who chose Better out of choice</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#2c5aa0] rounded-full opacity-20"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-white font-bold text-2xl">0</span>
                    </div>
                    <h3 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">$0</h3>
                    <p className="text-lg text-gray-600 font-medium">Commissions, fees that other lenders charge</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full opacity-20"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-400 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Better Mortgage vs Traditional mortgages */}
      <div className="relative bg-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full shadow-sm border border-blue-100 mb-8">
              <div className="w-2 h-2 bg-[#2c5aa0] rounded-full mr-3 animate-pulse"></div>
              <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide">Comparison</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c5aa0] to-blue-600">
                Better Mortgage
              </span>
              {" "}vs Traditional
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Better Mortgage */}
            <div className="relative group">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-[#2c5aa0] to-blue-700 text-white rounded-3xl p-10 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold">Better Mortgage</h3>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg group-hover/item:text-blue-100 transition-colors duration-300">Get a Commitment Letter in a single day</span>
                  </div>
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg group-hover/item:text-blue-100 transition-colors duration-300">A simple online application you can do yourself</span>
                  </div>
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg group-hover/item:text-blue-100 transition-colors duration-300">A dedicated team (and no annoying up-sales)</span>
                  </div>
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg group-hover/item:text-blue-100 transition-colors duration-300">Guaranteed Gain lock on interest</span>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-white bg-opacity-20 rounded-full"></div>
              </div>
            </div>

            {/* Traditional Mortgages */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-10 shadow-xl border border-gray-200 transform group-hover:-translate-y-1 transition-all duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Traditional mortgages</h3>
                  <div className="w-12 h-12 bg-gray-300 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🐌</span>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-lg text-gray-700 group-hover/item:text-gray-600 transition-colors duration-300">Wait weeks for a Commitment Letter</span>
                  </div>
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-lg text-gray-700 group-hover/item:text-gray-600 transition-colors duration-300">Outdated methods that slow down</span>
                  </div>
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-lg text-gray-700 group-hover/item:text-gray-600 transition-colors duration-300">Pushy salespeople, emails, and all phone calls</span>
                  </div>
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-lg text-gray-700 group-hover/item:text-gray-600 transition-colors duration-300">Won't not find the leading rates</span>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#2c5aa0] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-blue-100 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-[#2c5aa0] to-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">?</span>
                </div>
                <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                One Day Mortgage 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c5aa0] to-blue-600">
                  {" "}FAQs
                </span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(0)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">Is One Day Mortgage® live in all states?</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">Yes</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(1)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">What makes One Day Mortgage® better?</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Once you find a house and make an offer, other lenders take weeks to get customers a Commitment Letter. That means weeks of worrying if you'll actually be able to afford the house, or if the deal will fall through. With One Day Mortgage®, you'll get that Commitment Letter within 24 hours.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(2)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">Will every customer qualify for One Day Mortgage®?</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Not yet! We're working hard to make every customer eligible for One Day Mortgage®, but for now we determine One Day Mortgage® qualification after the customer finishes the pre-approval process, which only takes a few minutes and will not affect their credit score.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(3)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">What loan types are NOT eligible for One Day Mortgage®?</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-6">
                    <div className="text-gray-600 text-sm leading-relaxed">
                      <p className="mb-2">The following loan types are NOT eligible:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>FHA loans</li>
                        <li>VA loans</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(4)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">How does a customer know if they qualify for One Day Mortgage®?</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      A customer must finish pre-approval in order for us to see if they qualify for One Day Mortgage®. If they do qualify, they will receive an email and see banners in their Better dashboard.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(5)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">What does a One Day Mortgage® customer have to do in order to get their Commitment Letter delivered in 24 hours?</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 5 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Once they lock a rate, a One Day Mortgage® customer must upload their required financial information within 4 hours of rate lock.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 7 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(6)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">What property types are eligible for One Day Mortgage®?</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 6 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 6 && (
                  <div className="px-6 pb-6">
                    <div className="text-gray-600 text-sm leading-relaxed">
                      <p className="mb-2">Property types eligible for One Day Mortgage® are:</p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>Single family</li>
                        <li>Townhouse</li>
                        <li>Condo</li>
                        <li>Detached condo</li>
                        <li>Planned unit development</li>
                        <li>Planned unit development detached</li>
                        <li>High rise condo</li>
                      </ul>
                      <p className="font-medium">At the moment, only primary residence occupancy type is eligible for One Day Mortgage®.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ 8 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(7)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">What financial information I need to share to get a Commitment Letter within 24 hours?</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 7 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 7 && (
                  <div className="px-6 pb-6">
                    <div className="text-gray-600 text-sm leading-relaxed">
                      <p className="mb-3">If you qualify for One Day Mortgage®, you'll receive an email after completing your pre-approval process and also see banners within your Better dashboard. Then, after locking a rate, you'll see a new One Day Mortgage tasks page in your Better dashboard. You'll be assigned approximately 3-5 personalized tasks to complete within 4 hours of rate lock.</p>
                      <p className="mb-2 font-medium">Common tasks include:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Provide employer details and upload paystubs</li>
                        <li>If assets required, upload bank statements</li>
                        <li>May need to explain random addresses or credit inquiries on the credit report</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ 9 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(8)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">How do I learn more about how to qualify for One Day Mortgage®?</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 8 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 8 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Go to the <span className="text-[#2c5aa0] font-medium cursor-pointer hover:text-blue-700">Terms and Conditions page</span>.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 10 - Terms & Conditions */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(9)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">One Day Mortgage® Terms & Conditions</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 9 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 9 && (
                  <div className="px-6 pb-6">
                    <div className="text-gray-600 text-xs leading-relaxed space-y-4 max-h-96 overflow-y-auto">
                      <p>
                        Better Mortgage Corporation ("Better Mortgage") is offering qualified customers ("Customers") who successfully provide the Required Documents within 4 hours of locking a rate for their mortgage loan, the eligibility to receive an underwriting determination on their Mortgage Loan application within 24 hours of locking a rate on their Mortgage Loan (the "Offer").
                      </p>
                      
                      <div>
                        <p className="font-semibold mb-2">The Offer:</p>
                        <p>The Offer is limited to two (2) mortgage loan types: (i) conventional, conforming mortgage loans, and (ii) near-agency jumbo mortgage loans.</p>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Conventional, Conforming Mortgage Loans Requirements:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Pay stubs</li>
                          <li>W2s</li>
                          <li>Bank statements (including investment and retirement statements)</li>
                          <li>Complete purchase agreement for the subject property</li>
                          <li>If applicable: proof of disability awards, social security income, retirement earnings, or pension income</li>
                          <li>If applicable: proof of self-employment income via Schedule C</li>
                          <li>If applicable: proof of rental income via Schedule E or lease agreements</li>
                          <li>If applicable: proof of child support or alimony awards</li>
                          <li>If applicable: proof of vested restricted stock units</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Eligibility Requirements:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Must be U.S. citizen, permanent resident or qualifying non-permanent resident</li>
                          <li>Must be W-2 employee, fixed income recipient, self-employed, or have sufficient rental/stock income</li>
                          <li>Own no more than four additional properties (excluding subject property)</li>
                          <li>Must meet rate lock requirements and lock rate on or after February 14, 2022</li>
                          <li>Successfully provide all Required Documents within 4-hour completion period</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Property Types (Conventional Loans):</p>
                        <p>Single family, Townhouse, Condominium, Detached condominium, Planned unit development (PUD), PUD-attached, PUD-detached, High rise condominium</p>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Near-Agency Jumbo Loans:</p>
                        <p>Limited to principal amount less than $1,500,000 for primary residence purchases or refinances only. More restrictive documentation and eligibility requirements apply.</p>
                      </div>

                      <p className="text-xs">
                        Better Mortgage does not guarantee underwriting determination within 24 hours but will use commercially reasonable efforts. Additional documentation may be required post-determination. Available in all 50 states and DC, subject to state laws and licensing.
                      </p>

                      <p className="text-xs font-semibold">
                        BETTER MORTGAGE RESERVES THE RIGHT TO MODIFY OR DISCONTINUE PRODUCTS, PROMOTIONS AND BENEFITS AT ANY TIME WITHOUT NOTICE.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="group relative bg-[#2c5aa0] hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="relative z-10 text-lg">Visit our learning center</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#2c5aa0] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full border border-white border-opacity-20 mb-6">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-blue-200 font-semibold text-sm tracking-wide">Legal Information</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-8">Important Disclosures</h3>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-sm text-blue-100 leading-relaxed space-y-4">
                <p>
                  **One Day Mortgage guarantee only applies to One Day Mortgage™ product by Better Mortgage Corporation. Applicant must complete an eligible application and review and accept the terms by 5pm on a business day. Your funds must be validated during underwriting. Funding is subject to satisfactory underwriting review and applicant meeting Better Mortgage underwriting guidelines. Not all applicants will qualify. See terms and conditions for additional important details.
                </p>
                <p>
                  Better Mortgage Corporation provides home loans. Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. For licensing information, see the Nationwide Multistate Licensing System (NMLS) - www.nmlsconsumeraccess.org. Better Mortgage Corporation NMLS #330511.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
        <IframeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          iframeUrl="https://ratebeat.floify.com/apply-now"
          title="One Day Mortgage Application"
        />
      </main>
      <Footer />
    </div>
  );
};
