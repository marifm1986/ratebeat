import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  backgroundImage?: string;
  title: string;
  subtitle: string;
  description: string;
  badgeText: string;
  badgeIcon: string;
  badgeColor?: string;
  backLink?: string;
}

export const HeroSection = ({
  backgroundImage = "/hero.webp",
  title,
  subtitle,
  description,
  badgeText,
  badgeIcon,
  badgeColor = "bg-[#2c5aa0]",
  backLink = "/home-loans"
}: HeroSectionProps) => {
  return (
    <>
      {/* Hero Banner Section */}
      <div 
        className="relative h-72 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 font-light">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-12">
            <Link
              to={backLink}
              className="inline-flex items-center text-[#2c5aa0] hover:text-blue-800 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Mortgage Options
            </Link>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* House Image */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="w-full max-w-sm mx-auto">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-[#2c5aa0]/20 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/hero.webp"
                      alt="Beautiful house with mountains"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={`absolute -bottom-4 -right-4 w-20 h-20 ${badgeColor} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <span className="text-white font-bold text-lg">{badgeIcon}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-3">
              <div className="max-w-2xl">
                <div className="mb-8">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                    badgeColor === 'bg-[#2c5aa0]' ? 'bg-[#2c5aa0]/10 text-[#2c5aa0]' :
                    badgeColor === 'bg-green-600' ? 'bg-green-600/10 text-green-700' :
                    badgeColor === 'bg-amber-500' ? 'bg-amber-500/10 text-amber-600' :
                    badgeColor === 'bg-purple-500' ? 'bg-purple-500/10 text-purple-600' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {badgeText}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{subtitle}</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700">
                  <div 
                    className="text-xl leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <div className="pt-6">
                    <Link to="#" className={`inline-flex items-center ${badgeColor} hover:opacity-90 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg`}>
                      Apply Now
                      <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                    </Link>
                    <span className="ml-4 text-gray-600">to get started with your mortgage application.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
