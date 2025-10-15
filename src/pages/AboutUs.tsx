import React from 'react'
import {
    Phone,
    Mail,
    MapPin,
    CreditCard,
    Calculator,
    Home,
    Users,
    Building,
    Shield,
    Award,
    FileText,
    DollarSign,
} from 'lucide-react'
interface AboutUsProps {
    'data-id'?: string
}
export function AboutUs({ 'data-id': dataId }: AboutUsProps) {
    const loanTypes = [
        {
            icon: <Building className="w-12 h-12 text-blue-600" />,
            title: 'Conventional Loans',
            description:
                'A conventional loan is also sometimes referred to as non-Government Sponsored Enterprise (GSE) loans or conventional mortgage.',
        },
        {
            icon: <Home className="w-12 h-12 text-blue-600" />,
            title: 'Refinance Loans',
            description:
                'Refinancing your home means obtaining a new mortgage to replace your current mortgage loan. It is common for homeowners to refinance their mortgage to take advantage of lower mortgage payments and interest rates.',
        },
        {
            icon: <Users className="w-12 h-12 text-blue-600" />,
            title: '15 Year Fixed Loans',
            description:
                'A 15-year fixed-rate mortgage is a mortgage loan that offers a comprehensive, structured plan for financing a home.',
        },
        {
            icon: <FileText className="w-12 h-12 text-blue-600" />,
            title: '30 Year Fixed Loans',
            description:
                'Traditionally, the 30-year fixed mortgage is the most popular mortgage type in the market. It is characterized by an interest rate and monthly payment that remains the same over the life of the loan.',
        },
        {
            icon: <Award className="w-12 h-12 text-blue-600" />,
            title: 'First Time Home Buyer',
            description:
                "Homeownership is acclaimed as the 'American Dream' and is one of the biggest investments you will ever make.",
        },
        {
            icon: <Shield className="w-12 h-12 text-blue-600" />,
            title: 'FHA Home Loans',
            description:
                'Federal Housing Administration (FHA) loans are government-backed by the Federal Housing Administration (FHA) and are issued by private lenders approved by the FHA.',
        },
        {
            icon: <Building className="w-12 h-12 text-blue-600" />,
            title: 'VA Loans',
            description:
                'A VA Home Loan is a mortgage loan that was established in 1944 by the United States Department of Veterans Affairs and is geared especially to assist veterans.',
        },
        {
            icon: <DollarSign className="w-12 h-12 text-blue-600" />,
            title: 'Jumbo Loans',
            description:
                "It is a loan that is used to finance properties that exceed the conforming limits set by the Federal Housing Finance Agency. These are also referred to as 'Fannie and Freddie'.",
        },
        {
            icon: <CreditCard className="w-12 h-12 text-blue-600" />,
            title: 'Non-QM Loans',
            description:
                "A Non-QM or Non-Qualified Mortgage is a loan that does not meet the Consumer Financial Protection Bureau's (CFPB) rules on Qualified Mortgages.",
        },
        {
            icon: <Calculator className="w-12 h-12 text-blue-600" />,
            title: 'Custom Loans',
            description:
                "A custom loan also referred to as a unique home loan, is a loan that a mortgage lender creates specifically for a borrower. This may seem a bit broad but it can be a loan that doesn't necessarily fit into any specific category.",
        },
        {
            icon: <Home className="w-12 h-12 text-blue-600" />,
            title: 'USDA Loans',
            description:
                'A USDA loan is also known as USDA Rural Development Guaranteed Housing Loan Program.',
        },
    ]
    return (
        <div data-id={dataId} className="w-full bg-white">
            
            <section
                className="relative bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                }}
            >
                <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">About us</h1>
                        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                            Ratebeat is an independent mortgage lender based in California and
                            originates a range of mortgage products in California, New Jersey,
                            Texas and Connecticut.
                        </p>
                    </div>
                </div>
            </section>
            {/* About Us Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
                        About Us
                    </h2>
                    <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
                        We pride ourselves in being a trusted partner to assist you in
                        evaluation of mortgage options. With us, you can explore ways to
                        finance the purchase of your first home or refinance an existing
                        mortgage on your present home. We strive to bring you the lowest
                        market rates to ensure you do not pay more and we have a streamlined
                        process to ensure you close on time.
                    </p>
                    {/* Illustration and Text Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative">
                            {/* Illustration Area */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 relative">
                                <div className="flex justify-center items-end space-x-4">
                                    {/* Icons floating around */}
                                    <div className="absolute top-8 left-8 bg-blue-500 text-white p-3 rounded-lg shadow-lg">
                                        <CreditCard className="w-6 h-6" />
                                    </div>
                                    <div className="absolute top-8 right-8 bg-blue-500 text-white p-3 rounded-lg shadow-lg">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="absolute bottom-24 left-12 bg-yellow-400 text-white p-3 rounded-lg shadow-lg">
                                        <Calculator className="w-6 h-6" />
                                    </div>
                                    <div className="absolute bottom-24 right-12 bg-green-500 text-white p-3 rounded-lg shadow-lg">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    {/* People illustration placeholders */}
                                    <div className="flex space-x-4 items-end">
                                        <div className="w-24 h-32 bg-blue-400 rounded-t-full"></div>
                                        <div className="w-24 h-36 bg-yellow-400 rounded-t-full"></div>
                                        <div className="w-24 h-32 bg-blue-600 rounded-t-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                Ratebeat understands that deciding on the best loan may never
                                seem more than just finding the lowest interest rate. The
                                mortgage industry is competitive and it can be difficult for you
                                to select the best option, especially if you are venturing into
                                the home buying process for the first time. Ratebeat puts 16
                                years of industry knowledge to work with a dedicated
                                professional staff with considerable know-how and what it takes
                                to meet strict closing deadlines.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Ratebeat provides its clients with professional guidance and
                                assistance through every step of the process and helps them make
                                sound financial decisions. Through our online platform we strive
                                to make the best use of technology to deliver valuable and
                                real-time solutions to our clients.
                            </p>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 text-lg mb-12">
                        We offer our clients a variety of comprehensive mortgage loan
                        services including
                    </p>
                </div>
            </section>
            {/* Loan Types Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loanTypes.map((loan, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
                            >
                                <div className="flex justify-center mb-6">{loan.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {loan.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {loan.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
         
        </div>
    )
}
