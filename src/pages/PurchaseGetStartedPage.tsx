import React from 'react';
import { Button } from '../components/ui/Button';
import { 
  Home, 
  Calculator, 
  ChevronRight, 
  TrendingUp,
  Search,
  Shield,
  Smartphone
} from 'lucide-react';

export const PurchaseGetStartedPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - "A new chapter is calling you" */}
      <section className="relative bg-gray-900 text-white py-20 px-4">
        <div className="absolute inset-0">
          <img
            src="/hero.webp"
            alt="Family on deck"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            A new chapter is calling you
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Whether you're moving or looking at downsizing, our team will 
            guide you to the door of your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg backdrop-blur-sm">
              Apply to buy a home
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg backdrop-blur-sm">
              Estimate my rate
            </Button>
          </div>
        </div>
      </section>

      {/* Three Feature Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Card 1 - Homeowner-in-training */}
            <div className="group relative w-full rounded-2xl p-5 bg-blue-50 hover:bg-blue-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[132px]">
              <div className="flex items-start gap-4 mb-4">
                <Home className="w-6 h-6 text-blue-700" />
              </div>
              <div className="title-wrapper flex flex-col">
                <p className="text-left text-base md:text-lg font-medium leading-snug text-blue-900">
                  Homeowner-in-training
                </p>
                <p className="text-left text-blue-900 text-sm">Stay on task with this family checklist and home buying guide.</p>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform text-blue-900" />
                </div>
              </div>
            </div>

            {/* Card 2 - Show me the rates */}
            <div className="group relative w-full rounded-2xl p-5 bg-green-50 hover:bg-green-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[132px]">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-green-700" />
              </div>
              <div className="title-wrapper flex flex-col">
                <p className="text-left text-base md:text-lg font-medium leading-snug text-green-900">
                  Show me the rates
                </p>
                <p className="text-left text-green-900 text-sm">Get started where rates move, so you can be ready to buy.</p>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform text-green-900" />
                </div>
              </div>
            </div>

            {/* Card 3 - Plan your budget */}
            <div className="group relative w-full rounded-2xl p-5 bg-purple-50 hover:bg-purple-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[132px]">
              <div className="flex items-start gap-4 mb-4">
                <Calculator className="w-6 h-6 text-purple-700" />
              </div>
              <div className="title-wrapper flex flex-col">
                <p className="text-left text-base md:text-lg font-medium leading-snug text-purple-900">
                  Plan your budget
                </p>
                <p className="text-left text-purple-900 text-sm">House shopping? See what your monthly payment could be.</p>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100">
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform text-purple-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ratebeat Preferred Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                You're in control with Ratebeat Preferred
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Reach and Ratebeat are teaming up to offer you 
                exclusive savings – plus getting 1% off your rate for the first 
                year of up to $6,000 off closing costs.
              </p>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
                Discover the benefits
              </Button>
            </div>
            <div className="bg-teal-50 rounded-2xl p-6">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-6 text-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Reach</span>
                  <span className="text-lg font-semibold">Ratebeat</span>
                </div>
                <img
                  src="/Better.webp"
                  alt="House with mountains"
                  className="w-full h-32 object-cover rounded-xl mb-4"
                />
                <div className="text-center">
                  <p className="text-sm opacity-90">Partnership benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's help you home Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Let's help you home
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Smart home search */}
            <div className="group relative w-full rounded-2xl p-5 bg-red-50 hover:bg-red-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[132px]">
              <div className="flex items-start gap-4 mb-4">
                <Search className="w-6 h-6 text-red-700" />
              </div>
              <div className="title-wrapper flex flex-col">
                <p className="text-left text-base md:text-lg font-medium leading-snug text-red-900">
                  Smart home search
                </p>
                <p className="text-left text-red-900 text-sm">Find the right home at the right price for your budget.</p>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100">
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform text-red-900" />
                </div>
              </div>
            </div>

            {/* Unlock buying power */}
            <div className="group relative w-full rounded-2xl p-5 bg-orange-50 hover:bg-orange-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[132px]">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-6 h-6 text-orange-700" />
              </div>
              <div className="title-wrapper flex flex-col">
                <p className="text-left text-base md:text-lg font-medium leading-snug text-orange-900">
                  Unlock buying power
                </p>
                <p className="text-left text-orange-900 text-sm">See if you're ready to make offers.</p>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-100">
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform text-orange-900" />
                </div>
              </div>
            </div>

            {/* Ratebeat Money App */}
            <div className="group relative w-full rounded-2xl p-5 bg-pink-50 hover:bg-pink-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[132px]">
              <div className="flex items-start gap-4 mb-4">
                <Smartphone className="w-6 h-6 text-pink-700" />
              </div>
              <div className="title-wrapper flex flex-col">
                <p className="text-left text-base md:text-lg font-medium leading-snug text-pink-900">
                  Ratebeat Money™ App
                </p>
                <p className="text-left text-pink-900 text-sm">Get your credit and finances ready for your big move.</p>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-100">
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform text-pink-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get rewarded Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Get rewarded for renting
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get 1% of your rent to use on a home of your own with RentRewards!
              </p>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
                Learn about RentRewards
              </Button>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-6">
              <div className="bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl p-6 text-white">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">$5,000</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>$2,000 /mo</span>
                      <span>$2,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rent</span>
                      <span>$2,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rewards</span>
                      <span>$3,000</span>
                    </div>
                  </div>
                </div>
                <img
                  src="/Better.webp"
                  alt="Person with rewards"
                  className="w-24 h-24 rounded-full ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You might also like */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            You might also like
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Mortgage calculator */}
            <div className="group relative w-full rounded-2xl p-5 bg-blue-50 hover:bg-blue-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[132px]">
              <div className="flex items-start gap-4 mb-4">
                <Calculator className="w-6 h-6 text-blue-700" />
              </div>
              <div className="title-wrapper flex flex-col">
                <p className="text-left text-base md:text-lg font-medium leading-snug text-blue-900">
                  Mortgage calculator
                </p>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform text-blue-900" />
                </div>
              </div>
            </div>

            {/* Home affordability calculator */}
            <div className="group relative w-full rounded-2xl p-5 bg-green-50 hover:bg-green-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[132px]">
              <div className="flex items-start gap-4 mb-4">
                <Home className="w-6 h-6 text-green-700" />
              </div>
              <div className="title-wrapper flex flex-col">
                <p className="text-left text-base md:text-lg font-medium leading-snug text-green-900">
                  Home affordability calculator
                </p>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform text-green-900" />
                </div>
              </div>
            </div>

            {/* See today's rates */}
            <div className="group relative w-full rounded-2xl p-5 bg-purple-50 hover:bg-purple-50 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[132px]">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-purple-700" />
              </div>
              <div className="title-wrapper flex flex-col">
                <p className="text-left text-base md:text-lg font-medium leading-snug text-purple-900">
                  See today's rates
                </p>
              </div>
              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100">
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform text-purple-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-red-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Hear from home buyers who chose Ratebeat
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "When we finally found the right house you... moved heaven and earth for me."
                </p>
                <p className="font-semibold text-gray-900">James F.</p>
              </div>
              <div className="flex justify-between items-center">
                <span>1/3</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-gray-300 rounded-full">&lt;</button>
                  <button className="w-8 h-8 bg-gray-300 rounded-full">&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            We make clients homeowners every day. You could be one of them.
          </h2>
          <Button className="bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 rounded-lg font-semibold text-lg">
            Apply to buy a home
          </Button>
        </div>
      </section>
      {/* Legal Disclaimers */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs text-gray-500 leading-relaxed">
            ® Important legal disclosures<br/><br/>
            Clients purchasing a home with a Redfin real estate agent or Redfin Partner Agent (or with a Ratebeat Homes Network Agent) and financing with Ratebeat will receive an effective rate reduction of 1% below the note rate for the first year from Ratebeat. For example, a client locking in a 6.99% interest rate would pay 5.99% for the first year, reverting to 6.99% for the remaining term. Client may choose to opt out of the rate reduction and receive a lender-paid credit of .75% of the loan amount, up to $6,000 from Ratebeat.  Only valid on conforming loan limits. This offer is only available to clients who complete their application process and receive their Loan Estimate after July 1, 2025. Offer valid on retail loans only and cannot be combined with any other discounts or promotional offers. Additional restrictions/conditions may apply. Ratebeat reserves the right to cancel/modify this offer at any time. This is not a commitment to lend.
            <br/><br/>
            Clients who are current renters will receive a lender credit toward closing equivalent to 10% of the total amount of their 12-month current rental payment, up to $5,000. Current renters are defined as individuals who are currently under a lease agreement. Offer only valid on primary residences. Offer valid only through retail channels and on loans that are locked on or after February 11, 2025. Offer not available for Non-Occupant Co-Clients. Offer not available for partnerships. Offer not valid on Jumbo loans, Schwab products or previously locked or closed loans. Offer is nontransferable. Offer is not valid with any other discounts or promotions. Additional restrictions/conditions apply. Ratebeat reserves the right to modify/cancel this offer at any time. This is not a commitment to lend.
          </p>
        </div>
      </section>
    </div>
  );
};
