import React, { useState } from 'react';
import {
  ChevronRight,
  Shield,
  Users,
  Clock,
  DollarSign,
  Home,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FinalCTA } from '../components/FinalCTA';
import { LegalDisclaimer } from '../components/LegalDisclaimer';

// Color variants with static Tailwind classes
const COLOR_VARIANTS: Record<
  string,
  { icon: string; badgeBg: string; badgeRing: string; hoverBg: string; cardBg: string; textColor: string }
> = {
  blue: { icon: 'text-blue-700', badgeBg: 'bg-blue-100', badgeRing: 'ring-blue-200', hoverBg: 'hover:bg-blue-50', cardBg: 'bg-blue-50', textColor: 'text-blue-900' },
  red: { icon: 'text-red-700', badgeBg: 'bg-red-100', badgeRing: 'ring-red-200', hoverBg: 'hover:bg-red-50', cardBg: 'bg-red-50', textColor: 'text-red-900' },
  green: { icon: 'text-green-700', badgeBg: 'bg-green-100', badgeRing: 'ring-green-200', hoverBg: 'hover:bg-green-50', cardBg: 'bg-green-50', textColor: 'text-green-900' },
  purple: { icon: 'text-purple-700', badgeBg: 'bg-purple-100', badgeRing: 'ring-purple-200', hoverBg: 'hover:bg-purple-50', cardBg: 'bg-purple-50', textColor: 'text-purple-900' },
  orange: { icon: 'text-orange-700', badgeBg: 'bg-orange-100', badgeRing: 'ring-orange-200', hoverBg: 'hover:bg-orange-50', cardBg: 'bg-orange-50', textColor: 'text-orange-900' },
  teal: { icon: 'text-teal-700', badgeBg: 'bg-teal-100', badgeRing: 'ring-teal-200', hoverBg: 'hover:bg-teal-50', cardBg: 'bg-teal-50', textColor: 'text-teal-900' },
};

const VAMilitaryRefinancePage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Resources cards data
  const resources = [
    {
      name: 'Rocket Veteran Program',
      description: 'Educate current and former military clients on home-buying strategies and tools to succeed.',
      icon: Shield,
      color: 'blue',
      href: '#veteran-program'
    },
    {
      name: 'Job training and veteran internships',
      description: 'Rocket provides career opportunities and job training programs specifically designed for veterans.',
      icon: Users,
      color: 'green',
      href: '#job-training'
    },
    {
      name: 'Ending veteran homelessness',
      description: 'We\'re a lead partner of Built for Zero, a national movement to permanently end veteran homelessness.',
      icon: Home,
      color: 'purple',
      href: '#ending-homelessness'
    },
    {
      name: 'A simple process',
      description: 'Skip the red tape and move in quicker with an online, easy-to-follow loan process that\'s built for busy lives.',
      icon: Clock,
      color: 'orange',
      href: '#simple-process'
    },
    {
      name: 'Your trusted partner',
      description: 'Partner with an experienced loan officer who understands military life and has your back every step.',
      icon: CheckCircle,
      color: 'teal',
      href: '#trusted-partner'
    },
    {
      name: 'Exceptional savings',
      description: 'VA loans typically come with competitive rates, no PMI, and flexible credit requirements.',
      icon: DollarSign,
      color: 'red',
      href: '#savings'
    }
  ];

  const faqs = [
    {
      question: "Can I use VA benefit twice even if I still own the first house I purchased?",
      answer: "Yes, you can use your VA loan benefit again in certain circumstances, even if you still own the first home. This includes full entitlement restoration if you've sold the first property and paid off the VA loan, or you may have remaining entitlement to use for a second VA loan depending on the loan amount and your available entitlement."
    },
    {
      question: "Can I use my VA loan for an investment property or second home?",
      answer: "VA loans are intended for primary residences only. You must certify that you intend to personally occupy the property as your primary home. However, if you purchase a multi-unit property (up to 4 units), you can live in one unit and rent out the others."
    },
    {
      question: "What are the benefits of a VA interest rate reduction refinance loan (IRRRL)?",
      answer: "An IRRRL, also called a VA Streamline Refinance, allows you to refinance your existing VA loan to a lower interest rate with minimal documentation and no appraisal in most cases. Benefits include lower monthly payments, reduced interest costs over the life of the loan, and a streamlined approval process."
    },
    {
      question: "How is a VA loan different from a conventional loan? What is a VA Difference?",
      answer: "VA loans offer several advantages: no down payment required (0% down), no private mortgage insurance (PMI), competitive interest rates, flexible credit requirements, limited closing costs, and the ability to include the VA funding fee in the loan amount. These benefits can result in significant savings compared to conventional loans."
    },
    {
      question: "What are the VA eligibility requirements?",
      answer: "Eligibility typically requires 90 consecutive days of active service during wartime, 181 days during peacetime, or 6 years in the National Guard or Reserves. Veterans must have received an honorable discharge or better. Surviving spouses of veterans who died in service or from service-connected disabilities may also be eligible."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-4">
        <div className="absolute inset-0">
          <img
            src="/hero.webp"
            alt="Military veteran with home"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                You served with strength. Save with purpose.
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                We're proud you served and want you to get the home you always
                dreamed of. From VA loans to military-friendly refinance options,
                we're here to serve you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
<Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold">
                  See options
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Veterans Choose Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why veterans choose Rocket for VA refinance
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-blue-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Exceptional savings
                    </h3>
                    <p className="text-gray-600">
                      Reduce monthly payments and save money with special
                      programs designed specifically for veterans and their
                      families.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      A simple process
                    </h3>
                    <p className="text-gray-600">
                      Say goodbye to complicated paperwork. We've streamlined
                      everything so you can refinance faster and easier than you
                      think.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Your trusted partner
                    </h3>
                    <p className="text-gray-600">
                      Our dedicated team understands your unique needs and will
                      support you through the entire refinance journey.
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Learn more
              </button>
            </div>

            <div className="relative">
              <img
                src="/Better.webp"
                alt="Military family home"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Cards Section */}
      <section className="bg-gray-50 rounded-3xl px-10 py-10 lg:px-28 lg:py-18 mx-4 lg:mx-auto max-w-7xl mb-16">
        <div className="container mx-auto flex flex-col">
          <div className="title-wrapper flex flex-col mb-12 text-center">
            <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
              Veterans are part of our culture and company
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Rocket's commitment to serving those who served goes beyond just
              providing home loans.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {resources.map(({ name, description, icon: Icon, color, href }, idx) => {
              const variant = COLOR_VARIANTS[color] ?? COLOR_VARIANTS.blue;
              const Wrapper: React.ElementType = href ? 'a' : 'button';
              const wrapperProps = href
                ? { href, 'aria-label': name }
                : { type: 'button', 'aria-label': name } as const;

              return (
                <Wrapper
                  key={idx}
                  {...wrapperProps}
                  className={[
                    'group relative w-full rounded-2xl p-5',
                    variant.cardBg,
                    variant.hoverBg,
                    'focus:bg-gray-100',
                    'transition-all duration-200 cursor-pointer',
                    'ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300',
                    'outline-none focus:outline-none',
                    'flex flex-col justify-between min-h-[200px]',
                  ].join(' ')}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className={['w-6 h-6', variant.icon].join(' ')} />
                  </div>
                  <div className="title-wrapper flex flex-col mb-4">
                    <p
                      className={[
                        'text-left text-base md:text-lg font-medium leading-snug mb-2',
                        variant.textColor,
                      ].join(' ')}
                    >
                      {name}
                    </p>
                    <p className={`text-left text-sm ${variant.textColor}`}>
                      {description}
                    </p>
                  </div>

                  <div className={`mt-4 self-end`}>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${variant.badgeBg}`}
                    >
                      <ChevronRight
                        className={`w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform ${variant.textColor}`}
                      />
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="mt-12 bg-black text-white rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Interested in restarting your refinance with Rocket?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Our Rocket guidance and broker advice from streamlined the
              refinance has to market method refinance option.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Continue your refinance
            </button>
          </div>
        </div>
      </section>

      {/* Military Time Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/image10.png"
                alt="Military personnel"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                "You've got military time that counts, let's use it."
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Your service time may qualify you for special VA refinance
                benefits. Our team will help you understand your options and find
                the best refinance solution for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  Check my options
                </button>
                <button className="border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
            Frequently asked questions from military families on refinance
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Everything you need to know about VA refinance options and benefits.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
            >
              See All FAQs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Related articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="#" className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src="/image2.png"
                  alt="Military family planning"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                How many times can you use a VA loan?
              </h3>
            </a>

            <a href="#" className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src="/image3.png"
                  alt="VA cash-out refinance"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                VA cash-out refinance: what it is and how it works
              </h3>
            </a>

            <a href="#" className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src="/image4.png"
                  alt="VA mortgage rates"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                How VA mortgage rates work
              </h3>
            </a>
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
            >
              View our blog
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Honor Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            It's an honor to serve you
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Serving those who served our country is a privilege. Let us help you
            find the perfect refinance solution tailored to your needs and goals.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Start your refinance
          </button>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <LegalDisclaimer
        content={`Equal Housing Opportunity. Rocket Mortgage, LLC; NMLS #3030; www.nmlsconsumeraccess.org. Licensed in 50 states.

Savings, if any, vary based on consumer credit profile, interest rate availability and other factors. Rocket Mortgage is not acting on behalf of or at the direction of HUD/FHA or any other government agency.

Veterans United Home Loans and Rocket Mortgage are independent entities. Neither party is acting as an agent of the other. Information provided by you is shared with both Veterans United Home Loans and Rocket Mortgage.

Refinancing your mortgage may include consolidating debt. This may result in a longer term on your loan and higher interest paid over time. By refinancing your existing loan, the total finance charges may be higher over the life of the loan.

The information provided in these materials is for informational purposes only and is not intended to provide legal, tax, or financial advice. Contact your attorney, accountant, or tax advisor regarding your specific situation.`}
      />

      {/* Final CTA */}
      <FinalCTA 
        title="Ready to refinance with confidence?"
        description="Our team of experts is here to guide you through every step of the VA refinance process."
        buttonText="Get started today"
      />
    </div>
  );
};

export default VAMilitaryRefinancePage;
