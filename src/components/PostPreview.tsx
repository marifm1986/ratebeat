import React from 'react'
import { ArrowLeftIcon } from 'lucide-react'
interface Post {
    id: number
    title: string
    author: string
    category: string
    status: 'Published' | 'Draft'
    content?: string
    imageUrl?: string
}
interface PostPreviewProps {
    post: Post
    onClose: () => void
}
export const PostPreview = ({ post, onClose }: PostPreviewProps) => {
    // Format the current date for display
    const formattedDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })
    // Generate random tags based on the post category
    const generateTags = (category: string) => {
        const tagMap: Record<string, string[]> = {
            Technology: ['Tech', 'Innovation', 'Digital'],
            Science: ['Research', 'Discovery', 'Academic'],
            Lifestyle: ['Eco-Friendly', 'Green Living', 'Wellness'],
            History: ['Ancient', 'Cultural', 'Heritage'],
            Business: ['Startup', 'Economy', 'Finance'],
            Health: ['Wellness', 'Fitness', 'Nutrition'],
        }
        return tagMap[category] || ['General', 'Trending', 'Featured']
    }
    const tags = generateTags(post.category)
    return (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="max-w-3xl mx-auto px-6 py-8">
                {/* Header with back button */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-xl font-bold">Post Preview</h1>
                    <button
                        onClick={onClose}
                        className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center"
                    >
                        <ArrowLeftIcon size={16} className="mr-2" />
                        Back to Editor
                    </button>
                </div>
                {/* Category tags */}
                <div className="flex space-x-2 mb-4">
                    <span className="text-gray-600">{post.category}</span>
                    {post.category !== 'Technology' && (
                        <span className="text-gray-600">• Environment</span>
                    )}
                </div>
                {/* Post title */}
                <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
                {/* Author and date */}
                <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                        <span className="text-gray-600 font-bold">
                            {post.author.charAt(0)}
                        </span>
                    </div>
                    <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-gray-500 text-sm">{formattedDate}</p>
                    </div>
                </div>
                {/* Featured Image */}
                {post.imageUrl && (
                    <div className="mb-8">
                        <img
                            src={post.imageUrl}
                            alt="Featured Image"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                )}
                {/* Post content */}
                <div className="prose max-w-none mb-12">
                    {post.content ? (
                        <p className="text-gray-700 leading-relaxed mb-8">{post.content}</p>
                    ) : (
                        <>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In a world increasingly aware of its environmental impact,
                                sustainable living has moved from a niche concept to a
                                mainstream necessity. This post explores the innovative ways
                                individuals and communities are embracing eco-friendly practices
                                to reduce their carbon footprint and promote a healthier planet.
                                From renewable energy solutions to zero- waste lifestyles, we
                                delve into the practical steps you can take to contribute to a
                                more sustainable future. Discover how simple changes in your
                                daily routine can make a significant difference, and learn about
                                the latest technologies and initiatives driving the
                                sustainability movement forward. Join us as we explore the path
                                to a greener tomorrow, where sustainability is not just a
                                choice, but a way of life.
                            </p>
                            {/* Only show default image if no custom image was provided */}
                            {!post.imageUrl && (
                                <div className="mb-8">
                                    <img
                                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80"
                                        alt="Solar panels on a roof"
                                        className="w-full h-auto rounded-lg object-cover"
                                    />
                                </div>
                            )}
                            <h2 className="text-2xl font-bold mb-4">
                                The Rise of Renewable Energy
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                One of the most impactful changes you can make is adopting
                                renewable energy sources. Solar panels, for instance, have
                                become increasingly affordable and efficient, allowing
                                homeowners to generate their own electricity and reduce reliance
                                on fossil fuels. Similarly, wind energy is gaining traction,
                                with smaller-scale turbines becoming available for residential
                                use. These technologies not only lower your energy bills but
                                also significantly decrease your environmental impact.
                            </p>
                            <h2 className="text-2xl font-bold mb-4">
                                Embracing the Zero-Waste Mindset
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Another key aspect of sustainable living is minimizing waste.
                                The zero-waste movement encourages individuals to reduce, reuse,
                                and recycle, aiming to send as little trash as possible to
                                landfills. This involves conscious consumption, choosing
                                products with minimal packaging, and finding creative ways to
                                repurpose items. Composting organic waste is another effective
                                strategy, turning food scraps and yard waste into nutrient-rich
                                soil for gardening.
                            </p>
                            <h2 className="text-2xl font-bold mb-4">
                                Rethinking Transportation
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Sustainable transportation also plays a crucial role. Opting for
                                public transport, cycling, or walking instead of driving can
                                significantly reduce your carbon emissions. Electric vehicles
                                are becoming more popular, offering a cleaner alternative to
                                gasoline-powered cars. Carpooling and ride-sharing are also
                                great options for reducing the number of vehicles on the road.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In conclusion, sustainable living is about making conscious
                                choices that benefit both the environment and our well- being.
                                By embracing renewable energy, minimizing waste, and adopting
                                sustainable transportation, we can all contribute to a
                                healthier, more sustainable future. The journey towards
                                sustainability is a continuous process, and every step, no
                                matter how small, makes a difference.
                            </p>
                        </>
                    )}
                </div>
                {/* Tags */}
                <div className="mt-8">
                    <p className="text-gray-500 mb-2">Tags:</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
