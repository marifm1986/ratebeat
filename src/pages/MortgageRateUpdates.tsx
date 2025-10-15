import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  LineElement,
} from 'chart.js'
import { ChevronRight, ChevronLeft } from 'lucide-react'
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)
interface MortgageRateUpdatesProps {
  'data-id'?: string
}
const chartData = [
  {
    date: 'Oct 24',
    thirtyYear: 6.72,
    fifteenYear: 5.99,
  },
  {
    date: 'Jan',
    thirtyYear: 6.95,
    fifteenYear: 6.2,
  },
  {
    date: 'Apr',
    thirtyYear: 6.88,
    fifteenYear: 6.15,
  },
  {
    date: 'Jul',
    thirtyYear: 6.73,
    fifteenYear: 6.02,
  },
  {
    date: 'Oct 25',
    thirtyYear: 6.5,
    fifteenYear: 5.85,
  },
]
const articles = [
  {
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400',
    date: '6 MINUTE READ',
    title: 'How the federal funds rate affects mortgage rates',
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
    date: '6 MINUTE READ',
    title: 'How a Fed rate drop affects home buyers and sellers',
  },
  {
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400',
    date: '6 MINUTE READ',
    title: 'Should I lock in my mortgage rate today?',
  },
]
const faqItems = [
  {
    question: "What's an interest rate?",
    answer:
      "It's a percent rate you're charged to borrow funds, applied to your loan.",
  },
  {
    question: "What's APR?",
    answer:
      'Annual percentage rate is interest rate with the fees to uncover your mortgage wisdom.',
  },
  {
    question: "What's a fixed-rate mortgage?",
    answer:
      'A mortgage where the rate stays the same for as long as you have the loan.',
  },
  {
    question: "Who's the Fed?",
    answer:
      'The Federal Reserve is the central bank of the U.S. It controls the interest rate banks charge to borrow money – including on mortgages.',
  },
]
export const MortgageRateUpdates: React.FC<MortgageRateUpdatesProps> = ({
  'data-id': dataId,
}) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0)
  const nextArticle = () => {
    setCurrentArticleIndex((prev) => (prev + 1) % articles.length)
  }
  const prevArticle = () => {
    setCurrentArticleIndex(
      (prev) => (prev - 1 + articles.length) % articles.length,
    )
  }
  // Chart.js configuration
  const chartJsData = {
    labels: chartData.map((d) => d.date),
    datasets: [
      {
        label: '30-Year Fixed',
        data: chartData.map((d) => d.thirtyYear),
        borderColor: '#000000',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#000000',
        tension: 0.1,
      },
      {
        label: '15-Year Fixed',
        data: chartData.map((d) => d.fifteenYear),
        borderColor: '#4169E1',
        backgroundColor: 'rgba(65, 105, 225, 0.1)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#4169E1',
        tension: 0.1,
      },
    ],
  }
  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}%`
          },
        },
      },
    },
    scales: {
      y: {
        min: 5.5,
        max: 7.5,
        ticks: {
          stepSize: 0.5,
          callback: function (value) {
            return `${Number(value).toFixed(2)}%`
          },
          font: {
            size: 12,
          },
        },
        grid: {
          color: '#f0f0f0',
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
        grid: {
          color: '#f0f0f0',
        },
      },
    },
  }
  return (
    <div data-id={dataId} className="w-full bg-[#f5f3f0] min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              MORTGAGE RATE TRENDS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Lowest rates since
              <br />
              Oct 2024
            </h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              This could mean a lower monthly payment and better terms. Discover
              your custom rate options in minutes.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Explore my rate
            </button>
          </div>
          {/* Right Column - Chart */}
          <div className="bg-white rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold mb-4">Mortgage rate trends</h3>
            <div className="h-[300px]">
              <Line data={chartJsData} options={chartOptions} />
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Based on data from Freddie Mac
            </p>
          </div>
        </div>
        {/* SMS Signup Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mt-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Text "Rates" to 76298 to get updates
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            You'll receive 5 messages per week. Msg&Data Rates May Apply. Reply
            STOP/HELP to stop. Msg. HELP for help. By enrolling, you agree to
            our{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            ,{' '}
            <a href="#" className="underline">
              Communication
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              Terms of Service
            </a>
            . Terms, conditions and limitations apply. See Quicken Loans for
            details. Lending services provided by Quicken Loans, LLC, a
            subsidiary of Rock Holdings Inc. NMLS #3030, or by Ratebeat,
            LLC, a subsidiary of Quicken Loans, LLC, NMLS #1051. Equal Housing
            Lender. Licensed in 50 states.
            <a href="#" className="underline">
              NMLS Consumer Access
            </a>
          </p>
        </div>
      </div>
      {/* Articles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Read the latest about rates
          </h2>
          <button className="text-sm underline hidden sm:block">
            Visit our learning center
          </button>
        </div>
        {/* Desktop: Show all 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-lg font-semibold">{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile/Tablet: Carousel */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src={articles[currentArticleIndex].image}
              alt={articles[currentArticleIndex].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-2">
                {articles[currentArticleIndex].date}
              </p>
              <h3 className="text-lg font-semibold">
                {articles[currentArticleIndex].title}
              </h3>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={prevArticle}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextArticle}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <button className="text-sm underline block sm:hidden mx-auto mt-6">
          Visit our learning center
        </button>
      </div>
      {/* Current Rates Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Current rates
        </h2>
        <div className="bg-white rounded-2xl p-6 sm:p-8">
          <div className="flex gap-4 mb-6 border-b">
            <button className="pb-2 px-4 border-b-2 border-black font-semibold">
              Purchase rates
            </button>
            <button className="pb-2 px-4 text-gray-500 hover:text-black">
              Refinance rates
            </button>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            Monthly payment estimates above are for a loan amount of $350K.
            Taxes and insurance are included when the estimate, your situation
            payment will be greater.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 30-year Fixed */}
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">30-year fixed</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Rate</p>
                  <p className="text-2xl font-bold">6.375%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">APR</p>
                  <p className="text-2xl font-bold">6.661%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Monthly payment</p>
                  <p className="text-2xl font-bold">$2,184</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Points</p>
                  <p className="text-2xl font-bold">
                    1.875 <span className="text-sm">($6,563)</span>
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Rates are current as of 12:43 PM PST on October 10, 2024
              </p>
            </div>
            {/* 30-year FHA */}
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">30-year FHA</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Rate</p>
                  <p className="text-2xl font-bold">5.625%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">APR</p>
                  <p className="text-2xl font-bold">6.864%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Monthly payment</p>
                  <p className="text-2xl font-bold">$2,960</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Points</p>
                  <p className="text-2xl font-bold">
                    2 <span className="text-sm">($7,000)</span>
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                View legal disclosures
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Explore more rates
            </button>
          </div>
        </div>
      </div>
      {/* Get the Right Rate Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Get the right rate for you. All of you.
        </h2>
        <div className="bg-white rounded-2xl p-6 sm:p-8">
          <div className="flex gap-4 mb-8 border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 px-4 whitespace-nowrap ${activeTab === 'overview' ? 'border-b-2 border-black font-semibold' : 'text-gray-500'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('buyers')}
              className={`pb-2 px-4 whitespace-nowrap ${activeTab === 'buyers' ? 'border-b-2 border-black font-semibold' : 'text-gray-500'}`}
            >
              For home buyers
            </button>
            <button
              onClick={() => setActiveTab('homeowners')}
              className={`pb-2 px-4 whitespace-nowrap ${activeTab === 'homeowners' ? 'border-b-2 border-black font-semibold' : 'text-gray-500'}`}
            >
              For homeowners
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600"
                alt="Family"
                className="rounded-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                You're more than a rate
              </h3>
              <p className="text-gray-600 mb-6">
                Every one is important. But you're not one part of your overall
                financial picture. Here's how we figure out what's right for
                you.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Nice to meet you</h4>
                    <p className="text-sm text-gray-600">We get to know you.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">What are your plans?</h4>
                    <p className="text-sm text-gray-600">
                      We need to know if you want to buy or refinance. We guide
                      next steps.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Here are your options
                    </h4>
                    <p className="text-sm text-gray-600">
                      We'll find you solutions and custom some for you - at the
                      right rate and the best fit.
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-8 border-2 border-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                Chat now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* What Determines Your Rate Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          What determines your
          <br />
          mortgage rate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Credit score</h3>
            <p className="text-sm text-gray-600">
              Higher credit scores typically get lower rates. Lenders may
              penalize you're likely to pay back your mortgage.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Debt-to-income ratio</h3>
            <p className="text-sm text-gray-600">
              Lower debt positions you to save more likely to be able to pay
              your mortgage. So a lower DTI can mean a lower interest rate.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Market conditions</h3>
            <p className="text-sm text-gray-600">
              The Federal Reserve, inflation and the housing market all
              influence mortgage rates.
            </p>
          </div>
        </div>
      </div>
      {/* Terms to Know Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
              alt="Woman smiling"
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Terms to know
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b pb-4">
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full flex justify-between items-start text-left"
                  >
                    <div className="flex gap-3 items-start flex-1">
                      <div className="flex-shrink-0 w-6 h-6 border-2 border-black rounded-full flex items-center justify-center mt-1">
                        <span className="text-xs">
                          {index === 0
                            ? '?'
                            : index === 1
                              ? '?'
                              : index === 2
                                ? '?'
                                : '?'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{item.question}</h3>
                        {expandedFaq === index && (
                          <p className="text-sm text-gray-600">{item.answer}</p>
                        )}
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t">
        <p className="text-xs text-gray-500 leading-relaxed">
          * Important legal disclosures
        </p>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          Rates shown are based on a sample borrower profile and may not reflect
          your situation. Your actual rate will depend on many factors such as
          your credit, income, loan type, loan amount, and property value. Rates
          are subject to change without notice. For current rates please call
          800-555-0100. Lending services provided by Ratebeat, LLC. NMLS
          #3030. Equal Housing Lender. Licensed in 50 states.
        </p>
      </div>
    </div>
  )
}
