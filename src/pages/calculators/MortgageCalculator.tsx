import React, { useEffect, useMemo, useState } from 'react'
import { InfoIcon, PercentIcon, DollarSign, ChevronDown } from 'lucide-react'

// Types
interface MonthlyPayment {
    total: number
    principalAndInterest: number
    taxes: number
    insurance: number
}
interface ZipCodeRates {
    taxRate: number // % of price / year
    insuranceRate: number // % of price / year
}
interface ZipCodeData {
    [key: string]: ZipCodeRates
    default: ZipCodeRates
}

const fmtUSD0 = (value: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(Math.round(isNaN(value) ? 0 : value))

const parseCurrency = (v: string) =>
    v ? parseFloat(v.replace(/[^0-9.-]+/g, '')) || 0 : 0

const MortgageCalculator: React.FC = () => {
    // ---------- Defaults set to match Image 1 ----------
    const [homePrice, setHomePrice] = useState<number>(700_000)
    const [downIsPercent, setDownIsPercent] = useState<boolean>(true)
    const [downPct, setDownPct] = useState<number>(5) // 5%
    const [downAmt, setDownAmt] = useState<number>(Math.round(700_000 * 0.05))
    const [loanTerm, setLoanTerm] = useState<number>(30)
    const [interestRate, setInterestRate] = useState<number>(6.5)
    const [zipCode, setZipCode] = useState<string>('83001')

    const [showOptional, setShowOptional] = useState<boolean>(false)
    const [customTaxInsurance, setCustomTaxInsurance] = useState<boolean>(false)
    const [propertyTax, setPropertyTax] = useState<number>(0) // monthly
    const [insurance, setInsurance] = useState<number>(0) // monthly

    const [monthlyPayment, setMonthlyPayment] = useState<MonthlyPayment>({
        total: 0,
        principalAndInterest: 0,
        taxes: 0,
        insurance: 0,
    })

    // ---------- ZIP-based estimates ----------
    const zipCodeData: ZipCodeData = {
        // Broad regions; fine to tweak later
        '0': { taxRate: 1.80, insuranceRate: 0.35 },
        '1': { taxRate: 1.90, insuranceRate: 0.40 },
        '2': { taxRate: 1.20, insuranceRate: 0.45 },
        '3': { taxRate: 1.00, insuranceRate: 0.60 },
        '4': { taxRate: 1.50, insuranceRate: 0.30 },
        '5': { taxRate: 1.40, insuranceRate: 0.25 },
        '6': { taxRate: 1.60, insuranceRate: 0.28 },
        '7': { taxRate: 1.70, insuranceRate: 0.55 },
        // Mountain West – tuned to match Image 1 (83001)
        '8': { taxRate: 0.48, insuranceRate: 0.28 }, // → ~$280 tax, ~$163 ins on $700k
        '9': { taxRate: 0.90, insuranceRate: 0.35 },
        default: { taxRate: 1.20, insuranceRate: 0.35 },
    }

    const getZipCodeRates = (zip: string): ZipCodeRates => {
        if (!zip) return zipCodeData.default
        const key = zip[0]
        return zipCodeData[key] ?? zipCodeData.default
    }

    const updateTaxAndInsuranceByZip = () => {
        const { taxRate, insuranceRate } = getZipCodeRates(zipCode)
        const monthlyTax = Math.round((homePrice * (taxRate / 100)) / 12)
        const monthlyIns = Math.round((homePrice * (insuranceRate / 100)) / 12)
        setPropertyTax(monthlyTax)
        setInsurance(monthlyIns)
    }

    // ---------- Effects ----------
    useEffect(() => {
        if (!customTaxInsurance) updateTaxAndInsuranceByZip()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zipCode, homePrice])

    // Keep dollar/percent fields in sync
    useEffect(() => {
        if (downIsPercent) {
            setDownAmt(Math.round((downPct / 100) * homePrice))
        } else {
            setDownPct(homePrice > 0 ? (downAmt / homePrice) * 100 : 0)
        }
    }, [homePrice, downIsPercent, downPct, downAmt])

    // ---------- Calculation ----------
    const calculateMonthlyPayment = (): void => {
        const actualDown = downIsPercent
            ? Math.round((downPct / 100) * homePrice)
            : Math.min(Math.max(downAmt, 0), homePrice)

        const loanAmount = Math.max(0, homePrice - actualDown)
        const r = interestRate / 100 / 12
        const n = loanTerm * 12

        let principalAndInterest = 0
        if (r > 0) {
            principalAndInterest =
                (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        } else {
            principalAndInterest = loanAmount / n
        }

        const total = principalAndInterest + propertyTax + insurance

        setMonthlyPayment({
            total,
            principalAndInterest,
            taxes: propertyTax,
            insurance,
        })
    }

    // ---------- Handlers ----------
    const handleHomePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHomePrice(parseCurrency(e.target.value))
    }

    const handleDownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = parseCurrency(e.target.value)
        if (downIsPercent) {
            setDownPct(v)
        } else {
            setDownAmt(v)
        }
    }

    const toggleDownMode = () => setDownIsPercent((s) => !s)

    const handleLoanTermChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setLoanTerm(parseInt(e.target.value))

    const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInterestRate(parseFloat(e.target.value) || 0)

    const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newZip = e.target.value
        if (/^\d{0,5}$/.test(newZip)) setZipCode(newZip)
    }

    const handleCustomTaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomTaxInsurance(true)
        setPropertyTax(parseFloat(e.target.value) || 0)
    }
    const handleCustomInsuranceChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setCustomTaxInsurance(true)
        setInsurance(parseFloat(e.target.value) || 0)
    }

    // ---------- UI ----------
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 p-12 rounded-3xl overflow-hidden">
                {/* Left section - Form */}
                <div className="bg-gray-50 p-6 lg:p-12 rounded-3xl flex-1">
                    <h1 className="text-4xl font-bold mb-4">Mortgage calculator</h1>
                    <p className="text-gray-600 mb-8">
                        If you're thinking about buying a home, we can help you estimate
                        your monthly mortgage payment. All fields are required.
                    </p>

                    {/* Home Price */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Home price</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                $
                            </span>
                            <input
                                type="text"
                                value={homePrice.toLocaleString()}
                                onChange={handleHomePrice}
                                className="w-full p-3 pl-8 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Down Payment */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Down payment</label>
                        <div className="relative">
                            {/* Prefix symbol toggles with mode */}
                            {downIsPercent ? (
                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">%</span>
                            ) : (
                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">$</span>
                            )}
                            <input
                                type="text"
                                value={
                                    downIsPercent
                                        ? Math.round(downPct).toString()
                                        : downAmt.toLocaleString()
                                }
                                onChange={handleDownChange}
                                className={`w-full p-3 ${downIsPercent ? 'pl-8' : 'pl-8'} rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            <button
                                onClick={toggleDownMode}
                                className="absolute inset-y-0 right-0 flex items-center bg-gray-200 rounded-r-lg px-3 hover:bg-gray-300 transition-colors"
                                title={downIsPercent ? 'Switch to $' : 'Switch to %'}
                            >
                                {downIsPercent ? <PercentIcon size={16} /> : <DollarSign size={16} />}
                            </button>
                        </div>
                    </div>

                    {/* Guidance */}
                    <div className="bg-gray-100 p-4 rounded-lg mb-6 flex items-start gap-2">
                        <InfoIcon size={18} className="text-gray-600 mt-0.5" />
                        <p className="text-sm text-gray-600">
                            An average down payment is about 20% of the home price.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Loan Term */}
                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <label className="block text-sm font-medium">Loan term</label>
                                <InfoIcon size={14} className="text-gray-600" />
                            </div>
                            <div className="relative">
                                <select
                                    value={loanTerm}
                                    onChange={handleLoanTermChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value={10}>10 year</option>
                                    <option value={15}>15 year</option>
                                    <option value={20}>20 year</option>
                                    <option value={30}>30 year</option>
                                </select>
                                <ChevronDown
                                    size={16}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                                />
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <label className="block text-sm font-medium">Interest rate</label>
                                <InfoIcon size={14} className="text-gray-600" />
                            </div>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={interestRate}
                                    onChange={handleInterestRateChange}
                                    step="0.1"
                                    min="0"
                                    max="20"
                                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center text-gray-600">
                                    %
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ZIP Code */}
                    <div className="mb-6">
                        <div className="flex items-center gap-1 mb-2">
                            <label className="block text-sm font-medium">ZIP code</label>
                            <InfoIcon size={14} className="text-gray-600" />
                        </div>
                        <input
                            type="text"
                            value={zipCode}
                            onChange={handleZipCodeChange}
                            placeholder="Enter ZIP code"
                            maxLength={5}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Your ZIP code helps us estimate property taxes and insurance costs
                            for your area.
                        </p>
                    </div>

                    {/* Optional: enter custom taxes/insurance */}
                    <div className="mb-6">
                        <button
                            onClick={() => setShowOptional(!showOptional)}
                            className="flex items-center gap-2 text-gray-700 font-medium"
                        >
                            <InfoIcon size={18} className="text-gray-600" />
                            Optional: Enter taxes & insurance
                            <ChevronDown
                                size={16}
                                className={`text-gray-600 transition-transform ${showOptional ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {showOptional && (
                            <div className="mt-4 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Property tax (monthly)
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                            $
                                        </span>
                                        <input
                                            type="number"
                                            value={Math.round(propertyTax)}
                                            onChange={handleCustomTaxChange}
                                            className="w-full p-3 pl-8 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Home insurance (monthly)
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                            $
                                        </span>
                                        <input
                                            type="number"
                                            value={Math.round(insurance)}
                                            onChange={handleCustomInsuranceChange}
                                            className="w-full p-3 pl-8 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg">
                                    <InfoIcon size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-blue-700">
                                        We've estimated your property tax and insurance based on your ZIP
                                        code. You can adjust these values if you have more accurate info.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Calculate */}
                    <button
                        onClick={calculateMonthlyPayment}
                        className="w-full bg-black text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                        Calculate
                    </button>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-sm">
                        <span className="text-red-500 font-medium">RateBeat</span>
                        <span className="text-gray-400">•</span>
                        <a href="#" className="text-gray-500 underline">
                            Legal disclosures
                        </a>
                    </div>
                </div>

                {/* Right section - Results (styled like Image 1) */}
                <div className="bg-[#E6E9FA] p-6 lg:p-12 rounded-3xl h-max lg:w-1/3">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">
                        Estimated monthly payment
                    </h2>
                    <div className="mb-6">
                        <div className="flex items-start">
                            <div className="text-6xl font-bold text-gray-900">
                                {fmtUSD0(monthlyPayment.total)}
                            </div>
                            <div className="text-xl font-bold text-gray-800 mt-1 ml-1">*</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <div className="text-xl font-bold text-gray-900">
                                {fmtUSD0(monthlyPayment.principalAndInterest)}
                            </div>
                            <div className="text-sm text-gray-600">Principal & interest</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-gray-900">
                                {fmtUSD0(monthlyPayment.taxes)}
                            </div>
                            <div className="text-sm text-gray-600">Taxes</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-gray-900">
                                {fmtUSD0(monthlyPayment.insurance)}
                            </div>
                            <div className="text-sm text-gray-600">Insurance</div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default MortgageCalculator
