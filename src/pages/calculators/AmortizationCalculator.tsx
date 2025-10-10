import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
// Helper functions for formatting and parsing
const fmtUSD = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value)
}
const parseUSD = (value: string): number => {
    return parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0
}
const fmtDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    })
}
// Get the first day of the next month
const getFirstDayOfNextMonth = (): Date => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth() + 1, 1)
}
// Interface for amortization schedule row
interface ScheduleRow {
    paymentNumber: number
    date: Date
    payment: number
    principal: number
    interest: number
    balance: number
}
const AmortizationCalculator: React.FC = () => {
    // Form state
    const [loanAmount, setLoanAmount] = useState<number>(100000)
    const [rateAnnual, setRateAnnual] = useState<number>(3)
    const [termYears, setTermYears] = useState<number>(5)
    const [startDate, setStartDate] = useState<Date>(getFirstDayOfNextMonth())
    // Extra payments state
    const [extraMonthly, setExtraMonthly] = useState<number>(0)
    const [extraOneTime, setExtraOneTime] = useState<number>(0)
    const [extraOneTimeAt, setExtraOneTimeAt] = useState<number>(1)
    const [extraAnnual, setExtraAnnual] = useState<number>(0)
    // UI state
    const [isExtraPanelOpen, setIsExtraPanelOpen] = useState<boolean>(false)
    const [isCalculated, setIsCalculated] = useState<boolean>(false)
    const [isScheduleOpen, setIsScheduleOpen] = useState<boolean>(false)
    const [isFormValid, setIsFormValid] = useState<boolean>(true)
    // Results state
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0)
    const [payoffDate, setPayoffDate] = useState<Date>(new Date())
    const [totalInterest, setTotalInterest] = useState<number>(0)
    const [totalCost, setTotalCost] = useState<number>(0)
    const [schedule, setSchedule] = useState<ScheduleRow[]>([])
    // Add legal disclosure popup state
    const [isLegalDisclosureOpen, setIsLegalDisclosureOpen] =
        useState<boolean>(false)
    // Refs
    const resultsRef = useRef<HTMLDivElement>(null)
    // Validate form
    useEffect(() => {
        const isValid =
            loanAmount > 0 && rateAnnual >= 0 && rateAnnual <= 25 && termYears > 0
        setIsFormValid(isValid)
    }, [loanAmount, rateAnnual, termYears])
    // Handle loan amount change
    const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseUSD(e.target.value)
        setLoanAmount(value)
    }
    // Handle interest rate change
    const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value)
        const clampedValue = Math.min(Math.max(value, 0), 25)
        setRateAnnual(clampedValue)
    }
    // Handle term years change
    const handleTermYearsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value)
        setTermYears(value)
    }
    // Handle extra monthly change
    const handleExtraMonthlyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseUSD(e.target.value)
        setExtraMonthly(value)
    }
    // Handle one-time extra payment change
    const handleExtraOneTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseUSD(e.target.value)
        setExtraOneTime(value)
    }
    // Handle one-time extra payment month change
    const handleExtraOneTimeAtChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = parseInt(e.target.value)
        const clampedValue = Math.max(value, 1)
        setExtraOneTimeAt(clampedValue)
    }
    // Handle annual extra payment change
    const handleExtraAnnualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseUSD(e.target.value)
        setExtraAnnual(value)
    }
    // Handle legal disclosure toggle
    const toggleLegalDisclosure = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setIsLegalDisclosureOpen(!isLegalDisclosureOpen)
    }
    // Calculate amortization
    const calculateAmortization = () => {
        // Monthly interest rate
        const r = rateAnnual / 100 / 12
        // Total number of payments
        const n = termYears * 12
        // Loan principal
        const P = loanAmount
        // Calculate base monthly payment
        let M = 0
        if (r === 0) {
            M = P / n
        } else {
            M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        }
        // Initialize variables for amortization calculation
        let balance = P
        let month = 0
        let totalInterestPaid = 0
        const amortizationSchedule: ScheduleRow[] = []
        // Calculate amortization schedule
        while (balance > 0) {
            // Calculate interest for this period
            const interest = balance * r
            // Calculate principal for this period
            let principal = M - interest
            // Calculate extra payments
            let extra = extraMonthly
            // Add one-time extra payment if this is the specified month
            if (extraOneTimeAt === month + 1) {
                extra += extraOneTime
            }
            // Add annual extra payment if this is a 12-month multiple
            if ((month + 1) % 12 === 0) {
                extra += extraAnnual
            }
            // Calculate total principal applied this period
            let applied = principal + extra
            // Ensure we don't pay more than the remaining balance
            if (applied > balance) {
                applied = balance
                principal = balance - extra
                if (principal < 0) principal = 0
            }
            // Update balance
            balance -= applied
            // Update total interest
            totalInterestPaid += interest
            // Create date for this payment
            const paymentDate = new Date(startDate)
            paymentDate.setMonth(startDate.getMonth() + month)
            // Add row to amortization schedule
            amortizationSchedule.push({
                paymentNumber: month + 1,
                date: new Date(paymentDate),
                payment: principal + interest + extra,
                principal: applied,
                interest,
                balance,
            })
            // Increment month
            month++
            // Break if we've gone beyond a reasonable number of payments
            if (month > n * 2) {
                break
            }
        }
        // Calculate payoff date
        const finalPayoffDate = new Date(startDate)
        finalPayoffDate.setMonth(startDate.getMonth() + month - 1)
        // Update state with calculation results
        setMonthlyPayment(Math.round(M))
        setPayoffDate(finalPayoffDate)
        setTotalInterest(Math.round(totalInterestPaid))
        setTotalCost(Math.round(P + totalInterestPaid))
        setSchedule(amortizationSchedule)
        setIsCalculated(true)
        // Scroll to results
        if (resultsRef.current) {
            resultsRef.current.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }
    return (
        <>
            <div className="max-w-[1200px] mx-auto p-6 md:p-10">
                {/* Hero section with two columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    {/* Left column - Peach panel */}
                    <div className="rounded-3xl bg-[#F0D9CE] p-8">
                        <h1 className="text-4xl md:text-5xl font-semibold text-[#6D2E1A] mb-6">
                            Amortization calculator
                        </h1>
                        <p className="text-[#6D2E1A] text-lg leading-relaxed">
                            An amortization calculator helps you understand how fixed mortgage
                            payments work. It shows how much of each payment reduces your loan
                            balance and how much goes to interest. The calculator can also show
                            how you can save by making extra payments.
                        </p>
                    </div>
                    {/* Right column - Form */}
                    <div className="rounded-3xl bg-[#F3F5F7] p-6 md:p-8">
                        <h2 className="text-3xl font-semibold mb-4">
                            Create an amortization schedule
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Enter the loan amount and term at the start of the mortgage. All
                            fields are required.
                        </p>
                        <div className="space-y-6">
                            {/* Loan amount input */}
                            <div>
                                <label
                                    htmlFor="loanAmount"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Loan amount
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                        $
                                    </span>
                                    <input
                                        type="text"
                                        id="loanAmount"
                                        value={loanAmount.toLocaleString()}
                                        onChange={handleLoanAmountChange}
                                        className="w-full h-12 pl-8 pr-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                        aria-describedby="loan-amount-desc"
                                    />
                                </div>
                                <div id="loan-amount-desc" className="sr-only">
                                    Enter the loan principal amount
                                </div>
                            </div>
                            {/* Interest rate input */}
                            <div>
                                <label
                                    htmlFor="interestRate"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Interest rate
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="interestRate"
                                        value={rateAnnual}
                                        onChange={handleRateChange}
                                        className="w-full h-12 px-4 pr-8 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                        aria-describedby="interest-rate-desc"
                                    />
                                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                        %
                                    </span>
                                </div>
                                <div id="interest-rate-desc" className="sr-only">
                                    Enter the annual interest rate
                                </div>
                            </div>
                            {/* Loan term select */}
                            <div>
                                <label
                                    htmlFor="loanTerm"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Loan term in years
                                </label>
                                <div className="relative">
                                    <select
                                        id="loanTerm"
                                        value={termYears}
                                        onChange={handleTermYearsChange}
                                        className="w-full h-12 px-4 rounded-xl border border-slate-300 appearance-none focus:outline-none focus:ring-2 focus:ring-black/70"
                                        aria-describedby="loan-term-desc"
                                    >
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <ChevronDownIcon size={20} className="text-gray-500" />
                                    </div>
                                </div>
                                <div id="loan-term-desc" className="sr-only">
                                    Select the loan term in years
                                </div>
                            </div>
                            {/* Extra payments accordion */}
                            <div className="pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsExtraPanelOpen(!isExtraPanelOpen)}
                                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                                    aria-expanded={isExtraPanelOpen}
                                >
                                    {isExtraPanelOpen ? (
                                        <ChevronUpIcon size={20} />
                                    ) : (
                                        <ChevronDownIcon size={20} />
                                    )}
                                    <span>Optional: calculate extra payments</span>
                                </button>
                                {isExtraPanelOpen && (
                                    <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                                        {/* Extra monthly principal */}
                                        <div>
                                            <label
                                                htmlFor="extraMonthly"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Extra monthly principal ($/mo)
                                            </label>
                                            <div className="relative">
                                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                                    $
                                                </span>
                                                <input
                                                    type="text"
                                                    id="extraMonthly"
                                                    value={extraMonthly.toLocaleString()}
                                                    onChange={handleExtraMonthlyChange}
                                                    className="w-full h-12 pl-8 pr-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                                />
                                            </div>
                                        </div>
                                        {/* One-time extra payment */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label
                                                    htmlFor="extraOneTime"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    One-time extra payment ($)
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                                        $
                                                    </span>
                                                    <input
                                                        type="text"
                                                        id="extraOneTime"
                                                        value={extraOneTime.toLocaleString()}
                                                        onChange={handleExtraOneTimeChange}
                                                        className="w-full h-12 pl-8 pr-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="extraOneTimeAt"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Apply at payment #
                                                </label>
                                                <input
                                                    type="number"
                                                    id="extraOneTimeAt"
                                                    value={extraOneTimeAt}
                                                    onChange={handleExtraOneTimeAtChange}
                                                    min="1"
                                                    className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                                />
                                            </div>
                                        </div>
                                        {/* Annual extra principal */}
                                        <div>
                                            <label
                                                htmlFor="extraAnnual"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Annual extra principal ($/yr)
                                            </label>
                                            <div className="relative">
                                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                                    $
                                                </span>
                                                <input
                                                    type="text"
                                                    id="extraAnnual"
                                                    value={extraAnnual.toLocaleString()}
                                                    onChange={handleExtraAnnualChange}
                                                    className="w-full h-12 pl-8 pr-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Calculate button */}
                            <button
                                type="button"
                                onClick={calculateAmortization}
                                disabled={!isFormValid}
                                className={`w-full h-12 rounded-full font-medium text-white transition-colors ${isFormValid ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'}`}
                            >
                                Calculate
                            </button>
                            {/* Footer */}
                            <div className="mt-4 text-center text-sm text-[#E41B17]">
                                RateBeat
                            </div>
                        </div>
                    </div>
                </div>
                {/* Results section */}
                {isCalculated && (
                    <div ref={resultsRef} aria-live="polite" className="mt-10">
                        <div className="mb-6">
                            <p className="text-gray-700">
                                Here's a summary of calculator results for a loan amount of{' '}
                                {fmtUSD(loanAmount)} at an interest rate of {rateAnnual}%.
                            </p>
                        </div>
                        {/* Results grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {/* Monthly payment card */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <h3 className="text-lg font-medium text-gray-800 mb-4">
                                    Monthly payment
                                </h3>
                                <div className="text-2xl md:text-3xl font-semibold tabular-nums mb-2">
                                    {fmtUSD(monthlyPayment)}
                                </div>
                                <p className="text-gray-600 text-sm">
                                    This amount doesn't include taxes and insurance.
                                </p>
                            </div>
                            {/* Payoff date card */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <h3 className="text-lg font-medium text-gray-800 mb-4">
                                    Payoff date
                                </h3>
                                <div className="text-2xl md:text-3xl font-semibold tabular-nums mb-2">
                                    {fmtDate(payoffDate)}
                                </div>
                                <p className="text-gray-600 text-sm">
                                    For a loan starting {fmtDate(startDate)}, this is when your
                                    mortgage will be paid in full if you make every payment and
                                    don't pay extra.
                                </p>
                            </div>
                            {/* Total interest paid card */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <h3 className="text-lg font-medium text-gray-800 mb-4">
                                    Total interest paid
                                </h3>
                                <div className="text-2xl md:text-3xl font-semibold tabular-nums mb-2">
                                    {fmtUSD(totalInterest)}
                                </div>
                                <p className="text-gray-600 text-sm">
                                    If you make every mortgage payment for the full {termYears}-year
                                    term, this is how much interest you'll pay.
                                </p>
                            </div>
                            {/* Total loan cost card */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <h3 className="text-lg font-medium text-gray-800 mb-4">
                                    Total loan cost
                                </h3>
                                <div className="text-2xl md:text-3xl font-semibold tabular-nums mb-2">
                                    {fmtUSD(totalCost)}
                                </div>
                                <p className="text-gray-600 text-sm">
                                    The loan amount plus total interest paid equals your total loan
                                    cost if you make every payment for the full {termYears}-year
                                    term.
                                </p>
                            </div>
                        </div>
                        {/* Amortization schedule */}
                        <div className="mb-10">
                            <button
                                type="button"
                                onClick={() => setIsScheduleOpen(!isScheduleOpen)}
                                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 focus:outline-none mb-4"
                                aria-expanded={isScheduleOpen}
                            >
                                {isScheduleOpen ? (
                                    <ChevronUpIcon size={20} />
                                ) : (
                                    <ChevronDownIcon size={20} />
                                )}
                                <span className="font-medium">Amortization schedule</span>
                            </button>
                            {isScheduleOpen && (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                                                    Pmt #
                                                </th>
                                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                                                    Date
                                                </th>
                                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                                                    Payment
                                                </th>
                                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                                                    Principal
                                                </th>
                                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                                                    Interest
                                                </th>
                                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                                                    Balance
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {schedule.map((row) => (
                                                <tr
                                                    key={row.paymentNumber}
                                                    className="border-t border-gray-200"
                                                >
                                                    <td className="px-4 py-2 text-sm text-gray-700">
                                                        {row.paymentNumber}
                                                    </td>
                                                    <td className="px-4 py-2 text-sm text-gray-700">
                                                        {fmtDate(row.date)}
                                                    </td>
                                                    <td className="px-4 py-2 text-sm text-gray-700">
                                                        {fmtUSD(row.payment)}
                                                    </td>
                                                    <td className="px-4 py-2 text-sm text-gray-700">
                                                        {fmtUSD(row.principal)}
                                                    </td>
                                                    <td className="px-4 py-2 text-sm text-gray-700">
                                                        {fmtUSD(row.interest)}
                                                    </td>
                                                    <td className="px-4 py-2 text-sm text-gray-700">
                                                        {fmtUSD(row.balance)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                        {/* Legal footer */}
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-gray-600 text-sm hover:underline"
                                onClick={toggleLegalDisclosure}
                            >
                                Legal Disclosures
                            </a>
                        </div>
                    </div>
                )}
                {/* Legal disclosure popup */}
                {isLegalDisclosureOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        onClick={() => setIsLegalDisclosureOpen(false)}
                    >
                        <div
                            className="bg-white rounded-lg p-6 max-w-md mx-4 relative shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsLegalDisclosureOpen(false)}
                                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                                aria-label="Close legal disclosure"
                            >
                                ×
                            </button>
                            <h2 className="text-xl font-semibold mb-4">Legal Disclosures</h2>
                            <p className="text-gray-700 mb-4">
                                You should only use this calculator to make estimates. The monthly
                                payment shown doesn't include taxes and insurance. Your actual
                                payment will be different. Calculator results aren't a commitment
                                to lend.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default AmortizationCalculator
