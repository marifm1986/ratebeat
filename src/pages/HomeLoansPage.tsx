import {
  Banknote,
  Building2,
  Calculator,
  CheckCircle,
  ChevronRight,
  CreditCard,
  DollarSign,
  FileCheck,
  HandCoins,
  Home,
  MessageCircle,
  Percent,
  Phone,
  PiggyBank,
  RefreshCw,
  Shield,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';


type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>

type LoanOption = {
  id: string
  title: string
  description: string
  badge: string
  to?: string
  // Tailwind color classes preserved from your design
  classes: {
    cardBg: string
    icon: string
    title: string
    text: string
    badgeText: string
    circleBg: string
    chevron: string
  }
  Icon: IconType
  BadgeIcon: IconType
}

const pills = [
  "New home",
  "Refinance",
  "Cash-out refi",
  "Low rates",
  "Low down payment",
]

const loanOptions: LoanOption[] = [
  {
    id: "fha",
    title: "FHA loan",
    description:
      "Buy or refinance with a lower credit profile. Government-backed so we can lend to first-time buyers with down payments as low as 3.5%.",
    badge: "Lower credit profiles",
    to: "#",
    classes: {
      cardBg:
        "bg-blue-50 hover:bg-blue-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-blue-700",
      title: "text-blue-900",
      text: "text-blue-900",
      badgeText: "text-blue-700",
      circleBg: "bg-blue-100",
      chevron: "text-blue-900",
    },
    Icon: Home,
    BadgeIcon: Calculator,
  },
  {
    id: "30-fixed",
    title: "30-year fixed",
    description:
      "Locked rates that stay consistent and monthly payments. Buy with rates from 36 years.",
    badge: "Affordably",
    to: "/30-year-fixed-rate-mortgage",
    classes: {
      cardBg:
        "bg-green-50 hover:bg-green-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-green-700",
      title: "text-green-900",
      text: "text-green-900",
      badgeText: "text-green-700",
      circleBg: "bg-green-100",
      chevron: "text-green-900",
    },
    Icon: TrendingUp,
    BadgeIcon: Shield,
  },
  {
    id: "homeready-possible",
    title: "HomeReady® and Home Possible®",
    description:
      "Designed to make buying a home more accessible by allowing more flexible sources of income and down payments as low as 3%.",
    badge: "Affordable",
    to: "#",
    classes: {
      cardBg:
        "bg-purple-50 hover:bg-purple-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-purple-700",
      title: "text-purple-900",
      text: "text-purple-900",
      badgeText: "text-purple-700",
      circleBg: "bg-purple-100",
      chevron: "text-purple-900",
    },
    Icon: CreditCard,
    BadgeIcon: HandCoins,
  },
  {
    id: "hel",
    title: "Home Equity Loan",
    description:
      "Need cash fast? Tap into your home's equity. Borrow money your current mortgage one and get fixed monthly payments.",
    badge: "Borrow cash",
    to: "#",
    classes: {
      cardBg:
        "bg-red-50 hover:bg-red-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-red-700",
      title: "text-red-900",
      text: "text-red-900",
      badgeText: "text-red-700",
      circleBg: "bg-red-100",
      chevron: "text-red-900",
    },
    Icon: Building2,
    BadgeIcon: DollarSign,
  },
  {
    id: "cashout",
    title: "Cash-out refinance",
    description:
      "Keep your current loan for one that gives you access to your home's equity. Trade home improvements, debt consolidation and more.",
    badge: "Get cash out",
    to: "#",
    classes: {
      cardBg:
        "bg-orange-50 hover:bg-orange-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-orange-700",
      title: "text-orange-900",
      text: "text-orange-900",
      badgeText: "text-orange-700",
      circleBg: "bg-orange-100",
      chevron: "text-orange-900",
    },
    Icon: RefreshCw,
    BadgeIcon: Banknote,
  },
  {
    id: "15-fixed",
    title: "15-year fixed",
    description:
      "Buying or refinancing a shorter-term means. Generally gets you lower payments and you pay your home off in 15 years.",
    badge: "Lower interest",
    to: "/15-year-fixed-rate-mortgage",
    classes: {
      cardBg:
        "bg-teal-50 hover:bg-teal-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-teal-700",
      title: "text-teal-900",
      text: "text-teal-900",
      badgeText: "text-teal-700",
      circleBg: "bg-teal-100",
      chevron: "text-teal-900",
    },
    Icon: Percent,
    BadgeIcon: TrendingUp,
  },
  {
    id: "va",
    title: "VA loan",
    description:
      "You've served your country by military service. Now let us serve you by offering you housing options: VA loan down payment can be as low as $0.",
    badge: "Eligible veterans",
    to: "/va-loan",
    classes: {
      cardBg:
        "bg-indigo-50 hover:bg-indigo-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-indigo-700",
      title: "text-indigo-900",
      text: "text-indigo-900",
      badgeText: "text-indigo-700",
      circleBg: "bg-indigo-100",
      chevron: "text-indigo-900",
    },
    Icon: Shield,
    BadgeIcon: CheckCircle,
  },
  {
    id: "one-plus",
    title: "ONE+ by Ratebeat®",
    description:
      "Get the best of buying and investing with a conventional home loan plus additional 2%.",
    badge: "Discover",
    to: "#",
    classes: {
      cardBg:
        "bg-pink-50 hover:bg-pink-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-pink-700",
      title: "text-pink-900",
      text: "text-pink-900",
      badgeText: "text-pink-700",
      circleBg: "bg-pink-100",
      chevron: "text-pink-900",
    },
    Icon: PiggyBank,
    BadgeIcon: TrendingUp,
  },
  {
    id: "bridge",
    title: "Bridge loan",
    description:
      "Temporary financing that uses the equity of your current home to buy your new home.",
    badge: "Own two homes (temporarily)",
    to: "#",
    classes: {
      cardBg:
        "bg-cyan-50 hover:bg-cyan-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-cyan-700",
      title: "text-cyan-900",
      text: "text-cyan-900",
      badgeText: "text-cyan-700",
      circleBg: "bg-cyan-100",
      chevron: "text-cyan-900",
    },
    Icon: Building2,
    BadgeIcon: Home,
  },
  {
    id: "jumbo",
    title: "Jumbo Smart",
    description:
      "For home purchases or refinances amounts above conventional loan limits - starting at $766,550 in most areas in 2024.",
    badge: "High loan amounts",
    to: "#",
    classes: {
      cardBg:
        "bg-yellow-50 hover:bg-yellow-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-yellow-700",
      title: "text-yellow-900",
      text: "text-yellow-900",
      badgeText: "text-yellow-700",
      circleBg: "bg-yellow-100",
      chevron: "text-yellow-900",
    },
    Icon: DollarSign,
    BadgeIcon: Calculator,
  },
  {
    id: "arm",
    title: "Adjustable-rate mortgage",
    description:
      "Starts with a fixed interest rate for 5, 7, or 10 years but can rise later based on market conditions after the initial fixed period.",
    badge: "Rate can change",
    to: "#",
    classes: {
      cardBg:
        "bg-lime-50 hover:bg-lime-50 focus:bg-gray-100 hover:ring-gray-200 focus:ring-gray-300",
      icon: "text-lime-700",
      title: "text-lime-900",
      text: "text-lime-900",
      badgeText: "text-lime-700",
      circleBg: "bg-lime-100",
      chevron: "text-lime-900",
    },
    Icon: TrendingUp,
    BadgeIcon: Percent,
  },
]

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
            {pills.map((p) => (
              <span
                key={p}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanOptions.map(
              ({ id, title, description, badge, to = "#", classes, Icon, BadgeIcon }) => (
                <div
                  key={id}
                  className={[
                    "group relative w-full rounded-2xl p-5 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:shadow-xl outline-none focus:outline-none flex flex-col justify-between min-h-[200px]",
                    classes.cardBg,
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className={`w-6 h-6 ${classes.icon}`} />
                  </div>

                  <div className="title-wrapper flex flex-col flex-grow">
                    <h3 className={`text-left text-lg font-semibold leading-snug mb-2 ${classes.title}`}>
                      {title}
                    </h3>
                    <p className={`text-left text-sm mb-4 flex-grow ${classes.text}`}>
                      {description}
                    </p>
                    <div className={`flex items-center text-sm font-medium ${classes.badgeText}`}>
                      <BadgeIcon className="w-4 h-4 mr-2" />
                      {badge}
                    </div>
                  </div>

                  <div className="mt-4 self-end">
                    <Link to={to}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${classes.circleBg}`}>
                        <ChevronRight className={`w-5 h-5 group-hover:scale-125 transition-transform ${classes.chevron}`} />
                      </div>
                    </Link>
                  </div>
                </div>
              )
            )}
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
            ® Important legal disclosures<br />
            Client will be required to pay a 1% down payment, with the ability to pay a maximum of 3%, and Ratebeat will cover an additional 2% of the client’s purchase price as a down payment, or $2,000. Maximum grant amount is $7,000. Offer valid on primary residence, conventional loan products only. Maximum loan amount of $350,000. Cost of mortgage insurance premium passed through to client effective January 2, 2024. Offer valid only for home buyers when qualifying income is less than or equal to 80% area median income based on county where property is located. Not available with any other discounts or promotions and cannot be retroactively applied to previously closed loans or loans that have a locked rate. This is not a commitment to lend. Ratebeat reserves the right to cancel/modify this offer at any time. Additional restrictions/conditions may apply.
            <br /><br />
            Home Equity Loan product requires full documentation of income and assets, credit score and max loan-to-value (LTV), combined loan-to-value (CLTV), and home equity combined loan-to-value (HCLTV) ratios. Requirements were updated 2/5/2024 and are tiered as follows: 680 minimum FICO with a max LTV/CLTV/HCLTV of 80%, 700 minimum FICO with a max LTV/CLTV/HCLTV of 85%, and 740 minimum FICO with a max LTV/CLTV/HCLTV of 90%. Your debt-to-income ratio (DTI) must be 50% or below. Valid for loan amounts between $45,000.00 and $500,000.00 (minimum loan amount for properties located in Michigan is $10,000.00). Product is a second standalone lien and may not be used for piggyback transactions. Product not available on Schwab products. Guidelines may vary for self-employed individuals. Some mortgages may be considered “higher priced” based on the APOR spread test. Higher priced loans are not allowed on properties located in New York. Additional restrictions apply. Not available in Texas. This is not a commitment to lend.
            <br /><br />
            Clients who are current renters will receive a lender credit toward closing equivalent to 10% of the total amount of their 12-month current rental payment, up to $5,000. Current renters are defined as individuals who are currently under a lease agreement. Offer only valid on primary residences. Offer valid only through retail channels and on loans that are locked on or after February 11, 2025. Offer not available for Non-Occupant Co-Clients. Offer not available for partnerships. Offer not valid on Jumbo loans, Schwab products or previously locked or closed loans. Offer is nontransferable. Offer is not valid with any other discounts or promotions. Additional restrictions/conditions apply. Ratebeat reserves the right to modify/cancel this offer at any time. This is not a commitment to lend.
          </p>
        </div>
      </section>
    </div>
  );
};
