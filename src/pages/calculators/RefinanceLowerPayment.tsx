import { InfoIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
// Define types for the application
interface FormData {
    currentBalance: number
    currentMonthly: number
    homeValue: number
    creditProfile: CreditTier
    zipCode: string
    isVeteran: boolean
}
type CreditTier = 'Excellent' | 'Very good' | 'Good' | 'Fair' | 'Poor' | ''
type State = keyof typeof STATE_TABLE
interface StateData {
    propertyTaxPct: number
    insAnnualPer100k: number
    closingCostRateBase: number
    mtgTaxRate: number
    notes?: string
}
interface CalculationResult {
    savingsMonthly: number
    newRate: number
    newPMIMonthly: number
    newTotal: number
    closingCosts: number
    breakeven: number | null
    ltv: number
    isUnderwater: boolean
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
    '10': 'NY',
    '11': 'NY',
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
// State data table with tax rates, insurance rates, closing costs, etc.
const STATE_TABLE = {
    // Northeast
    CT: {
        propertyTaxPct: 2.14,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.7,
        mtgTaxRate: 0.1,
    },
    MA: {
        propertyTaxPct: 1.17,
        insAnnualPer100k: 550,
        closingCostRateBase: 0.8,
        mtgTaxRate: 0.456,
    },
    NH: {
        propertyTaxPct: 2.18,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.7,
        mtgTaxRate: 0,
    },
    ME: {
        propertyTaxPct: 1.36,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.7,
        mtgTaxRate: 0.44,
    },
    VT: {
        propertyTaxPct: 1.9,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.7,
        mtgTaxRate: 0.1,
    },
    NJ: {
        propertyTaxPct: 2.49,
        insAnnualPer100k: 500,
        closingCostRateBase: 0.8,
        mtgTaxRate: 0.2,
    },
    PR: {
        propertyTaxPct: 0.58,
        insAnnualPer100k: 700,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.5,
    },
    // Mid-Atlantic
    NY: {
        propertyTaxPct: 1.7,
        insAnnualPer100k: 500,
        closingCostRateBase: 0.8,
        mtgTaxRate: 1.3,
        notes: 'Non-NYC',
    },
    NYC: {
        propertyTaxPct: 1.7,
        insAnnualPer100k: 500,
        closingCostRateBase: 0.8,
        mtgTaxRate: 1.8,
        notes: 'NYC only',
    },
    PA: {
        propertyTaxPct: 1.58,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.7,
        mtgTaxRate: 0.2,
    },
    // Southeast
    DC: {
        propertyTaxPct: 0.56,
        insAnnualPer100k: 500,
        closingCostRateBase: 0.7,
        mtgTaxRate: 1.1,
    },
    MD: {
        propertyTaxPct: 1.09,
        insAnnualPer100k: 550,
        closingCostRateBase: 0.7,
        mtgTaxRate: 0.25,
    },
    VA: {
        propertyTaxPct: 0.8,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.25,
    },
    WV: {
        propertyTaxPct: 0.58,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.22,
    },
    NC: {
        propertyTaxPct: 0.84,
        insAnnualPer100k: 550,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.2,
    },
    SC: {
        propertyTaxPct: 0.57,
        insAnnualPer100k: 600,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.37,
    },
    FL: {
        propertyTaxPct: 0.86,
        insAnnualPer100k: 650,
        closingCostRateBase: 0.7,
        mtgTaxRate: 0.55,
    },
    GA: {
        propertyTaxPct: 0.93,
        insAnnualPer100k: 550,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.115,
    },
    AL: {
        propertyTaxPct: 0.41,
        insAnnualPer100k: 600,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.15,
    },
    TN: {
        propertyTaxPct: 0.71,
        insAnnualPer100k: 500,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.115,
    },
    MS: {
        propertyTaxPct: 0.8,
        insAnnualPer100k: 600,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.115,
    },
    // Midwest
    KY: {
        propertyTaxPct: 0.86,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    OH: {
        propertyTaxPct: 1.56,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.1,
    },
    IN: {
        propertyTaxPct: 0.85,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    MI: {
        propertyTaxPct: 1.54,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.11,
    },
    IA: {
        propertyTaxPct: 1.53,
        insAnnualPer100k: 350,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    WI: {
        propertyTaxPct: 1.76,
        insAnnualPer100k: 350,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.1,
    },
    MN: {
        propertyTaxPct: 1.12,
        insAnnualPer100k: 350,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.23,
    },
    SD: {
        propertyTaxPct: 1.22,
        insAnnualPer100k: 350,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    ND: {
        propertyTaxPct: 0.98,
        insAnnualPer100k: 350,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    MT: {
        propertyTaxPct: 0.84,
        insAnnualPer100k: 350,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0,
    },
    // South Central
    IL: {
        propertyTaxPct: 2.27,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.1,
    },
    MO: {
        propertyTaxPct: 0.97,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    KS: {
        propertyTaxPct: 1.41,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    NE: {
        propertyTaxPct: 1.73,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    LA: {
        propertyTaxPct: 0.55,
        insAnnualPer100k: 600,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    AR: {
        propertyTaxPct: 0.62,
        insAnnualPer100k: 550,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    OK: {
        propertyTaxPct: 0.9,
        insAnnualPer100k: 500,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    TX: {
        propertyTaxPct: 1.9,
        insAnnualPer100k: 500,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0,
    },
    // Mountain West
    CO: {
        propertyTaxPct: 0.51,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.01,
    },
    WY: {
        propertyTaxPct: 0.61,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.01,
    },
    ID: {
        propertyTaxPct: 0.69,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    UT: {
        propertyTaxPct: 0.66,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.01,
    },
    AZ: {
        propertyTaxPct: 0.62,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    NM: {
        propertyTaxPct: 0.8,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    NV: {
        propertyTaxPct: 0.69,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    // West Coast
    CA: {
        propertyTaxPct: 0.75,
        insAnnualPer100k: 400,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0,
    },
    OR: {
        propertyTaxPct: 0.97,
        insAnnualPer100k: 350,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    WA: {
        propertyTaxPct: 0.92,
        insAnnualPer100k: 350,
        closingCostRateBase: 0.6,
        mtgTaxRate: 0.1,
    },
    // Default (fallback if state cannot be determined)
    DEFAULT: {
        propertyTaxPct: 1.2,
        insAnnualPer100k: 450,
        closingCostRateBase: 0.65,
        mtgTaxRate: 0.1,
    },
}
// Base rate by credit tier
const BASE_RATE_BY_TIER: Record<CreditTier, number> = {
    Excellent: 6.25,
    'Very good': 6.5,
    Good: 6.9,
    Fair: 7.6,
    Poor: 8.6,
    '': 0, // Default value for empty selection
}
// PMI rates by credit tier
const PMI_RATE_BY_TIER: Record<CreditTier, number> = {
    Excellent: 0.35,
    'Very good': 0.45,
    Good: 0.65,
    Fair: 0.95,
    Poor: 1.35,
    '': 0, // Default value for empty selection
}
// VA funding fee rate
const VA_FUNDING_FEE_RATE = 0.5 // 0.5% for IRRRL
const RefinanceLowerPayment: React.FC = () => {
    // State for form inputs
    const [formData, setFormData] = useState<FormData>({
        currentBalance: 0,
        currentMonthly: 0,
        homeValue: 0,
        creditProfile: '',
        zipCode: '',
        isVeteran: false,
    })
    // State for calculation results
    const [result, setResult] = useState<CalculationResult | null>(null)
    // State for manual state selection if ZIP is unknown
    const [manualState, setManualState] = useState<State | ''>('')
    const [stateFromZip, setStateFromZip] = useState<State | ''>('')
    const [isFormValid, setIsFormValid] = useState<boolean>(false)
    const [rollCostsIntoLoan, setRollCostsIntoLoan] = useState<boolean>(true)
    // Format currency for display
    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value)
    }
    // Parse currency input
    const parseCurrency = (value: string): number => {
        if (!value) return 0
        return parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0
    }
    // Format percent for display
    const formatPercent = (value: number): string => {
        return `${value.toFixed(2)}%`
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
        } else if (
            name === 'currentBalance' ||
            name === 'currentMonthly' ||
            name === 'homeValue'
        ) {
            // Parse currency input
            setFormData({
                ...formData,
                [name]: parseCurrency(value),
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
            isVeteran: status,
        })
    }
    // Validate form inputs
    useEffect(() => {
        const {
            currentBalance,
            currentMonthly,
            homeValue,
            creditProfile,
            zipCode,
        } = formData
        // Check if all required fields are filled and valid
        const isValid =
            currentBalance > 0 &&
            currentMonthly > 0 &&
            homeValue > 0 &&
            creditProfile !== '' &&
            (zipCode.length === 5 || manualState !== '')
        setIsFormValid(isValid)
    }, [formData, manualState])
    // Calculate refinance savings
    const calculateRefinance = (): void => {
        const {
            currentBalance,
            currentMonthly,
            homeValue,
            creditProfile,
            isVeteran,
        } = formData
        // Get state from ZIP or manual selection
        const state = stateFromZip || (manualState as State)
        if (!state) return
        // Get state assumptions
        const stateData = getStateAssumptions(state)
        // Calculate LTV
        const ltv = currentBalance / homeValue
        const isUnderwater = ltv >= 1.2
        // Estimate escrow components
        const estTaxMonthly = ((stateData.propertyTaxPct / 100) * homeValue) / 12
        const estInsMonthly =
            (stateData.insAnnualPer100k * (homeValue / 100000)) / 12
        // Calculate current PMI if applicable
        const currentPMIRate = PMI_RATE_BY_TIER[creditProfile] || 0
        const currentPMI =
            ltv > 0.8 && !isVeteran
                ? ((currentPMIRate / 100) * currentBalance) / 12
                : 0
        // Estimate current P&I
        const currentPI = Math.max(
            currentMonthly - estTaxMonthly - estInsMonthly - currentPMI,
            0,
        )
        // Calculate new rate with adjustments
        let rateAdjustment = 0
        // LTV adjustments
        if (ltv > 0.9) rateAdjustment += 0.25
        else if (ltv > 0.85) rateAdjustment += 0.125
        else if (ltv <= 0.7) rateAdjustment -= 0.125
        // VA loan adjustment
        if (isVeteran) rateAdjustment -= 0.25
        // High-tax state adjustment
        if (state === 'NY' || state === 'NYC' || state === 'FL')
            rateAdjustment += 0.125
        // Calculate new interest rate
        const baseRate = BASE_RATE_BY_TIER[creditProfile] || 0
        const rateAnnual = Math.max(Math.min(baseRate + rateAdjustment, 12), 2)
        // Calculate closing costs
        const closingCostRate =
            stateData.closingCostRateBase +
            stateData.mtgTaxRate +
            (isVeteran ? VA_FUNDING_FEE_RATE : 0)
        const closingCosts = (closingCostRate / 100) * currentBalance
        // Calculate new loan amount (with or without rolled-in closing costs)
        const newLoanAmount = rollCostsIntoLoan
            ? currentBalance + closingCosts
            : currentBalance
        // Calculate new PMI if applicable
        const newPMIRate = PMI_RATE_BY_TIER[creditProfile] || 0
        const newPMIMonthly =
            ltv > 0.8 && !isVeteran ? ((newPMIRate / 100) * newLoanAmount) / 12 : 0
        // Calculate new monthly payment
        const monthlyRate = rateAnnual / 100 / 12
        const term = 30 // 30-year term
        const numberOfPayments = term * 12
        let newPI = 0
        if (monthlyRate > 0) {
            newPI =
                (newLoanAmount *
                    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
        } else {
            newPI = newLoanAmount / numberOfPayments
        }
        // Calculate total new monthly payment
        const newTotal = newPI + estTaxMonthly + estInsMonthly + newPMIMonthly
        // Calculate monthly savings
        const savingsMonthly = Math.max(currentMonthly - newTotal, 0)
        // Calculate breakeven point
        const breakeven =
            !rollCostsIntoLoan && savingsMonthly > 0
                ? Math.ceil(closingCosts / Math.max(savingsMonthly, 1))
                : null
        // Set results
        setResult({
            savingsMonthly,
            newRate: rateAnnual,
            newPMIMonthly,
            newTotal,
            closingCosts,
            breakeven,
            ltv,
            isUnderwater,
        })
    }
    return (
        <>
            <div className="max-w-[1200px] mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left card - Input form */}
                <div className="rounded-3xl bg-[#F4F5F7] p-6 md:p-8">
                    <h1 className="text-4xl font-bold mb-4">
                        Refinance Calculator: <br /> Lower Payment
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Let's see how much you can save each month by refinancing to a lower
                        payment. All fields are required.
                    </p>
                    {/* Current mortgage balance */}
                    <div className="mb-6">
                        <label className="flex items-center gap-2 mb-2 font-medium">
                            Current mortgage balance
                            <button aria-label="More information" className="text-gray-500">
                                <InfoIcon size={18} />
                            </button>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                $
                            </span>
                            <input
                                type="text"
                                name="currentBalance"
                                value={
                                    formData.currentBalance === 0
                                        ? ''
                                        : formData.currentBalance.toLocaleString()
                                }
                                onChange={handleInputChange}
                                className="w-full h-12 pl-8 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="current-balance-desc"
                            />
                        </div>
                        <div id="current-balance-desc" className="sr-only">
                            Enter your current mortgage balance
                        </div>
                    </div>
                    {/* Current monthly payment */}
                    <div className="mb-6">
                        <label className="flex items-center gap-2 mb-2 font-medium">
                            Current monthly payment
                            <button aria-label="More information" className="text-gray-500">
                                <InfoIcon size={18} />
                            </button>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                $
                            </span>
                            <input
                                type="text"
                                name="currentMonthly"
                                value={
                                    formData.currentMonthly === 0
                                        ? ''
                                        : formData.currentMonthly.toLocaleString()
                                }
                                onChange={handleInputChange}
                                className="w-full h-12 pl-8 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                aria-describedby="current-monthly-desc"
                            />
                        </div>
                        <div id="current-monthly-desc" className="sr-only">
                            Enter your current monthly mortgage payment
                        </div>
                    </div>
                    {/* Current home value */}
                    <div className="mb-6">
                        <label className="flex items-center gap-2 mb-2 font-medium">
                            Current home value
                            <button aria-label="More information" className="text-gray-500">
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
                                name="creditProfile"
                                value={formData.creditProfile}
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
                                        <option key={state} value={state}>
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
                                aria-pressed={formData.isVeteran}
                                className={`py-2 px-6 rounded-full transition-colors ${formData.isVeteran ? 'bg-pink-100 text-pink-900' : 'text-gray-700'}`}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                onClick={() => handleVeteranToggle(false)}
                                aria-pressed={!formData.isVeteran}
                                className={`py-2 px-6 rounded-full transition-colors ${!formData.isVeteran ? 'bg-[#471323] text-white' : 'text-gray-700'}`}
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
                        onClick={calculateRefinance}
                        disabled={!isFormValid}
                        className={`w-full py-3 px-6 rounded-full text-lg font-medium transition-colors ${isFormValid ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
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
                {/* Right card - Results */}
                <div className="rounded-3xl bg-[#F8EBF0] p-6 md:p-8 h-max">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">
                        You could save
                    </h2>
                    <div className="mb-8">
                        <div className="text-5xl md:text-6xl font-bold text-[#471323] tabular-nums">
                            {result ? formatCurrency(result.savingsMonthly) : '$0'}
                        </div>
                    </div>
                    {result && (
                        <>
                            {/* Show rate information */}
                            <div className="text-sm text-gray-600 mb-4">
                                at an estimated rate of {formatPercent(result.newRate)} for a
                                30-year term
                            </div>
                            {/* Show underwater warning if applicable */}
                            {result.isUnderwater && (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4 text-yellow-800">
                                    <p className="text-sm">
                                        Your loan-to-value ratio is quite high (over 120%). This may
                                        limit your refinancing options.
                                    </p>
                                </div>
                            )}
                            {/* Show breakeven information if applicable */}
                            {result.breakeven && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                                    <p className="text-sm text-blue-800">
                                        It will take approximately {result.breakeven} months to break
                                        even on your closing costs.
                                    </p>
                                </div>
                            )}
                            {/* Show message if no savings */}
                            {result.savingsMonthly === 0 && (
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                                    <p className="text-sm text-gray-600">
                                        Based on your inputs, a refinance may not lower your payment.
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div></>
    )
}
export default RefinanceLowerPayment
