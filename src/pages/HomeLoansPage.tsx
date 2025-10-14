import React from 'react';
import { Button } from '../components/ui/Button';
import { 
  Home, 
  Calculator, 
  ChevronRight, 
  TrendingUp,
  DollarSign,
  Percent,
  CreditCard,
  Shield,
  HandCoins,
  Building2,
  Banknote,
  RefreshCw,
  PiggyBank,
  MessageCircle,
  Phone,
  FileCheck,
  Smartphone,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export const HomeLoansPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-4">
        <div className="absolute inset-0">
          <img
            src="/hero.webp"
            alt="Family working on finances"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Home loans that help you reach your goals
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Buying your first home? Want to get the most out of the one you already have? Whatever your goal, we'll help find the right loan for you.
              </p>
<Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg backdrop-blur-sm">
                Start personalizing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personalize your options */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Personalize your options
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Answer five questions to find home loans that could work for you.
          </p>
          <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
            Start personalizing
          </Button>
        </div>
      </section>

      {/* Loan options from Ratebeat */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Loan options from Ratebeat®
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">New home</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Refinance</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Cash-out refi</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Low rates</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Low down payment</span>
          </div>

          {/* Loan Options Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* FHA loan */}
            <div className="group relative w-full rounded-2xl p-5 bg-blue-50 hover:bg-blue-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <Home className="w-6 h-6 text-blue-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-blue-900 mb-2">
                  FHA loan
                </h3>
                <p className="text-left text-blue-900 text-sm mb-4 flex-grow">
                  Buy or refinance with a lower credit profile. Government-backed so we can lend to first-time buyers with down payments as low as 3.5%.
                </p>
                <div className="flex items-center text-blue-700 text-sm font-medium">
                  <Calculator className="w-4 h-4 mr-2" />
                  Lower credit profiles
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                  <ChevronRight className="w-5 h-5 text-blue-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

            {/* 30-year fixed */}
            <div className="group relative w-full rounded-2xl p-5 bg-green-50 hover:bg-green-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-green-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-green-900 mb-2">
                  30-year fixed
                </h3>
                <p className="text-left text-green-900 text-sm mb-4 flex-grow">
                  Locked rates that stay consistent and monthly payments. Buy with rates from 36 years.
                </p>
                <div className="flex items-center text-green-700 text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Affordably
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                  <ChevronRight className="w-5 h-5 text-green-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

            {/* HomeReady® and Home Possible® */}
            <div className="group relative w-full rounded-2xl p-5 bg-purple-50 hover:bg-purple-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <CreditCard className="w-6 h-6 text-purple-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-purple-900 mb-2">
                  HomeReady® and Home Possible®
                </h3>
                <p className="text-left text-purple-900 text-sm mb-4 flex-grow">
                  Designed to make buying a home more accessible by allowing more flexible sources of income and down payments as low as 3%.
                </p>
                <div className="flex items-center text-purple-700 text-sm font-medium">
                  <HandCoins className="w-4 h-4 mr-2" />
                  Affordable
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100">
                  <ChevronRight className="w-5 h-5 text-purple-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

            {/* Home Equity Loan */}
            <div className="group relative w-full rounded-2xl p-5 bg-red-50 hover:bg-red-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <Building2 className="w-6 h-6 text-red-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-red-900 mb-2">
                  Home Equity Loan
                </h3>
                <p className="text-left text-red-900 text-sm mb-4 flex-grow">
                  Need cash fast? Tap into your home's equity. Borrow money your current mortgage one and get fixed monthly payments.
                </p>
                <div className="flex items-center text-red-700 text-sm font-medium">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Borrow cash
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100">
                  <ChevronRight className="w-5 h-5 text-red-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

            {/* Cash-out refinance */}
            <div className="group relative w-full rounded-2xl p-5 bg-orange-50 hover:bg-orange-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <RefreshCw className="w-6 h-6 text-orange-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-orange-900 mb-2">
                  Cash-out refinance
                </h3>
                <p className="text-left text-orange-900 text-sm mb-4 flex-grow">
                  Keep your current loan for one that gives you access to your home's equity. Trade home improvements, debt consolidation and more.
                </p>
                <div className="flex items-center text-orange-700 text-sm font-medium">
                  <Banknote className="w-4 h-4 mr-2" />
                  Get cash out
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-100">
                  <ChevronRight className="w-5 h-5 text-orange-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

            {/* 15-year fixed */}
            <div className="group relative w-full rounded-2xl p-5 bg-teal-50 hover:bg-teal-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <Percent className="w-6 h-6 text-teal-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-teal-900 mb-2">
                  15-year fixed
                </h3>
                <p className="text-left text-teal-900 text-sm mb-4 flex-grow">
                  Buying or refinancing a shorter-term means. Generally gets you lower payments and you pay your home off in 15 years.
                </p>
                <div className="flex items-center text-teal-700 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Lower interest
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-100">
                  <ChevronRight className="w-5 h-5 text-teal-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

            {/* VA loan */}
            <div className="group relative w-full rounded-2xl p-5 bg-indigo-50 hover:bg-indigo-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-6 h-6 text-indigo-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-indigo-900 mb-2">
                  VA loan
                </h3>
                <p className="text-left text-indigo-900 text-sm mb-4 flex-grow">
                  You've served your country by military service. Now let us serve you by offering you housing options: VA loan down payment can be as low as $0.
                </p>
                <div className="flex items-center text-indigo-700 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Eligible veterans
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-indigo-100">
                  <ChevronRight className="w-5 h-5 text-indigo-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

            {/* ONE+ by Ratebeat® */}
            <div className="group relative w-full rounded-2xl p-5 bg-pink-50 hover:bg-pink-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <PiggyBank className="w-6 h-6 text-pink-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-pink-900 mb-2">
                  ONE+ by Ratebeat®
                </h3>
                <p className="text-left text-pink-900 text-sm mb-4 flex-grow">
                  Get the best of buying and investing with a conventional home loan plus additional 2%.
                </p>
                <div className="flex items-center text-pink-700 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Discover
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-100">
                  <ChevronRight className="w-5 h-5 text-pink-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

            {/* Bridge loan */}
            <div className="group relative w-full rounded-2xl p-5 bg-cyan-50 hover:bg-cyan-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <Building2 className="w-6 h-6 text-cyan-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-cyan-900 mb-2">
                  Bridge loan
                </h3>
                <p className="text-left text-cyan-900 text-sm mb-4 flex-grow">
                  Temporary financing that uses the equity of your current home to buy your new home.
                </p>
                <div className="flex items-center text-cyan-700 text-sm font-medium">
                  <Home className="w-4 h-4 mr-2" />
                  Own two homes (temporarily)
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-100">
                  <ChevronRight className="w-5 h-5 text-cyan-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

            {/* Jumbo Smart */}
            <div className="group relative w-full rounded-2xl p-5 bg-yellow-50 hover:bg-yellow-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <DollarSign className="w-6 h-6 text-yellow-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-yellow-900 mb-2">
                  Jumbo Smart
                </h3>
                <p className="text-left text-yellow-900 text-sm mb-4 flex-grow">
                  For home purchases or refinances amounts above conventional loan limits - starting at $766,550 in most areas in 2024.
                </p>
                <div className="flex items-center text-yellow-700 text-sm font-medium">
                  <Calculator className="w-4 h-4 mr-2" />
                  High loan amounts
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-100">
                  <ChevronRight className="w-5 h-5 text-yellow-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

            {/* Adjustable-rate mortgage */}
            <div className="group relative w-full rounded-2xl p-5 bg-lime-50 hover:bg-lime-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-lime-700" />
              </div>
              <div className="title-wrapper flex flex-col flex-grow">
                <h3 className="text-left text-lg font-semibold leading-snug text-lime-900 mb-2">
                  Adjustable-rate mortgage
                </h3>
                <p className="text-left text-lime-900 text-sm mb-4 flex-grow">
                  Starts with a fixed interest rate for 5, 7, or 10 years but can rise later based on market conditions after the initial fixed period.
                </p>
                <div className="flex items-center text-lime-700 text-sm font-medium">
                  <Percent className="w-4 h-4 mr-2" />
                  Rate can change
                </div>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-lime-100">
                  <ChevronRight className="w-5 h-5 text-lime-900 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Did you know? */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Did you know?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            No two mortgages are alike. Find the annual ones we need that original match your lifestyle.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Yes, we accept down payment assistance
              </h3>
              <p className="text-gray-600">
                Depending on your area and eligibility, you may get from buying a home! Let us see what assistance you could be eligible for.
              </p>
              <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg">
                Connect with an expert
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Fee Simple Home Loans on Native American reservations
              </h3>
              <p className="text-gray-600">
                See mortgage loan options for fee simple property on Native American reservations - including government-backed loans.
              </p>
              <Button className="mt-4 bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-lg">
                Learn more
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <PiggyBank className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Yes, we offer savings for renters
              </h3>
              <p className="text-gray-600">
                We work with partner sites rental and offer you up to $5,000 towards your next home.
              </p>
              <Button className="mt-4 bg-purple-600 text-white hover:bg-purple-700 px-6 py-2 rounded-lg">
                About RentRewards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Questions about mortgage? */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Questions about mortgage?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're curious to learning about house plans, your Ratebeat agent - here to answer your questions. Call / or, someone, no pressure.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm">Buy</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm">Refinance</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm">Rates</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm">Loan options</span>
              </div>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
                Chat now
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <img
                src="/Better.webp"
                alt="Customer service representative"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert guidance for your home loan journey */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Expert guidance for your home loan journey.
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Apply online
              </h3>
              <p className="text-gray-600 text-sm">
                It only takes minutes to start bringing your goals into focus.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Know your next steps
              </h3>
              <p className="text-gray-600 text-sm">
                Together we'll figure out what makes the most sense for you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Get your loan
              </h3>
              <p className="text-gray-600 text-sm">
                Your dedicated team will help you reach the finish line.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Check off that goal
              </h3>
              <p className="text-gray-600 text-sm">
                And when it's time for the next one, we'll be here.
              </p>
              <Button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
                Let's chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't wonder what's best. Ask us!
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              We've been helping clients find that perfect home loan for almost 40 years.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Chat with an expert
                </h3>
                <p className="text-gray-300 mb-4">
                  Get real help from real pros
                </p>
<Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg backdrop-blur-sm">
                  Start chat
                </Button>
              </div>

              <div className="text-center">
                <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Call us
                </h3>
                <p className="text-gray-300 mb-4">
                  (833) One-Rate
                </p>
<Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg backdrop-blur-sm">
                  Call now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimers */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs text-gray-500 leading-relaxed">
            ® Important legal disclosures<br/>
            Client will be required to pay a 1% down payment, with the ability to pay a maximum of 3%, and Ratebeat will cover an additional 2% of the client’s purchase price as a down payment, or $2,000. Maximum grant amount is $7,000. Offer valid on primary residence, conventional loan products only. Maximum loan amount of $350,000. Cost of mortgage insurance premium passed through to client effective January 2, 2024. Offer valid only for home buyers when qualifying income is less than or equal to 80% area median income based on county where property is located. Not available with any other discounts or promotions and cannot be retroactively applied to previously closed loans or loans that have a locked rate. This is not a commitment to lend. Ratebeat reserves the right to cancel/modify this offer at any time. Additional restrictions/conditions may apply.
            <br/><br/>
            Home Equity Loan product requires full documentation of income and assets, credit score and max loan-to-value (LTV), combined loan-to-value (CLTV), and home equity combined loan-to-value (HCLTV) ratios. Requirements were updated 2/5/2024 and are tiered as follows: 680 minimum FICO with a max LTV/CLTV/HCLTV of 80%, 700 minimum FICO with a max LTV/CLTV/HCLTV of 85%, and 740 minimum FICO with a max LTV/CLTV/HCLTV of 90%. Your debt-to-income ratio (DTI) must be 50% or below. Valid for loan amounts between $45,000.00 and $500,000.00 (minimum loan amount for properties located in Michigan is $10,000.00). Product is a second standalone lien and may not be used for piggyback transactions. Product not available on Schwab products. Guidelines may vary for self-employed individuals. Some mortgages may be considered “higher priced” based on the APOR spread test. Higher priced loans are not allowed on properties located in New York. Additional restrictions apply. Not available in Texas. This is not a commitment to lend.
            <br/><br/>
            Clients who are current renters will receive a lender credit toward closing equivalent to 10% of the total amount of their 12-month current rental payment, up to $5,000. Current renters are defined as individuals who are currently under a lease agreement. Offer only valid on primary residences. Offer valid only through retail channels and on loans that are locked on or after February 11, 2025. Offer not available for Non-Occupant Co-Clients. Offer not available for partnerships. Offer not valid on Jumbo loans, Schwab products or previously locked or closed loans. Offer is nontransferable. Offer is not valid with any other discounts or promotions. Additional restrictions/conditions apply. Ratebeat reserves the right to modify/cancel this offer at any time. This is not a commitment to lend.
          </p>
        </div>
      </section>
    </div>
  );
};
