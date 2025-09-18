import React, { useState } from 'react'
import { Menu, X, Phone, User, ChevronRight, ChevronDown } from 'lucide-react'
interface NavigationProps {
  'data-id'?: string
}
export const Header: React.FC<NavigationProps> = ({
  'data-id': dataId,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<{
    [key: string]: string
  }>({
    Buy: 'Buy a home',
    Refinance: 'Refinance a home',
    Rates: 'Purchase rates',
    'Loan options': 'All home loans',
  })
  const navigationItems = [
    {
      label: 'Buy',
      href: '#',
      dropdown: {
        tabs: ['Buy a home', 'Calculators', 'Español', 'Learn'],
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
              {
                label: 'Chat',
                href: '/chat',
              },
            ],
          },
          Calculators: {
            mainLink: {
              label: 'All calculators',
              href: '/calculators',
            },
            links: [
              {
                label: 'Home affordability calculator',
                href: '/calculators/home-affordability-calculator',
              },
              {
                label: 'Mortgage calculator',
                href: '/calculators/mortgage-calculator',
              },
              {
                label: 'Rent vs. buy calculator',
                href: '/calculators/rent-vs-buy',
              },
              {
                label: 'Amortization calculator',
                href: '/calculators/amortization-calculator',
              },
              {
                label: 'Down payment calculator',
                href: '/calculators/down-payment-calculator',
              },
            ],
          },
          Español: {
            mainLink: {
              label: 'Compra o vende una casa',
              href: '/es',
            },
            links: [
              {
                label:
                  'Cómo aumentar el valor de la vivienda: Una guía de 4 pasos',
                href: '/es/learn/como-aumentar-el-valor-de-la-vivienda',
              },
              {
                label:
                  'Casa inicial o casa definitiva: ¿Qué es lo mejor para ti?',
                href: '/es/learn/casa-inicial-o-casa-definitiva',
              },
              {
                label:
                  '¿Cómo reparar tu puntuación de crédito cuando quieres comprar una casa?',
                href: '/es/learn/como-reparar-el-credito',
              },
            ],
          },
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
        tabs: ['Refinance a home', 'Calculators', 'Learn', 'Español'],
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
              {
                label: 'Chat',
                href: '/chat',
              },
            ],
          },
          Calculators: {
            mainLink: {
              label: 'All calculators',
              href: '/refinance-calculators',
            },
            links: [
              {
                label: 'Refinance calculator',
                href: '/calculators/refinance-calculator',
              },
              {
                label: 'Mortgage payoff calculator',
                href: '/calculators/mortgage-payoff-calculator',
              },
              {
                label: 'Amortization calculator',
                href: '/calculators/amortization-calculator',
              },
              {
                label: 'Home equity calculator',
                href: '/calculators/home-equity-calculator',
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
                href: '/home-loans/15-year-mortgage',
              },
              {
                label: '30-year fixed',
                href: '/home-loans/30-year-mortgage',
              },
              {
                label: 'Adjustable-rate mortgage (ARM)',
                href: '/home-loans/adjustable-rate-mortgage',
              },
              {
                label: 'Bridge loan',
                href: '/home-loans/bridge-loan',
              },
              {
                label: 'Cash-out refinance',
                href: '/home-loans/refinance-cash-out',
              },
              {
                label: 'FHA loan',
                href: '/home-loans/fha-loan',
              },
              {
                label: 'Home Equity Loan',
                href: '/home-loans/home-equity-loan',
              },
              {
                label: 'HomeReady® and Home Possible®',
                href: '/home-loans/homeready-and-home-possible',
              },
              {
                label: 'Jumbo Smart',
                href: '/home-loans/jumbo-loan',
              },
              {
                label: 'ONE+ by Rocket Mortgage®',
                href: '/home-loans/one-plus',
              },
              {
                label: 'VA loan',
                href: '/home-loans/va-loan',
              },
            ],
          },
        },
      },
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
  return (
    <header
      className="bg-white flex items-center shadow-sm border-b sticky top-0 z-50 w-full h-[104px]"
      data-id={dataId}
    >
      <div className="px-6 lg:px-12 w-full">
        <div className="flex items-center gap-12">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Logo */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <a href="/" className="flex items-center">
              <img
                src="./ratebeat-logo.png"
                alt="Rocket Mortgage Logo"
                width={100}
                className="h-auto"
              />
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item: any) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 text-gray-900 font-medium hover:text-gray-700 transition-colors flex items-center h-20"
                >
                  {item.label}
                </a>
                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-0 bg-white rounded-3xl shadow-xl border min-w-[800px] z-50">
                    <div className="flex">
                      {/* Tabs */}
                      <div className="p-6">
                        <div className="space-y-2">
                          {item.dropdown.tabs.map((tab: any) => (
                            <button
                              key={tab}
                              onClick={() => handleTabClick(item.label, tab)}
                              className={`w-48 text-left px-6 py-4 rounded-lg font-medium transition-colors ${activeTab[item.label] === tab ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
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
                            <a
                              href={
                                item.dropdown.content[activeTab[item.label]]
                                  .mainLink.href
                              }
                              className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 py-4"
                            >
                              {
                                item.dropdown.content[activeTab[item.label]]
                                  .mainLink.label
                              }
                              <ChevronRight className="ml-2" size={20} />
                            </a>
                            <p className="text-xs text-gray-500 uppercase tracking-wide mt-4 mb-4">
                              Popular
                            </p>
                            <ul className="space-y-2">
                              {item.dropdown.content[
                                activeTab[item.label]
                              ].links.map((link: any) => (
                                <li key={link.label} className="py-1">
                                  <a
                                    href={link.href}
                                    className="text-gray-700 hover:text-gray-900 font-medium block"
                                  >
                                    {link.label}
                                  </a>
                                </li>
                              ))}
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
                            <a
                              href="https://www.rocketmortgage.com/rent-rewards"
                              className="text-gray-900 font-medium underline hover:no-underline"
                            >
                              Learn about RentRewards
                            </a>
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
                            <a
                              href="/home-loans/home-equity-loan"
                              className="text-gray-900 font-medium underline hover:no-underline"
                            >
                              Learn about Home Equity Loans
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-7 ml-auto">
            <a
              href="tel:8884528179"
              className="flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
            >
              (888) 452-8179
              <Phone className="ml-2" size={20} />
            </a>
            <a
              href="/sign-in"
              className="flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
            >
              Sign in
              <User className="ml-2" size={20} />
            </a>
            <a
              href="/apply"
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Apply now
            </a>
          </div>
          {/* Mobile sign in button */}
          <a
            href="/sign-in"
            className="lg:hidden p-2 rounded-full hover:bg-gray-100"
            aria-label="Sign in"
          >
            <User size={24} />
          </a>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden border-t bg-white py-4">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <button className="w-full flex items-center justify-between px-3 py-4 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
                    {item.label}
                    <ChevronRight size={20} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-6 space-y-4">
              <a
                href="tel:8884528179"
                className="flex items-center justify-center text-gray-900 font-medium"
              >
                <Phone className="mr-2" size={20} />
                (888) 452-8179
              </a>
              <a
                href="/apply"
                className="block w-full bg-gray-900 text-white text-center py-4 rounded-full font-medium"
              >
                Apply now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
