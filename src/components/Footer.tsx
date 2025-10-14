import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Footer = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return <footer className="bg-gray-800 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">RateBeat</h3>
          <p className="mb-4">
            Ratebeat is an independent mortgage lender based in California and originates a range of mortgage products in California, New Jersey, Texas and Connecticut.
          </p>
          <div className="flex space-x-4">
            <Link to="https://www.facebook.com/RatebeatM/" target='_blank' className="text-gray-400 hover:text-white">
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link to="https://twitter.com/ratebeatm" target='_blank' className="text-gray-400 hover:text-white">
              <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#fff' className='fill-gray-400 hover:fill-white'>
                <path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" /></svg>
            </Link>
            {/* <Link to="#" className="text-gray-400 hover:text-white">
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <LinkedinIcon className="h-5 w-5" />
            </Link> */}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
          <ul className="space-y-2 flex flex-col gap-2">
            <li>
              <Link to="https://ratebeat.floify.com/apply-now" className="hover:text-white">
                Buy
              </Link>
            </li>
            <li>
              <Link to="https://nmann-refinance-site-8566-mRX46H3p.itclix.com" className="hover:text-white">
                Refinance
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Cash-Out Refinance
              </Link>
            </li>
            <li>
              <Link to="/va-loans" className="hover:text-white">
                FHA Loans
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                VA Loans
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                USDA Loans
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link  to="/#mortgage-calculator" className="hover:text-white">
                Mortgage Calculator
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                First-Time Homebuyer Guide
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Refinancing Guide
              </Link>
            </li>
            {/* <li>
              <Link to="#" className="hover:text-white">
                Mortgage Glossary
              </Link>
            </li> */}
            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 flex flex-col gap-2">
            <li className="flex items-start">
              <PhoneIcon className="h-5 w-5 mr-2 mt-0.5" />
              <span>(877) 877 7575</span>
            </li>
            <li className="flex items-start">
              <MailIcon className="h-5 w-5 mr-2 mt-0.5" />
              <span>info@ratebeat.com</span>
            </li>
            <li className="flex items-start">
              <MapPinIcon className="h-5 w-5 mr-2 mt-0.5" />
              <span>
                9400 Topanga Canyon Blvd #210,
                <br />
                Chatsworth, CA 91311, USA.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-sm">
            <p>&copy; Copyright © 2025 | RateBeat LLC</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link to="https://ratebeat.com/pdf/privacy-policy.pdf" target='_blank' className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Licensing Info
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Sitemap
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="mt-6 text-xs text-gray-400">
          <p>NMLS #12345 | Equal Housing Opportunity</p>
          <p className="mt-2">
            RateBeat is a fictional mortgage company created for demonstration
            purposes only. This website does not offer real mortgage products
            or services.
          </p>
        </div>
      </div>
    </div>
  </footer>;
};