import React, { useEffect, useState } from 'react'
import { Info } from 'lucide-react'
interface RentVsBuyCalculatorProps {
    'data-id'?: string
}
const creditScoreRanges = [
    {
        label: '720 or above',
        value: '720+',
        rateAdjustment: 0,
    },
    {
        label: '700 - 719',
        value: '700-719',
        rateAdjustment: 0.0025,
    },
    {
        label: '680 - 699',
        value: '680-699',
        rateAdjustment: 0.005,
    },
    {
        label: '660 - 679',
        value: '660-679',
        rateAdjustment: 0.0075,
    },
    {
        label: '640 - 659',
        value: '640-659',
        rateAdjustment: 0.01,
    },
    {
        label: '620 - 639',
        value: '620-639',
        rateAdjustment: 0.015,
    },
]
export const RentVsBuyCalculator: React.FC<RentVsBuyCalculatorProps> = ({
    'data-id': dataId,
}) => {
    // Form inputs
    const [purchasePrice, setPurchasePrice] = useState('377360')
    const [downPayment, setDownPayment] = useState('77359')
    const [downPaymentType, setDownPaymentType] = useState<'$' | '%'>('$')
    const [creditScore, setCreditScore] = useState('720+')
    const [interestRate, setInterestRate] = useState('6.375')
    const [monthlyRent, setMonthlyRent] = useState('3019')
    // Results state
    const [hasCalculated, setHasCalculated] = useState(false)
    const [years, setYears] = useState(2)
    const [viewType, setViewType] = useState<'monthly' | 'annual' | 'total'>(
        'monthly',
    )
    // Calculated values
    const [buyEquity, setBuyEquity] = useState(0)
    const [rentCost, setRentCost] = useState(0)
    const [buyCost, setBuyCost] = useState(0)
    const [propertyTaxes, setPropertyTaxes] = useState(0)
    const [closingCosts, setClosingCosts] = useState(0)
    const [pmi, setPmi] = useState(0)
    const [homeownersInsurance, setHomeownersInsurance] = useState(0)
    const [hoaDues, setHoaDues] = useState(0)
    const [homeMaintenance, setHomeMaintenance] = useState(0)
    // Format currency
    const formatCurrency = (value: string): string => {
        const numbers = value.replace(/[^\d]/g, '')
        if (!numbers) return ''
        return parseInt(numbers).toLocaleString()
    }
    // Parse currency
    const parseCurrency = (value: string): number => {
        return parseInt(value.replace(/[^\d]/g, '') || '0')
    }
    // Calculate monthly mortgage payment (Principal + Interest only)
    const calculateMonthlyPayment = (
        principal: number,
        annualRate: number,
        years: number = 30,
    ): number => {
        const monthlyRate = annualRate / 100 / 12
        const numberOfPayments = years * 12
        if (monthlyRate === 0) return principal / numberOfPayments
        const payment =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
        return payment
    }
    // Calculate remaining balance after N payments
    const calculateRemainingBalance = (
        principal: number,
        annualRate: number,
        monthlyPayment: number,
        paymentsMade: number,
    ): number => {
        const monthlyRate = annualRate / 100 / 12
        if (monthlyRate === 0) {
            return principal - monthlyPayment * paymentsMade
        }
        const remainingBalance =
            principal * Math.pow(1 + monthlyRate, paymentsMade) -
            monthlyPayment *
            ((Math.pow(1 + monthlyRate, paymentsMade) - 1) / monthlyRate)
        return Math.max(0, remainingBalance)
    }
    // Calculate all costs and equity
    const calculateComparison = () => {
        const price = parseCurrency(purchasePrice)
        const rent = parseCurrency(monthlyRent)
        const rate = parseFloat(interestRate)
        // Validation
        if (!price || !rent || !rate) {
            alert('Please fill in all required fields')
            return
        }
        // Calculate down payment
        let downPaymentAmount = 0
        if (downPaymentType === '$') {
            downPaymentAmount = parseCurrency(downPayment)
        } else {
            const percentage = parseFloat(downPayment) / 100
            downPaymentAmount = price * percentage
        }
        // Validate down payment
        if (downPaymentAmount > price) {
            alert('Down payment cannot exceed purchase price')
            return
        }
        const loanAmount = price - downPaymentAmount
        const downPaymentPercent = (downPaymentAmount / price) * 100
        // Calculate estimated costs
        const annualPropertyTax = price * 0.0115 // 1.15% annually
        const annualInsurance = price * 0.003 // 0.3% annually
        const annualMaintenance = price * 0.01 // 1% annually
        const annualHOA = 1200 // Fixed $100/month
        const estimatedClosingCosts = price * 0.04 // 4% of purchase price
        // PMI if down payment < 20%
        const annualPMI = downPaymentPercent < 20 ? loanAmount * 0.005 : 0 // 0.5% annually
        // Get rate adjustment based on credit score
        const scoreData = creditScoreRanges.find((s) => s.value === creditScore)
        const adjustedRate = rate + (scoreData?.rateAdjustment || 0) * 100
        // Calculate monthly mortgage payment (P&I only)
        const monthlyPI = calculateMonthlyPayment(loanAmount, adjustedRate)
        // Calculate total monthly housing payment
        const monthlyPropertyTax = annualPropertyTax / 12
        const monthlyInsurance = annualInsurance / 12
        const monthlyMaintenance = annualMaintenance / 12
        const monthlyHOA = annualHOA / 12
        const monthlyPMI = annualPMI / 12
        const totalMonthlyPayment =
            monthlyPI +
            monthlyPropertyTax +
            monthlyInsurance +
            monthlyMaintenance +
            monthlyHOA +
            monthlyPMI
        // Calculate costs over the selected time period
        const months = years * 12
        // Calculate equity buildup (principal paid + appreciation - closing costs)
        const remainingBalance = calculateRemainingBalance(
            loanAmount,
            adjustedRate,
            monthlyPI,
            months,
        )
        const principalPaid = loanAmount - remainingBalance
        const homeAppreciation = price * Math.pow(1.03, years) - price // 3% annual appreciation
        const totalEquity =
            downPaymentAmount +
            principalPaid +
            homeAppreciation -
            estimatedClosingCosts
        // Calculate rent with 3% annual increase
        let totalRentPaid = 0
        let currentMonthlyRent = rent
        for (let year = 0; year < years; year++) {
            totalRentPaid += currentMonthlyRent * 12
            currentMonthlyRent *= 1.03 // 3% annual increase
        }
        // Calculate total buy costs
        const totalBuyCosts = totalMonthlyPayment * months + estimatedClosingCosts
        // Net cost of buying (total costs - equity gained)
        const netBuyCost = totalBuyCosts - totalEquity
        // Set state
        setBuyEquity(totalEquity)
        setRentCost(totalRentPaid)
        setBuyCost(netBuyCost)
        setPropertyTaxes(annualPropertyTax)
        setClosingCosts(estimatedClosingCosts)
        setPmi(annualPMI)
        setHomeownersInsurance(annualInsurance)
        setHoaDues(annualHOA)
        setHomeMaintenance(annualMaintenance)
        setHasCalculated(true)
    }
    // Reset calculation when inputs change
    useEffect(() => {
        if (hasCalculated) {
            setHasCalculated(false)
        }
    }, [
        purchasePrice,
        downPayment,
        downPaymentType,
        creditScore,
        interestRate,
        monthlyRent,
    ])
    // Recalculate when years change (if already calculated)
    useEffect(() => {
        if (hasCalculated) {
            calculateComparison()
        }
    }, [years])
    // Calculate display values based on view type
    const getDisplayValues = () => {
        const monthsInPeriod = years * 12
        switch (viewType) {
            case 'monthly':
                return {
                    rent: Math.round(rentCost / monthsInPeriod),
                    buy: Math.round(buyCost / monthsInPeriod),
                    difference: Math.round((rentCost - buyCost) / monthsInPeriod),
                }
            case 'annual':
                return {
                    rent: Math.round(rentCost / years),
                    buy: Math.round(buyCost / years),
                    difference: Math.round((rentCost - buyCost) / years),
                }
            case 'total':
                return {
                    rent: Math.round(rentCost),
                    buy: Math.round(buyCost),
                    difference: Math.round(rentCost - buyCost),
                }
        }
    }
    const displayValues = getDisplayValues()
    return (
        <div data-id={dataId} className="w-full bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Calculator Form */}
                    <div className="bg-gray-50 rounded-3xl p-8">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
                            Rent vs. buy
                            <br />
                            calculator
                        </h1>
                        {/* Purchase Price */}
                        <div className="mb-6">
                            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                                Purchase price
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    $
                                </span>
                                <input
                                    type="text"
                                    value={formatCurrency(purchasePrice)}
                                    onChange={(e) =>
                                        setPurchasePrice(e.target.value.replace(/[^\d]/g, ''))
                                    }
                                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                        </div>
                        {/* Down Payment */}
                        <div className="mb-6">
                            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                                Down payment
                                <button className="text-gray-400 hover:text-gray-600">
                                    <Info className="w-4 h-4" />
                                </button>
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    {downPaymentType}
                                </span>
                                <input
                                    type="text"
                                    value={
                                        downPaymentType === '$'
                                            ? formatCurrency(downPayment)
                                            : downPayment
                                    }
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/[^\d.]/g, '')
                                        setDownPayment(value)
                                    }}
                                    className="w-full pl-8 pr-20 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1 bg-gray-200 rounded-full p-1">
                                    <button
                                        onClick={() => {
                                            setDownPaymentType('$')
                                            if (downPaymentType === '%') {
                                                const percentage = parseFloat(downPayment) / 100
                                                const amount = parseCurrency(purchasePrice) * percentage
                                                setDownPayment(Math.round(amount).toString())
                                            }
                                        }}
                                        className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${downPaymentType === '$' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:text-black'}`}
                                    >
                                        $
                                    </button>
                                    <button
                                        onClick={() => {
                                            setDownPaymentType('%')
                                            if (downPaymentType === '$') {
                                                const amount = parseCurrency(downPayment)
                                                const price = parseCurrency(purchasePrice)
                                                const percentage = (amount / price) * 100
                                                setDownPayment(percentage.toFixed(2))
                                            }
                                        }}
                                        className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${downPaymentType === '%' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:text-black'}`}
                                    >
                                        %
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Credit Score */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">
                                Credit Score
                            </label>
                            <select
                                value={creditScore}
                                onChange={(e) => setCreditScore(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black appearance-none bg-white"
                            >
                                {creditScoreRanges.map((range) => (
                                    <option key={range.value} value={range.value}>
                                        {range.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Interest Rate */}
                        <div className="mb-6">
                            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                                Interest rate
                                <sup className="text-xs">1</sup>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={interestRate}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/[^\d.]/g, '')
                                        setInterestRate(value)
                                    }}
                                    className="w-full px-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    %
                                </span>
                            </div>
                        </div>
                        {/* Monthly Rent */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold mb-2">
                                Monthly rent
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    $
                                </span>
                                <input
                                    type="text"
                                    value={formatCurrency(monthlyRent)}
                                    onChange={(e) =>
                                        setMonthlyRent(e.target.value.replace(/[^\d]/g, ''))
                                    }
                                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                        </div>
                        {/* Calculate Button */}
                        <button
                            onClick={calculateComparison}
                            className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors mb-4"
                        >
                            Calculate
                        </button>
                        {/* Footer Links */}
                        <div className="text-center text-xs text-gray-600">
                            <span className="text-red-600">Ratebeat</span> •{' '}
                            <a href="#" className="underline hover:text-black">
                                Legal disclosures
                            </a>
                        </div>
                    </div>
                    {/* Results Panel */}
                    <div className="space-y-6">
                        {/* Equity Chart */}
                        <div className="bg-gray-50 rounded-3xl p-8">
                            <h2 className="text-xl font-bold mb-6">
                                Your home equity after {years} {years === 1 ? 'year' : 'years'}
                            </h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">
                                        Buy<sup className="text-xs">2</sup>
                                    </span>
                                    <span className="text-lg font-bold">
                                        ${Math.round(buyEquity / 1000)}k
                                    </span>
                                </div>
                                <div className="h-16 bg-gray-200 rounded-lg overflow-hidden">
                                    <div
                                        className="h-full bg-gray-800 rounded-lg transition-all duration-500"
                                        style={{
                                            width: hasCalculated ? '100%' : '0%',
                                        }}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Rent</span>
                                    <span className="text-lg font-bold">$0</span>
                                </div>
                                <div className="h-16 bg-gray-200 rounded-lg" />
                            </div>
                            {/* Years Slider */}
                            <div className="mb-2">
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    value={years}
                                    onChange={(e) => setYears(parseInt(e.target.value))}
                                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>0</span>
                                <span>5</span>
                                <span>10</span>
                                <span>15</span>
                                <span>20</span>
                                <span>25</span>
                                <span>30</span>
                            </div>
                        </div>
                        {/* Cost Breakdown */}
                        <div className="bg-gray-50 rounded-3xl p-8">
                            <h2 className="text-xl font-bold mb-6">
                                Your cost breakdown after {years}{' '}
                                {years === 1 ? 'year' : 'years'}
                            </h2>
                            {/* View Type Toggles */}
                            <div className="flex gap-2 mb-6">
                                <button
                                    onClick={() => setViewType('monthly')}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${viewType === 'monthly' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:text-black'}`}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setViewType('annual')}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${viewType === 'annual' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:text-black'}`}
                                >
                                    Annual
                                </button>
                                <button
                                    onClick={() => setViewType('total')}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${viewType === 'total' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:text-black'}`}
                                >
                                    Total cost<sup className="text-xs">3</sup>
                                </button>
                            </div>
                            {/* Cost Comparison */}
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Rent</span>
                                    <span className="text-lg font-bold">
                                        ${displayValues.rent.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">
                                        Buy<sup className="text-xs">2</sup>
                                    </span>
                                    <span className="text-lg font-bold">
                                        ${displayValues.buy.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t">
                                    <span className="font-bold">Difference</span>
                                    <span
                                        className={`text-lg font-bold ${displayValues.difference > 0 ? 'text-green-600' : 'text-red-600'}`}
                                    >
                                        ${Math.abs(displayValues.difference).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <button className="w-full border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                                Apply now
                            </button>
                        </div>
                    </div>
                </div>
                {/* Estimated Costs Section */}
                <div className="mt-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        Estimated costs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-lg font-bold mb-2">Property taxes</h3>
                            <p className="text-3xl font-bold">
                                ${Math.round(propertyTaxes).toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-lg font-bold mb-2">Closing costs</h3>
                            <p className="text-3xl font-bold">
                                ${Math.round(closingCosts).toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-lg font-bold mb-2">
                                Private mortgage insurance
                            </h3>
                            <p className="text-3xl font-bold">
                                ${Math.round(pmi).toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-lg font-bold mb-2">Homeowners insurance</h3>
                            <p className="text-3xl font-bold">
                                ${Math.round(homeownersInsurance).toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-lg font-bold mb-2">
                                Homeowners association dues
                            </h3>
                            <p className="text-3xl font-bold">
                                ${Math.round(hoaDues).toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-lg font-bold mb-2">Home maintenance</h3>
                            <p className="text-3xl font-bold">
                                ${Math.round(homeMaintenance).toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Disclaimer */}
                <div className="mt-12 text-xs text-gray-500 max-w-4xl mx-auto">
                    <p className="mb-2">
                        <sup>1</sup> Interest rate is adjustable based on credit score.
                    </p>
                    <p className="mb-2">
                        <sup>2</sup> Buy calculations include mortgage payment (principal +
                        interest), property taxes, insurance, HOA dues, maintenance, and
                        closing costs, minus equity gained through principal paydown and
                        home appreciation.
                    </p>
                    <p className="mb-4">
                        <sup>3</sup> Total cost represents the net cost over the selected
                        time period.
                    </p>
                    <p>
                        * This calculator provides estimates only. Actual costs will vary
                        based on your specific situation, location, and market conditions.
                        Assumptions include 3% annual home appreciation, 3% annual rent
                        increase, 1.15% property tax rate, 0.3% insurance rate, 1%
                        maintenance rate, and 30-year fixed mortgage. Lending services
                        provided by Ratebeat, LLC. NMLS #3030. Equal Housing Lender.
                    </p>
                </div>
            </div>
        </div>
    )
}
