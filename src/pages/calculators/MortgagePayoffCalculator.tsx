import React, { useEffect, useState, useRef } from 'react'
import { InfoIcon } from 'lucide-react'
import { Header } from '../../components/Header'
// Types
type CreditTier = 'Excellent' | 'Very good' | 'Good' | 'Fair' | 'Poor' | ''
type State = keyof typeof STATE_TABLE
type TermYears = 10 | 15 | 20 | 30
interface FormData {
    balance: number
    yearsLeft: number
    homeValue: number
    creditTier: CreditTier
    zipCode: string
    isVA: boolean
}
interface StateData {
    closingBasePct: number
    mtgTaxPct: number
    notes?: string
}
interface TermResult {
    termYears: TermYears
    rate: number
    monthlyPI: number
}
interface CalculationResult {
    maxShorten: number
    candidateTerms: TermResult[]
    ltv: number
    isHighLTV: boolean
    extraInterestSaved: number
}
// ZIP code to state mapping (longest prefix match)
const ZIP_PREFIX_TO_STATE: Record<string, State> = {
    // Northeast
    '0': 'CT',
    '01': 'MA',
    '02': 'MA',
    '03': 'NH',
    '04': 'ME',
    '05': 'VT',
    '06': 'CT',
    '07': 'NJ',
    '08': 'NJ',
    '09': 'PR',
    // Mid-Atlantic
    '1': 'NY',
    '10': 'NYC',
    '11': 'NYC',
    '12': 'NY',
    '13': 'NY',
    '14': 'NY',
    '15': 'PA',
    '16': 'PA',
    '17': 'PA',
    '18': 'PA',
    '19': 'PA',
    // Southeast
    '2': 'VA',
    '20': 'DC',
    '21': 'MD',
    '22': 'VA',
    '23': 'VA',
    '24': 'VA',
    '25': 'WV',
    '26': 'WV',
    '27': 'NC',
    '28': 'NC',
    '29': 'SC',
    '3': 'FL',
    '30': 'GA',
    '31': 'GA',
    '32': 'FL',
    '33': 'FL',
    '34': 'FL',
    '35': 'AL',
    '36': 'AL',
    '37': 'TN',
    '38': 'TN',
    '39': 'MS',
    // Midwest
    '4': 'OH',
    '40': 'KY',
    '41': 'KY',
    '42': 'KY',
    '43': 'OH',
    '44': 'OH',
    '45': 'OH',
    '46': 'IN',
    '47': 'IN',
    '48': 'MI',
    '49': 'MI',
    '5': 'IA',
    '50': 'IA',
    '51': 'IA',
    '52': 'IA',
    '53': 'WI',
    '54': 'WI',
    '55': 'MN',
    '56': 'MN',
    '57': 'SD',
    '58': 'ND',
    '59': 'MT',
    // South Central
    '6': 'IL',
    '60': 'IL',
    '61': 'IL',
    '62': 'IL',
    '63': 'MO',
    '64': 'MO',
    '65': 'MO',
    '66': 'KS',
    '67': 'KS',
    '68': 'NE',
    '69': 'NE',
    '7': 'TX',
    '70': 'LA',
    '71': 'LA',
    '72': 'AR',
    '73': 'OK',
    '74': 'OK',
    '75': 'TX',
    '76': 'TX',
    '77': 'TX',
    '78': 'TX',
    '79': 'TX',
    // Mountain West
    '8': 'CO',
    '80': 'CO',
    '81': 'CO',
    '82': 'WY',
    '83': 'ID',
    '84': 'UT',
    '85': 'AZ',
    '86': 'AZ',
    '87': 'NM',
    '88': 'NM',
    '89': 'NV',
    // West Coast
    '9': 'CA',
    '90': 'CA',
    '91': 'CA',
    '92': 'CA',
    '93': 'CA',
    '94': 'CA',
    '95': 'CA',
    '96': 'CA',
    '97': 'OR',
    '98': 'WA',
    '99': 'WA',
}
// State data table with tax rates, closing costs, etc.
const STATE_TABLE = {
    // Northeast
    CT: {
        closingBasePct: 0.7,
        mtgTaxPct: 0.1,
    },
    MA: {
        closingBasePct: 0.8,
        mtgTaxPct: 0.456,
    },
    NH: {
        closingBasePct: 0.7,
        mtgTaxPct: 0,
    },
    ME: {
        closingBasePct: 0.7,
        mtgTaxPct: 0.44,
    },
    VT: {
        closingBasePct: 0.7,
        mtgTaxPct: 0.1,
    },
    NJ: {
        closingBasePct: 0.8,
        mtgTaxPct: 0.2,
    },
    PR: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.5,
    },
    // Mid-Atlantic
    NY: {
        closingBasePct: 0.8,
        mtgTaxPct: 1.3,
        notes: 'Non-NYC',
    },
    NYC: {
        closingBasePct: 0.8,
        mtgTaxPct: 1.8,
        notes: 'NYC only',
    },
    PA: {
        closingBasePct: 0.7,
        mtgTaxPct: 0.2,
    },
    // Southeast
    DC: {
        closingBasePct: 0.7,
        mtgTaxPct: 1.1,
    },
    MD: {
        closingBasePct: 0.7,
        mtgTaxPct: 0.25,
    },
    VA: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.25,
    },
    WV: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.22,
    },
    NC: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.2,
    },
    SC: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.37,
    },
    FL: {
        closingBasePct: 0.7,
        mtgTaxPct: 0.55,
    },
    GA: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.115,
    },
    AL: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.15,
    },
    TN: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.115,
    },
    MS: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.115,
    },
    // Midwest
    KY: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    OH: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.1,
    },
    IN: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    MI: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.11,
    },
    IA: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    WI: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.1,
    },
    MN: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.23,
    },
    SD: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    ND: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    MT: {
        closingBasePct: 0.6,
        mtgTaxPct: 0,
    },
    // South Central
    IL: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.1,
    },
    MO: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    KS: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    NE: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    LA: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    AR: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    OK: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    TX: {
        closingBasePct: 0.6,
        mtgTaxPct: 0,
    },
    // Mountain West
    CO: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.01,
    },
    WY: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.01,
    },
    ID: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    UT: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.01,
    },
    AZ: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    NM: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    NV: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    // West Coast
    CA: {
        closingBasePct: 0.6,
        mtgTaxPct: 0,
    },
    OR: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    WA: {
        closingBasePct: 0.6,
        mtgTaxPct: 0.1,
    },
    // Default (fallback if state cannot be determined)
    DEFAULT: {
        closingBasePct: 0.65,
        mtgTaxPct: 0.1,
    },
}
// Base rate by credit tier and term
const BASE_RATE: Record<CreditTier, Record<TermYears, number>> = {
    Excellent: {
        10: 5.9,
        15: 6.1,
        20: 6.3,
        30: 6.5,
    },
    'Very good': {
        10: 6.1,
        15: 6.3,
        20: 6.5,
        30: 6.7,
    },
    Good: {
        10: 6.5,
        15: 6.7,
        20: 6.9,
        30: 7.1,
    },
    Fair: {
        10: 7.3,
        15: 7.5,
        20: 7.7,
        30: 7.9,
    },
    Poor: {
        10: 8.4,
        15: 8.6,
        20: 8.8,
        30: 9.0,
    },
    '': {
        10: 0,
        15: 0,
        20: 0,
        30: 0,
    }, // Default for empty selection
}
// VA funding fee rate
const VA_FUNDING_FEE_RATE = 0.5 // 0.5% for IRRRL
const MortgagePayoffCalculator: React.FC = () => {
    // Form state
    const [formData, setFormData] = useState<FormData>({
        balance: 0,
        yearsLeft: 0,
        homeValue: 0,
        creditTier: '',
        zipCode: '',
        isVA: false,
    })
    // UI state
    const [stateFromZip, setStateFromZip] = useState<State | ''>('')
    const [manualState, setManualState] = useState<State | ''>('')
    const [isFormValid, setIsFormValid] = useState<boolean>(false)
    const [rollCostsIntoLoan, setRollCostsIntoLoan] = useState<boolean>(true)
    const [result, setResult] = useState<CalculationResult | null>(null)
    const [isCalculated, setIsCalculated] = useState<boolean>(false)
    // Refs for animation
    const maxShortenRef = useRef<HTMLDivElement>(null)
    // Format currency for display
    const fmtUSD = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value)
    }
    // Format years for display
    const fmtYears = (years: number): string => {
        return years === 1 ? '1 year' : `${years} years`
    }
    // Parse currency input
    const parseUSD = (value: string): number => {
        if (!value) return 0
        return parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0
    }
    // Get state from ZIP code using longest prefix match
    const zipToState = (zip: string): State | '' => {
        if (!zip || zip.length === 0) return ''
        // Special handling for NYC ZIP codes
        if (
            zip.startsWith('100') ||
            zip.startsWith('101') ||
            zip.startsWith('102') ||
            zip.startsWith('103') ||
            zip.startsWith('104')
        ) {
            return 'NYC'
        }
        // Try to match with progressively shorter prefixes
        for (let i = zip.length; i > 0; i--) {
            const prefix = zip.substring(0, i)
            if (ZIP_PREFIX_TO_STATE[prefix]) {
                return ZIP_PREFIX_TO_STATE[prefix]
            }
        }
        return ''
    }
    // Get state assumptions from state code
    const getStateAssumptions = (state: State): StateData => {
        return STATE_TABLE[state] || STATE_TABLE.DEFAULT
    }
    // Handle input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ): void => {
        const { name, value } = e.target
        if (name === 'zipCode') {
            // Only allow numbers and limit to 5 digits
            const newZip = value.replace(/\D/g, '').substring(0, 5)
            const newState = newZip.length === 5 ? zipToState(newZip) : ''
            setStateFromZip(newState)
            setFormData({
                ...formData,
                [name]: newZip,
            })
        } else if (name === 'balance' || name === 'homeValue') {
            // Parse currency input
            setFormData({
                ...formData,
                [name]: parseUSD(value),
            })
        } else if (name === 'yearsLeft') {
            // Parse and clamp years
            const years = parseInt(value) || 0
            const clampedYears = Math.max(0, Math.min(40, years))
            setFormData({
                ...formData,
                [name]: clampedYears,
            })
        } else {
            // Handle other inputs
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }
    // Handle veteran status toggle
    const handleVeteranToggle = (status: boolean): void => {
        setFormData({
            ...formData,
            isVA: status,
        })
    }
    // Validate form inputs
    useEffect(() => {
        const { balance, yearsLeft, homeValue, creditTier, zipCode } = formData
        // Check if all required fields are filled and valid
        const isValid =
            balance > 0 &&
            yearsLeft > 0 &&
            homeValue > 0 &&
            creditTier !== '' &&
            (zipCode.length === 5 || manualState !== '')
        setIsFormValid(isValid)
    }, [formData, manualState])
    // Calculate mortgage payoff
    const calculatePayoff = (): void => {
        const { balance, yearsLeft, homeValue, creditTier, isVA } = formData
        // Get state from ZIP or manual selection
        const state = stateFromZip || (manualState as State)
        if (!state) return
        // Get state assumptions
        const stateData = getStateAssumptions(state)
        // Calculate LTV
        const ltv = homeValue > 0 ? balance / homeValue : 0
        const isHighLTV = ltv >= 0.97
        // Calculate closing costs
        const closingPct =
            stateData.closingBasePct +
            stateData.mtgTaxPct +
            (isVA ? VA_FUNDING_FEE_RATE : 0)
        // Calculate new loan amount (with or without rolled-in closing costs)
        const newLoan = rollCostsIntoLoan
            ? balance + (closingPct / 100) * balance
            : balance
        // Calculate rate adjustments and payments for each term
        const candidateTerms: TermResult[] = []
        const candidateTermYears: TermYears[] = [10, 15, 20]
        for (const termYears of candidateTermYears) {
            // Base rate for this term and credit profile
            let rateAdjustment = 0
            // LTV adjustments
            if (ltv > 0.9) rateAdjustment += 0.25
            else if (ltv > 0.85) rateAdjustment += 0.125
            else if (ltv <= 0.7) rateAdjustment -= 0.125
            // VA loan adjustment
            if (isVA) rateAdjustment -= 0.25
            // Calculate adjusted rate (clamped between 2% and 12%)
            const baseRate = BASE_RATE[creditTier][termYears]
            const adjustedRate = Math.max(Math.min(baseRate + rateAdjustment, 12), 2)
            // Calculate monthly payment
            const monthlyRate = adjustedRate / 100 / 12
            const numberOfPayments = termYears * 12
            let monthlyPI = 0
            if (monthlyRate > 0) {
                monthlyPI =
                    (newLoan *
                        monthlyRate *
                        Math.pow(1 + monthlyRate, numberOfPayments)) /
                    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
            } else {
                monthlyPI = newLoan / numberOfPayments
            }
            candidateTerms.push({
                termYears,
                rate: adjustedRate,
                monthlyPI,
            })
        }
        // Calculate max shortening
        let maxShorten = 0
        let minCandidateTerm = Math.min(...candidateTermYears)
        if (yearsLeft > minCandidateTerm) {
            maxShorten = yearsLeft - minCandidateTerm
        }
        // Calculate interest saved (simplified)
        // First get the payment for the current loan at 30-year rates
        const currentRate = BASE_RATE[creditTier][30]
        const currentMonthlyRate = currentRate / 100 / 12
        const currentMonths = yearsLeft * 12
        let currentPayment = 0
        if (currentMonthlyRate > 0) {
            currentPayment =
                (balance *
                    currentMonthlyRate *
                    Math.pow(1 + currentMonthlyRate, currentMonths)) /
                (Math.pow(1 + currentMonthlyRate, currentMonths) - 1)
        } else {
            currentPayment = balance / currentMonths
        }
        // Calculate total interest for current loan
        const currentTotalPayments = currentPayment * currentMonths
        const currentTotalInterest = currentTotalPayments - balance
        // Calculate interest for shortest term
        const shortestTerm = candidateTerms.reduce((prev, curr) =>
            prev.termYears < curr.termYears ? prev : curr,
        )
        const shortestMonths = shortestTerm.termYears * 12
        const shortestTotalPayments = shortestTerm.monthlyPI * shortestMonths
        const shortestTotalInterest = shortestTotalPayments - balance
        // Calculate interest saved
        const extraInterestSaved = Math.max(
            currentTotalInterest - shortestTotalInterest,
            0,
        )
        // Set results
        setResult({
            maxShorten,
            candidateTerms,
            ltv,
            isHighLTV,
            extraInterestSaved,
        })
        // Set calculation flag
        setIsCalculated(true)
        // Animate result
        if (maxShortenRef.current) {
            maxShortenRef.current.style.opacity = '0'
            setTimeout(() => {
                if (maxShortenRef.current) {
                    maxShortenRef.current.style.opacity = '1'
                    maxShortenRef.current.style.transition = 'opacity 150ms ease-in'
                }
            }, 50)
        }
    }
    return (
        <>
            <Header />
            <div className="max-w-[1200px] mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left card - Input form */}
                <div className="rounded-3xl bg-[#F4F5F7] p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                        Mortgage payoff calculator
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Let's see how much faster you could pay off your current mortgage if
                        you refinance to a shorter term. All fields are required.
                    </p>
                    {/* Current mortgage balance */}
                    <div className="mb-6">
                        <label className="flex items-center gap-2 mb-2 font-medium">
                            Current mortgage balance
                            <button
                                aria-label="More information about mortgage balance"
                                className="text-gray-500"
                            >
                                <InfoIcon size={18} />
                            </button>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                $
                            </span>
                            <input
                                type="text"
                                name="balance"
                                value={
                                    formData.balance === 0 ? '' : formData.balance.toLocaleString()
                                }
                                onChange={handleInputChange}
                                className="w-full h-12 pl-8 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="balance-desc"
                            />
                        </div>
                        <div id="balance-desc" className="sr-only">
                            Enter your current mortgage balance
                        </div>
                    </div>
                    {/* Years left on your loan */}
                    <div className="mb-6">
                        <label className="flex items-center gap-2 mb-2 font-medium">
                            Years left on your loan
                            <button
                                aria-label="More information about years left"
                                className="text-gray-500"
                            >
                                <InfoIcon size={18} />
                            </button>
                        </label>
                        <input
                            type="number"
                            name="yearsLeft"
                            value={formData.yearsLeft === 0 ? '' : formData.yearsLeft}
                            onChange={handleInputChange}
                            min="0"
                            max="40"
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                            aria-describedby="years-left-desc"
                        />
                        <div id="years-left-desc" className="sr-only">
                            Enter the number of years remaining on your mortgage
                        </div>
                    </div>
                    {/* Current home value */}
                    <div className="mb-6">
                        <label className="flex items-center gap-2 mb-2 font-medium">
                            Current home value
                            <button
                                aria-label="More information about home value"
                                className="text-gray-500"
                            >
                                <InfoIcon size={18} />
                            </button>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                $
                            </span>
                            <input
                                type="text"
                                name="homeValue"
                                value={
                                    formData.homeValue === 0
                                        ? ''
                                        : formData.homeValue.toLocaleString()
                                }
                                onChange={handleInputChange}
                                className="w-full h-12 pl-8 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="home-value-desc"
                            />
                        </div>
                        <div id="home-value-desc" className="sr-only">
                            Enter your current home value
                        </div>
                    </div>
                    {/* Credit profile and ZIP code */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Credit profile */}
                        <div>
                            <label className="block mb-2 font-medium">Credit profile</label>
                            <select
                                name="creditTier"
                                value={formData.creditTier}
                                onChange={handleInputChange}
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70 appearance-none bg-white"
                            >
                                <option value="">Select Range</option>
                                <option value="Excellent">Excellent (760+)</option>
                                <option value="Very good">Very good (720–759)</option>
                                <option value="Good">Good (680–719)</option>
                                <option value="Fair">Fair (640–679)</option>
                                <option value="Poor">Poor (≤639)</option>
                            </select>
                        </div>
                        {/* ZIP code */}
                        <div>
                            <label className="block mb-2 font-medium">ZIP code</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                placeholder="00000"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                            />
                        </div>
                    </div>
                    {/* Manual state selection if ZIP is unknown */}
                    {formData.zipCode.length === 5 && !stateFromZip && (
                        <div className="mb-6">
                            <label className="block mb-2 font-medium">
                                State (ZIP not recognized)
                            </label>
                            <select
                                value={manualState}
                                onChange={(e) => setManualState(e.target.value as State)}
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                            >
                                <option value="">Select State</option>
                                {Object.keys(STATE_TABLE)
                                    .filter((key) => key !== 'DEFAULT')
                                    .map((state) => (
                                        <option key={state} value={state as State}>
                                            {state}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    )}
                    {/* Veteran status */}
                    <div className="mb-8">
                        <label className="block mb-2 font-medium">
                            Are you a veteran or currently serving in the military?
                        </label>
                        <div className="inline-flex rounded-full bg-gray-100 p-1">
                            <button
                                type="button"
                                onClick={() => handleVeteranToggle(true)}
                                aria-pressed={formData.isVA}
                                className={`py-2 px-6 rounded-full transition-colors ${formData.isVA ? 'bg-blue-100 text-blue-900' : 'text-gray-700'}`}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                onClick={() => handleVeteranToggle(false)}
                                aria-pressed={!formData.isVA}
                                className={`py-2 px-6 rounded-full transition-colors ${!formData.isVA ? 'bg-gray-800 text-white' : 'text-gray-700'}`}
                            >
                                No
                            </button>
                        </div>
                    </div>
                    {/* Roll costs into loan checkbox */}
                    <div className="mb-8">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={rollCostsIntoLoan}
                                onChange={(e) => setRollCostsIntoLoan(e.target.checked)}
                                className="w-4 h-4"
                            />
                            <span>Roll closing costs into loan</span>
                        </label>
                    </div>
                    {/* Calculate button */}
                    <button
                        type="button"
                        onClick={calculatePayoff}
                        disabled={!isFormValid}
                        className={`w-full h-12 rounded-full text-lg font-medium transition-colors ${isFormValid ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                        Calculate
                    </button>
                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-sm">
                        <span className="text-red-500 font-medium">Rocket Mortgage</span>
                        <span className="text-gray-400">•</span>
                        <a href="#" className="text-gray-500 underline">
                            Legal disclosures
                        </a>
                    </div>
                </div>
                {/* Right card - Results */}
                <div className="rounded-3xl bg-[#E7ECFF] p-6 md:p-8" aria-live="polite">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">
                        You can shorten your term by up to
                    </h2>
                    <div className="mb-8">
                        <div
                            ref={maxShortenRef}
                            className="text-5xl md:text-6xl font-bold text-gray-800 tabular-nums"
                        >
                            {isCalculated
                                ? result && result.maxShorten > 0
                                    ? fmtYears(result.maxShorten)
                                    : '0 years'
                                : '—'}
                        </div>
                    </div>
                    {/* Info panel */}
                    <div className="rounded-2xl bg-white/45 p-5">
                        <h3 className="font-semibold text-slate-900 mb-2">
                            A shorter-term mortgage means you'll pay less interest overall.
                        </h3>
                        <p className="text-gray-700">
                            This can save you money over the lifetime of the loan. Your monthly
                            payment will be higher to pay off the loan more quickly.
                        </p>
                    </div>
                    {/* Show high LTV warning if applicable */}
                    {isCalculated && result?.isHighLTV && (
                        <div className="mt-4 text-sm text-amber-700">
                            <p>
                                Your loan-to-value ratio is high. This may limit your refinancing
                                options.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default MortgagePayoffCalculator
