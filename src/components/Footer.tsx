import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-800 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">RateBeat</h3>
          <p className="mb-4">
            Making mortgage simple, fast, and affordable for everyone.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home Purchase
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Refinance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cash-Out Refinance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FHA Loans
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                VA Loans
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                USDA Loans
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Mortgage Calculator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                First-Time Homebuyer Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Refinancing Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mortgage Glossary
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2">
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
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Licensing Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sitemap
                </a>
              </li>
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