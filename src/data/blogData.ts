export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedDate: string;
  readingTime: number;
  tags?: {
    id: number | string
    name: string
    slug: string
  }
  isFeatured?: boolean;
  status?: 'Published' | 'Draft'
}

// Mock blog data - in a real app, this would come from a CMS or API
export const blogPosts: any[] = [
  {
    id: 1,
    slug: "understanding-mortgage-rates-2025",
    title: "Understanding Mortgage Rates: A Complete Guide for 2025",
    excerpt: "Get insights into current mortgage rate trends and learn how to secure the best rate for your home purchase or refinance. Navigate the complex world of mortgage rates with confidence.",
    content: `
      <p>Mortgage rates are one of the most important factors to consider when buying or refinancing a home. In 2025, understanding how these rates work can save you thousands of dollars over the life of your loan.</p>
      
      <h2>What Determines Mortgage Rates?</h2>
      <p>Several factors influence mortgage rates, including:</p>
      <ul>
        <li>Federal Reserve policies and interest rates</li>
        <li>Economic indicators like inflation and employment</li>
        <li>Your personal credit score and financial profile</li>
        <li>The type and term of your mortgage</li>
        <li>Current market conditions and investor demand</li>
      </ul>
      
      <h2>Current Rate Trends in 2025</h2>
      <p>The mortgage market in 2025 has shown signs of stabilization after the volatility of previous years. Rates have remained relatively steady, creating opportunities for both first-time buyers and those looking to refinance.</p>
      
      <p>Experts predict that rates will continue to fluctuate based on Federal Reserve decisions and economic conditions, making it important to stay informed about market trends.</p>
      
      <h2>How to Secure the Best Rate</h2>
      <p>To get the most favorable mortgage rate:</p>
      <ol>
        <li>Improve your credit score before applying</li>
        <li>Save for a larger down payment</li>
        <li>Compare offers from multiple lenders</li>
        <li>Consider the timing of your application</li>
        <li>Lock in your rate when conditions are favorable</li>
      </ol>
      
      <p>Remember, even a small difference in your mortgage rate can result in significant savings over time. A rate that's just 0.25% lower can save tens of thousands of dollars over a 30-year loan.</p>
    `,
    featuredImage: "/hero.webp",
    author: {
      name: "Sarah Johnson",
      avatar: "/mobile.webp"
    },
    publishedDate: "September 18, 2025",
    readingTime: 5,
    tags: ["Mortgage Rates", "Home Buying", "Finance"],
    isFeatured: true
  },
  {
    id: 2,
    slug: "first-time-homebuyer-programs",
    title: "First-Time Homebuyer Programs You Should Know About",
    excerpt: "Discover various assistance programs, grants, and incentives available to help make your first home purchase more affordable and accessible.",
    content: `
      <p>Buying your first home can feel overwhelming, but numerous programs exist to help first-time buyers overcome common barriers like down payments and closing costs.</p>
      
      <h2>Federal Programs</h2>
      <p>The federal government offers several programs specifically designed for first-time homebuyers:</p>
      
      <h3>FHA Loans</h3>
      <p>Federal Housing Administration loans require as little as 3.5% down and are accessible to buyers with credit scores as low as 580. These loans are backed by the government, making them less risky for lenders.</p>
      
      <h3>VA Loans</h3>
      <p>Available to eligible veterans, active-duty service members, and surviving spouses, VA loans offer zero down payment options and competitive rates.</p>
      
      <h3>USDA Loans</h3>
      <p>For homes in eligible rural areas, USDA loans can provide 100% financing with no down payment required.</p>
      
      <h2>State and Local Programs</h2>
      <p>Many states and municipalities offer their own first-time homebuyer programs, including:</p>
      <ul>
        <li>Down payment assistance grants</li>
        <li>Below-market interest rate loans</li>
        <li>Tax credits and deductions</li>
        <li>Closing cost assistance</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To take advantage of these programs, start by researching what's available in your area and speaking with approved lenders who can guide you through the application process.</p>
    `,
    featuredImage: "/Better.webp",
    author: {
      name: "Michael Chen",
      avatar: "/mobile.webp"
    },
    publishedDate: "September 15, 2025",
    readingTime: 4,
    tags: ["First-Time Buyers", "Programs", "Assistance"]
  },
  {
    id: 3,
    slug: "refinancing-vs-home-equity-loan",
    title: "Refinancing vs. Home Equity Loan: Which Is Right for You?",
    excerpt: "Compare the benefits and considerations of refinancing your mortgage versus taking out a home equity loan for your financial goals.",
    content: `
      <p>When you need to access your home's equity or lower your monthly payments, you have two main options: refinancing your mortgage or taking out a home equity loan. Each has distinct advantages depending on your situation.</p>
      
      <h2>Understanding Refinancing</h2>
      <p>Refinancing means replacing your current mortgage with a new one, typically to:</p>
      <ul>
        <li>Secure a lower interest rate</li>
        <li>Change your loan term</li>
        <li>Switch from an adjustable to fixed rate</li>
        <li>Access equity through cash-out refinancing</li>
      </ul>
      
      <h2>Home Equity Loans Explained</h2>
      <p>A home equity loan is a second mortgage that allows you to borrow against your home's equity while keeping your original mortgage intact. Benefits include:</p>
      <ul>
        <li>Fixed interest rates and payments</li>
        <li>Faster approval process</li>
        <li>Lower closing costs than refinancing</li>
        <li>Tax-deductible interest for home improvements</li>
      </ul>
      
      <h2>When to Choose Refinancing</h2>
      <p>Consider refinancing when:</p>
      <ul>
        <li>Current rates are significantly lower than your existing rate</li>
        <li>You want to change your loan term</li>
        <li>You need to remove PMI</li>
        <li>You want to consolidate debt at a lower rate</li>
      </ul>
      
      <h2>When to Choose a Home Equity Loan</h2>
      <p>A home equity loan might be better if:</p>
      <ul>
        <li>Your current mortgage rate is already competitive</li>
        <li>You need funds quickly</li>
        <li>You want to avoid refinancing costs</li>
        <li>You're planning specific home improvements</li>
      </ul>
      
      <p>The right choice depends on your current mortgage rate, how much equity you have, your financial goals, and market conditions.</p>
    `,
    featuredImage: "/oneDay.webp",
    author: {
      name: "Jennifer Rodriguez",
      avatar: "/mobile.webp"
    },
    publishedDate: "September 12, 2025",
    readingTime: 6,
    tags: ["Refinancing", "Home Equity", "Comparison"]
  },
  {
    id: 4,
    slug: "home-appraisal-process-guide",
    title: "The Home Appraisal Process: What Every Buyer Should Know",
    excerpt: "Learn about the home appraisal process, what appraisers look for, and how it affects your mortgage approval and closing timeline.",
    content: `
      <p>A home appraisal is a crucial step in the mortgage process that determines your home's market value. Understanding this process can help you prepare and avoid potential delays.</p>
      
      <h2>Why Appraisals Matter</h2>
      <p>Lenders require appraisals to ensure the property is worth the loan amount. This protects both you and the lender from overpaying for a property.</p>
      
      <h2>What Appraisers Evaluate</h2>
      <p>Professional appraisers consider several factors when determining home value:</p>
      <ul>
        <li>Property size and layout</li>
        <li>Condition and age of the home</li>
        <li>Recent comparable sales in the area</li>
        <li>Neighborhood characteristics</li>
        <li>Unique features and upgrades</li>
      </ul>
      
      <h2>Preparing for the Appraisal</h2>
      <p>While you can't control the outcome, you can help ensure an accurate appraisal by:</p>
      <ul>
        <li>Ensuring the property is clean and accessible</li>
        <li>Providing a list of recent improvements</li>
        <li>Sharing information about comparable sales</li>
        <li>Being available to answer questions</li>
      </ul>
      
      <p>Most appraisals are completed within a few days to a week, and the results play a significant role in your loan approval process.</p>
    `,
    featuredImage: "/calculator-image.webp",
    author: {
      name: "David Park",
      avatar: "/mobile.webp"
    },
    publishedDate: "September 10, 2025",
    readingTime: 4,
    tags: ["Appraisal", "Home Buying", "Process"]
  },
  {
    id: 5,
    slug: "building-credit-for-mortgage-approval",
    title: "Building Credit for Mortgage Approval: A Step-by-Step Guide",
    excerpt: "Discover proven strategies to improve your credit score and increase your chances of mortgage approval with better rates and terms.",
    content: `
      <p>Your credit score is one of the most important factors lenders consider when evaluating your mortgage application. A higher score can mean better rates and more favorable terms.</p>
      
      <h2>Understanding Credit Scores</h2>
      <p>Credit scores typically range from 300 to 850, with higher scores indicating lower risk to lenders. Most mortgage programs have minimum score requirements:</p>
      <ul>
        <li>Conventional loans: Usually 620 or higher</li>
        <li>FHA loans: As low as 580 with 3.5% down</li>
        <li>VA loans: No minimum, but lenders typically want 620+</li>
        <li>USDA loans: Usually 640 or higher</li>
      </ul>
      
      <h2>Strategies to Improve Your Score</h2>
      
      <h3>Pay Bills on Time</h3>
      <p>Payment history accounts for 35% of your credit score. Set up automatic payments or reminders to ensure you never miss a due date.</p>
      
      <h3>Reduce Credit Utilization</h3>
      <p>Keep your credit card balances below 30% of your available credit, ideally below 10% for the best scores.</p>
      
      <h3>Don't Close Old Accounts</h3>
      <p>Length of credit history matters. Keep older accounts open to maintain your credit history length.</p>
      
      <h3>Monitor Your Credit Report</h3>
      <p>Check your credit reports regularly for errors and dispute any inaccuracies promptly.</p>
      
      <h2>Timeline for Improvement</h2>
      <p>Credit score improvements don't happen overnight, but you can see changes in:</p>
      <ul>
        <li>30-45 days: After paying down balances</li>
        <li>3-6 months: For consistent on-time payments</li>
        <li>6-12 months: For significant score increases</li>
      </ul>
      
      <p>Start working on your credit early in the home-buying process for the best results.</p>
    `,
    featuredImage: "/buy.webp",
    author: {
      name: "Lisa Thompson",
      avatar: "/mobile.webp"
    },
    publishedDate: "September 8, 2025",
    readingTime: 5,
    tags: ["Credit Score", "Mortgage Approval", "Finance"]
  },
  {
    id: 6,
    slug: "real-estate-market-trends-2025",
    title: "Real Estate Market Trends to Watch in 2025",
    excerpt: "Stay ahead of the market with insights into the latest real estate trends, pricing patterns, and what they mean for buyers and sellers.",
    content: `
      <p>The real estate market in 2025 continues to evolve, shaped by economic factors, demographic shifts, and changing buyer preferences. Understanding these trends can help inform your real estate decisions.</p>
      
      <h2>Current Market Conditions</h2>
      <p>The market has shown signs of stabilization after years of dramatic price increases and inventory shortages. Key indicators include:</p>
      <ul>
        <li>Moderating price growth in many markets</li>
        <li>Gradually improving inventory levels</li>
        <li>Steady but selective buyer demand</li>
        <li>Regional variations in market dynamics</li>
      </ul>
      
      <h2>Emerging Trends</h2>
      
      <h3>Suburban and Rural Growth</h3>
      <p>The trend toward suburban and rural living continues as remote work remains common, driving demand in previously overlooked areas.</p>
      
      <h3>Energy Efficiency Focus</h3>
      <p>Buyers increasingly prioritize energy-efficient features, solar panels, and smart home technology.</p>
      
      <h3>Multi-Generational Living</h3>
      <p>More families are seeking homes that accommodate multiple generations, driving demand for flexible floor plans.</p>
      
      <h2>Regional Variations</h2>
      <p>Market conditions vary significantly by region:</p>
      <ul>
        <li>Urban areas: Showing signs of recovery and renewed interest</li>
        <li>Suburbs: Continued strong demand with some moderation</li>
        <li>Rural areas: Sustained interest but with infrastructure considerations</li>
      </ul>
      
      <h2>What This Means for You</h2>
      <p>Whether you're buying or selling, these trends suggest the importance of working with knowledgeable professionals who understand local market conditions and can help you make informed decisions.</p>
    `,
    featuredImage: "/og.webp",
    author: {
      name: "Robert Kim",
      avatar: "/mobile.webp"
    },
    publishedDate: "September 5, 2025",
    readingTime: 4,
    tags: ["Market Trends", "Real Estate", "2025"]
  }
];

export const getBlogPosts = (page = 1, perPage = 6) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const posts = blogPosts.slice(startIndex, endIndex);

  return {
    posts,
    totalPosts: blogPosts.length,
    totalPages: Math.ceil(blogPosts.length / perPage),
    currentPage: page,
    hasNextPage: endIndex < blogPosts.length,
    hasPreviousPage: page > 1
  };
};

export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  return blogPosts.find(post => post.slug === slug) || null;
};

export const getFeaturedPosts = (limit = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.isFeatured)
    .concat(blogPosts.filter(post => !post.isFeatured))
    .slice(0, limit);
};
