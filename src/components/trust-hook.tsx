import { ChartNoAxesCombined, Key, Repeat2, Wallet } from 'lucide-react';

import {
    Calculator,
    DollarSign,
    Home,
    LucideIcon,
    Percent,
    RefreshCw,
} from 'lucide-react';
import { useState } from 'react';
import { IframeModal } from './IframeModal';

// Map icon keys to Lucide components
const ICONS: Record<string, LucideIcon> = {
    Wallet,
    Home,
    Repeat2,
    RefreshCw,
    Key,
    ChartNoAxesCombined

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
    { name: 'Monthly Payment', color: 'green', icon: 'Wallet', href: 'https://mortgage-payment-calculator-8566-nm.secure-clix.com/' },
    { name: 'Affordability', color: 'red', icon: 'Home', href: 'https://affordability-calculator-purchase-funnel-8566-nm.secure-clix.com' },
    { name: 'Refinance Savings', color: 'blue', icon: 'Repeat2', href: 'https://nmann-refinance-site-8566-mRX46H3p.itclix.com' },
    { name: 'Compare Rates', color: 'pink', icon: 'ChartNoAxesCombined', href: 'https://comparison-rate-shopping-8566-nm.secure-clix.com' },
    { name: 'Rent vs Buy', color: 'lime', icon: 'Key', href: 'https://rent-vs-buy-8566-nm.secure-clix.com' },
];

type Tool = {
    name: string;
    icon: string;
    color: keyof typeof COLOR_VARIANTS;
    href?: string; // optional link target
};
export const TrustAndHook: React.FC<{ items?: Tool[] }> = ({ items }) => {
    const data: Tool[] = items ?? (tools as Tool[]);
    const [isBuyingModalOpen, setIsBuyingModalOpen] = useState(false);
    const [modalData, setModalData] = useState<{
        title: string;
        iframeUrl: string;
        isOpen: boolean;
    }>({
        title: '',
        iframeUrl: '',
        isOpen: false,
    });


    const openBuyingModal = (title: any, iframeUrl: any) => {
        setModalData({
            title: title,
            iframeUrl: iframeUrl,
            isOpen: true,
        });
        setIsBuyingModalOpen(true)
    };

    const showCalculator = () => {
    }
    return (
        <section className="bg-white rounded-3xl px-10 py-10 lg:px-28 lg:py-18 shadow-lg">
            <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-900 mb-8 lg:mb-12">
                Your Home. Your Rate. Your Choice
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {data.map(({ name, icon, color, href }, idx) => {
                    const Icon = ICONS[icon] ?? Home;

                    const variant =
                        COLOR_VARIANTS[color] ?? COLOR_VARIANTS.blue;

                    // Use a button for actions or an anchor for navigation
                    // const Wrapper: React.ElementType = href ? 'a' : 'button';
                    const wrapperProps = href
                        ? { href, 'aria-label': name, target: '_blank' }
                        : { type: "button", 'aria-label': name } as const;

                    return (
                        <div
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
                            onClick={() => openBuyingModal(name, href)}
                        >
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Icon className={['w-8 h-8', variant.icon].join(' ')} />
                                <p className={['text-left text-base md:text-lg font-medium leading-snug'].join(' ')}>
                                    {name}
                                </p>
                            </div>

                            {/* subtle bottom gradient highlight on hover */}
                        </div>
                    );
                })}
            </div>
            {
                modalData.isOpen ? <IframeModal
                    isOpen={isBuyingModalOpen}
                    onClose={() => setIsBuyingModalOpen(false)}
                    iframeUrl={modalData.iframeUrl}
                    title={modalData.title}
                /> : null
            }
        </section>
    );
};
