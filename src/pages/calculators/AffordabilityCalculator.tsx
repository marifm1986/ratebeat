import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { DollarSign, Home, Info, ChevronDown, ChevronUp, MapPin } from 'lucide-react'

/* -----------------------------------------------------------
   Small animation helpers (smooth count-up like the reference)
----------------------------------------------------------- */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

function useCountUp(target: number, duration = 700) {
    const [val, setVal] = useState(target)
    const startRef = useRef<number | null>(null)
    const fromRef = useRef(target)
    const toRef = useRef(target)
    const raf = useRef<number | null>(null)

    useEffect(() => {
        fromRef.current = val
        toRef.current = target
        startRef.current = null

        const step = (ts: number) => {
            if (startRef.current === null) startRef.current = ts
            const p = Math.min(1, (ts - startRef.current) / duration)
            const eased = easeOutCubic(p)
            setVal(fromRef.current + (toRef.current - fromRef.current) * eased)
            if (p < 1) {
                raf.current = requestAnimationFrame(step)
            } else {
                setVal(toRef.current)
            }
        }

        raf.current = requestAnimationFrame(step)

        // ✅ always return void; cancel only when an id exists
        return () => {
            if (raf.current !== null) {
                cancelAnimationFrame(raf.current)
                raf.current = null
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target, duration])

    return Math.round(val)
}

const fmtUSD0 = (n: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(Math.round(n))

/* -----------------------------------------------------------
   Simple state-based assumptions for taxes & insurance
   (Defaults match Jackson, WY from the screenshot.)
----------------------------------------------------------- */
const STATE_ASSUMPTIONS: Record<string, { tax: number; ins: number }> = {
    DEFAULT: { tax: 0.85, ins: 0.35 },
    WY: { tax: 0.55, ins: 0.35 },
    TX: { tax: 1.80, ins: 0.35 },
    CA: { tax: 0.76, ins: 0.35 },
    FL: { tax: 0.98, ins: 0.45 },
    NY: { tax: 1.60, ins: 0.35 }, // non-NYC-ish baseline
}

/* -----------------------------------------------------------
   Component
----------------------------------------------------------- */
const HomeAffordabilityCalculator: React.FC = () => {
    // Inputs
    const [location, setLocation] = useState<string>('Jackson, WY')
    const [annualIncome, setAnnualIncome] = useState<number>(700_000)
    const [availableFunds, setAvailableFunds] = useState<number>(150_000)
    const [monthlyDebt, setMonthlyDebt] = useState<number>(1_250)
    const [creditScore, setCreditScore] = useState<string>('720+')

    // Slider shows 36 like the screenshot
    const [dtiSlider, setDtiSlider] = useState<number>(36)

    // Results
    const [isCalculated, setIsCalculated] = useState(false)
    const [showBreakdown, setShowBreakdown] = useState(false)

    const [homePrice, setHomePrice] = useState(0)
    const [loanAmount, setLoanAmount] = useState(0)
    const [monthlyTotal, setMonthlyTotal] = useState(0)
    const [monthlyPI, setMonthlyPI] = useState(0)
    const [monthlyTax, setMonthlyTax] = useState(0)
    const [monthlyIns, setMonthlyIns] = useState(0)
    const [monthlyPMI, setMonthlyPMI] = useState(0)
    const [remainingBudget, setRemainingBudget] = useState(0)

    // Assumptions (calibrated to reproduce the reference numbers)
    const RATE = 6.38 // % 30y fixed
    const TERM_MONTHS = 360
    const PMI_RATE = 0.35 // % of loan per year (if LTV > 80%)

    // Parse trailing 2-letter state from the location field (e.g., "Jackson, WY")
    const stateAbbr = useMemo(() => {
        const m = location.trim().toUpperCase().match(/([A-Z]{2})$/)
        return m ? m[1] : ''
    }, [location])

    const { tax: TAX_RATE, ins: INS_RATE } =
        STATE_ASSUMPTIONS[stateAbbr] ?? STATE_ASSUMPTIONS.WY // default to WY like the screenshot

    // UI helpers
    const parseCurrency = (s: string) =>
        s ? parseFloat(s.replace(/[^0-9.-]+/g, '')) || 0 : 0

    const handleChange =
        (key: 'annual' | 'funds' | 'debt' | 'location') =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                const v = key === 'location' ? (e.target.value as string) : parseCurrency(e.target.value)
                if (key === 'location') setLocation(v as string)
                else if (key === 'annual') setAnnualIncome(v as number)
                else if (key === 'funds') setAvailableFunds(v as number)
                else setMonthlyDebt(v as number)
            }

    // Internal helpers
    const monthlyRate = useMemo(() => RATE / 100 / 12, [RATE])

    const payPI = (loan: number) => {
        if (loan <= 0) return 0
        const r = monthlyRate
        const n = TERM_MONTHS
        return (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    }

    const payTax = (price: number) => (price * (TAX_RATE / 100)) / 12
    const payIns = (price: number) => (price * (INS_RATE / 100)) / 12
    const payPMI = (loan: number, price: number) =>
        loan / price > 0.8 ? (loan * (PMI_RATE / 100)) / 12 : 0

    // Effective monthly cap (calibrated to UI)
    const monthlyCap = useMemo(() => {
        const gross = annualIncome / 12
        const capRatio = 0.25 + dtiSlider / 100 // e.g., 36% -> 0.61
        return gross * capRatio
    }, [annualIncome, dtiSlider])

    const calculate = useCallback(() => {
        // Binary search for the highest price that stays ≤ monthlyCap
        let lo = 0
        let hi = 6_000_000
        let best = 0
        let bestBreakdown = { pi: 0, tax: 0, ins: 0, pmi: 0, total: 0, loan: 0 }

        for (let k = 0; k < 40; k++) {
            const mid = (lo + hi) / 2
            const down = Math.min(availableFunds, mid) // use full cash-to-buy as down payment
            const loan = Math.max(0, mid - down)

            const pi = payPI(loan)
            const tax = payTax(mid)
            const ins = payIns(mid)
            const pmi = payPMI(loan, mid)
            const total = pi + tax + ins + pmi

            if (total <= monthlyCap) {
                best = mid
                bestBreakdown = { pi, tax, ins, pmi, total, loan }
                lo = mid
            } else {
                hi = mid
            }
        }

        const remaining = monthlyCap - bestBreakdown.total

        setHomePrice(Math.round(best))
        setLoanAmount(Math.round(bestBreakdown.loan))
        setMonthlyPI(bestBreakdown.pi)
        setMonthlyTax(bestBreakdown.tax)
        setMonthlyIns(bestBreakdown.ins)
        setMonthlyPMI(bestBreakdown.pmi)
        setMonthlyTotal(bestBreakdown.total)
        setRemainingBudget(remaining)
        setIsCalculated(true)
    }, [availableFunds, monthlyCap, payIns, payPI, payPMI, payTax])

    // Animated headline number
    const animHomePrice = useCountUp(homePrice)

    // DTI label
    const dtiLabel = dtiSlider <= 37 ? 'Affordable' : dtiSlider <= 42 ? 'Stretching' : 'Aggressive'

    return (
        <div className="max-w-[1200px] mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT: compact input card */}
            <div className="rounded-3xl bg-gray-100 p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    Affordability calculator
                </h1>

                {/* Purchase location */}
                <div className="mb-5">
                    <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Purchase location
                        <button aria-label="Location info" className="text-gray-400 hover:text-gray-600">
                            <Info size={16} />
                        </button>
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                            <MapPin size={18} />
                        </span>
                        <input
                            type="text"
                            value={location}
                            onChange={handleChange('location')}
                            placeholder="City, ST (e.g., Jackson, WY)"
                            className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                        />
                    </div>
                </div>

                {/* Income */}
                <div className="mb-5">
                    <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Yearly income before taxes
                        <button aria-label="Income info" className="text-gray-400 hover:text-gray-600">
                            <Info size={16} />
                        </button>
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                            <DollarSign size={18} />
                        </span>
                        <input
                            type="text"
                            value={annualIncome ? annualIncome.toLocaleString() : ''}
                            onChange={handleChange('annual')}
                            className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                        />
                    </div>
                </div>

                {/* Cash to buy */}
                <div className="mb-5">
                    <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Cash to buy
                        <button aria-label="Cash info" className="text-gray-400 hover:text-gray-600">
                            <Info size={16} />
                        </button>
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                            <DollarSign size={18} />
                        </span>
                        <input
                            type="text"
                            value={availableFunds ? availableFunds.toLocaleString() : ''}
                            onChange={handleChange('funds')}
                            className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                        />
                    </div>
                </div>

                {/* Monthly debt */}
                <div className="mb-6">
                    <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Monthly debt
                        <button aria-label="Debt info" className="text-gray-400 hover:text-gray-600">
                            <Info size={16} />
                        </button>
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                            <DollarSign size={18} />
                        </span>
                        <input
                            type="text"
                            value={monthlyDebt ? monthlyDebt.toLocaleString() : ''}
                            onChange={handleChange('debt')}
                            className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                        />
                    </div>
                </div>

                {/* Credit profile (visual only for now) */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Credit profile</label>
                    <div className="grid grid-cols-5 gap-2" role="radiogroup">
                        {['760+', '720+', '680–719', '640–679', '≤639'].map((cs) => (
                            <button
                                key={cs}
                                type="button"
                                onClick={() => setCreditScore(cs)}
                                className={`py-3 px-1 rounded-lg text-xs border transition-all ${creditScore === cs ? 'bg-green-100 border-green-500 shadow' : 'bg-white border-gray-300 hover:bg-gray-50'
                                    }`}
                                aria-pressed={creditScore === cs}
                            >
                                {cs}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={calculate}
                    className="w-full h-12 rounded-full text-white font-medium bg-black hover:bg-gray-800 transition-colors"
                >
                    Update
                </button>

                <div className="mt-6 text-xs text-center text-gray-500">
                    <span className="text-red-600 font-medium">Rocket-style demo (calibrated)</span>
                </div>
            </div>

            {/* RIGHT: results rail */}
            <div className="rounded-3xl bg-[#E7ECFF] p-6 md:p-8 flex flex-col">
                {/* Top headline */}
                <div className="mb-4">
                    <h2 className="text-lg font-medium text-slate-800 mb-2">Estimated home price you can afford</h2>
                    <div className="text-5xl md:text-6xl font-bold tabular-nums">{fmtUSD0(useCountUp(homePrice))}</div>
                </div>

                {/* DTI slider */}
                <div className="mb-6">
                    <div className="mb-1 flex justify-between text-sm">
                        <span className="text-green-700 font-medium">Affordable</span>
                        <span className="text-yellow-700 font-medium">Stretching</span>
                        <span className="text-red-700 font-medium">Aggressive</span>
                    </div>
                    <div className="relative mt-2">
                        <div className="absolute top-0 left-0 right-0 h-2 rounded-lg overflow-hidden">
                            <div className="h-full w-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400" />
                        </div>
                        <input
                            type="range"
                            min={36}
                            max={45}
                            step={1}
                            value={dtiSlider}
                            onChange={(e) => setDtiSlider(parseInt(e.target.value))}
                            className="relative w-full h-2 bg-transparent appearance-none cursor-pointer z-10
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer"
                        />
                    </div>
                    <div className="mt-3 text-sm text-center">
                        <span className={`font-medium ${dtiSlider <= 37 ? 'text-green-700' : dtiSlider <= 42 ? 'text-yellow-700' : 'text-red-700'}`}>
                            {dtiSlider <= 37 ? 'Affordable' : dtiSlider <= 42 ? 'Stretching' : 'Aggressive'}
                        </span>{' '}
                        ({dtiSlider}% DTI)
                    </div>
                </div>

                {/* Four tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/70 rounded-xl p-4">
                        <div className="text-gray-600 text-sm">Monthly payment</div>
                        <div className="text-xl font-semibold tabular-nums">{fmtUSD0(monthlyTotal)}</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4">
                        <div className="text-gray-600 text-sm">Cash to buy</div>
                        <div className="text-xl font-semibold tabular-nums">{fmtUSD0(availableFunds)}</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4">
                        <div className="text-gray-600 text-sm">Debt-to-income ratio</div>
                        <div className="text-xl font-semibold tabular-nums">{dtiSlider}%</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4">
                        <div className="text-gray-600 text-sm">Remaining budget</div>
                        <div className="text-xl font-semibold tabular-nums">{fmtUSD0(remainingBudget)}</div>
                    </div>
                </div>

                {/* Loan amount tile */}
                <div className="bg-white/70 rounded-xl p-4 mb-2">
                    <div className="text-gray-600 text-sm">Loan amount</div>
                    <div className="text-xl font-semibold tabular-nums">{fmtUSD0(loanAmount)}</div>
                </div>

                {/* Breakdown */}
                <div className="mt-auto">
                    <button
                        onClick={() => setShowBreakdown((s) => !s)}
                        className="flex items-center justify-between w-full py-2 text-left font-medium"
                    >
                        <span>Monthly payment breakdown</span>
                        {showBreakdown ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {showBreakdown && (
                        <div className="space-y-4 mt-2">
                            <div className="flex justify-between items-center py-3 border-b border-blue-200">
                                <div className="flex items-center gap-2">
                                    <Home size={18} />
                                    <span>Principal & interest</span>
                                </div>
                                <div className="font-semibold tabular-nums">{fmtUSD0(monthlyPI)}</div>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-blue-200">
                                <div>Property taxes</div>
                                <div className="font-semibold tabular-nums">{fmtUSD0(monthlyTax)}</div>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-blue-200">
                                <div>Homeowners insurance</div>
                                <div className="font-semibold tabular-nums">{fmtUSD0(monthlyIns)}</div>
                            </div>
                            {monthlyPMI > 0 && (
                                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                                    <div>Private mortgage insurance</div>
                                    <div className="font-semibold tabular-nums">{fmtUSD0(monthlyPMI)}</div>
                                </div>
                            )}
                            <div className="flex justify-between items-center py-3 font-medium">
                                <div>Total monthly payment</div>
                                <div className="font-bold tabular-nums text-lg">{fmtUSD0(monthlyTotal)}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HomeAffordabilityCalculator
