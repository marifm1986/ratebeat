import { ChevronDownIcon, ChevronUpIcon, InfoIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
// Credit tier type
type CreditTier = '760+' | '720+' | '680–719' | '640–679' | '≤639'
type ProductType = 'Cash-out' | 'HELOC'
// Max CLTV (Combined Loan-to-Value) ratios by credit tier
const MAX_CLTV: Record<CreditTier, number> = {
    '760+': 0.85,
    '720+': 0.8,
    '680–719': 0.75,
    '640–679': 0.7,
    '≤639': 0.65,
}
const HomeEquityCalculator: React.FC = () => {
    // State variables
    const [homeValue, setHomeValue] = useState<number>(0)
    const [mortgageOwed, setMortgageOwed] = useState<number>(0)
    const [creditTier, setCreditTier] = useState<CreditTier>('720+')
    const [showAdvanced, setShowAdvanced] = useState<boolean>(false)
    const [closingCostPct, setClosingCostPct] = useState<number>(2.0)
    const [product, setProduct] = useState<ProductType>('Cash-out')
    const [isCalculated, setIsCalculated] = useState<boolean>(false)
    const [autoCalc, setAutoCalc] = useState<boolean>(false)
    // Result values
    const [equity, setEquity] = useState<number>(0)
    const [ltv, setLtv] = useState<number>(0)
    const [borrowingPower, setBorrowingPower] = useState<number>(0)
    const [hasNegativeEquity, setHasNegativeEquity] = useState<boolean>(false)
    // Animation ref for the equity value
    const equityValueRef = useRef<HTMLDivElement>(null)
    const resultsRef = useRef<HTMLDivElement>(null)
    // Helper function to format currency
    const fmtUSD = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value)
    }
    // Helper function to parse currency input
    const parseUSD = (value: string): number => {
        return parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0
    }
    // Form validation
    const isFormValid = homeValue > 0 && mortgageOwed >= 0
    // Calculate equity and borrowing power
    const calculateResults = () => {
        // Calculate basic equity
        const calculatedEquity = Math.max(homeValue - mortgageOwed, 0)
        setEquity(calculatedEquity)
        // Calculate LTV
        const calculatedLtv = homeValue > 0 ? mortgageOwed / homeValue : 0
        setLtv(calculatedLtv)
        // Check for negative equity
        setHasNegativeEquity(mortgageOwed > homeValue)
        // Calculate borrowing power
        let targetCLTV = MAX_CLTV[creditTier]
        let closingCosts = 0
        if (product === 'Cash-out') {
            const maxSecured = homeValue * targetCLTV
            const theoreticalNewLoan = maxSecured
            const cashOutGross = Math.max(theoreticalNewLoan - mortgageOwed, 0)
            closingCosts = (closingCostPct / 100) * cashOutGross
            const cashOutNet = Math.max(cashOutGross - closingCosts, 0)
            setBorrowingPower(cashOutNet)
        } else {
            // HELOC calculation
            targetCLTV = Math.min(MAX_CLTV[creditTier] + 0.05, 0.9)
            const maxSecured = homeValue * targetCLTV
            const theoreticalNewLoan = maxSecured
            const cashOutGross = Math.max(theoreticalNewLoan - mortgageOwed, 0)
            setBorrowingPower(cashOutGross)
        }
    }
    // Handle calculate button click
    const handleCalculate = () => {
        if (isFormValid) {
            calculateResults()
            setIsCalculated(true)
            setAutoCalc(true)
            // Scroll to results for accessibility
            if (resultsRef.current) {
                resultsRef.current.scrollIntoView({
                    behavior: 'smooth',
                })
            }
            // Animate the equity value
            if (equityValueRef.current) {
                equityValueRef.current.style.opacity = '0'
                setTimeout(() => {
                    if (equityValueRef.current) {
                        equityValueRef.current.style.opacity = '1'
                        equityValueRef.current.style.transition = 'opacity 150ms ease-in'
                    }
                }, 50)
            }
        }
    }
    // Auto-calculate when inputs change (after first calculation)
    useEffect(() => {
        if (autoCalc && isFormValid) {
            calculateResults()
        }
    }, [homeValue, mortgageOwed, creditTier, product, closingCostPct, autoCalc])
    // Handle input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target
        switch (name) {
            case 'homeValue':
                setHomeValue(parseUSD(value))
                break
            case 'mortgageOwed':
                setMortgageOwed(parseUSD(value))
                break
            case 'creditTier':
                setCreditTier(value as CreditTier)
                break
            case 'closingCostPct':
                setClosingCostPct(Math.max(parseFloat(value) || 0, 0))
                break
            case 'product':
                setProduct(value as ProductType)
                break
        }
    }
    return (
        <>
            <div className="max-w-[1200px] mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left column - Input form */}
                <div className="rounded-3xl bg-[#F6F7F8] p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                        Home equity calculator
                    </h1>
                    <p className="text-gray-700 mb-8">
                        Discover how much cash you have in your home and ways you can access
                        it.
                    </p>
                    {/* Home value input */}
                    <div className="mb-6">
                        <label
                            htmlFor="homeValue"
                            className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                        >
                            What's your home's estimated value?
                            <button
                                type="button"
                                aria-label="Home value information"
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <InfoIcon size={16} />
                            </button>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                $
                            </span>
                            <input
                                type="text"
                                id="homeValue"
                                name="homeValue"
                                value={homeValue === 0 ? '' : homeValue.toLocaleString()}
                                onChange={handleInputChange}
                                className="w-full h-12 pl-8 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="homeValue-desc"
                            />
                        </div>
                        <div id="homeValue-desc" className="sr-only">
                            Enter your home's current estimated market value
                        </div>
                    </div>
                    {/* Mortgage owed input */}
                    <div className="mb-6">
                        <label
                            htmlFor="mortgageOwed"
                            className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                        >
                            How much do you owe on your home?
                            <button
                                type="button"
                                aria-label="Mortgage information"
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <InfoIcon size={16} />
                            </button>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                $
                            </span>
                            <input
                                type="text"
                                id="mortgageOwed"
                                name="mortgageOwed"
                                value={mortgageOwed === 0 ? '' : mortgageOwed.toLocaleString()}
                                onChange={handleInputChange}
                                className="w-full h-12 pl-8 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="mortgageOwed-desc"
                            />
                        </div>
                        <div id="mortgageOwed-desc" className="sr-only">
                            Enter the current balance of your mortgage or combined mortgages
                        </div>
                    </div>
                    {/* Credit profile select */}
                    <div className="mb-8">
                        <label
                            htmlFor="creditTier"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            What's your credit profile?
                        </label>
                        <div className="relative">
                            <select
                                id="creditTier"
                                name="creditTier"
                                value={creditTier}
                                onChange={handleInputChange}
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="creditTier-desc"
                            >
                                <option value="760+">760+</option>
                                <option value="720+">720+</option>
                                <option value="680–719">680–719</option>
                                <option value="640–679">640–679</option>
                                <option value="≤639">≤639</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <ChevronDownIcon size={20} className="text-gray-500" />
                            </div>
                        </div>
                        <div id="creditTier-desc" className="sr-only">
                            Select your credit score range
                        </div>
                    </div>
                    {/* Calculate button */}
                    <button
                        type="button"
                        onClick={handleCalculate}
                        disabled={!isFormValid}
                        className={`w-full h-12 rounded-full font-medium text-white transition-colors ${isFormValid ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'}`}
                    >
                        Calculate
                    </button>
                    {/* Advanced options accordion */}
                    <div className="mt-6">
                        <button
                            type="button"
                            onClick={() => setShowAdvanced(!showAdvanced)}
                            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800"
                            aria-expanded={showAdvanced}
                        >
                            Advanced options
                            {showAdvanced ? (
                                <ChevronUpIcon size={16} />
                            ) : (
                                <ChevronDownIcon size={16} />
                            )}
                        </button>
                        {showAdvanced && (
                            <div className="mt-4 pt-4 border-t border-gray-200 grid gap-4">
                                {/* Product type */}
                                <div>
                                    <label
                                        htmlFor="product"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Product type
                                    </label>
                                    <div className="flex rounded-lg bg-gray-200 p-1">
                                        <button
                                            type="button"
                                            className={`flex-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${product === 'Cash-out' ? 'bg-white text-gray-800 shadow' : 'text-gray-700'}`}
                                            onClick={() => setProduct('Cash-out')}
                                            aria-pressed={product === 'Cash-out'}
                                        >
                                            Cash-out
                                        </button>
                                        <button
                                            type="button"
                                            className={`flex-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${product === 'HELOC' ? 'bg-white text-gray-800 shadow' : 'text-gray-700'}`}
                                            onClick={() => setProduct('HELOC')}
                                            aria-pressed={product === 'HELOC'}
                                        >
                                            HELOC
                                        </button>
                                    </div>
                                </div>
                                {/* Max CLTV display */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Max CLTV by credit profile
                                    </label>
                                    <div className="grid grid-cols-5 gap-2">
                                        {(Object.keys(MAX_CLTV) as CreditTier[]).map((tier) => (
                                            <div
                                                key={tier}
                                                className={`p-2 text-center text-xs rounded-md ${tier === creditTier ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}
                                            >
                                                <div>{tier}</div>
                                                <div className="font-semibold">
                                                    {Math.round(MAX_CLTV[tier] * 100)}%
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Closing cost percentage */}
                                {product === 'Cash-out' && (
                                    <div>
                                        <label
                                            htmlFor="closingCostPct"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Closing cost (% of cash-out amount)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="closingCostPct"
                                                name="closingCostPct"
                                                value={closingCostPct.toFixed(1)}
                                                onChange={handleInputChange}
                                                className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black/70"
                                            />
                                            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                                %
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    {/* Footer */}
                    <div className="mt-6 text-xs text-center text-gray-500 flex items-center justify-center gap-2">
                        <span className="text-red-600 font-medium">RateBeat</span>
                        <span>•</span>
                        <a href="#" className="underline hover:text-gray-700">
                            Legal disclosures
                        </a>
                    </div>
                </div>
                {/* Right column - Results */}
                <div
                    ref={resultsRef}
                    className="rounded-3xl bg-[#F8EEF2] p-6 md:p-8"
                    aria-live="polite"
                >
                    {isCalculated ? (
                        <>
                            <div className="text-gray-700 mb-2">Your estimated home equity</div>
                            <div
                                ref={equityValueRef}
                                className="text-5xl md:text-6xl font-bold tabular-nums text-[#5D0F26]"
                            >
                                {fmtUSD(equity)}
                            </div>
                            {hasNegativeEquity && (
                                <div className="text-gray-500 mt-2 text-sm">
                                    You may have negative equity based on these inputs.
                                </div>
                            )}
                            {!hasNegativeEquity && borrowingPower > 0 && (
                                <div className="mt-6 border-t border-gray-200 pt-4">
                                    <div className="text-gray-700 font-medium">
                                        Estimated borrowing power (after costs):{' '}
                                        {fmtUSD(borrowingPower)}
                                    </div>
                                    <div className="text-gray-500 text-sm mt-1">
                                        Assumes max CLTV by credit profile; actual limits vary.
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-400 text-center">
                            <div>
                                <p>Enter your details and click Calculate</p>
                                <p>to see your estimated home equity</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default HomeEquityCalculator
