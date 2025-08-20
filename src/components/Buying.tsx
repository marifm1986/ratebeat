import React, { useState } from 'react'
import { Header } from '../components/Header'
import { ArrowLeftIcon } from 'lucide-react'
export function Buying() {
    const [currentStep, setCurrentStep] = useState(0)
    const [showHomeFoundQuestion, setShowHomeFoundQuestion] = useState(false)
    const [homeFound, setHomeFound] = useState('')
    const [homeFoundStep, setHomeFoundStep] = useState(0)
    const [selections, setSelections] = useState({
        buyingStage: '',
        timeframe: '',
        creditScore: '',
        homeLocation: '',
        homeType: '',
        homePrice: '',
        hasRealEstateAgent: '',
        homeUse: '',
    })
    // Function to check if the current step has a selection
    const hasSelection = () => {
        switch (currentStep) {
            case 0:
                return true
            // First welcome screen doesn't need a selection
            case 1:
                return selections.buyingStage !== ''
            case 2:
                return selections.timeframe !== ''
            case 3:
                return selections.creditScore !== ''
            default:
                return false
        }
    }
    const hasHomeFoundSelection = () => {
        switch (homeFoundStep) {
            case 0:
                return selections.homeType !== ''
            case 1:
                return selections.homePrice !== ''
            case 2:
                return selections.hasRealEstateAgent !== ''
            case 3:
                return selections.homeUse !== ''
            default:
                return false
        }
    }
    const handleSelection = (field: any, value: any) => {
        setSelections({
            ...selections,
            [field]: value,
        })
    }
    const formSteps = [
        // Step 0: Initial screen
        {
            title: 'Get prequalified for your dream home',
            content: (
                <>
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center">
                            <span className="mr-3">⏱️</span>
                            <p>Takes about 5 minutes</p>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-3">🔓</span>
                            <p>Unlock exclusive rates and savings</p>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-3">👨‍💼</span>
                            <p>Instant access to our experts</p>
                        </div>
                    </div>
                </>
            ),
        },
        // Step 1: Where are you in your home buying journey?
        {
            title: 'Where are you in your home buying journey?',
            content: (
                <div className="space-y-4 mb-8">
                    <div
                        className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.buyingStage === 'just-starting' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                        onClick={() => handleSelection('buyingStage', 'just-starting')}
                    >
                        <span>Just getting started</span>
                        <div
                            className={`w-5 h-5 rounded-full border ${selections.buyingStage === 'just-starting' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                        >
                            {selections.buyingStage === 'just-starting' && (
                                <div className="flex items-center justify-center h-full">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.buyingStage === 'making-offers' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                        onClick={() => handleSelection('buyingStage', 'making-offers')}
                    >
                        <span>Making offers</span>
                        <div
                            className={`w-5 h-5 rounded-full border ${selections.buyingStage === 'making-offers' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                        >
                            {selections.buyingStage === 'making-offers' && (
                                <div className="flex items-center justify-center h-full">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.buyingStage === 'signed-agreement' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                        onClick={() => handleSelection('buyingStage', 'signed-agreement')}
                    >
                        <span>I signed a purchase agreement</span>
                        <div
                            className={`w-5 h-5 rounded-full border ${selections.buyingStage === 'signed-agreement' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                        >
                            {selections.buyingStage === 'signed-agreement' && (
                                <div className="flex items-center justify-center h-full">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ),
        },
        // Step 2: When would you like to buy?
        {
            title: 'When would you like to buy?',
            content: (
                <div className="space-y-4 mb-8">
                    <p className="text-gray-600 mb-4">
                        It's okay if you're not sure yet. Just give us your best guess.
                    </p>
                    <div
                        className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.timeframe === 'within-30-days' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                        onClick={() => handleSelection('timeframe', 'within-30-days')}
                    >
                        <span>Within 30 days</span>
                        <div
                            className={`w-5 h-5 rounded-full border ${selections.timeframe === 'within-30-days' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                        >
                            {selections.timeframe === 'within-30-days' && (
                                <div className="flex items-center justify-center h-full">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.timeframe === '2-3-months' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                        onClick={() => handleSelection('timeframe', '2-3-months')}
                    >
                        <span>In 2 - 3 months</span>
                        <div
                            className={`w-5 h-5 rounded-full border ${selections.timeframe === '2-3-months' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                        >
                            {selections.timeframe === '2-3-months' && (
                                <div className="flex items-center justify-center h-full">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.timeframe === '3-6-months' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                        onClick={() => handleSelection('timeframe', '3-6-months')}
                    >
                        <span>In 3 - 6 months</span>
                        <div
                            className={`w-5 h-5 rounded-full border ${selections.timeframe === '3-6-months' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                        >
                            {selections.timeframe === '3-6-months' && (
                                <div className="flex items-center justify-center h-full">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.timeframe === 'more-than-6-months' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                        onClick={() => handleSelection('timeframe', 'more-than-6-months')}
                    >
                        <span>More than 6 months</span>
                        <div
                            className={`w-5 h-5 rounded-full border ${selections.timeframe === 'more-than-6-months' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                        >
                            {selections.timeframe === 'more-than-6-months' && (
                                <div className="flex items-center justify-center h-full">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ),
        },
        // Step 3: Credit Score Information
        {
            title: 'Almost there!',
            content: (
                <div className="space-y-4 mb-8">
                    <div className="bg-green-50 p-4 rounded-md mb-6">
                        <p className="text-green-800">
                            {selections.buyingStage === 'just-starting' &&
                                "Great! Let's help you stand out from other buyers."}
                            {selections.buyingStage === 'making-offers' &&
                                "Great! Let's help you make stronger offers."}
                            {selections.buyingStage === 'signed-agreement' &&
                                "Exciting! We'll work on finding you some custom loan options."}
                        </p>
                        {selections.buyingStage === 'just-starting' && (
                            <p className="text-sm mt-2">
                                After getting prequalified, a Home Loan Expert will work on
                                upgrading you to the strongest approval possible.
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Credit Score Range
                        </label>
                        <div className="space-y-2">
                            {[
                                'Excellent (720+)',
                                'Good (680-719)',
                                'Fair (620-679)',
                                'Poor (Below 620)',
                            ].map((range) => (
                                <div
                                    key={range}
                                    className={`p-3 border rounded-md flex items-center justify-between cursor-pointer ${selections.creditScore === range ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                    onClick={() => handleSelection('creditScore', range)}
                                >
                                    <span>{range}</span>
                                    <div
                                        className={`w-5 h-5 rounded-full border ${selections.creditScore === range ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                    >
                                        {selections.creditScore === range && (
                                            <div className="flex items-center justify-center h-full">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                            I agree to the terms and conditions
                        </label>
                    </div>
                </div>
            ),
        },
    ]
    const homeFoundSteps = [
        // Step 1: Home Location and Type
        {
            render: () => (
                <div className="w-full">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold mb-4">
                            Where's the home located?
                        </h1>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="City, state or ZIP code"
                                className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50"
                                onChange={(e) =>
                                    handleSelection('homeLocation', e.target.value)
                                }
                                value={selections.homeLocation}
                            />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                            What type of home is it?
                        </h2>
                        <div className="space-y-4">
                            <div
                                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.homeType === 'single-family' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() => handleSelection('homeType', 'single-family')}
                            >
                                <span>Single-family</span>
                                <div
                                    className={`w-5 h-5 rounded-full border ${selections.homeType === 'single-family' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                >
                                    {selections.homeType === 'single-family' && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.homeType === '2-4-units' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() => handleSelection('homeType', '2-4-units')}
                            >
                                <span>2 - 4 units</span>
                                <div
                                    className={`w-5 h-5 rounded-full border ${selections.homeType === '2-4-units' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                >
                                    {selections.homeType === '2-4-units' && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.homeType === 'condo' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() => handleSelection('homeType', 'condo')}
                            >
                                <span>Condo</span>
                                <div
                                    className={`w-5 h-5 rounded-full border ${selections.homeType === 'condo' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                >
                                    {selections.homeType === 'condo' && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.homeType === 'manufactured' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() => handleSelection('homeType', 'manufactured')}
                            >
                                <span>Manufactured</span>
                                <div
                                    className={`w-5 h-5 rounded-full border ${selections.homeType === 'manufactured' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                >
                                    {selections.homeType === 'manufactured' && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                type="button"
                                className="flex items-center text-gray-600 hover:text-gray-800"
                                onClick={() => {
                                    document
                                        .getElementById('other-home-types')
                                        ?.classList.toggle('hidden')
                                }}
                            >
                                <span className="mr-2">What about other home types?</span>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="other-home-types"
                                className="hidden mt-4 p-4 bg-gray-50 rounded-lg"
                            >
                                <p className="text-sm text-gray-600 mb-2">
                                    For townhouses, go ahead and choose Single-family.
                                </p>
                                <p className="text-sm text-gray-600">
                                    We don't usually offer loans for mobile homes, but a Home Loan
                                    Expert can still try to prequalify you for a single-family
                                    home.
                                </p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mt-8 mb-4">
                            How do you plan to use it?
                        </h2>
                        <div className="space-y-4">
                            <div
                                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.homeUse === 'primary-residence' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() => handleSelection('homeUse', 'primary-residence')}
                            >
                                <span>As a primary residence</span>
                                <div
                                    className={`w-5 h-5 rounded-full border ${selections.homeUse === 'primary-residence' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                >
                                    {selections.homeUse === 'primary-residence' && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.homeUse === 'vacation-home' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() => handleSelection('homeUse', 'vacation-home')}
                            >
                                <span>As a vacation home</span>
                                <div
                                    className={`w-5 h-5 rounded-full border ${selections.homeUse === 'vacation-home' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                >
                                    {selections.homeUse === 'vacation-home' && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.homeUse === 'investment-property' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() =>
                                    handleSelection('homeUse', 'investment-property')
                                }
                            >
                                <span>As an investment property</span>
                                <div
                                    className={`w-5 h-5 rounded-full border ${selections.homeUse === 'investment-property' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                >
                                    {selections.homeUse === 'investment-property' && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                type="button"
                                className="flex items-center text-gray-600 hover:text-gray-800"
                                onClick={() => {
                                    document
                                        .getElementById('residence-differences')
                                        ?.classList.toggle('hidden')
                                }}
                            >
                                <span className="mr-2">What are the differences?</span>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="residence-differences"
                                className="hidden mt-4 p-4 bg-gray-50 rounded-lg"
                            >
                                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                                    <li>
                                        A primary residence is where you live for most of the year.
                                    </li>
                                    <li>
                                        A vacation home is somewhere you live for part of the year.
                                    </li>
                                    <li>
                                        An investment property is often used to generate income.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        // Step 2: Home Price
        {
            render: () => (
                <div className="w-full">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold mb-6">
                            What's the price of the home you've picked out?
                        </h1>
                        <p className="text-gray-600 mb-6">
                            You can start with the listing price or put in a higher amount to
                            see if you could get prequalified for more.
                        </p>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Home price
                            </label>
                            <input
                                type="text"
                                placeholder="$250,000"
                                className="w-full p-4 border border-gray-300 rounded-lg"
                                onChange={(e) => handleSelection('homePrice', e.target.value)}
                                value={selections.homePrice}
                            />
                        </div>
                        <p className="text-sm text-amber-700">
                            Please enter a home price between $25,000 and $9,999,999.
                        </p>
                    </div>
                </div>
            ),
        },
        // Step 3: Real Estate Agent
        {
            render: () => (
                <div className="w-full">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold mb-6">
                            Are you already working with a real estate agent to buy your new
                            home?
                        </h1>
                        <div className="space-y-4">
                            <div
                                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.hasRealEstateAgent === 'yes' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() => handleSelection('hasRealEstateAgent', 'yes')}
                            >
                                <span>Yes</span>
                                <div
                                    className={`w-5 h-5 rounded-full border ${selections.hasRealEstateAgent === 'yes' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                >
                                    {selections.hasRealEstateAgent === 'yes' && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${selections.hasRealEstateAgent === 'no' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() => handleSelection('hasRealEstateAgent', 'no')}
                            >
                                <span>No</span>
                                <div
                                    className={`w-5 h-5 rounded-full border ${selections.hasRealEstateAgent === 'no' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                >
                                    {selections.hasRealEstateAgent === 'no' && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ]
    const handleContinue = () => {
        if (selections.buyingStage === 'making-offers' && currentStep === 1) {
            setShowHomeFoundQuestion(true)
        } else if (currentStep < formSteps.length - 1) {
            setCurrentStep(currentStep + 1)
        } else {
            // Submit form or show completion message
            alert('Form submitted successfully!')
        }
    }
    const handleHomeFoundSelection = (value: any) => {
        setHomeFound(value)
    }
    const handleHomeFoundContinue = () => {
        if (homeFound === 'yes') {
            setShowHomeFoundQuestion(false)
            setHomeFoundStep(0)
        } else {
            setShowHomeFoundQuestion(false)
            setCurrentStep(currentStep + 1)
        }
    }
    const handleHomeFoundStepContinue = () => {
        if (homeFoundStep < homeFoundSteps.length - 1) {
            setHomeFoundStep(homeFoundStep + 1)
        } else {
            // After completing all home found steps, go to the next regular step
            setHomeFoundStep(0)
            setCurrentStep(currentStep + 1)
        }
    }
    const handleBack = () => {
        if (homeFoundStep > 0) {
            setHomeFoundStep(homeFoundStep - 1)
        } else if (showHomeFoundQuestion) {
            setShowHomeFoundQuestion(false)
        } else if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }
    // Get custom message based on selection
    const getResponseMessage = () => {
        if (currentStep !== 3) return null
        if (selections.buyingStage === 'just-starting') {
            return "Great! Let's help you stand out from other buyers."
        } else if (selections.buyingStage === 'making-offers') {
            return "Great! Let's help you make stronger offers."
        } else if (selections.buyingStage === 'signed-agreement') {
            return "Exciting! We'll work on finding you some custom loan options."
        }
        return null
    }
    // Determine if we're in the "Yes" flow for found home
    const isInHomeFoundFlow =
        homeFound === 'yes' &&
        homeFoundStep >= 0 &&
        homeFoundStep < homeFoundSteps.length
    return (
        <div className="w-full min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-4 py-12 flex flex-col items-center">
                <div className="max-w-2xl w-full">
                    {showHomeFoundQuestion ? (
                        <div>
                            <div className="mb-8 text-center">
                                <img
                                    src="/buy.webp"
                                    alt="Person looking at computer"
                                    className="mx-auto mb-6 max-w-xs"
                                />
                                <h1 className="text-3xl font-bold mb-6">
                                    Before we jump in, have you found the home you'd like to buy?
                                </h1>
                            </div>
                            <div className="space-y-4 mb-8">
                                <div
                                    className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${homeFound === 'yes' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                    onClick={() => handleHomeFoundSelection('yes')}
                                >
                                    <span>Yes</span>
                                    <div
                                        className={`w-5 h-5 rounded-full border ${homeFound === 'yes' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                    >
                                        {homeFound === 'yes' && (
                                            <div className="flex items-center justify-center h-full">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${homeFound === 'no' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                    onClick={() => handleHomeFoundSelection('no')}
                                >
                                    <span>No</span>
                                    <div
                                        className={`w-5 h-5 rounded-full border ${homeFound === 'no' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                                    >
                                        {homeFound === 'no' && (
                                            <div className="flex items-center justify-center h-full">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {homeFound === 'yes' && (
                                    <div className="mt-6">
                                        <p className="text-lg font-medium mb-2">
                                            Exciting! Let's talk about it.
                                        </p>
                                        <p className="text-gray-600">
                                            We'll just need a few details to help set you up for
                                            success.
                                        </p>
                                    </div>
                                )}
                                {homeFound === 'no' && (
                                    <div className="mt-6">
                                        <p className="text-lg font-medium mb-2">
                                            That's totally normal!
                                        </p>
                                        <p className="text-gray-600">
                                            Let's talk about what you're looking for. Then, we'll help
                                            you with your home search by showing what you could
                                            afford.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col space-y-3">
                                <button
                                    onClick={handleHomeFoundContinue}
                                    disabled={!homeFound}
                                    className={`w-full py-3 rounded-full mb-4 transition-all ${!homeFound ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-black text-white active:scale-95'}`}
                                >
                                    Next
                                </button>
                                <button
                                    onClick={handleBack}
                                    className="w-full bg-white text-black border border-gray-300 py-3 rounded-full"
                                >
                                    Back
                                </button>
                            </div>
                        </div>
                    ) : isInHomeFoundFlow ? (
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <button
                                    onClick={handleBack}
                                    className="flex items-center text-gray-600"
                                >
                                    <ArrowLeftIcon className="w-5 h-5 mr-1" />
                                    Back
                                </button>
                                <span className="text-gray-600">Home info</span>
                            </div>
                            <div className="w-full h-1 bg-red-500 mb-8"></div>
                            {/* Render the current home found step */}
                            {homeFoundSteps[homeFoundStep].render()}
                            <div className="flex flex-col space-y-3">
                                <button
                                    onClick={handleHomeFoundStepContinue}
                                    disabled={!hasHomeFoundSelection()}
                                    className={`w-full py-3 rounded-full mb-4 transition-all ${!hasHomeFoundSelection() ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-900 active:scale-95'}`}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8 text-center">
                                {currentStep === 0 && (
                                    <img
                                        src="/buy.webp"
                                        alt="House images"
                                        className="mx-auto mb-6"
                                    />
                                )}
                                <h1 className="text-3xl font-bold mb-2">
                                    {formSteps[currentStep].title}
                                </h1>
                                {/* Progress indicator */}
                                {currentStep > 0 && (
                                    <div className="flex justify-center mt-4 mb-6">
                                        {formSteps.slice(1).map((_, index) => (
                                            <div
                                                key={index}
                                                className={`h-2 w-16 mx-1 rounded-full ${index + 1 <= currentStep ? 'bg-black' : 'bg-gray-200'}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* Current step content */}
                            {formSteps[currentStep].content}
                            {/* Navigation buttons */}
                            <div className="flex flex-col space-y-3">
                                <button
                                    onClick={handleContinue}
                                    disabled={currentStep > 0 && !hasSelection()}
                                    className={`w-full py-3 rounded-full mb-4 transition-all ${currentStep > 0 && !hasSelection() ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-black text-white active:scale-95'}`}
                                >
                                    Continue
                                </button>
                                {currentStep > 0 && (
                                    <button
                                        onClick={handleBack}
                                        className="w-full bg-white text-black border border-gray-300 py-3 rounded-full"
                                    >
                                        Back
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                    <p className="text-sm text-gray-600 text-center mt-4">
                        By selecting Continue, you agree to Rocket Account's Terms Of Use
                        and our Privacy Policy
                    </p>
                    <div className="mt-6 text-center">
                        <p>
                            Already have a Rocket account?{' '}
                            <a href="#" className="font-medium">
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
