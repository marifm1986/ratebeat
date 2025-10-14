// import React, { useEffect, useState, Component } from 'react'
// import { Share2 } from 'lucide-react'
// import { Header } from '../../components/Header'
// // ============================================================================
// // TYPES
// // ============================================================================
// export interface InputState {
//     annualIncome: number
//     availableFunds: number
//     monthlyDebt: number
//     creditScore: number
//     location: string
//     zip: string
//     city: string
//     state: string
//     dti: number
//     rate: number
//     term: number
//     taxRate: number
//     insuranceAnnual: number
//     hoaMonthly: number
//     pmiRate: number
//     pmiEnabled: boolean
// }
// export interface PaymentBreakdown {
//     pi: number
//     tax: number
//     ins: number
//     pmi: number
//     hoa: number
//     total: number
// }
// export interface AffordabilityOption {
//     homePrice: number
//     loanAmount: number
//     monthly: PaymentBreakdown
//     ltv: number
//     dtiUsed: number
//     assumptions: {
//         rate: number
//         term: number
//         dti: number
//     }
// }
// export interface ResultState {
//     conservative: AffordabilityOption | null
//     recommended: AffordabilityOption | null
//     stretch: AffordabilityOption | null
//     error?: string
// }
// // ============================================================================
// // UTILITY FUNCTIONS
// // ============================================================================
// function formatCurrency(value: number): string {
//     return new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD',
//         minimumFractionDigits: 0,
//         maximumFractionDigits: 0,
//     }).format(value)
// }
// function formatPercent(value: number): string {
//     return `${(value * 100).toFixed(2)}%`
// }
// function writeStateToURL(state: InputState): void {
//     const params = new URLSearchParams()
//     params.set('annualIncome', state.annualIncome.toString())
//     params.set('availableFunds', state.availableFunds.toString())
//     params.set('monthlyDebt', state.monthlyDebt.toString())
//     params.set('creditScore', state.creditScore.toString())
//     params.set('location', state.location)
//     params.set('zip', state.zip)
//     params.set('city', state.city)
//     params.set('state', state.state)
//     params.set('dti', state.dti.toString())
//     params.set('rate', state.rate.toString())
//     params.set('term', state.term.toString())
//     params.set('taxRate', state.taxRate.toString())
//     params.set('insuranceAnnual', state.insuranceAnnual.toString())
//     params.set('hoaMonthly', state.hoaMonthly.toString())
//     params.set('pmiRate', state.pmiRate.toString())
//     params.set('pmiEnabled', state.pmiEnabled.toString())
//     const newURL = `${window.location.pathname}?${params.toString()}`
//     window.history.replaceState({}, '', newURL)
// }
// function readStateFromURL(): Partial<InputState> {
//     const params = new URLSearchParams(window.location.search)
//     const state: Partial<InputState> = {}
//     const annualIncome = params.get('annualIncome')
//     if (annualIncome) state.annualIncome = parseFloat(annualIncome)
//     const availableFunds = params.get('availableFunds')
//     if (availableFunds) state.availableFunds = parseFloat(availableFunds)
//     const monthlyDebt = params.get('monthlyDebt')
//     if (monthlyDebt) state.monthlyDebt = parseFloat(monthlyDebt)
//     const creditScore = params.get('creditScore')
//     if (creditScore) state.creditScore = parseFloat(creditScore)
//     const location = params.get('location')
//     if (location) state.location = location
//     const zip = params.get('zip')
//     if (zip) state.zip = zip
//     const city = params.get('city')
//     if (city) state.city = city
//     const stateParam = params.get('state')
//     if (stateParam) state.state = stateParam
//     const dti = params.get('dti')
//     if (dti) state.dti = parseFloat(dti)
//     const rate = params.get('rate')
//     if (rate) state.rate = parseFloat(rate)
//     const term = params.get('term')
//     if (term) state.term = parseFloat(term)
//     const taxRate = params.get('taxRate')
//     if (taxRate) state.taxRate = parseFloat(taxRate)
//     const insuranceAnnual = params.get('insuranceAnnual')
//     if (insuranceAnnual) state.insuranceAnnual = parseFloat(insuranceAnnual)
//     const hoaMonthly = params.get('hoaMonthly')
//     if (hoaMonthly) state.hoaMonthly = parseFloat(hoaMonthly)
//     const pmiRate = params.get('pmiRate')
//     if (pmiRate) state.pmiRate = parseFloat(pmiRate)
//     const pmiEnabled = params.get('pmiEnabled')
//     if (pmiEnabled) state.pmiEnabled = pmiEnabled === 'true'
//     return state
// }
// function copyURLToClipboard(): void {
//     navigator.clipboard.writeText(window.location.href)
// }
// // ============================================================================
// // CALCULATION FUNCTIONS
// // ============================================================================
// function calculateMonthlyPayment(
//     principal: number,
//     annualRate: number,
//     termYears: number,
// ): number {
//     if (principal <= 0 || annualRate <= 0 || termYears <= 0) return 0
//     const monthlyRate = annualRate / 100 / 12
//     const numPayments = termYears * 12
//     const payment =
//         (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
//         (Math.pow(1 + monthlyRate, numPayments) - 1)
//     return payment
// }
// function calculateLoanAmount(
//     monthlyPayment: number,
//     annualRate: number,
//     termYears: number,
// ): number {
//     if (monthlyPayment <= 0 || annualRate <= 0 || termYears <= 0) return 0
//     const monthlyRate = annualRate / 100 / 12
//     const numPayments = termYears * 12
//     const loanAmount =
//         (monthlyPayment * (Math.pow(1 + monthlyRate, numPayments) - 1)) /
//         (monthlyRate * Math.pow(1 + monthlyRate, numPayments))
//     return loanAmount
// }
// function calculateOption(
//     inputs: InputState,
//     dtiAdjustment: number,
//     rateAdjustment: number,
// ): AffordabilityOption | null {
//     const adjustedDti = Math.max(0.15, Math.min(0.45, inputs.dti + dtiAdjustment))
//     const adjustedRate = inputs.rate + rateAdjustment
//     const monthlyGrossIncome = inputs.annualIncome / 12
//     const maxHousingPayment =
//         monthlyGrossIncome * adjustedDti - inputs.monthlyDebt
//     if (maxHousingPayment <= 0) return null
//     let homePrice = 0
//     let loanAmount = 0
//     let ltv = 0
//     let monthly: PaymentBreakdown = {
//         pi: 0,
//         tax: 0,
//         ins: 0,
//         pmi: 0,
//         hoa: 0,
//         total: 0,
//     }
//     for (let i = 0; i < 5; i++) {
//         const tax = ((inputs.taxRate / 100) * homePrice) / 12
//         const ins = inputs.insuranceAnnual / 12
//         const hoa = inputs.hoaMonthly
//         const pmi =
//             inputs.pmiEnabled && ltv > 0.8
//                 ? ((inputs.pmiRate / 100) * loanAmount) / 12
//                 : 0
//         const piCapacity = maxHousingPayment - (tax + ins + hoa + pmi)
//         if (piCapacity <= 0) return null
//         loanAmount = calculateLoanAmount(piCapacity, adjustedRate, inputs.term)
//         homePrice = loanAmount + inputs.availableFunds
//         ltv = loanAmount / homePrice
//         monthly = {
//             pi: piCapacity,
//             tax,
//             ins,
//             pmi,
//             hoa,
//             total: piCapacity + tax + ins + pmi + hoa,
//         }
//     }
//     if (homePrice <= 0 || loanAmount <= 0) return null
//     return {
//         homePrice,
//         loanAmount,
//         monthly,
//         ltv,
//         dtiUsed: adjustedDti,
//         assumptions: {
//             rate: adjustedRate,
//             term: inputs.term,
//             dti: adjustedDti,
//         },
//     }
// }
// function calculateAffordability(inputs: InputState): ResultState {
//     const conservative = calculateOption(inputs, -0.05, 0.5)
//     const recommended = calculateOption(inputs, 0, 0)
//     const stretch = calculateOption(inputs, 0.05, -0.25)
//     if (!conservative && !recommended && !stretch) {
//         return {
//             conservative: null,
//             recommended: null,
//             stretch: null,
//             error:
//                 'Unable to calculate affordability with current inputs. Try increasing your down payment, reducing monthly debts, or adjusting your target DTI.',
//         }
//     }
//     return {
//         conservative,
//         recommended,
//         stretch,
//     }
// }
// // ============================================================================
// // INPUT COMPONENTS
// // ============================================================================
// interface NumberInputProps {
//     label: string
//     value: number
//     onChange: (value: number) => void
//     min?: number
//     max?: number
//     step?: number
//     prefix?: string
//     suffix?: string
//     hint?: string
// }
// function NumberInput({
//     label,
//     value,
//     onChange,
//     min,
//     max,
//     step = 1,
//     prefix,
//     suffix,
//     hint,
// }: NumberInputProps) {
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const rawValue = e.target.value.replace(/[^0-9.]/g, '')
//         const numValue = parseFloat(rawValue) || 0
//         let clampedValue = numValue
//         if (min !== undefined) clampedValue = Math.max(min, clampedValue)
//         if (max !== undefined) clampedValue = Math.min(max, clampedValue)
//         onChange(clampedValue)
//     }
//     const displayValue = value.toLocaleString('en-US')
//     return (
//         <div className="flex flex-col gap-2">
//             <label className="text-sm font-medium text-slate-700">{label}</label>
//             <div className="relative">
//                 {prefix && (
//                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">
//                         {prefix}
//                     </span>
//                 )}
//                 <input
//                     type="text"
//                     value={displayValue}
//                     onChange={handleChange}
//                     className={`w-full h-11 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d4ed8] ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-12' : ''}`}
//                     aria-label={label}
//                 />
//                 {suffix && (
//                     <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600">
//                         {suffix}
//                     </span>
//                 )}
//             </div>
//             {hint && <p className="text-xs text-slate-500">{hint}</p>}
//         </div>
//     )
// }
// interface SliderProps {
//     label: string
//     value: number
//     onChange: (value: number) => void
//     min: number
//     max: number
//     step: number
//     formatValue?: (value: number) => string
// }
// function Slider({
//     label,
//     value,
//     onChange,
//     min,
//     max,
//     step,
//     formatValue,
// }: SliderProps) {
//     const displayValue = formatValue ? formatValue(value) : value.toString()
//     const percentage = ((value - min) / (max - min)) * 100
//     return (
//         <div className="flex flex-col gap-3">
//             <div className="flex items-center justify-between">
//                 <label className="text-sm font-medium text-slate-700">{label}</label>
//                 <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-900 tabular-nums">
//                     {displayValue}
//                 </span>
//             </div>
//             <div className="relative">
//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     step={step}
//                     value={value}
//                     onChange={(e) => onChange(parseFloat(e.target.value))}
//                     className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer slider"
//                     style={{
//                         background: `linear-gradient(to right, #1d4ed8 0%, #1d4ed8 ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`,
//                     }}
//                     aria-label={label}
//                     aria-valuetext={displayValue}
//                 />
//             </div>
//             <div className="flex justify-between text-xs text-slate-500">
//                 <span>{formatValue ? formatValue(min) : min}</span>
//                 <span>{formatValue ? formatValue(max) : max}</span>
//             </div>
//         </div>
//     )
// }
// interface SelectProps {
//     label: string
//     value: number
//     onChange: (value: number) => void
//     options: {
//         value: number
//         label: string
//     }[]
// }
// function Select({ label, value, onChange, options }: SelectProps) {
//     return (
//         <div className="flex flex-col gap-2">
//             <label className="text-sm font-medium text-slate-700">{label}</label>
//             <select
//                 value={value}
//                 onChange={(e) => onChange(parseFloat(e.target.value))}
//                 className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d4ed8]"
//                 aria-label={label}
//             >
//                 {options.map((option) => (
//                     <option key={option.value} value={option.value}>
//                         {option.label}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     )
// }
// interface SegmentedControlProps {
//     label: string
//     value: number
//     onChange: (value: number) => void
//     options: {
//         value: number
//         label: string
//     }[]
// }
// function SegmentedControl({
//     label,
//     value,
//     onChange,
//     options,
// }: SegmentedControlProps) {
//     return (
//         <div className="flex flex-col gap-2">
//             <label className="text-sm font-medium text-slate-700">{label}</label>
//             <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
//                 {options.map((option) => (
//                     <button
//                         key={option.value}
//                         onClick={() => onChange(option.value)}
//                         className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${value === option.value ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
//                         aria-label={`${label}: ${option.label}`}
//                         aria-pressed={value === option.value}
//                     >
//                         {option.label}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     )
// }
// interface ToggleProps {
//     label: string
//     checked: boolean
//     onChange: (checked: boolean) => void
//     description?: string
// }
// function Toggle({ label, checked, onChange, description }: ToggleProps) {
//     return (
//         <div className="flex items-center justify-between">
//             <div className="flex flex-col gap-1">
//                 <label className="text-sm font-medium text-slate-700">{label}</label>
//                 {description && <p className="text-xs text-slate-500">{description}</p>}
//             </div>
//             <button
//                 role="switch"
//                 aria-checked={checked}
//                 onClick={() => onChange(!checked)}
//                 className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? 'bg-[#1d4ed8]' : 'bg-slate-300'}`}
//             >
//                 <span
//                     className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`}
//                 />
//             </button>
//         </div>
//     )
// }
// interface LocationInputProps {
//     label: string
//     location: string
//     onLocationChange: (location: string) => void
//     onZipChange: (zip: string, city: string, state: string) => void
// }
// function LocationInput({
//     label,
//     location,
//     onLocationChange,
//     onZipChange,
// }: LocationInputProps) {
//     const handleZipChange = (value: string) => {
//         const cleanZip = value.replace(/[^0-9]/g, '').slice(0, 5)
//         let parsedCity = 'City'
//         let parsedState = 'ST'
//         if (cleanZip === '83001') {
//             parsedCity = 'Jackson'
//             parsedState = 'WY'
//         }
//         const fullLocation = cleanZip
//             ? `${parsedCity}, ${parsedState} ${cleanZip}`
//             : ''
//         onLocationChange(fullLocation)
//         onZipChange(cleanZip, parsedCity, parsedState)
//     }
//     return (
//         <div className="flex flex-col gap-2">
//             <label className="text-sm font-medium text-slate-700">{label}</label>
//             <input
//                 type="text"
//                 value={location}
//                 onChange={(e) => handleZipChange(e.target.value)}
//                 placeholder="City, State ZIP"
//                 className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d4ed8]"
//                 aria-label={label}
//             />
//         </div>
//     )
// }
// // ============================================================================
// // RESULT COMPONENTS
// // ============================================================================
// interface SummaryCardProps {
//     homePrice: number
//     minPrice?: number
//     maxPrice?: number
// }
// function SummaryCard({ homePrice, minPrice, maxPrice }: SummaryCardProps) {
//     const [displayPrice, setDisplayPrice] = useState(homePrice)
//     useEffect(() => {
//         const start = displayPrice
//         const end = homePrice
//         const duration = 100
//         const startTime = Date.now()
//         const animate = () => {
//             const now = Date.now()
//             const progress = Math.min((now - startTime) / duration, 1)
//             const eased = 1 - Math.pow(1 - progress, 3)
//             setDisplayPrice(start + (end - start) * eased)
//             if (progress < 1) {
//                 requestAnimationFrame(animate)
//             }
//         }
//         animate()
//     }, [homePrice])
//     return (
//         <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8">
//             <h2 className="text-lg font-medium text-slate-600 mb-2">
//                 Estimated Home Price
//             </h2>
//             <div className="text-4xl md:text-5xl font-bold text-slate-900 tabular-nums mb-4">
//                 {formatCurrency(displayPrice)}
//             </div>
//             {minPrice !== undefined && maxPrice !== undefined && (
//                 <p className="text-sm text-slate-600">
//                     Range: {formatCurrency(minPrice)} – {formatCurrency(maxPrice)}
//                 </p>
//             )}
//         </div>
//     )
// }
// interface OptionCardProps {
//     title: string
//     option: AffordabilityOption
//     variant: 'conservative' | 'recommended' | 'stretch'
// }
// function OptionCard({ title, option, variant }: OptionCardProps) {
//     const variantStyles = {
//         conservative: 'bg-blue-50 border-blue-200 text-blue-700',
//         recommended: 'bg-green-50 border-green-200 text-green-700',
//         stretch: 'bg-orange-50 border-orange-200 text-orange-700',
//     }
//     return (
//         <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col gap-4">
//             <span
//                 className={`inline-flex self-start items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${variantStyles[variant]}`}
//             >
//                 {title}
//             </span>
//             <div>
//                 <div className="text-3xl font-bold text-slate-900 tabular-nums mb-1">
//                     {formatCurrency(option.homePrice)}
//                 </div>
//                 <div className="text-lg font-semibold text-slate-700 tabular-nums">
//                     {formatCurrency(option.monthly.total)}/mo
//                 </div>
//             </div>
//             <div className="text-xs text-slate-600 space-y-1">
//                 <div>DTI: {formatPercent(option.dtiUsed)}</div>
//                 <div>Rate: {option.assumptions.rate.toFixed(3)}%</div>
//                 <div>Term: {option.assumptions.term} years</div>
//                 <div>LTV: {formatPercent(option.ltv)}</div>
//             </div>
//         </div>
//     )
// }
// interface Segment {
//     label: string
//     value: number
//     color: string
// }
// interface DonutChartProps {
//     segments: Segment[]
//     total: number
//     size?: number
// }
// function DonutChart({ segments, total, size = 200 }: DonutChartProps) {
//     const strokeWidth = 30
//     const radius = (size - strokeWidth) / 2
//     const circumference = 2 * Math.PI * radius
//     const center = size / 2
//     let currentAngle = -90
//     return (
//         <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
//             {segments.map((segment, index) => {
//                 const percentage = segment.value / total
//                 const dashArray = circumference * percentage
//                 const dashOffset = -currentAngle * (circumference / 360)
//                 const angle = currentAngle
//                 currentAngle += percentage * 360
//                 return (
//                     <circle
//                         key={index}
//                         cx={center}
//                         cy={center}
//                         r={radius}
//                         fill="none"
//                         stroke={segment.color}
//                         strokeWidth={strokeWidth}
//                         strokeDasharray={`${dashArray} ${circumference}`}
//                         strokeDashoffset={dashOffset}
//                         transform={`rotate(${angle} ${center} ${center})`}
//                         style={{
//                             transition:
//                                 'stroke-dasharray 200ms ease-out, stroke-dashoffset 200ms ease-out',
//                         }}
//                     />
//                 )
//             })}
//             <circle
//                 cx={center}
//                 cy={center}
//                 r={radius - strokeWidth / 2}
//                 fill="white"
//             />
//         </svg>
//     )
// }
// interface PaymentBreakdownProps {
//     breakdown: PaymentBreakdown
// }
// function PaymentBreakdownComponent({ breakdown }: PaymentBreakdownProps) {
//     const segments = [
//         {
//             label: 'Principal & Interest',
//             value: breakdown.pi,
//             color: '#1d4ed8',
//         },
//         {
//             label: 'Property Taxes',
//             value: breakdown.tax,
//             color: '#3b82f6',
//         },
//         {
//             label: 'Homeowners Insurance',
//             value: breakdown.ins,
//             color: '#60a5fa',
//         },
//         {
//             label: 'HOA Dues',
//             value: breakdown.hoa,
//             color: '#93c5fd',
//         },
//         {
//             label: 'PMI',
//             value: breakdown.pmi,
//             color: '#dbeafe',
//         },
//     ].filter((s) => s.value > 0)
//     return (
//         <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8">
//             <h3 className="text-xl font-semibold text-slate-900 mb-6">
//                 Monthly Payment Breakdown
//             </h3>
//             <div className="flex flex-col md:flex-row gap-8 items-center">
//                 <div className="flex-shrink-0">
//                     <DonutChart segments={segments} total={breakdown.total} />
//                 </div>
//                 <div className="flex-1 space-y-3 w-full">
//                     {segments.map((segment, index) => {
//                         const percentage = (segment.value / breakdown.total) * 100
//                         return (
//                             <div key={index} className="flex items-center justify-between">
//                                 <div className="flex items-center gap-3">
//                                     <div
//                                         className="w-3 h-3 rounded-full"
//                                         style={{
//                                             backgroundColor: segment.color,
//                                         }}
//                                     />
//                                     <span className="text-sm text-slate-700">
//                                         {segment.label}
//                                     </span>
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <span className="text-sm text-slate-500">
//                                         {percentage.toFixed(1)}%
//                                     </span>
//                                     <span className="text-sm font-semibold text-slate-900 tabular-nums min-w-[100px] text-right">
//                                         {formatCurrency(segment.value)}
//                                     </span>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                     <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
//                         <span className="text-base font-semibold text-slate-900">
//                             Total Monthly
//                         </span>
//                         <span className="text-lg font-bold text-slate-900 tabular-nums">
//                             {formatCurrency(breakdown.total)}
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// interface AssumptionsPillsProps {
//     inputs: InputState
// }
// function AssumptionsPills({ inputs }: AssumptionsPillsProps) {
//     return (
//         <div className="flex flex-wrap gap-2">
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
//                 Rate: {inputs.rate.toFixed(3)}%
//             </span>
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
//                 Term: {inputs.term}yr
//             </span>
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
//                 Taxes: {inputs.taxRate.toFixed(2)}%
//             </span>
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
//                 Insurance: {formatCurrency(inputs.insuranceAnnual)}/yr
//             </span>
//             {inputs.hoaMonthly > 0 && (
//                 <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
//                     HOA: {formatCurrency(inputs.hoaMonthly)}/mo
//                 </span>
//             )}
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
//                 PMI: {inputs.pmiEnabled ? `${inputs.pmiRate.toFixed(2)}%` : 'Off'}
//             </span>
//         </div>
//     )
// }
// // ============================================================================
// // CONSTANTS
// // ============================================================================
// const DEFAULT_STATE: InputState = {
//     annualIncome: 1400000,
//     availableFunds: 500000,
//     monthlyDebt: 1000,
//     creditScore: 720,
//     location: 'Jackson, WY 83001',
//     zip: '83001',
//     city: 'Jackson',
//     state: 'WY',
//     dti: 0.22,
//     rate: 6.75,
//     term: 30,
//     taxRate: 0.55,
//     insuranceAnnual: 1400,
//     hoaMonthly: 0,
//     pmiRate: 0.5,
//     pmiEnabled: true,
// }
// const CREDIT_SCORE_OPTIONS = [
//     {
//         value: 580,
//         label: '580',
//     },
//     {
//         value: 620,
//         label: '620',
//     },
//     {
//         value: 680,
//         label: '680',
//     },
//     {
//         value: 700,
//         label: '700',
//     },
//     {
//         value: 720,
//         label: '720',
//     },
//     {
//         value: 740,
//         label: '740',
//     },
//     {
//         value: 760,
//         label: '760+',
//     },
// ]
// const TERM_OPTIONS = [
//     {
//         value: 30,
//         label: '30 years',
//     },
//     {
//         value: 20,
//         label: '20 years',
//     },
//     {
//         value: 15,
//         label: '15 years',
//     },
// ]
// // ============================================================================
// // MAIN COMPONENT
// // ============================================================================
// export function AffordabilityCalculator({
//     'data-id': dataId,
// }: {
//     'data-id'?: string
// }) {
//     const [inputs, setInputs] = useState<InputState>(() => {
//         const urlState = readStateFromURL()
//         return {
//             ...DEFAULT_STATE,
//             ...urlState,
//         }
//     })
//     const [results, setResults] = useState<ResultState>(() =>
//         calculateAffordability(inputs),
//     )
//     const [copied, setCopied] = useState(false)
//     useEffect(() => {
//         const newResults = calculateAffordability(inputs)
//         setResults(newResults)
//         writeStateToURL(inputs)
//     }, [inputs])
//     const updateInput = <K extends keyof InputState>(
//         key: K,
//         value: InputState[K],
//     ) => {
//         setInputs((prev) => ({
//             ...prev,
//             [key]: value,
//         }))
//     }
//     const handleCopyLink = () => {
//         copyURLToClipboard()
//         setCopied(true)
//         setTimeout(() => setCopied(false), 2000)
//     }
//     const minPrice = Math.min(
//         results.conservative?.homePrice || Infinity,
//         results.recommended?.homePrice || Infinity,
//         results.stretch?.homePrice || Infinity,
//     )
//     const maxPrice = Math.max(
//         results.conservative?.homePrice || 0,
//         results.recommended?.homePrice || 0,
//         results.stretch?.homePrice || 0,
//     )
//     return (
//         <>
//             <Header />

//             <div className="min-h-screen bg-slate-50" data-id={dataId}>
//                 {/* Header */}
//                 <header className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
//                     <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-6">
//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
//                                     Home Affordability Calculator
//                                 </h1>
//                                 <p className="text-sm text-slate-600 mt-1">
//                                     Estimate how much home you can afford
//                                 </p>
//                             </div>
//                             <button
//                                 onClick={handleCopyLink}
//                                 className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d4ed8]"
//                             >
//                                 <Share2 className="w-4 h-4" />
//                                 {copied ? 'Copied!' : 'Share Link'}
//                             </button>
//                         </div>
//                     </div>
//                 </header>

//                 {/* Main Content */}
//                 <main className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-8">
//                     <div className="grid grid-cols-1 xl:grid-cols-[420px,1fr] gap-8">
//                         {/* Left: Inputs */}
//                         <div className="xl:sticky xl:top-24 h-fit">
//                             <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col gap-5">
//                                 <h2 className="text-lg font-semibold text-slate-900">
//                                     Your Information
//                                 </h2>
//                                 <NumberInput
//                                     label="Annual Household Income"
//                                     value={inputs.annualIncome}
//                                     onChange={(v) => updateInput('annualIncome', v)}
//                                     min={0}
//                                     prefix="$"
//                                 />
//                                 <NumberInput
//                                     label="Available Funds / Down Payment"
//                                     value={inputs.availableFunds}
//                                     onChange={(v) => updateInput('availableFunds', v)}
//                                     min={0}
//                                     prefix="$"
//                                 />
//                                 <NumberInput
//                                     label="Monthly Debts"
//                                     value={inputs.monthlyDebt}
//                                     onChange={(v) => updateInput('monthlyDebt', v)}
//                                     min={0}
//                                     prefix="$"
//                                     hint="Credit cards, car loans, student loans, etc."
//                                 />
//                                 <Select
//                                     label="Credit Score"
//                                     value={inputs.creditScore}
//                                     onChange={(v) => updateInput('creditScore', v)}
//                                     options={CREDIT_SCORE_OPTIONS}
//                                 />
//                                 <LocationInput
//                                     label="Location (City, State, ZIP)"
//                                     location={inputs.location}
//                                     onLocationChange={(v) => updateInput('location', v)}
//                                     onZipChange={(zip, city, state) => {
//                                         updateInput('zip', zip)
//                                         updateInput('city', city)
//                                         updateInput('state', state)
//                                         if (state === 'WY') {
//                                             updateInput('taxRate', 0.55)
//                                         }
//                                     }}
//                                 />
//                                 <Slider
//                                     label="Target Debt-to-Income Ratio"
//                                     value={inputs.dti}
//                                     onChange={(v) => updateInput('dti', v)}
//                                     min={0.15}
//                                     max={0.45}
//                                     step={0.01}
//                                     formatValue={(v) => `${(v * 100).toFixed(0)}%`}
//                                 />
//                                 <div className="border-t border-slate-200 pt-5">
//                                     <h3 className="text-base font-semibold text-slate-900 mb-4">
//                                         Loan Details
//                                     </h3>
//                                     <div className="space-y-5">
//                                         <SegmentedControl
//                                             label="Loan Term"
//                                             value={inputs.term}
//                                             onChange={(v) => updateInput('term', v)}
//                                             options={TERM_OPTIONS}
//                                         />
//                                         <Slider
//                                             label="Interest Rate"
//                                             value={inputs.rate}
//                                             onChange={(v) => updateInput('rate', v)}
//                                             min={2}
//                                             max={12}
//                                             step={0.125}
//                                             formatValue={(v) => `${v.toFixed(3)}%`}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="border-t border-slate-200 pt-5">
//                                     <h3 className="text-base font-semibold text-slate-900 mb-4">
//                                         Property Costs
//                                     </h3>
//                                     <div className="space-y-5">
//                                         <Slider
//                                             label="Property Taxes (% of home price)"
//                                             value={inputs.taxRate}
//                                             onChange={(v) => updateInput('taxRate', v)}
//                                             min={0.2}
//                                             max={3.5}
//                                             step={0.05}
//                                             formatValue={(v) => `${v.toFixed(2)}%`}
//                                         />
//                                         <NumberInput
//                                             label="Homeowners Insurance (Annual)"
//                                             value={inputs.insuranceAnnual}
//                                             onChange={(v) => updateInput('insuranceAnnual', v)}
//                                             min={0}
//                                             prefix="$"
//                                         />
//                                         <NumberInput
//                                             label="HOA Dues (Monthly)"
//                                             value={inputs.hoaMonthly}
//                                             onChange={(v) => updateInput('hoaMonthly', v)}
//                                             min={0}
//                                             prefix="$"
//                                         />
//                                         <Toggle
//                                             label="Private Mortgage Insurance (PMI)"
//                                             checked={inputs.pmiEnabled}
//                                             onChange={(v) => updateInput('pmiEnabled', v)}
//                                             description="Required when down payment is less than 20%"
//                                         />
//                                         {inputs.pmiEnabled && (
//                                             <Slider
//                                                 label="PMI Rate (Annual)"
//                                                 value={inputs.pmiRate}
//                                                 onChange={(v) => updateInput('pmiRate', v)}
//                                                 min={0.3}
//                                                 max={1.5}
//                                                 step={0.05}
//                                                 formatValue={(v) => `${v.toFixed(2)}%`}
//                                             />
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right: Results */}
//                         <div
//                             className="flex flex-col gap-8"
//                             role="region"
//                             aria-live="polite"
//                             aria-label="Calculation results"
//                         >
//                             {results.error ? (
//                                 <div className="rounded-2xl border border-red-200 bg-red-50 shadow-sm p-8">
//                                     <h3 className="text-lg font-semibold text-red-900 mb-2">
//                                         Unable to Calculate
//                                     </h3>
//                                     <p className="text-sm text-red-700">{results.error}</p>
//                                 </div>
//                             ) : (
//                                 <>
//                                     {results.recommended && (
//                                         <SummaryCard
//                                             homePrice={results.recommended.homePrice}
//                                             minPrice={minPrice}
//                                             maxPrice={maxPrice}
//                                         />
//                                     )}
//                                     <div>
//                                         <h3 className="text-xl font-semibold text-slate-900 mb-4">
//                                             Affordability Options
//                                         </h3>
//                                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                             {results.conservative && (
//                                                 <OptionCard
//                                                     title="Conservative"
//                                                     option={results.conservative}
//                                                     variant="conservative"
//                                                 />
//                                             )}
//                                             {results.recommended && (
//                                                 <OptionCard
//                                                     title="Recommended"
//                                                     option={results.recommended}
//                                                     variant="recommended"
//                                                 />
//                                             )}
//                                             {results.stretch && (
//                                                 <OptionCard
//                                                     title="Stretch"
//                                                     option={results.stretch}
//                                                     variant="stretch"
//                                                 />
//                                             )}
//                                         </div>
//                                     </div>
//                                     {results.recommended && (
//                                         <PaymentBreakdownComponent
//                                             breakdown={results.recommended.monthly}
//                                         />
//                                     )}
//                                     <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
//                                         <h3 className="text-lg font-semibold text-slate-900 mb-4">
//                                             Assumptions
//                                         </h3>
//                                         <AssumptionsPills inputs={inputs} />
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         </>
//     )
// }


import React, { useCallback, useEffect, useState } from 'react'
import {
    DollarSign,
    CreditCard,
    Home,
    Info,
    ChevronDown,
    ChevronUp,
} from 'lucide-react'
const HomeAffordabilityCalculator: React.FC = () => {
    // Form state
    const [annualIncome, setAnnualIncome] = useState<number>(0)
    const [availableFunds, setAvailableFunds] = useState<number>(0)
    const [monthlyDebt, setMonthlyDebt] = useState<number>(1250)
    const [creditScore, setCreditScore] = useState<string>('720+')
    const [dtiRatio, setDtiRatio] = useState<number>(36) // Default to "Balanced"
    const [isCalculating, setIsCalculating] = useState<boolean>(false)
    const [showBreakdown, setShowBreakdown] = useState<boolean>(false)
    // Results state
    const [maxHomePrice, setMaxHomePrice] = useState<number>(0)
    const [loanAmount, setLoanAmount] = useState<number>(0)
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0)
    const [actualDtiRatio, setActualDtiRatio] = useState<number>(0)
    const [breakdownValues, setBreakdownValues] = useState({
        principalInterest: 0,
        propertyTax: 0,
        homeownersInsurance: 0,
        pmi: 0,
    })
    // Constants for calculations
    const INTEREST_RATE = 0.065 // 6.5% annual interest rate
    const LOAN_TERM_MONTHS = 360 // 30 years
    const PROPERTY_TAX_RATE = 0.0075 // 0.75% of home price annually
    const INSURANCE_RATE = 0.004 // 0.4% of home price annually
    const PMI_RATE = 0.007 // 0.7% of loan amount annually (if LTV > 80%)
    const MONTHLY_INTEREST_RATE = INTEREST_RATE / 12
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
    // Calculate monthly P&I payment for a given loan amount
    const calculatePrincipalAndInterest = (loan: number): number => {
        if (loan === 0) return 0
        const monthlyRate = MONTHLY_INTEREST_RATE
        return (
            (loan * (monthlyRate * Math.pow(1 + monthlyRate, LOAN_TERM_MONTHS))) /
            (Math.pow(1 + monthlyRate, LOAN_TERM_MONTHS) - 1)
        )
    }
    // Calculate monthly property tax
    const calculatePropertyTax = (homePrice: number): number => {
        return (homePrice * PROPERTY_TAX_RATE) / 12
    }
    // Calculate monthly homeowners insurance
    const calculateHomeInsurance = (homePrice: number): number => {
        return (homePrice * INSURANCE_RATE) / 12
    }
    // Calculate monthly PMI (if LTV > 80%)
    const calculatePMI = (loan: number, homePrice: number): number => {
        const ltv = loan / homePrice
        return ltv > 0.8 ? (loan * PMI_RATE) / 12 : 0
    }
    // Calculate total monthly payment (PITI+PMI)
    const calculateMonthlyPayment = (loan: number, homePrice: number): number => {
        const principalInterest = calculatePrincipalAndInterest(loan)
        const propertyTax = calculatePropertyTax(homePrice)
        const homeInsurance = calculateHomeInsurance(homePrice)
        const pmi = calculatePMI(loan, homePrice)
        return principalInterest + propertyTax + homeInsurance + pmi
    }
    // Calculate maximum affordable home price
    const calculateMaxHomePrice = useCallback(() => {
        setIsCalculating(true)
        // Calculate maximum monthly housing payment based on DTI
        const grossMonthlyIncome = annualIncome / 12
        const maxMonthlyPayment =
            grossMonthlyIncome * (dtiRatio / 100) - monthlyDebt
        if (maxMonthlyPayment <= 0) {
            setMaxHomePrice(0)
            setLoanAmount(0)
            setMonthlyPayment(0)
            setActualDtiRatio(0)
            setBreakdownValues({
                principalInterest: 0,
                propertyTax: 0,
                homeownersInsurance: 0,
                pmi: 0,
            })
            setIsCalculating(false)
            return
        }
        // Use binary search to find maximum affordable home price
        let low = 0
        let high = 5000000 // $5M upper bound
        let bestPrice = 0
        let bestLoan = 0
        let bestPayment = 0
        let bestBreakdown = {
            principalInterest: 0,
            propertyTax: 0,
            homeownersInsurance: 0,
            pmi: 0,
        }
        while (high - low > 1000) {
            // $1k precision
            const mid = Math.floor((low + high) / 2)
            const downPayment = Math.min(availableFunds, mid * 0.2) // Use up to 20% down payment
            const loan = mid - downPayment
            if (loan <= 0) {
                high = mid
                continue
            }
            const principalInterest = calculatePrincipalAndInterest(loan)
            const propertyTax = calculatePropertyTax(mid)
            const homeInsurance = calculateHomeInsurance(mid)
            const pmi = calculatePMI(loan, mid)
            const totalPayment = principalInterest + propertyTax + homeInsurance + pmi
            if (totalPayment <= maxMonthlyPayment) {
                bestPrice = mid
                bestLoan = loan
                bestPayment = totalPayment
                bestBreakdown = {
                    principalInterest,
                    propertyTax,
                    homeownersInsurance: homeInsurance,
                    pmi,
                }
                low = mid
            } else {
                high = mid
            }
        }
        // Calculate actual DTI ratio
        const actualDti = ((bestPayment + monthlyDebt) / (annualIncome / 12)) * 100
        setMaxHomePrice(bestPrice)
        setLoanAmount(bestLoan)
        setMonthlyPayment(bestPayment)
        setActualDtiRatio(actualDti)
        setBreakdownValues(bestBreakdown)
        setIsCalculating(false)
    }, [annualIncome, availableFunds, monthlyDebt, dtiRatio])
    // Handle input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target
        switch (name) {
            case 'annualIncome':
                setAnnualIncome(parseCurrency(value))
                break
            case 'availableFunds':
                setAvailableFunds(parseCurrency(value))
                break
            case 'monthlyDebt':
                setMonthlyDebt(parseCurrency(value))
                break
            case 'creditScore':
                setCreditScore(value)
                break
            default:
                break
        }
    }
    // Handle DTI slider change
    const handleDtiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDtiRatio(Number(e.target.value))
    }
    // Calculate on initial load and when inputs change
    useEffect(() => {
        const timer = setTimeout(() => {
            calculateMaxHomePrice()
        }, 300) // Debounce calculations
        return () => clearTimeout(timer)
    }, [
        annualIncome,
        availableFunds,
        monthlyDebt,
        creditScore,
        dtiRatio,
        calculateMaxHomePrice,
    ])
    // Get DTI label based on slider value
    const getDtiLabel = (value: number): string => {
        if (value <= 37) return 'Strict'
        if (value <= 42) return 'Balanced'
        return 'Aggressive'
    }
    return (
        <div className="max-w-[1200px] mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Input form */}
            <div className="rounded-3xl bg-gray-100 p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    Affordability calculator
                </h1>
                {/* Annual Income input */}
                <div className="mb-6">
                    <label
                        htmlFor="annualIncome"
                        className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                    >
                        Yearly income before taxes
                        <button
                            type="button"
                            aria-label="Income information"
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <Info size={16} />
                        </button>
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                            <DollarSign size={18} />
                        </span>
                        <input
                            type="text"
                            id="annualIncome"
                            name="annualIncome"
                            value={annualIncome === 0 ? '' : annualIncome.toLocaleString()}
                            onChange={handleInputChange}
                            className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                            aria-describedby="income-desc"
                        />
                    </div>
                    <div id="income-desc" className="sr-only">
                        Enter your yearly income before taxes
                    </div>
                </div>
                {/* Available Funds input */}
                <div className="mb-6">
                    <label
                        htmlFor="availableFunds"
                        className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                    >
                        Cash to buy
                        <button
                            type="button"
                            aria-label="Available funds information"
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <Info size={16} />
                        </button>
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                            <DollarSign size={18} />
                        </span>
                        <input
                            type="text"
                            id="availableFunds"
                            name="availableFunds"
                            value={
                                availableFunds === 0 ? '' : availableFunds.toLocaleString()
                            }
                            onChange={handleInputChange}
                            className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                            aria-describedby="funds-desc"
                        />
                    </div>
                    <div id="funds-desc" className="sr-only">
                        Enter your available funds for down payment
                    </div>
                </div>
                {/* Monthly Debt input */}
                <div className="mb-6">
                    <label
                        htmlFor="monthlyDebt"
                        className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                    >
                        Monthly debt
                        <button
                            type="button"
                            aria-label="Monthly debt information"
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <Info size={16} />
                        </button>
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                            <DollarSign size={18} />
                        </span>
                        <input
                            type="text"
                            id="monthlyDebt"
                            name="monthlyDebt"
                            value={monthlyDebt === 0 ? '' : monthlyDebt.toLocaleString()}
                            onChange={handleInputChange}
                            className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/70"
                            aria-describedby="debt-desc"
                        />
                    </div>
                    <div id="debt-desc" className="sr-only">
                        Enter your total monthly debt payments (excluding housing)
                    </div>
                </div>
                {/* Credit Score select - Enhanced with visual effect */}
                <div className="mb-8">
                    <label
                        htmlFor="creditScore"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Credit profile
                    </label>
                    <div
                        className="grid grid-cols-5 gap-2"
                        role="radiogroup"
                        aria-labelledby="creditScore"
                    >
                        <button
                            type="button"
                            onClick={() => {
                                const event = {
                                    target: {
                                        name: 'creditScore',
                                        value: '760+',
                                    },
                                } as React.ChangeEvent<HTMLSelectElement>
                                handleInputChange(event)
                            }}
                            className={`relative flex flex-col items-center justify-center py-3 px-1 rounded-lg transition-all ${creditScore === '760+' ? 'bg-green-100 border-2 border-green-500 shadow-md' : 'bg-white border border-gray-300 hover:bg-gray-50'}`}
                            aria-pressed={creditScore === '760+'}
                        >
                            <div
                                className={`w-6 h-6 rounded-full mb-1 ${creditScore === '760+' ? 'bg-green-500' : 'bg-green-200'}`}
                            ></div>
                            <span className="text-xs font-medium">760+</span>
                            <span className="text-[10px] text-gray-500">Excellent</span>
                            {creditScore === '760+' && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                const event = {
                                    target: {
                                        name: 'creditScore',
                                        value: '720+',
                                    },
                                } as React.ChangeEvent<HTMLSelectElement>
                                handleInputChange(event)
                            }}
                            className={`relative flex flex-col items-center justify-center py-3 px-1 rounded-lg transition-all ${creditScore === '720+' ? 'bg-green-100 border-2 border-green-500 shadow-md' : 'bg-white border border-gray-300 hover:bg-gray-50'}`}
                            aria-pressed={creditScore === '720+'}
                        >
                            <div
                                className={`w-6 h-6 rounded-full mb-1 ${creditScore === '720+' ? 'bg-green-500' : 'bg-green-200'}`}
                            ></div>
                            <span className="text-xs font-medium">720+</span>
                            <span className="text-[10px] text-gray-500">Very good</span>
                            {creditScore === '720+' && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                const event = {
                                    target: {
                                        name: 'creditScore',
                                        value: '680–719',
                                    },
                                } as React.ChangeEvent<HTMLSelectElement>
                                handleInputChange(event)
                            }}
                            className={`relative flex flex-col items-center justify-center py-3 px-1 rounded-lg transition-all ${creditScore === '680–719' ? 'bg-yellow-100 border-2 border-yellow-500 shadow-md' : 'bg-white border border-gray-300 hover:bg-gray-50'}`}
                            aria-pressed={creditScore === '680–719'}
                        >
                            <div
                                className={`w-6 h-6 rounded-full mb-1 ${creditScore === '680–719' ? 'bg-yellow-500' : 'bg-yellow-200'}`}
                            ></div>
                            <span className="text-xs font-medium">680–719</span>
                            <span className="text-[10px] text-gray-500">Good</span>
                            {creditScore === '680–719' && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                const event = {
                                    target: {
                                        name: 'creditScore',
                                        value: '640–679',
                                    },
                                } as React.ChangeEvent<HTMLSelectElement>
                                handleInputChange(event)
                            }}
                            className={`relative flex flex-col items-center justify-center py-3 px-1 rounded-lg transition-all ${creditScore === '640–679' ? 'bg-orange-100 border-2 border-orange-500 shadow-md' : 'bg-white border border-gray-300 hover:bg-gray-50'}`}
                            aria-pressed={creditScore === '640–679'}
                        >
                            <div
                                className={`w-6 h-6 rounded-full mb-1 ${creditScore === '640–679' ? 'bg-orange-500' : 'bg-orange-200'}`}
                            ></div>
                            <span className="text-xs font-medium">640–679</span>
                            <span className="text-[10px] text-gray-500">Fair</span>
                            {creditScore === '640–679' && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                const event = {
                                    target: {
                                        name: 'creditScore',
                                        value: '≤639',
                                    },
                                } as React.ChangeEvent<HTMLSelectElement>
                                handleInputChange(event)
                            }}
                            className={`relative flex flex-col items-center justify-center py-3 px-1 rounded-lg transition-all ${creditScore === '≤639' ? 'bg-red-100 border-2 border-red-500 shadow-md' : 'bg-white border border-gray-300 hover:bg-gray-50'}`}
                            aria-pressed={creditScore === '≤639'}
                        >
                            <div
                                className={`w-6 h-6 rounded-full mb-1 ${creditScore === '≤639' ? 'bg-red-500' : 'bg-red-200'}`}
                            ></div>
                            <span className="text-xs font-medium">≤639</span>
                            <span className="text-[10px] text-gray-500">Poor</span>
                            {creditScore === '≤639' && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </button>
                    </div>
                    <div id="credit-desc" className="sr-only">
                        Select your credit score range
                    </div>
                </div>
                {/* Update button */}
                <button
                    type="button"
                    onClick={calculateMaxHomePrice}
                    className="w-full h-12 rounded-full text-white font-medium bg-black hover:bg-gray-800 transition-colors"
                >
                    Update
                </button>
                {/* Footer */}
                <div className="mt-6 text-xs text-center text-gray-500 flex items-center justify-center gap-2">
                    <span className="text-red-600 font-medium">RateBeat</span>
                </div>
            </div>
            {/* Right column - Results */}
            <div className="rounded-3xl bg-blue-100 p-6 md:p-8 flex flex-col">
                {/* Main result */}
                <div className="mb-6">
                    <h2 className="text-lg font-medium mb-2">
                        Estimated home price you can afford
                    </h2>
                    <div className="text-5xl md:text-6xl font-bold tabular-nums">
                        {isCalculating ? (
                            <div className="flex items-center">
                                <div className="animate-pulse">Calculating...</div>
                            </div>
                        ) : (
                            formatCurrency(maxHomePrice)
                        )}
                    </div>
                </div>
                {/* DTI Slider */}
                <div className="mb-8">
                    <div className="mb-1 flex justify-between text-sm">
                        <span className="text-green-700 font-medium">Affordable</span>
                        <span className="text-yellow-700 font-medium">Stretching</span>
                        <span className="text-red-700 font-medium">Aggressive</span>
                    </div>
                    <div className="relative mt-2">
                        <div className="absolute top-0 left-0 right-0 h-2 rounded-lg overflow-hidden">
                            <div className="h-full w-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"></div>
                        </div>
                        <input
                            type="range"
                            min="36"
                            max="45"
                            step="1"
                            value={dtiRatio}
                            onChange={handleDtiChange}
                            className="relative w-full h-2 bg-transparent appearance-none cursor-pointer z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:mb-4 [&::-webkit-slider-thumb]:rounded-lg [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-black [&::-moz-range-thumb]:cursor-pointer"
                        />
                    </div>
                    <div className="mt-3 text-sm text-center">
                        <span
                            className={`font-medium ${dtiRatio <= 37 ? 'text-green-700' : dtiRatio <= 42 ? 'text-yellow-700' : 'text-red-700'}`}
                        >
                            {getDtiLabel(dtiRatio)}
                        </span>{' '}
                        ({dtiRatio}% DTI)
                    </div>
                </div>
                {/* Summary cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-xl p-4">
                        <div className="text-gray-600 text-sm">Monthly payment</div>
                        <div className="text-xl font-semibold tabular-nums">
                            {formatCurrency(monthlyPayment)}
                        </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                        <div className="text-gray-600 text-sm">Cash to buy</div>
                        <div className="text-xl font-semibold tabular-nums">
                            {formatCurrency(availableFunds)}
                        </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                        <div className="text-gray-600 text-sm">Debt-to-income ratio</div>
                        <div className="text-xl font-semibold tabular-nums">
                            {actualDtiRatio.toFixed(0)}%
                        </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                        <div className="text-gray-600 text-sm">Loan amount</div>
                        <div className="text-xl font-semibold tabular-nums">
                            {formatCurrency(loanAmount)}
                        </div>
                    </div>
                </div>
                {/* Payment breakdown */}
                <div className="mt-auto">
                    <button
                        onClick={() => setShowBreakdown(!showBreakdown)}
                        className="flex items-center justify-between w-full py-2 text-left font-medium"
                    >
                        <span>Monthly payment breakdown</span>
                        {showBreakdown ? (
                            <ChevronUp size={20} />
                        ) : (
                            <ChevronDown size={20} />
                        )}
                    </button>
                    {showBreakdown && (
                        <div className="space-y-4 mt-2">
                            <div className="flex justify-between items-center py-3 border-b border-blue-200">
                                <div className="flex items-center gap-2">
                                    <Home size={18} />
                                    <span>Principal & interest</span>
                                </div>
                                <div className="font-semibold tabular-nums">
                                    {formatCurrency(breakdownValues.principalInterest)}
                                </div>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-blue-200">
                                <div>Property taxes</div>
                                <div className="font-semibold tabular-nums">
                                    {formatCurrency(breakdownValues.propertyTax)}
                                </div>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-blue-200">
                                <div>Homeowners insurance</div>
                                <div className="font-semibold tabular-nums">
                                    {formatCurrency(breakdownValues.homeownersInsurance)}
                                </div>
                            </div>
                            {breakdownValues.pmi > 0 && (
                                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                                    <div>Private mortgage insurance</div>
                                    <div className="font-semibold tabular-nums">
                                        {formatCurrency(breakdownValues.pmi)}
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-between items-center py-3 font-medium">
                                <div>Total monthly payment</div>
                                <div className="font-bold tabular-nums text-lg">
                                    {formatCurrency(monthlyPayment)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* CTA */}
                <div className="mt-6">
                    <button
                        type="button"
                        className="w-full h-12 rounded-full text-white font-medium bg-black hover:bg-gray-800 transition-colors"
                    >
                        Get prequalified
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HomeAffordabilityCalculator
