import React, { useState } from 'react';
import {
  ChevronRight,
  Calculator,
  Home,
  DollarSign,
  Percent,
  RefreshCw,
  LucideIcon,
  HandCoins,
  Banknote,
  CalendarDays,
  CalendarPlus,
  CreditCard,

} from 'lucide-react';
import { FilterTabs } from './ui/FilterTabs';

// Map icon keys to Lucide components
const ICONS: Record<string, LucideIcon> = {
  Home,
  Calculator,
  Percent,
  DollarSign,
  RefreshCw,
  HandCoins,
  Banknote,
  CalendarDays,
  CalendarPlus,
  CreditCard
};

// Color variants with *static* Tailwind classes (avoids purge/JIT issues)
const COLOR_VARIANTS: Record<
  string,
  { icon: string; badgeBg: string; badgeRing: string; hoverBg: string; cardBg: string; textColor: string }
> = {
  blue: { icon: 'text-blue-700', badgeBg: 'bg-blue-100', badgeRing: 'ring-blue-200', hoverBg: 'hover:bg-blue-50', cardBg: 'bg-blue-50', textColor: 'text-blue-900' },
  red: { icon: 'text-red-700', badgeBg: 'bg-red-100', badgeRing: 'ring-red-200', hoverBg: 'hover:bg-red-50', cardBg: 'bg-red-50', textColor: 'text-red-900' },
  green: { icon: 'text-green-700', badgeBg: 'bg-green-100', badgeRing: 'ring-green-200', hoverBg: 'hover:bg-green-50', cardBg: 'bg-green-50', textColor: 'text-green-900' },
  purple: { icon: 'text-purple-700', badgeBg: 'bg-purple-100', badgeRing: 'ring-purple-200', hoverBg: 'hover:bg-purple-50', cardBg: 'bg-purple-50', textColor: 'text-purple-900' },
  yellow: { icon: 'text-yellow-700', badgeBg: 'bg-yellow-100', badgeRing: 'ring-yellow-200', hoverBg: 'hover:bg-yellow-50', cardBg: 'bg-yellow-50', textColor: 'text-yellow-900' },
  orange: { icon: 'text-orange-700', badgeBg: 'bg-orange-100', badgeRing: 'ring-orange-200', hoverBg: 'hover:bg-orange-50', cardBg: 'bg-orange-50', textColor: 'text-orange-900' },
  teal: { icon: 'text-teal-700', badgeBg: 'bg-teal-100', badgeRing: 'ring-teal-200', hoverBg: 'hover:bg-teal-50', cardBg: 'bg-teal-50', textColor: 'text-teal-900' },
  pink: { icon: 'text-pink-700', badgeBg: 'bg-pink-100', badgeRing: 'ring-pink-200', hoverBg: 'hover:bg-pink-50', cardBg: 'bg-pink-50', textColor: 'text-pink-900' },
  indigo: { icon: 'text-indigo-700', badgeBg: 'bg-indigo-100', badgeRing: 'ring-indigo-200', hoverBg: 'hover:bg-indigo-50', cardBg: 'bg-indigo-50', textColor: 'text-indigo-900' },
  cyan: { icon: 'text-cyan-700', badgeBg: 'bg-cyan-100', badgeRing: 'ring-cyan-200', hoverBg: 'hover:bg-cyan-50', cardBg: 'bg-cyan-50', textColor: 'text-cyan-900' },
  lime: { icon: 'text-lime-700', badgeBg: 'bg-lime-100', badgeRing: 'ring-lime-200', hoverBg: 'hover:bg-lime-50', cardBg: 'bg-lime-50', textColor: 'text-lime-900' },
};

// Data
const tools = [
  { category: ['buy_a_home'], name: 'Home affordability calculator', description: 'See what home price range fits your budget and what amount you may qualify to borrow.', href: '/affordability-calculator', icon: 'DollarSign', color: 'blue' },
  { category: ['buy_a_home'], name: 'Mortgage calculator', description: 'Estimate your monthly mortgage payment, including taxes and insurance, before you buy.', href: '/mortgage-Calculator', icon: 'HandCoins', color: 'red' },
  { category: ['refinance'], name: 'Refinance calculator', description: 'Check how refinancing could reduce your monthly payments or overall loan cost.', href: '/refinance-calculator', icon: 'RefreshCw', color: 'green' },
  { category: ['buy_a_home'], name: 'Rent vs buy calculator', description: 'Compare the long-term costs of renting versus owning to find out which suits you best.', href: '/rent-vs-buy-calculator', icon: 'Banknote', color: 'orange' },
  { category: ['buy_a_home', 'refinance'], name: 'Amortization Calculator', description: 'View how each monthly payment divides between principal and interest over time.', href: '/amortization-calculator', icon: 'CalendarDays', color: 'purple' },
  { category: ['refinance'], name: 'Home equity calculator', description: 'Find out how much equity you’ve built in your home and how much value remains owed.', href: '/home-equity-calculator', icon: 'Home', color: 'yellow' },
  { category: ['refinance'], name: 'Mortgage payoff calculator', description: 'Explore how extra payments or refinancing can help you pay off your mortgage sooner.', href: '/mortgage-payoff-calculator', icon: 'CalendarPlus', color: 'teal' },
  { category: ['buy_a_home'], name: 'Down payment calculator', description: 'Determine the cash you’ll need upfront to buy the home you’re considering.', href: '/down-payment-calculator', icon: 'CreditCard', color: 'pink' },
  // { name: 'Buy a home',                    icon: 'Home',        color: 'indigo' },
  // { name: 'Sell a home',                   icon: 'DollarSign',  color: 'cyan' },
  // { name: 'Get home inspection',           icon: 'Home',        color: 'lime' },
];

type Tool = {
  category: []
  name: string;
  description: string;
  icon: keyof typeof ICONS;
  color: keyof typeof COLOR_VARIANTS;
  href?: string; // optional link target
};
<HandCoins />

export const QuickTools: React.FC<{ items?: Tool[] }> = ({ items }) => {
  const data: Tool[] = items ?? (tools as Tool[]);
  const [selectedCalculatorTab, setSelectedCalculatorTab] = useState<string>('all');

  const filteredData: Tool[] =
    selectedCalculatorTab === 'all'
      ? data
      : data.filter((x: any) => x.category.includes(selectedCalculatorTab));

  return (
    <section className="bg-white rounded-3xl px-10 py-10 lg:px-28 lg:py-18 shadow-lg" id='calculators'>
      <div className="container mx-auto flex flex-col">
        <div className="title-wrapper flex flex-col mb-12">
          <h2 className="text-center text-2xl lg:text-5xl font-bold text-gray-900 mb-4 ">
            RateBeat® <br /> Purchase Calculators
          </h2>
          <p className='text-center'>Estimate mortgage payments, check affordability, and plan your home buying budget with ReateBeat’s purchase calculators.</p>
        </div>

        <div className="w-full bg-gray-100 px-8 py-10 rounded-lg mb-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Not sure which calculator to use?
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Answer a few questions and we'll recommend one that matches your
                goals.
              </p>
            </div>
            <button className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
              Get recommendation
            </button>
          </div>
        </div>
        <div className="filter-wrapper flex justify-center mb-12">

          <FilterTabs
            onFilterChange={(filter) => setSelectedCalculatorTab(filter)}
          />
        </div>



        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredData.map(({ name, description, icon, color, href }, idx) => {
            const Icon = ICONS[icon] ?? Home;
            const variant =
              COLOR_VARIANTS[color] ?? COLOR_VARIANTS.blue;

            // Use a button for actions or an anchor for navigation
            const Wrapper: React.ElementType = href ? 'a' : 'button';
            const wrapperProps = href
              ? { href, 'aria-label': name }
              : { type: "button", 'aria-label': name } as const;

            return (
              <Wrapper
                key={idx}
                {...wrapperProps}
                className={[
                  'group relative w-full rounded-2xl p-5',
                  variant.cardBg, variant.hoverBg, 'focus:bg-gray-100',
                  'transition-all duration-200 cursor-pointer',
                  'ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300',
                  'outline-none focus:outline-none',
                  'flex flex-col justify-between min-h-[132px]',
                ].join(' ')}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Icon className={['w-6 h-6', variant.icon].join(' ')} />
                </div>
                <div className="title-wrapper flex flex-col">

                  <p className={['text-left text-base md:text-lg font-medium leading-snug', variant.textColor].join(' ')}>
                    {name}
                  </p>
                  <p className={`text-left ${variant.textColor}`}>{description}</p>
                </div>

                <div className={`mt-4 self-end`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center  ${variant.badgeBg}`}>
                    <ChevronRight className={`w-5 h-5 text-gray-600 group-hover:scale-125 transition-transform ${variant.textColor}`} />
                  </div>
                </div>


              </Wrapper>
            );
          })}
        </div>
      </div >
    </section>
  );
};
