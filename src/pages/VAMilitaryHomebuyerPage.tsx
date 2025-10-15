import React, { useState } from 'react';
import {
  ChevronRight,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  PlayCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FinalCTA } from '../components/FinalCTA';
import { LegalDisclaimer } from '../components/LegalDisclaimer';

const VAMilitaryHomebuyerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Rates', 'Loan options', 'Calculators'];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who's eligible for a VA loan?",
      answer: "Veterans, active-duty service members, National Guard members, and eligible surviving spouses may qualify for VA loans."
    },
    {
      question: "Can I buy a condo with a VA loan?",
      answer: "Yes, you can buy a condo with a VA loan if the building is VA-approved and meets specific requirements."
    },
    {
      question: "Can I use my VA loan benefit more than once?",
      answer: "Yes, VA loan benefits can be reused multiple times throughout your lifetime under certain conditions."
    },
    {
      question: "How is VA loan different from other home loans?",
      answer: "VA loans typically require no down payment, no PMI, and offer competitive interest rates with flexible credit requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-4">
        <div className="absolute inset-0">
          <img
            src="/hero.webp"
            alt="Military family with home"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                You fought for our home. We'll fight for yours.
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                We're so proud you served and equally sorry your service is done. It's 
                time to get the home you deserve. From VA loans to military-friendly 
                home buying resources, we're here to serve you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg backdrop-blur-sm">
                  Check my eligibility
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Support Journey Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Our team can support you through the entire journey
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Knowing your VA benefits with certainty
                    </h3>
                    <p className="text-gray-600">
                      We'll help you understand all the VA benefits you have earned and how 
                      to use them on your home-buying journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Getting preapproved
                    </h3>
                    <p className="text-gray-600">
                      We'll guide you through the entire process so you're feeling confident you can 
                      make a strong offer when you find the perfect home.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Making the offer and closing the deal
                    </h3>
                    <p className="text-gray-600">
                      In today's market you need to act quickly. We'll make sure you have ample lead time and a hand-working simplified process.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
                Speak to VA team
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                src="/mobile.webp"
                alt="Military family"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Veterans Culture Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Veterans are part of our culture and company
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            There are over 600 military and veterans who work here.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Rocket Veteran Program
              </h3>
              <p className="text-gray-600 mb-4">
                We're one largest private employers of military members and veterans in the United States. Since 2018:
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Hired more than 3,500 veterans</li>
                <li>• Won Military Friendly Top 10 Employer for 5 years</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Job training and veteran internships
              </h3>
              <p className="text-gray-600">
                We partner with veteran organizations to provide professional development and career opportunities through our paid four-to-six month training programs at Detroit for our technology, sales, and operations teams.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ending veteran homelessness
              </h3>
              <p className="text-gray-600">
                We're a Founding Partner of the Coalition Foundation helping place more than 24,000 veterans.
              </p>
              <p className="text-gray-600 mt-4">
                In 2023, we partnered with Humble Design Organization to represent 1,500 veterans.
              </p>
            </div>
          </div>

<Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg backdrop-blur-sm">
            Our commitment to veterans
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-red-500 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Hear from military families who chose Rocket Mortgage
              </h3>
              <div className="text-sm text-red-100">
                <Shield className="w-6 h-6 mb-2" />
                Trustpilot
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-900 text-lg mb-4">
                "I got the best customer service and fastest information. As a 100% disabled vet, Rocket gave an incredible amount of support and information to find my perfect home."
              </blockquote>
              <cite className="text-gray-600">
                - Review by Chad I., a veteran and Rocket Mortgage customer
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Military Time Quote Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <blockquote className="text-3xl font-bold text-gray-900 mb-6">
                "You've got military time that counts, let's use it."
              </blockquote>
              <p className="text-lg text-gray-600 mb-8">
                That's what our loan Robert K. told Navy sailor John when told his 
                service qualified, But we showed him it and he could get his home 
                the needed ... and more.
              </p>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold">
                Check my eligibility
              </Button>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/Better.webp"
                  alt="Military service member"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Frequently asked questions for military families buying a home
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Get answers to the most common Rocket questions.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
                      <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold">
              Visit our FAQs
            </Button>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold">
              Contact an expert
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Related articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img
                src="/calculator-image.webp"
                alt="VA loan vs conventional loan"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  VA loan vs. conventional loan: What's the difference?
                </h3>
                <ArrowRight className="w-5 h-5 text-blue-600 mt-4" />
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img
                src="/oneDay.webp"
                alt="VA loan inspection"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  VA loan inspection requirements: What you need to know
                </h3>
                <ArrowRight className="w-5 h-5 text-blue-600 mt-4" />
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img
                src="/buy.webp"
                alt="House affordability"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  How much house can you afford with a VA loan?
                </h3>
                <ArrowRight className="w-5 h-5 text-blue-600 mt-4" />
              </div>
            </article>
          </div>

          <div className="text-center mt-8">
                        <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold">
              Visit our learning center
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="It's an honor to serve you"
        description="Whether you're on your next station or it's time to lay down roots, our Home Loan Experts are ready to help you home."
        buttonText="Visit our opportunities"
      />

      {/* Legal Disclaimers */}
      <LegalDisclaimer
        content={`Refinancing may cause finance charges to be higher over the life of the loan.

Clients who lock their rate between May 19, 2025, and June 2, 2025, by 8:00 am ET, will receive a one-point discount on the rate's pricing as a lender credit toward closing costs. A point is equal to 1% of the loan amount. Not valid with other discounts or promotions. Valid on first lien, retail fixed VA products. Not valid for loans through Rocket Pro, Partnerships, team member loans, or by an Executive Loan Officer. Acceptance of this offer means acceptance of these terms, which may be cancelled or changed at any time at the discretion of Rocket Mortgage. Non-transferable. Not a commitment to lend. Additional restrictions/conditions may apply.

Client will be required to pay a 1% down payment, with the ability to pay a maximum of 3%, and Rocket Mortgage will cover an additional 2% of the client's purchase price as a down payment, or $2,000. Maximum grant amount is $7,000. Offer valid on primary residence, conventional loan products only. Maximum loan amount of $350,000. Cost of mortgage insurance premium passed through to client effective January 2, 2024. Offer valid only for home buyers when qualifying income is less than or equal to 80% area median income based on county where property is located. Not available with any other discounts or promotions and cannot be retroactively applied to previously closed loans or loans that have a locked rate. This is not a commitment to lend. Rocket Mortgage reserves the right to cancel/modify this offer at any time. Additional restrictions/conditions may apply.`}
      />
    </div>
  );
};

export { VAMilitaryHomebuyerPage };
