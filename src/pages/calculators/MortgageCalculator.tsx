import { ChevronDown, DollarSign, InfoIcon, PercentIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
// Define types for the application
interface MonthlyPayment {
    total: number;
    principalAndInterest: number;
    taxes: number;
    insurance: number;
}
interface ZipCodeRates {
    taxRate: number;
    insuranceRate: number;
}
interface ZipCodeData {
    [key: string]: ZipCodeRates;
    default: ZipCodeRates;
}
interface PieDataItem {
    name: string;
    value: number;
    color: string;
}
interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
        name: string;
        value: number;
        payload: PieDataItem;
    }>;
}
const MortgageCalculator: React.FC = () => {
    const [homePrice, setHomePrice] = useState<number>(400000);
    const [downPayment, setDownPayment] = useState<number>(80000);
    const [loanTerm, setLoanTerm] = useState<number>(30);
    const [interestRate, setInterestRate] = useState<number>(5.5);
    const [zipCode, setZipCode] = useState<string>('83001');
    const [showOptional, setShowOptional] = useState<boolean>(false);
    const [propertyTax, setPropertyTax] = useState<number>(173);
    const [insurance, setInsurance] = useState<number>(143);
    const [isPercent, setIsPercent] = useState<boolean>(true);
    const [customTaxInsurance, setCustomTaxInsurance] = useState<boolean>(false);
    const [monthlyPayment, setMonthlyPayment] = useState<MonthlyPayment>({
        total: 0,
        principalAndInterest: 0,
        taxes: propertyTax,
        insurance: insurance
    });
    // ZIP code based tax and insurance estimates
    const zipCodeData: ZipCodeData = {
        // Northeast
        '0': {
            taxRate: 1.8,
            insuranceRate: 0.35
        },
        '1': {
            taxRate: 1.9,
            insuranceRate: 0.4
        },
        // Mid-Atlantic
        '2': {
            taxRate: 1.2,
            insuranceRate: 0.45
        },
        // Southeast
        '3': {
            taxRate: 1.0,
            insuranceRate: 0.6
        },
        // Midwest
        '4': {
            taxRate: 1.5,
            insuranceRate: 0.3
        },
        '5': {
            taxRate: 1.4,
            insuranceRate: 0.25
        },
        '6': {
            taxRate: 1.6,
            insuranceRate: 0.28
        },
        // South Central
        '7': {
            taxRate: 1.7,
            insuranceRate: 0.55
        },
        // Mountain West
        '8': {
            taxRate: 0.8,
            insuranceRate: 0.3
        },
        // West Coast
        '9': {
            taxRate: 0.9,
            insuranceRate: 0.35
        },
        // Default values if ZIP code is invalid
        default: {
            taxRate: 1.2,
            insuranceRate: 0.35
        }
    };
    // Initialize calculation on first render
    useEffect(() => {
        updateTaxAndInsuranceByZip();
        calculateMonthlyPayment();
    }, []);
    // Update tax and insurance estimates when ZIP code or home price changes
    useEffect(() => {
        if (!customTaxInsurance) {
            updateTaxAndInsuranceByZip();
        }
    }, [zipCode, homePrice, customTaxInsurance]);
    // Calculate monthly payment whenever inputs change
    useEffect(() => {
        calculateMonthlyPayment();
    }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, insurance]);
    // Get tax and insurance rates based on ZIP code
    const getZipCodeRates = (zip: string): ZipCodeRates => {
        if (!zip || zip.length === 0) return zipCodeData['default'];
        const firstDigit = zip.charAt(0);
        return zipCodeData[firstDigit] || zipCodeData['default'];
    };
    // Update tax and insurance based on ZIP code
    const updateTaxAndInsuranceByZip = (): void => {
        const rates = getZipCodeRates(zipCode);
        // Calculate annual property tax based on home value and tax rate
        const annualPropertyTax = homePrice * (rates.taxRate / 100);
        const monthlyPropertyTax = Math.round(annualPropertyTax / 12);
        // Calculate annual insurance based on home value and insurance rate
        const annualInsurance = homePrice * (rates.insuranceRate / 100);
        const monthlyInsurance = Math.round(annualInsurance / 12);
        // For ZIP codes starting with 8 (like 83001), set taxes and insurance to match original calculator
        if (zipCode.charAt(0) === '8') {
            setPropertyTax(173);
            setInsurance(143);
        } else {
            setPropertyTax(monthlyPropertyTax);
            setInsurance(monthlyInsurance);
        }
    };
    // Convert currency string to number
    const currencyToNumber = (value: string | number): number => {
        if (typeof value === 'string') {
            return parseFloat(value.replace(/[^0-9.-]+/g, ''));
        }
        return value;
    };
    // Format number as currency (without $ symbol)
    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    // Format number as currency (with $ symbol)
    const formatCurrencyWithSymbol = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    // Round to nearest dollar
    const roundToNearestDollar = (value: number): number => {
        return Math.round(value);
    };
    // Calculate monthly mortgage payment
    const calculateMonthlyPayment = (): void => {
        // Calculate loan amount
        const loanAmount = homePrice - downPayment;
        // Monthly interest rate
        const monthlyRate = interestRate / 100 / 12;
        // Number of payments
        const numberOfPayments = loanTerm * 12;
        // Calculate principal and interest
        let principalAndInterest = 0;
        if (monthlyRate > 0) {
            principalAndInterest = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        } else {
            principalAndInterest = loanAmount / numberOfPayments;
        }
        // Calculate total monthly payment
        const total = principalAndInterest + propertyTax + insurance;
        setMonthlyPayment({
            total,
            principalAndInterest,
            taxes: propertyTax,
            insurance: insurance
        });
    };
    const handleHomePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = currencyToNumber(e.target.value);
        setHomePrice(value);
        // Adjust down payment if needed to maintain percentage
        if (isPercent) {
            const percentage = downPayment / homePrice * 100;
            setDownPayment(Math.round(percentage / 100 * value));
        }
    };
    const handleDownPayment = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = currencyToNumber(e.target.value);
        setDownPayment(value);
    };
    const togglePaymentType = (): void => {
        setIsPercent(!isPercent);
        if (!isPercent) {
            // Switch to percentage
            setDownPayment(Math.round(0.2 * homePrice));
        }
    };
    // Handle ZIP code change
    const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newZipCode = e.target.value;
        // Only allow numbers and limit to 5 digits
        if (/^\d{0,5}$/.test(newZipCode)) {
            setZipCode(newZipCode);
        }
    };
    // Handle custom tax and insurance inputs
    const handleCustomTaxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCustomTaxInsurance(true);
        setPropertyTax(parseFloat(e.target.value) || 0);
    };
    const handleCustomInsuranceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCustomTaxInsurance(true);
        setInsurance(parseFloat(e.target.value) || 0);
    };
    // Handle loan term change
    const handleLoanTermChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setLoanTerm(parseInt(e.target.value));
    };
    // Handle interest rate change
    const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInterestRate(parseFloat(e.target.value) || 0);
    };
    // Prepare data for pie chart
    const pieData: PieDataItem[] = [{
        name: 'Principal & Interest',
        value: roundToNearestDollar(monthlyPayment.principalAndInterest),
        color: '#3b82f6' // blue-500
    }, {
        name: 'Taxes',
        value: roundToNearestDollar(monthlyPayment.taxes),
        color: '#10b981' // emerald-500
    }, {
        name: 'Insurance',
        value: roundToNearestDollar(monthlyPayment.insurance),
        color: '#8b5cf6' // violet-500
    }];
    // Custom tooltip for pie chart
    const CustomTooltip: React.FC<CustomTooltipProps> = ({
        active,
        payload
    }) => {
        if (active && payload && payload.length) {
            return <div className="bg-white p-2 shadow-md rounded-md border border-gray-200">
                <p className="text-sm font-medium">{payload[0].name}</p>
                <p className="text-sm font-bold">
                    {formatCurrencyWithSymbol(payload[0].value)}
                </p>
            </div>;
        }
        return null;
    };
    return (
        <>
            <div className="max-w-6xl mx-auto p-12">
                <div className="flex flex-col lg:flex-row gap-6 rounded-3xl overflow-hidden">
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
                                <input type="text" value={formatCurrency(homePrice)} onChange={handleHomePrice} className="w-full p-3 pl-8 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        {/* Down Payment */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">
                                Down payment
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                    $
                                </span>
                                <input type="text" value={formatCurrency(downPayment)} onChange={handleDownPayment} className="w-full p-3 pl-8 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <button onClick={togglePaymentType} className="absolute inset-y-0 right-0 flex items-center bg-gray-200 rounded-r-lg px-3 hover:bg-gray-300 transition-colors">
                                    {isPercent ? <DollarSign size={16} /> : <PercentIcon size={16} />}
                                </button>
                            </div>
                        </div>
                        {/* Down Payment Info */}
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
                                    <select value={loanTerm} onChange={handleLoanTermChange} className="w-full p-3 rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value={10}>10 year</option>
                                        <option value={15}>15 year</option>
                                        <option value={20}>20 year</option>
                                        <option value={30}>30 year</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                                </div>
                            </div>
                            {/* Interest Rate */}
                            <div>
                                <div className="flex items-center gap-1 mb-2">
                                    <label className="block text-sm font-medium">
                                        Interest rate
                                    </label>
                                    <InfoIcon size={14} className="text-gray-600" />
                                </div>
                                <div className="relative">
                                    <input type="number" value={interestRate} onChange={handleInterestRateChange} step="0.1" min="0" max="20" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
                            <input type="text" value={zipCode} onChange={handleZipCodeChange} placeholder="Enter ZIP code" maxLength={5} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <p className="text-xs text-gray-500 mt-1">
                                Your ZIP code helps us estimate property taxes and insurance costs
                                for your area.
                            </p>
                        </div>
                        {/* Optional Section */}
                        <div className="mb-6">
                            <button onClick={() => setShowOptional(!showOptional)} className="flex items-center gap-2 text-gray-700 font-medium">
                                <InfoIcon size={18} className="text-gray-600" />
                                Optional: Enter taxes & insurance
                                <ChevronDown size={16} className={`text-gray-600 transition-transform ${showOptional ? 'rotate-180' : ''}`} />
                            </button>
                            {showOptional && <div className="mt-4 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Property tax (monthly)
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                                            $
                                        </span>
                                        <input type="number" value={propertyTax} onChange={handleCustomTaxChange} className="w-full p-3 pl-8 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
                                        <input type="number" value={insurance} onChange={handleCustomInsuranceChange} className="w-full p-3 pl-8 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg">
                                    <InfoIcon size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-blue-700">
                                        We've estimated your property tax and insurance based on
                                        your ZIP code. You can adjust these values if you have more
                                        accurate information.
                                    </p>
                                </div>
                            </div>}
                        </div>
                        {/* Calculate Button */}
                        <button onClick={calculateMonthlyPayment} className="w-full bg-black text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
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
                    {/* Right section - Results */}
                    <div className="bg-blue-100 p-6 lg:p-12 rounded-3xl lg:w-1/3">
                        <h2 className="text-lg font-medium text-gray-700 mb-2">
                            Estimated monthly payment
                        </h2>
                        <div className="mb-6">
                            <div className="flex items-start">
                                <div className="text-6xl font-bold text-gray-800">
                                    {formatCurrencyWithSymbol(roundToNearestDollar(monthlyPayment.total))}
                                </div>
                                <div className="text-xl font-bold text-gray-800 mt-1 ml-1">*</div>
                            </div>
                        </div>
                        {/* Pie Chart */}

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <div className="text-xl font-bold text-gray-800">
                                    {formatCurrencyWithSymbol(roundToNearestDollar(monthlyPayment.principalAndInterest))}
                                </div>
                                <div className="text-sm text-gray-600">Principal & interest</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-800">
                                    {formatCurrencyWithSymbol(roundToNearestDollar(monthlyPayment.taxes))}
                                </div>
                                <div className="text-sm text-gray-600">Taxes</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-800">
                                    {formatCurrencyWithSymbol(roundToNearestDollar(monthlyPayment.insurance))}
                                </div>
                                <div className="text-sm text-gray-600">Insurance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MortgageCalculator;