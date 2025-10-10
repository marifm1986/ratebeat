import { InfoIcon, MapPinIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
// Types
type CreditTier = '760+' | '720–759' | '680–719' | '640–679' | '≤639'
type State = keyof typeof STATE_COSTS
type DownPaymentMode = 'pct' | 'amt'
type ActiveChip = '3' | '5' | '10' | '20' | 'other'
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
// State costs table
const STATE_COSTS: Record<
    string,
    {
        basePct: number
        mtgTaxPct: number
        transferPct: number
    }
> = {
    // Default fallback
    DEFAULT: {
        basePct: 2.5,
        mtgTaxPct: 0,
        transferPct: 0,
    },
    // Northeast
    CT: {
        basePct: 2.0,
        mtgTaxPct: 0.1,
        transferPct: 0.75,
    },
    MA: {
        basePct: 2.2,
        mtgTaxPct: 0.456,
        transferPct: 0.456,
    },
    NH: {
        basePct: 1.8,
        mtgTaxPct: 0,
        transferPct: 0.15,
    },
    ME: {
        basePct: 1.8,
        mtgTaxPct: 0.44,
        transferPct: 0.44,
    },
    VT: {
        basePct: 1.8,
        mtgTaxPct: 0.1,
        transferPct: 0.5,
    },
    NJ: {
        basePct: 2.2,
        mtgTaxPct: 0.2,
        transferPct: 1.0,
    },
    PR: {
        basePct: 2.0,
        mtgTaxPct: 0.5,
        transferPct: 0.5,
    },
    // Mid-Atlantic
    NY: {
        basePct: 2.2,
        mtgTaxPct: 1.3,
        transferPct: 0.4,
    },
    NYC: {
        basePct: 2.5,
        mtgTaxPct: 1.8,
        transferPct: 1.425,
    },
    PA: {
        basePct: 2.0,
        mtgTaxPct: 0.2,
        transferPct: 1.0,
    },
    // Southeast
    DC: {
        basePct: 2.2,
        mtgTaxPct: 1.1,
        transferPct: 1.1,
    },
    MD: {
        basePct: 2.0,
        mtgTaxPct: 0.25,
        transferPct: 0.5,
    },
    VA: {
        basePct: 1.8,
        mtgTaxPct: 0.25,
        transferPct: 0.1,
    },
    WV: {
        basePct: 1.7,
        mtgTaxPct: 0.22,
        transferPct: 0.22,
    },
    NC: {
        basePct: 1.8,
        mtgTaxPct: 0.2,
        transferPct: 0.2,
    },
    SC: {
        basePct: 1.8,
        mtgTaxPct: 0.37,
        transferPct: 0.37,
    },
    FL: {
        basePct: 2.0,
        mtgTaxPct: 0.55,
        transferPct: 0.7,
    },
    GA: {
        basePct: 1.8,
        mtgTaxPct: 0.115,
        transferPct: 0.1,
    },
    AL: {
        basePct: 1.7,
        mtgTaxPct: 0.15,
        transferPct: 0.1,
    },
    TN: {
        basePct: 1.7,
        mtgTaxPct: 0.115,
        transferPct: 0.1,
    },
    MS: {
        basePct: 1.7,
        mtgTaxPct: 0.115,
        transferPct: 0.1,
    },
    // Midwest
    KY: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    OH: {
        basePct: 1.8,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    IN: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    MI: {
        basePct: 1.8,
        mtgTaxPct: 0.11,
        transferPct: 0.11,
    },
    IA: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.16,
    },
    WI: {
        basePct: 1.8,
        mtgTaxPct: 0.1,
        transferPct: 0.3,
    },
    MN: {
        basePct: 1.8,
        mtgTaxPct: 0.23,
        transferPct: 0.33,
    },
    SD: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    ND: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    MT: {
        basePct: 1.7,
        mtgTaxPct: 0,
        transferPct: 0,
    },
    // South Central
    IL: {
        basePct: 1.8,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    MO: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    KS: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    NE: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    LA: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    AR: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.33,
    },
    OK: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    TX: {
        basePct: 2.5,
        mtgTaxPct: 0,
        transferPct: 0,
    },
    // Mountain West
    CO: {
        basePct: 1.8,
        mtgTaxPct: 0.01,
        transferPct: 0.01,
    },
    WY: {
        basePct: 2.5,
        mtgTaxPct: 0,
        transferPct: 0,
    },
    ID: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    UT: {
        basePct: 1.7,
        mtgTaxPct: 0.01,
        transferPct: 0.01,
    },
    AZ: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    NM: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    NV: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    // West Coast
    CA: {
        basePct: 2.2,
        mtgTaxPct: 0,
        transferPct: 0.11,
    },
    OR: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 0.1,
    },
    WA: {
        basePct: 1.7,
        mtgTaxPct: 0.1,
        transferPct: 1.28,
    },
}
// Minimum down payment by credit tier
const MIN_DOWN_BY_TIER: Record<CreditTier, number> = {
    '760+': 3,
    '720–759': 3,
    '680–719': 5,
    '640–679': 5,
    '≤639': 10,
}
const DownPaymentCalculator: React.FC = () => {
    // Form state
    const [zip, setZip] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [annualIncome, setAnnualIncome] = useState<number>(0)
    const [creditTier, setCreditTier] = useState<CreditTier>('720–759')
    const [downMode, setDownMode] = useState<DownPaymentMode>('pct')
    const [downPct, setDownPct] = useState<number>(20)
    const [downAmt, setDownAmt] = useState<number>(0)
    const [activeChip, setActiveChip] = useState<ActiveChip>('20')
    const [customDownInput, setCustomDownInput] = useState<string>('')
    // UI state
    const [stateFromZip, setStateFromZip] = useState<State | ''>('')
    const [manualState, setManualState] = useState<State | ''>('')
    const [isCalculated, setIsCalculated] = useState<boolean>(false)
    const [autoCalc, setAutoCalc] = useState<boolean>(false)
    const [isFormValid, setIsFormValid] = useState<boolean>(false)
    // Result state
    const [downPayment, setDownPayment] = useState<number>(0)
    const [closingCosts, setClosingCosts] = useState<number>(0)
    const [cashToBuy, setCashToBuy] = useState<number>(0)
    // Refs for animation
    const resultsRef = useRef<HTMLDivElement>(null)
    // Format currency for display
    const fmtUSD = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value)
    }
    // Parse currency input
    const parseUSD = (value: string): number => {
        if (!value) return 0
        return parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0
    }
    // Get state from ZIP code using longest prefix match
    const zipToState = (zip: string): State | '' => {
        if (!zip || zip.length === 0) return ''
        // Try to match with progressively shorter prefixes
        for (let i = zip.length; i > 0; i--) {
            const prefix = zip.substring(0, i)
            if (ZIP_PREFIX_TO_STATE[prefix]) {
                return ZIP_PREFIX_TO_STATE[prefix]
            }
        }
        return ''
    }
    // Get state costs from state code
    const getStateFromZip = (
        zip: string,
    ): {
        basePct: number
        mtgTaxPct: number
        transferPct: number
    } => {
        const state = zipToState(zip) || manualState
        if (state && STATE_COSTS[state]) {
            return STATE_COSTS[state]
        }
        return STATE_COSTS.DEFAULT
    }
    // Handle ZIP input change
    const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newZip = e.target.value.replace(/\D/g, '').substring(0, 5)
        setZip(newZip)
        if (newZip.length === 5) {
            const newState = zipToState(newZip)
            setStateFromZip(newState)
        } else {
            setStateFromZip('')
        }
    }
    // Handle price input change
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newPrice = parseUSD(e.target.value)
        setPrice(newPrice)
        // Update down amount if using percentage
        if (downMode === 'pct') {
            setDownAmt(Math.round((downPct / 100) * newPrice))
        }
    }
    // Handle income input change
    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAnnualIncome(parseUSD(e.target.value))
    }
    // Handle credit tier selection
    const handleCreditTierChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        setCreditTier(e.target.value as CreditTier)
    }
    // Handle down payment chip selection
    const handleChipSelect = (chip: ActiveChip): void => {
        setActiveChip(chip)
        if (chip !== 'other') {
            const pct = parseInt(chip)
            setDownPct(pct)
            setDownMode('pct')
            setDownAmt(Math.round((pct / 100) * price))
            setCustomDownInput(pct.toString() + '%')
        }
        // Auto recalculate if already calculated once
        if (autoCalc) {
            calculateResults()
        }
    }
    // Handle custom down payment mode toggle
    const handleDownModeToggle = (mode: DownPaymentMode): void => {
        setDownMode(mode)
        if (mode === 'pct') {
            setCustomDownInput(downPct.toString() + '%')
        } else {
            setCustomDownInput(downAmt.toLocaleString())
        }
        // Auto recalculate if already calculated once
        if (autoCalc) {
            calculateResults()
        }
    }
    // Handle custom down payment input
    const handleCustomDownChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const value = e.target.value
        setCustomDownInput(value)
        if (downMode === 'pct') {
            // Parse percentage
            const pct = parseFloat(value.replace(/[^0-9.]/g, '')) || 0
            const clampedPct = Math.min(Math.max(pct, 0), 100)
            setDownPct(clampedPct)
            setDownAmt(Math.round((clampedPct / 100) * price))
        } else {
            // Parse amount
            const amt = parseUSD(value)
            const clampedAmt = Math.min(Math.max(amt, 0), price)
            setDownAmt(clampedAmt)
            setDownPct(price > 0 ? (clampedAmt / price) * 100 : 0)
        }
        // Auto recalculate if already calculated once
        if (autoCalc) {
            calculateResults()
        }
    }
    // Calculate results
    const calculateResults = (): void => {
        // Calculate down payment
        const calculatedDownPayment =
            downMode === 'pct'
                ? Math.round((downPct / 100) * price)
                : Math.min(Math.max(downAmt, 0), price)
        // Calculate loan amount
        const loanAmount = price - calculatedDownPayment
        // Get state costs
        const { basePct, mtgTaxPct, transferPct } = getStateFromZip(zip)
        // Calculate closing costs
        const calculatedClosingCosts = Math.round(
            (basePct / 100) * price +
            (mtgTaxPct / 100) * loanAmount +
            (transferPct / 100) * price,
        )
        // Calculate total cash to buy
        const calculatedCashToBuy = calculatedDownPayment + calculatedClosingCosts
        // Update state
        setDownPayment(calculatedDownPayment)
        setClosingCosts(calculatedClosingCosts)
        setCashToBuy(calculatedCashToBuy)
        // Set calculated flag
        setIsCalculated(true)
        setAutoCalc(true)
        // Scroll to results for accessibility
        if (resultsRef.current) {
            resultsRef.current.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }
    // Check if form is valid
    useEffect(() => {
        const isZipValid = zip.length === 5 || manualState !== ''
        const isPriceValid = price > 0
        setIsFormValid(isZipValid && isPriceValid)
    }, [zip, price, manualState])
    // Sync down payment amount and percentage when price changes
    useEffect(() => {
        if (price > 0) {
            if (downMode === 'pct') {
                setDownAmt(Math.round((downPct / 100) * price))
            } else {
                setDownPct((downAmt / price) * 100)
            }
        }
    }, [price])
    return (
        <>
            <div className="max-w-[1200px] mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left card - Input form */}
                <div className="rounded-3xl bg-[#F3F5F7] p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                        Down payment calculator
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Let's learn how much cash you need to buy a home by estimating your
                        down payment and closing costs. All fields are required.
                    </p>
                    {/* ZIP code input */}
                    <div className="mb-6">
                        <label htmlFor="zip" className="block mb-2 font-medium">
                            Where do you want to buy a home?
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="zip"
                                value={zip}
                                onChange={handleZipChange}
                                placeholder="ZIP"
                                className="w-full h-12 px-4 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="zip-desc"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                                <MapPinIcon size={20} />
                            </div>
                        </div>
                        <div id="zip-desc" className="sr-only">
                            Enter the ZIP code where you want to buy a home
                        </div>
                    </div>
                    {/* Manual state selection if ZIP is unknown */}
                    {zip.length === 5 && !stateFromZip && (
                        <div className="mb-6">
                            <label htmlFor="manualState" className="block mb-2 font-medium">
                                State (ZIP not recognized)
                            </label>
                            <select
                                id="manualState"
                                value={manualState}
                                onChange={(e) => setManualState(e.target.value as State)}
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                            >
                                <option value="">Select State</option>
                                {Object.keys(STATE_COSTS)
                                    .filter((key) => key !== 'DEFAULT')
                                    .map((state) => (
                                        <option key={state} value={state as State}>
                                            {state}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    )}
                    {/* Home price input */}
                    <div className="mb-6">
                        <label htmlFor="price" className="block mb-2 font-medium">
                            What home price are you considering?
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                $
                            </span>
                            <input
                                type="text"
                                id="price"
                                value={price === 0 ? '' : price.toLocaleString()}
                                onChange={handlePriceChange}
                                className="w-full h-12 pl-8 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="price-desc"
                            />
                        </div>
                        <div id="price-desc" className="sr-only">
                            Enter the home price you're considering
                        </div>
                    </div>
                    {/* Annual income input */}
                    <div className="mb-6">
                        <label htmlFor="income" className="block mb-2 font-medium">
                            What's your yearly income before taxes?
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                $
                            </span>
                            <input
                                type="text"
                                id="income"
                                value={annualIncome === 0 ? '' : annualIncome.toLocaleString()}
                                onChange={handleIncomeChange}
                                className="w-full h-12 pl-8 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="income-desc"
                            />
                        </div>
                        <div id="income-desc" className="sr-only">
                            Enter your yearly income before taxes
                        </div>
                    </div>
                    {/* Credit profile select */}
                    <div className="mb-8">
                        <label htmlFor="creditTier" className="block mb-2 font-medium">
                            What's your credit profile?
                        </label>
                        <select
                            id="creditTier"
                            value={creditTier}
                            onChange={handleCreditTierChange}
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70 appearance-none bg-white"
                            aria-describedby="credit-desc"
                        >
                            <option value="760+">760+</option>
                            <option value="720–759">720–759</option>
                            <option value="680–719">680–719</option>
                            <option value="640–679">640–679</option>
                            <option value="≤639">≤639</option>
                        </select>
                        <div id="credit-desc" className="sr-only">
                            Select your credit score range
                        </div>
                    </div>
                    {/* Calculate button */}
                    <button
                        type="button"
                        onClick={calculateResults}
                        disabled={!isFormValid}
                        className={`w-full h-12 rounded-full text-white font-medium transition-colors ${isFormValid ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                        Calculate
                    </button>
                    {/* Footer */}
                    <div className="mt-6 text-sm text-center text-gray-500 flex items-center justify-center gap-2">
                        <span className="text-red-500 font-medium">RateBeat</span>
                        <span className="text-gray-400">•</span>
                        <a href="#" className="text-gray-500 underline">
                            Legal disclosures
                        </a>
                    </div>
                </div>
                {/* Right card - Results */}
                <div
                    ref={resultsRef}
                    className="rounded-3xl bg-[#F4F0E1] p-6 md:p-8"
                    aria-live="polite"
                >
                    {isCalculated ? (
                        <>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="text-gray-700 text-sm mb-1">Cash to buy</div>
                                    <div className="text-5xl md:text-6xl font-bold tabular-nums">
                                        {fmtUSD(cashToBuy)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-8">
                                This includes down payment and closing costs for the home price
                                you entered.
                            </p>
                            {/* Down payment slider visualization */}
                            <div className="relative h-12 bg-[#E6DFC8] rounded-full mb-2">
                                <div
                                    className="absolute left-0 top-0 bottom-0 bg-[#3C4016] rounded-full"
                                    style={{
                                        width: `${Math.min((downPayment / price) * 100, 100)}%`,
                                    }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-sm mb-6">
                                <div>Down payment</div>
                                <div className="font-semibold">{fmtUSD(price)}</div>
                            </div>
                            {/* Down payment percentage chips */}
                            <div className="flex flex-wrap gap-3 mt-3 mb-6">
                                {['3', '5', '10', '20'].map((pct) => (
                                    <button
                                        key={pct}
                                        onClick={() => handleChipSelect(pct as ActiveChip)}
                                        className={`inline-flex items-center gap-2 rounded-full border px-4 h-9 transition-colors ${activeChip === pct ? 'bg-[#3C4016] text-white border-[#3C4016]' : 'bg-white border-gray-300 hover:bg-gray-50'}`}
                                        aria-pressed={activeChip === pct}
                                    >
                                        {pct}%
                                    </button>
                                ))}
                                <button
                                    onClick={() => handleChipSelect('other')}
                                    className={`inline-flex items-center gap-2 rounded-full border px-4 h-9 transition-colors ${activeChip === 'other' ? 'bg-[#3C4016] text-white border-[#3C4016]' : 'bg-white border-gray-300 hover:bg-gray-50'}`}
                                    aria-pressed={activeChip === 'other'}
                                >
                                    Other
                                </button>
                            </div>
                            {/* Custom down payment input (when "Other" is selected) */}
                            {activeChip === 'other' && (
                                <div className="mb-6">
                                    <div className="flex rounded-lg bg-gray-200 p-1 w-40 mb-2">
                                        <button
                                            type="button"
                                            className={`flex-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${downMode === 'pct' ? 'bg-white text-gray-800 shadow' : 'text-gray-700'}`}
                                            onClick={() => handleDownModeToggle('pct')}
                                            aria-pressed={downMode === 'pct'}
                                        >
                                            %
                                        </button>
                                        <button
                                            type="button"
                                            className={`flex-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${downMode === 'amt' ? 'bg-white text-gray-800 shadow' : 'text-gray-700'}`}
                                            onClick={() => handleDownModeToggle('amt')}
                                            aria-pressed={downMode === 'amt'}
                                        >
                                            $
                                        </button>
                                    </div>
                                    <div className="relative w-full md:w-2/3">
                                        {downMode === 'amt' && (
                                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                                $
                                            </span>
                                        )}
                                        <input
                                            type="text"
                                            value={customDownInput}
                                            onChange={handleCustomDownChange}
                                            className={`w-full h-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black/70 ${downMode === 'amt' ? 'pl-8' : 'pl-4'}`}
                                        />
                                        {downMode === 'pct' && (
                                            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                                %
                                            </span>
                                        )}
                                    </div>
                                    {/* Minimum down payment warning */}
                                    {downPct < MIN_DOWN_BY_TIER[creditTier] && (
                                        <div className="mt-2 text-amber-700 text-sm">
                                            Programs at this credit tier often require ≥
                                            {MIN_DOWN_BY_TIER[creditTier]}%.
                                        </div>
                                    )}
                                </div>
                            )}
                            {/* Amount breakdown */}
                            <div className="border rounded-2xl bg-white/60 px-5 py-4 mb-4">
                                <div className="grid grid-cols-2 items-center py-4 border-b">
                                    <div>Down payment</div>
                                    <div className="text-right font-semibold tabular-nums">
                                        {fmtUSD(downPayment)}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 items-center py-4 border-b">
                                    <div className="flex items-center gap-1">
                                        Closing costs
                                        <button
                                            type="button"
                                            aria-label="Closing costs information"
                                            className="text-gray-400 hover:text-gray-600"
                                        >
                                            <InfoIcon size={16} />
                                        </button>
                                    </div>
                                    <div className="text-right font-semibold tabular-nums">
                                        {fmtUSD(closingCosts)}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 items-center py-4">
                                    <div>Cash to buy</div>
                                    <div className="text-right font-semibold tabular-nums text-lg">
                                        {fmtUSD(cashToBuy)}
                                    </div>
                                </div>
                            </div>
                            {/* CTA section */}
                            <div className="flex items-center justify-between mt-6">
                                <div className="text-sm text-gray-700">
                                    Start an application to see what home price you can prequalify
                                    for.
                                </div>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border px-5 h-10 bg-white hover:bg-gray-50 transition-colors"
                                >
                                    Get prequalified
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                                            fill="#333"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-500 text-center p-8">
                            <div>
                                <p className="mb-2">Enter your details and click Calculate</p>
                                <p>to see your estimated cash needed to buy a home</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default DownPaymentCalculator
