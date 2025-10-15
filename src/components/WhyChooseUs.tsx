import React from 'react'
import {
    ThumbsUp,
    ThumbsDown,
    HelpCircle,
    Key,
    Lightbulb,
    Users,
} from 'lucide-react'
interface WhyChooseUsProps {
    'data-id'?: string
}
export function WhyChooseUs({ 'data-id': dataId }: WhyChooseUsProps) {
    return (
        <div data-id={dataId} className="w-full bg-white">

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Illustration */}
                        <div className="relative flex justify-center">
                            <div className="relative">
                                {/* Person illustration */}
                                <div className="relative z-10">
                                    <div className="w-48 h-56 bg-gradient-to-br from-red-400 to-red-500 rounded-t-full mx-auto relative">
                                        {/* Face */}
                                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-orange-200 rounded-full"></div>
                                        {/* Hair */}
                                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-t-full"></div>
                                    </div>
                                </div>
                                {/* Floating icons */}
                                <div className="absolute -top-4 left-8 bg-white rounded-full p-4 shadow-lg border-2 border-gray-100">
                                    <ThumbsUp className="w-8 h-8 text-red-500" />
                                </div>
                                <div className="absolute top-12 -right-4 bg-white rounded-full p-4 shadow-lg border-2 border-gray-100">
                                    <ThumbsDown className="w-8 h-8 text-gray-600" />
                                </div>
                                <div className="absolute top-0 right-16 bg-white rounded-full p-4 shadow-lg border-2 border-gray-100">
                                    <HelpCircle className="w-8 h-8 text-gray-400" />
                                </div>
                                <div className="absolute bottom-12 -left-4 bg-white rounded-full p-4 shadow-lg border-2 border-gray-100">
                                    <Key className="w-8 h-8 text-gray-600" />
                                </div>
                                <div className="absolute bottom-8 right-8 bg-white rounded-full p-4 shadow-lg border-2 border-gray-100">
                                    <Lightbulb className="w-8 h-8 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        {/* Content */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                                Why Choose Us
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We strive to provide our clients with a smooth and efficient
                                mortgage process. Our key advantages are:
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Team Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                                Our Team
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Something incredible happens when you are led by the right
                                people. Ratebeat's leadership team not only possesses deep
                                industry knowledge and experience, but has a well-rounded
                                business perspective to meet today's mortgage challenges.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Above all, the team is thoroughly committed to accelerating
                                learning and are now on a mission to create a new mortgage
                                experience.
                            </p>
                        </div>
                        {/* Team Illustration */}
                        <div className="relative flex justify-center">
                            <div className="grid grid-cols-3 gap-4">
                                {/* Row 1 */}
                                <div className="w-24 h-28 bg-gradient-to-br from-orange-400 to-orange-500 rounded-t-full"></div>
                                <div className="w-24 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-t-full"></div>
                                <div className="w-24 h-28 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-t-full"></div>
                                {/* Row 2 */}
                                <div className="w-24 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-t-full"></div>
                                <div className="w-24 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-full"></div>
                                <div className="w-24 h-28 bg-gradient-to-br from-orange-300 to-orange-400 rounded-t-full"></div>
                                {/* Row 3 */}
                                <div className="w-24 h-28 bg-gradient-to-br from-gray-600 to-gray-700 rounded-t-full"></div>
                                <div className="w-24 h-32 bg-gradient-to-br from-gray-500 to-gray-600 rounded-t-full"></div>
                                <div className="w-24 h-28 bg-gradient-to-br from-teal-600 to-teal-700 rounded-t-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
