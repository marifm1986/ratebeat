import { Card, CardContent, CardHeader, CardFooter } from "./ui/Card";
import { Button } from "./ui/Button";

export const MortgageOptions = () => {
  // Second grid: image-based options
  const mortgageOptions = [
    {
      id: 1,
      title: "15-Year Fixed-Rate Mortgage",
      description:
        "In the beginning, the interest payments are frontloaded and will make up the major part of the payment.",
      image: "/mortage-options/icon_1.png",
      alt: "15-Year Fixed-Rate Mortgage",
    },
    {
      id: 2,
      title: "30-Year Fixed-Rate Mortgage",
      description:
        "Traditionally, the 30-year fixed mortgage is possibly the most popular mortgage loan on the market.",
      image: "/mortage-options/icon_2.png",
      alt: "30-Year Fixed-Rate Mortgage",
    },
    {
      id: 3,
      title: "Refinance",
      description:
        "Refinancing your home means obtaining a new mortgage to replace your current mortgage loan.",
      image: "/mortage-options/icon_3.png",
      alt: "Refinance",
    },
    {
      id: 4,
      title: "VA Loans",
      description:
        "A VA Home Loan is a mortgage loan that was established in 1944 by the United States Department of Veterans Affairs and is gaining popularity in recent years.",
      image: "/mortage-options/icon_4.png",
      alt: "VA Loans",
    },
    {
      id: 5,
      title: "Jumbo Loans",
      description:
        'A jumbo loan is also referred to as a "non-conforming mortgage" or a jumbo mortgage.',
      image: "/mortage-options/icon_4.png",
      alt: "Jumbo Loans",
    },
    {
      id: 6,
      title: "Conventional Loans",
      description:
        "A conventional loan is also sometimes referred to as non-Government Sponsored Enterprise (GSE) loans or conventional mortgage.",
      image: "/mortage-options/icon_5.png",
      alt: "Conventional Loans",
    },
  ];

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2c5aa0] mb-4 leading-tight">
            Our Mortgage Options
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're buying, refinancing, or looking to access your home's
            equity, we have options for you. We offer our clients a variety of
            comprehensive mortgage loan services including:
          </p>
        </div>

        {/* Mortgage Options Grid */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {mortgageOptions.map((option) => (
            <Card
              key={option.id}
              className="bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="flex items-center justify-center pt-8 pb-2">
                <div className="mb-2">
                  <img
                    src={option.image}
                    alt={option.alt}
                    className="w-16 h-16 mx-auto rounded-full object-cover shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="text-center px-8">
                <h3 className="text-xl font-medium text-[#2c5aa0] mb-3 group-hover:text-[#1e3a8a] transition-colors leading-tight">
                  {option.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                  {option.description}
                </p>
              </CardContent>
              <CardFooter className="justify-center pt-2 pb-8">
                <Button variant="outline" size="sm" className="group-hover:border-[#2c5aa0] group-hover:text-[#2c5aa0] transition-colors">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
