import React, { useEffect, useState, useRef } from 'react'
import {
    InfoIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    SettingsIcon,
} from 'lucide-react'
import { Header } from '../../components/Header'
// Credit tier options
type CreditTier = '760+' | '720–759' | '680–719' | '640–679' | '≤639'
// PMI rates by credit tier
const PMI_RATES: Record<CreditTier, number> = {
    '760+': 0.35,
    '720–759': 0.45,
    '680–719': 0.65,
    '640–679': 0.95,
    '≤639': 1.35,
}
// Interface for form data
interface FormData {
    price: number
    downAmt: number
    downPct: number
    downIsPct: boolean
    creditTier: CreditTier
    rateAnnual: number
    rentMonthly: number
    years: number
    taxRatePct: number
    insAnnual: number
    hoaMonthly: number
    maintPct: number
    closingCostPct: number
    apprecPct: number
    rentGrowthPct: number
}
// Interface for calculation results
interface CalculationResult {
    loan: number
    ltv: number
    pmiMonthly: number
    pi: number
    taxMonthly: number
    insMonthly: number
    maintMonthly: number
    ownerMonthly: number
    renterMonthly: number
    futureValue: number
    equity: number
    balance: number
    closingCosts: number
    buyTotalGross: number
    buyTotalNet: number
    rentTotal: number
}
// Tab options for cost breakdown
type CostTab = 'Monthly' | 'Annual' | 'Total cost'
const RentVsBuyCalculator: React.FC = () => {
    // Default form values
    const defaultFormData: FormData = {
        price: 373360,
        downAmt: 77359,
        downPct: 20.7,
        downIsPct: false,
        creditTier: '720–759',
        rateAnnual: 6.75,
        rentMonthly: 3019,
        years: 16,
        taxRatePct: 1.1,
        insAnnual: 1200,
        hoaMonthly: 100,
        maintPct: 1.0,
        closingCostPct: 2.5,
        apprecPct: 3.0,
        rentGrowthPct: 0,
    }
    // State for form data
    const [formData, setFormData] = useState<FormData>(defaultFormData)
    // State for calculation results
    const [result, setResult] = useState<CalculationResult | null>(null)
    // State for UI
    const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
    const [selectedTab, setSelectedTab] = useState<CostTab>('Monthly')
    const [isCalculated, setIsCalculated] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)
    // Ref for results section (for accessibility)
    const resultsRef = useRef<HTMLDivElement>(null)
    // Helper function to format currency
    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value)
    }
    // Helper function to parse currency input
    const parseCurrency = (value: string): number => {
        return parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0
    }
    // Helper function to format percentage
    const formatPercent = (value: number): string => {
        return value.toFixed(2)
    }
    // Validate form data
    useEffect(() => {
        const { price, downAmt, creditTier, rateAnnual, rentMonthly } = formData
        const isValid =
            price > 0 &&
            downAmt >= 0 &&
            downAmt <= price &&
            creditTier !== undefined &&
            rateAnnual >= 0 &&
            rateAnnual <= 20 &&
            rentMonthly > 0
        setIsFormValid(isValid)
    }, [formData])
    // Sync down payment amount and percentage
    useEffect(() => {
        if (formData.downIsPct) {
            // Update amount based on percentage
            const newDownAmt = (formData.downPct / 100) * formData.price
            if (Math.abs(newDownAmt - formData.downAmt) > 1) {
                // Avoid infinite loop from rounding
                setFormData((prev) => ({
                    ...prev,
                    downAmt: newDownAmt,
                }))
            }
        } else {
            // Update percentage based on amount
            const newDownPct =
                formData.price > 0 ? (formData.downAmt / formData.price) * 100 : 0
            if (Math.abs(newDownPct - formData.downPct) > 0.1) {
                // Avoid infinite loop from rounding
                setFormData((prev) => ({
                    ...prev,
                    downPct: newDownPct,
                }))
            }
        }
    }, [formData.price, formData.downAmt, formData.downPct, formData.downIsPct])
    // Handle input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target
        if (name === 'price' || name === 'downAmt' || name === 'rentMonthly') {
            // Parse currency inputs
            setFormData((prev) => ({
                ...prev,
                [name]: parseCurrency(value),
            }))
        } else if (
            name === 'downPct' ||
            name === 'rateAnnual' ||
            name === 'taxRatePct' ||
            name === 'maintPct' ||
            name === 'closingCostPct' ||
            name === 'apprecPct' ||
            name === 'rentGrowthPct'
        ) {
            // Parse percentage inputs
            const numValue = parseFloat(value)
            const clampedValue =
                name === 'rateAnnual'
                    ? Math.min(Math.max(numValue, 0), 20)
                    : Math.min(Math.max(numValue, 0), 100)
            setFormData((prev) => ({
                ...prev,
                [name]: clampedValue,
            }))
        } else if (name === 'years') {
            // Parse year input
            const numValue = parseInt(value)
            const clampedValue = Math.min(Math.max(numValue, 0), 30)
            setFormData((prev) => ({
                ...prev,
                [name]: clampedValue,
            }))
        } else if (name === 'insAnnual' || name === 'hoaMonthly') {
            // Parse number inputs
            const numValue = parseCurrency(value)
            setFormData((prev) => ({
                ...prev,
                [name]: Math.max(numValue, 0),
            }))
        } else {
            // Handle other inputs
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }))
        }
    }
    // Handle down payment type toggle
    const handleDownTypeToggle = (isPct: boolean) => {
        setFormData((prev) => ({
            ...prev,
            downIsPct: isPct,
        }))
    }
    // Handle year slider change
    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const years = parseInt(e.target.value)
        setFormData((prev) => ({
            ...prev,
            years,
        }))
    }
    // Calculate mortgage and related costs
    const calculateResults = (): CalculationResult => {
        const {
            price,
            downAmt,
            creditTier,
            rateAnnual,
            rentMonthly,
            years,
            taxRatePct,
            insAnnual,
            hoaMonthly,
            maintPct,
            closingCostPct,
            apprecPct,
            rentGrowthPct,
        } = formData
        // Calculate loan amount and LTV
        const loan = Math.max(price - downAmt, 0)
        const ltv = price > 0 ? loan / price : 0
        // Calculate monthly mortgage payment (P&I)
        const r = rateAnnual / 100 / 12
        const n = 30 * 12 // 30-year fixed
        let pi = 0
        if (r === 0) {
            pi = loan / n
        } else {
            pi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        }
        // Calculate recurring monthly owner costs
        const taxMonthly = ((taxRatePct / 100) * price) / 12
        const insMonthly = insAnnual / 12
        const maintMonthly = ((maintPct / 100) * price) / 12
        // Calculate PMI if LTV > 80%
        const pmiRate = PMI_RATES[creditTier]
        const pmiMonthly = ltv > 0.8 ? ((pmiRate / 100) * loan) / 12 : 0
        // Calculate total monthly costs
        const ownerMonthly =
            pi + taxMonthly + insMonthly + hoaMonthly + pmiMonthly + maintMonthly
        const renterMonthly = rentMonthly
        // Calculate future home value
        const futureValue = price * Math.pow(1 + apprecPct / 100, years)
        // Calculate loan balance after N years
        let balance = loan
        for (let i = 0; i < years * 12; i++) {
            const interest = balance * r
            const principal = pi - interest
            balance = Math.max(balance - principal, 0)
        }
        // Calculate equity after N years
        const equity = Math.max(futureValue - balance, 0)
        // Calculate closing costs
        const closingCosts = (closingCostPct / 100) * loan
        // Calculate total costs over N years
        // For rent, we use a simplified formula for average rent growth
        const rentGrowthFactor = Math.pow(1 + rentGrowthPct / 100, years / 2)
        const rentTotal = rentMonthly * 12 * years * rentGrowthFactor
        // For buy, we calculate the gross outlay and net cost
        const buyTotalGross = ownerMonthly * 12 * years + closingCosts
        const buyTotalNet = Math.max(buyTotalGross - equity, 0)
        return {
            loan,
            ltv,
            pmiMonthly,
            pi,
            taxMonthly,
            insMonthly,
            maintMonthly,
            ownerMonthly,
            renterMonthly,
            futureValue,
            equity,
            balance,
            closingCosts,
            buyTotalGross,
            buyTotalNet,
            rentTotal,
        }
    }
    // Handle calculate button click
    const handleCalculate = () => {
        const calculationResult = calculateResults()
        setResult(calculationResult)
        setIsCalculated(true)
        // Scroll to results for accessibility
        if (resultsRef.current) {
            resultsRef.current.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }
    // Get cost values based on selected tab
    const getCostValues = () => {
        if (!result)
            return {
                rent: 0,
                buy: 0,
                difference: 0,
            }
        let rent = 0
        let buy = 0
        switch (selectedTab) {
            case 'Monthly':
                rent = result.renterMonthly
                buy = result.ownerMonthly
                break
            case 'Annual':
                rent = result.renterMonthly * 12
                buy = result.ownerMonthly * 12
                break
            case 'Total cost':
                rent = result.rentTotal
                buy = result.buyTotalNet
                break
        }
        const difference = Math.abs(rent - buy)
        return {
            rent,
            buy,
            difference,
        }
    }
    // Get bar chart values for equity visualization
    const getBarChartValues = () => {
        if (!result)
            return {
                rentEquity: 0,
                buyEquity: 0,
                maxEquity: 100000,
            }
        const rentEquity = 0 // Rent always has zero equity
        const buyEquity = result.equity
        const maxEquity = Math.max(buyEquity, 100000) // Ensure minimum scale
        return {
            rentEquity,
            buyEquity,
            maxEquity,
        }
    }
    return (
        <>
            <Header />
            <div className="max-w-[1200px] mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left column - Input form */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                        Rent vs. buy calculator
                    </h1>
                    {/* Purchase price input */}
                    <div className="mb-6">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Purchase price
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                $
                            </span>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                value={
                                    formData.price === 0 ? '' : formData.price.toLocaleString()
                                }
                                onChange={handleInputChange}
                                className="w-full h-12 pl-8 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="price-desc"
                            />
                        </div>
                        <div id="price-desc" className="sr-only">
                            Enter the home purchase price
                        </div>
                    </div>
                    {/* Down payment input */}
                    <div className="mb-6">
                        <label
                            htmlFor="downAmt"
                            className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                        >
                            Down payment
                            <button
                                type="button"
                                aria-label="Down payment information"
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
                                id="downAmt"
                                name="downAmt"
                                value={
                                    formData.downAmt === 0 ? '' : formData.downAmt.toLocaleString()
                                }
                                onChange={handleInputChange}
                                className="w-full h-12 pl-8 pr-24 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="down-amt-desc"
                            />
                            <div className="absolute inset-y-0 right-2 flex items-center">
                                <div className="flex rounded-full bg-gray-200 p-1">
                                    <button
                                        type="button"
                                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${!formData.downIsPct ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}
                                        onClick={() => handleDownTypeToggle(false)}
                                        aria-pressed={!formData.downIsPct}
                                    >
                                        $
                                    </button>
                                    <button
                                        type="button"
                                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${formData.downIsPct ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}
                                        onClick={() => handleDownTypeToggle(true)}
                                        aria-pressed={formData.downIsPct}
                                    >
                                        %
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="down-amt-desc" className="sr-only">
                            Enter the down payment amount
                        </div>
                    </div>
                    {/* Credit score select */}
                    <div className="mb-6">
                        <label
                            htmlFor="creditTier"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Credit score
                        </label>
                        <div className="relative">
                            <select
                                id="creditTier"
                                name="creditTier"
                                value={formData.creditTier}
                                onChange={handleInputChange}
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="credit-tier-desc"
                            >
                                <option value="760+">760 or above</option>
                                <option value="720–759">720–759</option>
                                <option value="680–719">680–719</option>
                                <option value="640–679">640–679</option>
                                <option value="≤639">≤639</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <ChevronDownIcon size={20} className="text-gray-500" />
                            </div>
                        </div>
                        <div id="credit-tier-desc" className="sr-only">
                            Select your credit score range
                        </div>
                    </div>
                    {/* Interest rate input */}
                    <div className="mb-6">
                        <label
                            htmlFor="rateAnnual"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Interest rate
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="rateAnnual"
                                name="rateAnnual"
                                value={formatPercent(formData.rateAnnual)}
                                onChange={handleInputChange}
                                className="w-full h-12 px-4 pr-8 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="rate-desc"
                            />
                            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                %
                            </span>
                        </div>
                        <div id="rate-desc" className="sr-only">
                            Enter the annual interest rate
                        </div>
                    </div>
                    {/* Monthly rent input */}
                    <div className="mb-8">
                        <label
                            htmlFor="rentMonthly"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Monthly rent
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                $
                            </span>
                            <input
                                type="text"
                                id="rentMonthly"
                                name="rentMonthly"
                                value={
                                    formData.rentMonthly === 0
                                        ? ''
                                        : formData.rentMonthly.toLocaleString()
                                }
                                onChange={handleInputChange}
                                className="w-full h-12 pl-8 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="rent-desc"
                            />
                        </div>
                        <div id="rent-desc" className="sr-only">
                            Enter your current or comparable monthly rent
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
                    {/* Advanced settings accordion */}
                    <div className="mt-6">
                        <button
                            type="button"
                            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800"
                            aria-expanded={isAdvancedOpen}
                        >
                            <SettingsIcon size={16} />
                            <span>Advanced</span>
                            {isAdvancedOpen ? (
                                <ChevronUpIcon size={16} />
                            ) : (
                                <ChevronDownIcon size={16} />
                            )}
                        </button>
                        {isAdvancedOpen && (
                            <div className="mt-4 pt-4 border-t border-gray-200 grid gap-4">
                                {/* Property tax rate */}
                                <div>
                                    <label
                                        htmlFor="taxRatePct"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Property tax rate (%)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="taxRatePct"
                                            name="taxRatePct"
                                            value={formatPercent(formData.taxRatePct)}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black/70"
                                        />
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                            %
                                        </span>
                                    </div>
                                </div>
                                {/* Annual insurance */}
                                <div>
                                    <label
                                        htmlFor="insAnnual"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Annual homeowners insurance ($)
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                            $
                                        </span>
                                        <input
                                            type="text"
                                            id="insAnnual"
                                            name="insAnnual"
                                            value={
                                                formData.insAnnual === 0
                                                    ? ''
                                                    : formData.insAnnual.toLocaleString()
                                            }
                                            onChange={handleInputChange}
                                            className="w-full h-10 pl-8 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black/70"
                                        />
                                    </div>
                                </div>
                                {/* Monthly HOA */}
                                <div>
                                    <label
                                        htmlFor="hoaMonthly"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Monthly HOA dues ($)
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                            $
                                        </span>
                                        <input
                                            type="text"
                                            id="hoaMonthly"
                                            name="hoaMonthly"
                                            value={
                                                formData.hoaMonthly === 0
                                                    ? ''
                                                    : formData.hoaMonthly.toLocaleString()
                                            }
                                            onChange={handleInputChange}
                                            className="w-full h-10 pl-8 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black/70"
                                        />
                                    </div>
                                </div>
                                {/* Maintenance percentage */}
                                <div>
                                    <label
                                        htmlFor="maintPct"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Annual maintenance (% of home price)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="maintPct"
                                            name="maintPct"
                                            value={formatPercent(formData.maintPct)}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black/70"
                                        />
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                            %
                                        </span>
                                    </div>
                                </div>
                                {/* Closing cost percentage */}
                                <div>
                                    <label
                                        htmlFor="closingCostPct"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Closing costs (% of loan)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="closingCostPct"
                                            name="closingCostPct"
                                            value={formatPercent(formData.closingCostPct)}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black/70"
                                        />
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                            %
                                        </span>
                                    </div>
                                </div>
                                {/* Home appreciation rate */}
                                <div>
                                    <label
                                        htmlFor="apprecPct"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Annual home appreciation (%)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="apprecPct"
                                            name="apprecPct"
                                            value={formatPercent(formData.apprecPct)}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black/70"
                                        />
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                            %
                                        </span>
                                    </div>
                                </div>
                                {/* Rent growth rate */}
                                <div>
                                    <label
                                        htmlFor="rentGrowthPct"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Annual rent growth (%)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="rentGrowthPct"
                                            name="rentGrowthPct"
                                            value={formatPercent(formData.rentGrowthPct)}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black/70"
                                        />
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                            %
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Footer */}
                    <div className="mt-6 text-xs text-center text-gray-500 flex items-center justify-center gap-2">
                        <span className="text-red-600 font-medium">Rocket Mortgage</span>
                        <span>•</span>
                        <a href="#" className="underline hover:text-gray-700">
                            Legal disclosures
                        </a>
                    </div>
                </div>
                {/* Right column - Results */}
                <div className="space-y-8">
                    {/* Results card */}
                    <div
                        ref={resultsRef}
                        className="rounded-3xl bg-gray-100 p-6 md:p-8"
                        aria-live="polite"
                    >
                        {/* Equity section */}
                        <h2 className="text-lg font-medium text-gray-700 mb-4">
                            Your home equity after {formData.years} years
                        </h2>
                        {/* Equity bar chart */}
                        <div className="bg-gray-200 rounded-xl p-6 mb-6">
                            {result && (
                                <>
                                    <div className="flex justify-between mb-2">
                                        <div>
                                            <div className="text-sm text-gray-600">Rent</div>
                                            <div className="font-semibold tabular-nums">$0</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-600">
                                                Buy<sup>2</sup>
                                            </div>
                                            <div className="font-semibold tabular-nums">
                                                {formatCurrency(result.equity)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative h-16 mt-4">
                                        {/* Rent bar (always $0) */}
                                        <div className="absolute left-0 bottom-0 h-1 w-full bg-indigo-100 rounded"></div>
                                        {/* Buy bar */}
                                        <div
                                            className="absolute left-0 bottom-0 h-16 bg-indigo-900 rounded"
                                            style={{
                                                width: `${(result.equity / getBarChartValues().maxEquity) * 100}%`,
                                                maxWidth: '100%',
                                            }}
                                        ></div>
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Year slider */}
                        <div className="mb-8">
                            <input
                                type="range"
                                min="0"
                                max="30"
                                step="1"
                                value={formData.years}
                                onChange={handleYearChange}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>0</span>
                                <span>5</span>
                                <span>10</span>
                                <span>15</span>
                                <span>20</span>
                                <span>25</span>
                                <span>30</span>
                            </div>
                        </div>
                        {/* Cost breakdown */}
                        <h2 className="text-lg font-medium text-gray-700 mb-4">
                            Your cost breakdown after {formData.years} years
                        </h2>
                        {/* Cost tabs */}
                        <div className="flex gap-2 mb-6">
                            {(['Monthly', 'Annual', 'Total cost'] as CostTab[]).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setSelectedTab(tab)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTab === tab ? 'bg-indigo-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        {/* Cost comparison table */}
                        <div className="space-y-4">
                            {result && (
                                <>
                                    {/* Rent row */}
                                    <div className="flex justify-between items-center">
                                        <div className="font-medium">Rent</div>
                                        <div className="font-bold tabular-nums text-lg">
                                            {formatCurrency(getCostValues().rent)}
                                        </div>
                                    </div>
                                    {/* Buy row */}
                                    <div className="flex justify-between items-center">
                                        <div className="font-medium">
                                            Buy<sup>2</sup>
                                        </div>
                                        <div className="font-bold tabular-nums text-lg">
                                            {formatCurrency(getCostValues().buy)}
                                        </div>
                                    </div>
                                    {/* Difference row */}
                                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                                        <div className="font-medium">Difference</div>
                                        <div className="font-bold tabular-nums text-lg">
                                            {formatCurrency(getCostValues().difference)}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Apply button */}
                        <div className="mt-8">
                            <a href='https://ratebeat.floify.com/apply-now'
                                type="button"
                                className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-white text-gray-800 hover:bg-gray-50 border border-gray-300"
                            >
                                Apply now
                            </a>
                        </div>
                    </div>
                    {/* Estimated costs card */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
                        <h2 className="text-xl font-semibold mb-6">Estimated costs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Property taxes */}
                            <div className="rounded-2xl border p-5 grid gap-1">
                                <div className="text-gray-600 text-sm">Property taxes</div>
                                <div className="text-xl font-semibold tabular-nums">
                                    {result
                                        ? formatCurrency((formData.taxRatePct / 100) * formData.price)
                                        : '$0'}
                                </div>
                            </div>
                            {/* Closing costs */}
                            <div className="rounded-2xl border p-5 grid gap-1">
                                <div className="text-gray-600 text-sm">Closing costs</div>
                                <div className="text-xl font-semibold tabular-nums">
                                    {result ? formatCurrency(result.closingCosts) : '$0'}
                                </div>
                            </div>
                            {/* Private mortgage insurance */}
                            <div className="rounded-2xl border p-5 grid gap-1">
                                <div className="text-gray-600 text-sm">
                                    Private mortgage insurance
                                </div>
                                <div className="text-xl font-semibold tabular-nums">
                                    {result ? formatCurrency(result.pmiMonthly * 12) : '$0'}
                                </div>
                            </div>
                            {/* Homeowners insurance */}
                            <div className="rounded-2xl border p-5 grid gap-1">
                                <div className="text-gray-600 text-sm">Homeowners insurance</div>
                                <div className="text-xl font-semibold tabular-nums">
                                    {formatCurrency(formData.insAnnual)}
                                </div>
                            </div>
                            {/* HOA dues */}
                            <div className="rounded-2xl border p-5 grid gap-1">
                                <div className="text-gray-600 text-sm">
                                    Homeowners association dues
                                </div>
                                <div className="text-xl font-semibold tabular-nums">
                                    {formatCurrency(formData.hoaMonthly * 12)}
                                </div>
                            </div>
                            {/* Home maintenance */}
                            <div className="rounded-2xl border p-5 grid gap-1">
                                <div className="text-gray-600 text-sm">Home maintenance</div>
                                <div className="text-xl font-semibold tabular-nums">
                                    {formatCurrency((formData.maintPct / 100) * formData.price)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RentVsBuyCalculator
