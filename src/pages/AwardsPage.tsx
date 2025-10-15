const AwardsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        {/* Background decorative elements */}
        <div className="absolute left-0 bottom-0 w-1/4 h-full opacity-20">
          <div className="absolute w-64 h-64 rounded-full bg-blue-400 -left-20 -bottom-20"></div>
          <div className="absolute w-48 h-48 rounded-full bg-blue-300 left-20 bottom-10"></div>
          <div className="absolute w-32 h-32 rounded-full bg-blue-200 left-40 bottom-40"></div>
        </div>
        <div className="absolute right-0 top-0 w-1/4 h-full opacity-20">
          <div className="absolute w-64 h-64 rounded-full bg-green-400 -right-20 -top-20"></div>
          <div className="absolute w-48 h-48 rounded-full bg-teal-300 right-20 top-40"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Awards and Certifications
          </h1>
          <p className="text-xl text-blue-100">
            Recognition of our commitment to excellence
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-5xl mx-auto">
          {/* Introduction Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                Recognition Through Awards and Certifications
              </h2>
              <p className="text-gray-600 mb-4">
                When seeking a company to assist you in overcoming debt, ensure
                they possess the necessary accreditations that signify their
                reputation, trustworthiness, and regulation by associations such
                as the American Fair Credit Council and the International
                Association of Professional Debt Advisors. The awards,
                memberships, and certifications we've earned demonstrate our
                extensive experience, resources, and commitment to a strong code
                of conduct that reflects the highest standards in the industry.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="./awards/awards.webp"
                alt="Gold Medal Award"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-10">
            Awards And Certifications
          </h2>
          <p className="text-gray-600 mb-12">
            When looking for a company to help you get out of debt, be sure they
            have the necessary accreditations that indicate that they are
            reputable, trustworthy and are regulated by associations like the
            American Fair Credit Council and the International Association of
            Professional Debt Advisors. The awards, memberships and
            certifications shown below indicate that we have the experience,
            resources and adhere to a strong code of conduct of the best in the
            industry.
          </p>
          {/* BBB Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b pb-8">
            <div className="md:w-1/4">
              <img
                src="./awards/awards-01.png"
                alt="Better Business Bureau"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 mb-4">
                Ratebeat has consistently been ranked #1 or among the top-rated
                debt settlement and tax relief companies by the consumer review
                platforms. Top Consumer Reviews, from 2010 through 2023. No
                other company in debt negotiation, settlement, or tax relief has
                maintained top position for such an extended period.
              </p>
            </div>
          </div>
          {/* Customer Lobby Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b pb-8">
            <div className="md:w-1/4">
              <img
                src="./awards/awards-02.png"
                alt="Customer Lobby"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 mb-4">
                Ratebeat Reviews, Client Satisfaction and Zero Complaints. Read
                Testimonials.
              </p>
              <p className="text-gray-600 mb-4">
                Customer Lobby is one of the leading third-party platforms where
                clients leave feedback about the services they've received.
                Ratebeat has earned outstanding reviews for the quality of its
                services.
              </p>
              <p className="text-gray-600">
                With over 1,000 five-star reviews on Customer Lobby, Ratebeat
                takes pride in maintaining a goal of zero complaints. You can
                read numerous testimonials from past clients, and Ratebeat
                boasts more five-star reviews on Customer Lobby than any other
                debt negotiation company.
              </p>
            </div>
          </div>
          {/* Shopper Approved Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b pb-8">
            <div className="md:w-1/4">
              <img
                src="./awards/awards-03.png"
                alt="Shopper Approved"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 mb-4">
                Read Shopper Approved Client Testimonials. Reviews of Ratebeat.
                Zero Complaints.
              </p>
              <p className="text-gray-600 mb-4">
                Shopper Approved is one of the largest and most trusted review
                platforms, relied upon by millions to see how others rate a
                product or service.
              </p>
              <p className="text-gray-600">
                Ratebeat holds an impressive 4.9-star average on Shopper
                Approved, with 5 being the highest possible rating. This places
                us among the top-rated companies for debt negotiation,
                settlement, and tax debt relief.
              </p>
            </div>
          </div>
          {/* Online Business Bureau Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b pb-8">
            <div className="md:w-1/4">
              <img
                src="./awards/awards-04.png"
                alt="Online Business Bureau"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 mb-4">
                For a company offering nationwide services, we believe the
                Online Business Bureau (OBB) is the most reliable rating system
                because:
              </p>
              <ol className="list-decimal list-inside text-gray-600 mb-4 ml-4">
                <li className="mb-2">
                  Memberships dues are a flat rate per company, regardless of
                  employee count. This ensures that every company is rated
                  fairly with timely responses from the same service provider as
                  smaller ones. Many rating organizations have membership fees
                  on an employee size, allowing large companies with thousands
                  of employees to easily pass, while smaller businesses with
                  fewer employees may see their ratings suffer.
                </li>
                <li className="mb-2">
                  Positive online reputation. The OBB has consistently received
                  favorable feedback across the web.
                </li>
                <li>
                  Ratings are consistent and unbiased, regardless of the
                  company's location.
                </li>
              </ol>
              <p className="text-gray-600 mb-4">
                The Online Business Bureau helps you verify whether debt
                settlement, negotiation, or tax relief companies are legitimate
                and live up to their promises.
              </p>
              <p className="text-gray-600">
                We encourage you to ask any company you're considering if they
                are members of the Online Business Bureau and in "Good
                Standing."
              </p>
            </div>
          </div>
          {/* AFCC Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b pb-8">
            <div className="md:w-1/4">
              <img
                src="./awards/awards-05.png"
                alt="American Fair Credit Council"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 mb-4">
                Honesty and integrity are two of the most crucial qualities to
                look for when assessing debt settlement companies. AFCC (the
                American Fair Credit Council) has certification bodies that
                uphold these standards, ensuring companies like Ratebeat
                maintain them.
              </p>

            </div>
          </div>
          {/* Power Profiles Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b pb-8">
            <div className="md:w-1/4">
              <img
                src="./awards/awards-07.png"
                alt="Power Profiles"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600">
                When you choose to trust a debt settlement company like Ratebeat
                to provide you with peace of mind and a solution to your debts,
                it's crucial to ensure that the company's privacy policy,
                security measures, and business practices are thoroughly
                verified.
              </p>

            </div>
          </div>
          {/* IAPDA Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b pb-8">
            <div className="md:w-1/4">
              <img
                src="./awards/awards-08.png"
                alt="IAPDA"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 mb-4">
                The PowerProfiles.com directory is a trusted source for reliable
                business information.
              </p>
              <p className="text-gray-600 mb-4">
                Check out Ratebeat's Power Profile, where it stands as one of
                the leading debt settlement companies.
              </p>
              <p className="text-gray-600">
                PowerProfiles.com, the official online business database, goes
                beyond being a simple business-to-business directory. It helps
                member businesses grow and build trust with consumers.
              </p>

            </div>
          </div>
          {/* US Chamber of Commerce Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/4">
              <img
                src="./awards/awards-09.png"
                alt="US Chamber of Commerce"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-3/4">

              <p className="text-gray-600 mb-4">
                The purpose of adhering to the guidelines set by The
                International Association of Professional Debt Arbitrators
                (IAPDA) is to provide you with the best possible information
                when evaluating debt settlement companies.
              </p>
              <p className="text-gray-600 mb-4">
                At Ratebeat, with nationwide experience and thousands of
                satisfied individuals and small businesses, we've developed our
                own internal training program to complement the IAPDA training
                for our counselors.
              </p>
              <p className="text-gray-600">
                In fact, all new team members are required to complete an
                additional 20 to 40 hours of training and pass exams before they
                begin assisting you!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/4">
              <img
                src="./awards/awards-10.png"
                alt="US Chamber of Commerce"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 mb-4">
                The U.S. Chamber of Commerce is the largest business
                organization globally, representing the interests of over 3
                million businesses across various sectors, verticals, and
                regions. Ratebeat is a proud member in good standing and
                actively supports initiatives that promote new business growth
                throughout the United States.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/4">
              <img
                src="./awards/awards-11.png"
                alt="US Chamber of Commerce"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 mb-4">
                As part of Ratebeat’s dedication to creating more jobs for Americans, we have been proud supporters of SCORE, a nonprofit organization that coaches hundreds of thousands of small businesses to thrive and hire more individuals.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default AwardsPage
