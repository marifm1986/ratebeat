import React, { useState } from 'react'
import { Menu, X, Phone, ChevronRight, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
interface NavigationProps {
  'data-id'?: string,
  onEvent?: (data: any) => void;
}
export const Header: React.FC<NavigationProps> = ({
  'data-id': dataId,
  onEvent,

}) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null)
  const [activeMobileTab, setActiveMobileTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<{
    [key: string]: string
  }>({
    Buy: 'Buy a home',
    Refinance: 'Refinance a home',
    Rates: 'Purchase rates',
    'Loan options': 'All home loans',
  })

  // Helper function to check if a link is active
  const isLinkActive = (href: string) => {
    if (href === '#') return false
    return location.pathname === href || location.pathname.startsWith(href + '/')
  }
  const navigationItems = [
    {
      label: 'Buy',
      href: '#',
      dropdown: {
        tabs: ['Buy a home', 'Calculators', 'Learn'],
        content: {
          'Buy a home': {
            mainLink: {
              label: 'Get started',
              href: '/purchase/get-started',
            },
            links: [
              {
                label: 'Purchase loan options',
                href: '/home-loans',
              },
              {
                label: 'VA & military purchase resources',
                href: '/purchase/va-military-homebuyer',
              },
              // {
              //   label: 'Chat',
              //   href: '/chat',
              // },
            ],
          },
          Calculators: {
            mainLink: {
              label: 'All calculators',
              href: '/#calculators',
            },
            links: [
              {
                label: 'Home affordability calculator',
                href: '/affordability-calculator',
              },
              {
                label: 'Mortgage calculator',
                href: '/mortgage-Calculator',
              },

              {
                label: 'Rent vs. buy calculator',
                href: '/rent-vs-buy-calculator',
              },
              {
                label: 'Amortization calculator',
                href: '/amortization-calculator',
              },
              {
                label: 'Down payment calculator',
                href: '/down-payment-calculator',
              },
            ],
          },
          // Español: {
          //   mainLink: {
          //     label: 'Compra o vende una casa',
          //     href: '/es',
          //   },
          //   links: [
          //     {
          //       label:
          //         'Cómo aumentar el valor de la vivienda: Una guía de 4 pasos',
          //       href: '/es/learn/como-aumentar-el-valor-de-la-vivienda',
          //     },
          //     {
          //       label:
          //         'Casa inicial o casa definitiva: ¿Qué es lo mejor para ti?',
          //       href: '/es/learn/casa-inicial-o-casa-definitiva',
          //     },
          //     {
          //       label:
          //         '¿Cómo reparar tu puntuación de crédito cuando quieres comprar una casa?',
          //       href: '/es/learn/como-reparar-el-credito',
          //     },
          //   ],
          // },
          Learn: {
            mainLink: {
              label: 'All articles',
              href: '/learn',
            },
            links: [
              {
                label: 'Home buying process',
                href: '/learn/home-buying',
              },
              {
                label: 'First-time home buyers',
                href: '/learn/first-time-home-buyers',
              },
              {
                label: 'Moving tips',
                href: '/learn/moving-tips',
              },
              {
                label: 'Preparing to buy',
                href: '/learn/preparing-to-buy',
              },
              {
                label: 'Homeownership',
                href: '/learn/homeownership',
              },
            ],
          },
        },
      },
    },
    {
      label: 'Refinance',
      href: '#',
      dropdown: {
        tabs: ['Refinance a home', 'Calculators', 'Learn'],
        content: {
          'Refinance a home': {
            mainLink: {
              label: 'Get started',
              href: '/refinance/get-started',
            },
            links: [
              {
                label: 'Refinance loan options',
                href: '/home-loans',
              },
              {
                label: 'VA & military refi resources',
                href: '/refinance/va-military-refinance',
              },
              // {
              //   label: 'Chat',
              //   href: '/chat',
              // },

              // {
              //   label: 'Chat',
              //   href: '/chat',
              // },
            ],
          },
          Calculators: {
            mainLink: {
              label: 'All calculators',
              href: '/#calculators',
            },
            links: [
              {
                label: 'Refinance Calculator',
                href: '/refinance-calculator',
              },
              {
                label: 'Amortization calculator',
                href: '/amortization-calculator',
              },
              {
                label: 'Mortgage Payoff Calculator',
                href: '/mortgage-payoff-calculator',
              },
              {
                label: 'Home Equity calculator',
                href: '/home-equity-calculator',
              },
            ],
          },
          Learn: {
            mainLink: {
              label: 'All articles',
              href: '/learn/refinancing',
            },
            links: [
              {
                label: 'Refinancing guide',
                href: '/learn/refinancing-guide',
              },
              {
                label: 'Types of refinancing',
                href: '/learn/types-of-refinancing',
              },
              {
                label: 'Equity and home value',
                href: '/learn/equity-and-home-value',
              },
              {
                label: 'Debt consolidation',
                href: '/learn/debt-consolidation-rising-rates',
              },
            ],
          },
          Español: {
            mainLink: {
              label: 'Refinanciar una casa',
              href: '/es',
            },
            links: [
              {
                label:
                  'Refinanciación de préstamos FHA: Requisitos y beneficios',
                href: '/es/learn/refinanciamiento-fha',
              },
              {
                label: '10 preguntas que hacer al refinanciar',
                href: '/es/learn/10-preguntas-que-hacer-al-refinanciar',
              },
              {
                label: '¿Qué es un beneficio neto tangible?',
                href: '/es/learn/beneficios-netos-tangibles',
              },
            ],
          },
        },
      },
    },
    {
      label: 'Rates',
      href: '#',
      dropdown: {
        tabs: ['Purchase rates', 'Refinance rates', 'Rate updates'],
        content: {
          'Purchase rates': {
            mainLink: {
              label: 'All purchase rates',
              href: '/mortgage-rates',
            },
            links: [
              {
                label: '30-year mortgage rates',
                href: '/mortgage-rates/30-year-mortgage-rates',
              },
              {
                label: 'FHA loan rates',
                href: '/mortgage-rates/fha-loan-rates',
              },
              {
                label: 'VA loan rates',
                href: '/mortgage-rates/va-loan-rates',
              },
              {
                label: 'Jumbo loan rates',
                href: '/mortgage-rates/jumbo-loan-rates',
              },
            ],
          },
          'Refinance rates': {
            mainLink: {
              label: 'All refinance rates',
              href: '/refinance-rates',
            },
            links: [
              {
                label: '30-year refinance rates',
                href: '/refinance-rates/30-year-refinance-rates',
              },
              {
                label: 'FHA refinance rates',
                href: '/refinance-rates/fha-refinance-rates',
              },
              {
                label: 'VA refinance rates',
                href: '/refinance-rates/va-refinance-rates',
              },
              {
                label: 'Jumbo refinance rates',
                href: '/refinance-rates/jumbo-refinance-rates',
              },
            ],
          },
          'Rate updates': {
            mainLink: {
              label: 'Rate updates',
              href: '/rate-updates',
            },
            links: [
              {
                label: 'How the federal funds rate affects mortgage rates',
                href: '/learn/federal-funds-rate',
              },
              {
                label: 'How a fed rate drop affects home buyers and sellers',
                href: '/learn/fed-rate-drop',
              },
              {
                label: 'Should I lock in my mortgage rate today?',
                href: '/learn/should-i-lock-my-mortgage-rate-today',
              },
            ],
          },
        },
      },
    },
    {
      label: 'Loan options',
      href: '#',
      dropdown: {
        tabs: ['All home loans'],
        content: {
          'All home loans': {
            mainLink: {
              label: 'All home loans',
              href: '/home-loans',
            },
            links: [
              {
                label: '15-year fixed',
                href: '/15-year-fixed-rate-mortgage',
              },
              {
                label: '30-year fixed',
                href: '/30-year-fixed-rate-mortgage',
              },
              {
                label: 'Adjustable-rate mortgage (ARM)',
                href: '/adjustable-rate-mortgage',
              },
              {
                label: 'Bridge loan',
                href: '/bridge-loan',
              },
              {
                label: 'Cash-out refinance',
                href: '/refinance-cash-out',
              },
              {
                label: 'FHA loan',
                href: '/fha-loan',
              },
              {
                label: 'Home Equity Loan',
                href: '/home-equity-loan',
              },
              {
                label: 'HomeReady® and Home Possible®',
                href: '/home-ready-and-home-possible',
              },
              {
                label: 'Jumbo Smart',
                href: '/jumbo-loan',
              },
              {
                label: 'ONE+ by RateBeat®',
                href: '/one-plus',
              },
              {
                label: 'VA loan',
                href: '/va-loan',
              },
            ],
          },
        },
      },
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ]
  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label)
  }
  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }
  const handleTabClick = (menuLabel: string, tabLabel: string) => {
    setActiveTab((prev) => ({
      ...prev,
      [menuLabel]: tabLabel,
    }))
  }

  const handleOpenBuyingModal = () => {
    if (onEvent) {
      onEvent({ type: 'HEADER_CLICK', payload: true });
    }


  }




  return (
    <header
      className="bg-white flex items-center shadow-sm border-b sticky top-0 z-50 w-full h-[80px] lg:h-[104px]"
      data-id={dataId}
    >
      <div className="px-4 lg:px-12 w-full">
        <div className="flex items-center gap-4 lg:gap-12">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={`${import.meta.env.BASE_URL}ratebeat-logo.png`} 
                alt="RateBeat Logo"
                width={80}
                className="h-auto lg:w-[100px]" 
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item: any) => {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className="px-4 py-2 font-medium transition-colors flex items-center h-20 relative text-gray-900 hover:text-orange-600"
                  >
                    {item.label}
                  </Link>
                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  // added hidden to the div below for production deploy
                  <div className="absolute top-full left-0 pt-0 bg-white rounded-3xl shadow-xl border min-w-[800px] z-50">
                    <div className="flex">
                      {/* Tabs */}
                      <div className="p-6">
                        <div className="space-y-2">
                          {item.dropdown.tabs.map((tab: any) => (
                            <button
                              key={tab}
                              onClick={() => handleTabClick(item.label, tab)}
                              className={`w-48 text-left px-6 py-4 rounded-lg font-medium transition-colors ${activeTab[item.label] === tab ? 'bg-orange-50 text-orange-700 border-l-4 border-orange-500' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
                            >
                              {tab}
                            </button>
                          ))}
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1 p-6 border-l border-gray-100">

                        {item.dropdown.content[activeTab[item.label]] && (
                          <div className="min-w-80">
                            <Link
                              to={
                                item.dropdown.content[activeTab[item.label]]
                                  .mainLink.href
                              }
                              className="inline-flex items-center text-gray-900 font-medium hover:text-orange-600 py-4 group"
                            >
                              {
                                item.dropdown.content[activeTab[item.label]]
                                  .mainLink.label
                              }
                              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                            <p className="text-xs text-gray-500 uppercase tracking-wide mt-4 mb-4">
                              Popular
                            </p>
                            <ul className="space-y-2">
                              {item.dropdown.content[
                                activeTab[item.label]
                              ].links.map((link: any) => {
                                const linkActive = isLinkActive(link.href)
                                return (
                                  <li key={link.label} className="py-1">
                                    <Link
                                      to={link.href}
                                      className={`font-medium block px-3 py-2 rounded-lg transition-colors ${
                                        linkActive
                                          ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-500'
                                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                                      }`}
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        )}
                      </div>
                      {/* Promo section */}
                      <div className="min-w-[385px] p-8 bg-gray-50 rounded-r-3xl">
                        {item.label === 'Buy' || item.label === 'Rates' ? (
                          <>
                            <img
                              src="https://prod.rockmedialibrary.com/api/public/content/R4M-NavPromoMenu-RentRewards?v=1f5ee45c"
                              alt="RentRewards promotion"
                              className="w-full mb-4 rounded-lg"
                            />
                            <p className="text-gray-900 text-lg font-medium mb-2">
                              Turn your monthly rent into a head start on a home
                              of your own
                            </p>
                            {/* <Link
                              to="/"
                              className="text-gray-900 font-medium underline hover:no-underline"
                            >
                              Learn about RentRewards
                            </Link> */}
                          </>
                        ) : (
                          <>
                            <img
                              src="https://prod.rockmedialibrary.com/api/public/content/HELNavPromo?v=1887ccee"
                              alt="Home Equity Loan promotion"
                              className="w-full mb-4 rounded-lg"
                            />
                            <p className="text-gray-900 text-lg font-medium mb-2">
                              Get cash from your home's equity while keeping
                              your mortgage rate
                            </p>
                            <Link
                              to="/home-equity-loan"
                              className="text-gray-900 font-medium underline hover:no-underline"
                            >
                              Learn about Home Equity Loans
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
            })}
          </nav>
          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-7 ml-auto">
            <Link
              to="tel:+18778777575"
              className="flex items-center text-gray-900 font-medium hover:text-orange-600 transition-colors"
            >
              (877) 877 7575
              <Phone className="ml-2" size={20} />
            </Link>
            {/*  <a
              href="/sign-in"
              className="flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
            >
              Sign in
              <User className="ml-2" size={20} />
            </a> */}
            <button
              onClick={handleOpenBuyingModal}
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Apply now
            </button>
          </div>
          {/* Mobile apply button */}
          <button
            onClick={handleOpenBuyingModal}
            className="lg:hidden ml-auto bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex-shrink-0"
          >
            Apply
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden fixed inset-0 top-[80px] bg-white z-40 overflow-y-auto pb-32">
            <div className="py-2">
              {navigationItems.map((item) => {
                return (
                  <div key={item.label} className="border-b border-gray-100">
                    {item.dropdown ? (
                      <div>
                        {/* Main Category Button */}
                        <button
                          onClick={() => {
                            setActiveMobileSection(activeMobileSection === item.label ? null : item.label);
                            setActiveMobileTab(null);
                          }}
                          className={`w-full flex items-center justify-between px-6 py-4 font-semibold transition-colors ${
                            activeMobileSection === item.label
                              ? 'text-orange-700 bg-orange-50' 
                              : 'text-gray-900 hover:bg-orange-50 hover:text-orange-600'
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            size={20}
                            className={`transform transition-transform ${
                              activeMobileSection === item.label ? 'rotate-180 text-orange-600' : ''
                            }`}
                          />
                        </button>

                      {/* Subcategories/Tabs */}
                      {activeMobileSection === item.label && (
                        <div className="bg-gray-50 py-2">
                          {item.dropdown.tabs.map((tab: string) => (
                            <div key={tab} className="border-b border-gray-200 last:border-b-0">
                              <button
                                onClick={() => setActiveMobileTab(activeMobileTab === tab ? null : tab)}
                                className={`w-full text-left px-6 py-3 font-medium transition-colors flex items-center justify-between ${
                                  activeMobileTab === tab
                                    ? 'text-orange-700 bg-white border-l-4 border-orange-500'
                                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                }`}
                              >
                                {tab}
                                <ChevronDown
                                  size={18}
                                  className={`transform transition-transform ${
                                    activeMobileTab === tab ? 'rotate-180 text-orange-600' : ''
                                  }`}
                                />
                              </button>

                              {/* Tab Content/Links */}
                              {activeMobileTab === tab && (() => {
                                const content = item.dropdown.content[tab as keyof typeof item.dropdown.content];
                                if (!content) return null;

                                return (
                                  <div className="bg-white px-4 py-3">
                                    {/* Main Link */}
                                    <Link
                                      to={content.mainLink.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center text-orange-700 font-semibold py-2 mb-3 border-b border-orange-200 hover:text-orange-800 group"
                                    >
                                      {content.mainLink.label}
                                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                                    </Link>

                                    {/* Popular Links */}
                                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                                      Popular
                                    </p>
                                    <ul className="space-y-1">
                                      {content.links.map((link: { label: string; href: string }) => {
                                        const linkActive = isLinkActive(link.href)
                                        return (
                                          <li key={link.label}>
                                            <Link
                                              to={link.href}
                                              onClick={() => setIsMobileMenuOpen(false)}
                                              className={`font-medium block py-2 px-2 rounded text-sm transition-colors ${
                                                linkActive
                                                  ? 'text-orange-600 bg-orange-100 border-l-4 border-orange-500'
                                                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                                              }`}
                                            >
                                              {link.label}
                                            </Link>
                                          </li>
                                        )
                                      })}
                                    </ul>
                                  </div>
                                );
                              })()}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full flex items-center justify-between px-6 py-4 font-semibold transition-colors text-gray-900 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {item.label}
                      <ChevronRight size={20} />
                    </Link>
                  )}
                </div>
                )
              })}
            </div>

            {/* Fixed Bottom Actions */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-6 space-y-4 shadow-lg">
              <Link
                to="tel:8778777575"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center text-gray-900 font-medium hover:text-orange-600 transition-colors"
              >
                <Phone className="mr-2" size={20} />
                (877) 877-7575
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleOpenBuyingModal();
                }}
                className="block w-full bg-gray-900 text-white text-center py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Apply now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
