import React from 'react';
import {
  ChevronRight,
  Calculator,
  Home,
  DollarSign,
  Percent,
  RefreshCw,
  LucideIcon,
} from 'lucide-react';

// Map icon keys to Lucide components
const ICONS: Record<string, LucideIcon> = {
  Home,
  Calculator,
  Percent,
  DollarSign,
  RefreshCw,
};

// Color variants with *static* Tailwind classes (avoids purge/JIT issues)
const COLOR_VARIANTS: Record<
  string,
  { icon: string; badgeBg: string; badgeRing: string; hoverBg: string; cardBg: string; textColor: string }
> = {
  blue:   { icon: 'text-blue-700',   badgeBg: 'bg-blue-100',   badgeRing: 'ring-blue-200',   hoverBg: 'hover:bg-blue-50',   cardBg: 'bg-blue-50',   textColor: 'text-blue-900' },
  red:    { icon: 'text-red-700',    badgeBg: 'bg-red-100',    badgeRing: 'ring-red-200',    hoverBg: 'hover:bg-red-50',    cardBg: 'bg-red-50',    textColor: 'text-red-900' },
  green:  { icon: 'text-green-700',  badgeBg: 'bg-green-100',  badgeRing: 'ring-green-200',  hoverBg: 'hover:bg-green-50',  cardBg: 'bg-green-50',  textColor: 'text-green-900' },
  purple: { icon: 'text-purple-700', badgeBg: 'bg-purple-100', badgeRing: 'ring-purple-200', hoverBg: 'hover:bg-purple-50', cardBg: 'bg-purple-50', textColor: 'text-purple-900' },
  yellow: { icon: 'text-yellow-700', badgeBg: 'bg-yellow-100', badgeRing: 'ring-yellow-200', hoverBg: 'hover:bg-yellow-50', cardBg: 'bg-yellow-50', textColor: 'text-yellow-900' },
  orange: { icon: 'text-orange-700', badgeBg: 'bg-orange-100', badgeRing: 'ring-orange-200', hoverBg: 'hover:bg-orange-50', cardBg: 'bg-orange-50', textColor: 'text-orange-900' },
  teal:   { icon: 'text-teal-700',   badgeBg: 'bg-teal-100',   badgeRing: 'ring-teal-200',   hoverBg: 'hover:bg-teal-50',   cardBg: 'bg-teal-50',   textColor: 'text-teal-900' },
  pink:   { icon: 'text-pink-700',   badgeBg: 'bg-pink-100',   badgeRing: 'ring-pink-200',   hoverBg: 'hover:bg-pink-50',   cardBg: 'bg-pink-50',   textColor: 'text-pink-900' },
  indigo: { icon: 'text-indigo-700', badgeBg: 'bg-indigo-100', badgeRing: 'ring-indigo-200', hoverBg: 'hover:bg-indigo-50', cardBg: 'bg-indigo-50', textColor: 'text-indigo-900' },
  cyan:   { icon: 'text-cyan-700',   badgeBg: 'bg-cyan-100',   badgeRing: 'ring-cyan-200',   hoverBg: 'hover:bg-cyan-50',   cardBg: 'bg-cyan-50',   textColor: 'text-cyan-900' },
  lime:   { icon: 'text-lime-700',   badgeBg: 'bg-lime-100',   badgeRing: 'ring-lime-200',   hoverBg: 'hover:bg-lime-50',   cardBg: 'bg-lime-50',   textColor: 'text-lime-900' },
};

// Data
const tools = [
  { name: 'Home affordability calculator', icon: 'Home',        color: 'blue' },
  { name: 'Mortgage calculator',           icon: 'Calculator',  color: 'red' },
  { name: 'Free mortgage calculator',      icon: 'Calculator',  color: 'green' },
  { name: 'Mortgage calculator with taxes',icon: 'Percent',     color: 'purple' },
  { name: 'Mortgage calculator with PMI',  icon: 'DollarSign',  color: 'yellow' },
  { name: 'Rent vs buy calculator',        icon: 'RefreshCw',   color: 'orange' },
  { name: 'HELOC payment calculator',      icon: 'DollarSign',  color: 'teal' },
  { name: 'HELOC vs cash-out refinance',   icon: 'Percent',     color: 'pink' },
  { name: 'Buy a home',                    icon: 'Home',        color: 'indigo' },
  { name: 'Sell a home',                   icon: 'DollarSign',  color: 'cyan' },
  { name: 'Get home inspection',           icon: 'Home',        color: 'lime' },
];

type Tool = {
  name: string;
  icon: keyof typeof ICONS;
  color: keyof typeof COLOR_VARIANTS;
  href?: string; // optional link target
};

export const QuickTools: React.FC<{ items?: Tool[] }> = ({ items }) => {
  const data: Tool[] = items ?? (tools as Tool[]);

  return (
    <section className="bg-white rounded-3xl px-10 py-10 lg:px-28 lg:py-18 shadow-lg">
<h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-900 mb-8 lg:mb-12">
        Calculators &amp; Tools
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map(({ name, icon, color, href }, idx) => {
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
                'ring-1 ring-transparent hover:ring-gray-200 focus:ring-gray-300',
                'outline-none focus:outline-none',
                'flex flex-col justify-between min-h-[132px]',
              ].join(' ')}
            >
              <div className="flex items-start gap-4">
                <Icon className={['w-6 h-6', variant.icon].join(' ')} />

                <p className={['text-left text-base md:text-lg font-medium leading-snug', variant.textColor].join(' ')}>
                  {name}
                </p>
              </div>

              <div className="mt-4 self-end">
                <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* subtle bottom gradient highlight on hover */}
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform bg-gray-300 rounded-full" />
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};
