export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  excerpt: string;
}

export const posts: BlogPost[] = [
  {
    slug: "free-vending-machines-chicago",
    title: "How to Get Free Vending Machines for Your Chicago Office (2025 Guide)",
    description: "Step-by-step guide to getting free vending machines installed at your Chicago office, school, gym, or healthcare facility. No setup cost required.",
    category: "Guide",
    date: "January 15, 2025",
    readTime: "8 min read",
    image: "https://mustahavevending.com/wp-content/uploads/2022/08/office-vending-machine.jpg",
    imageAlt: "Modern vending machines in a Chicago office break room",
    tags: ["Free Installation", "Chicago Offices", "Facility Management", "2025 Guide"],
    excerpt: "Everything Chicago facility managers need to know about getting free vending machines installed — qualification requirements, what to expect, and how to choose the right provider.",
  },
  {
    slug: "healthy-vending-chicago",
    title: "Healthy Vending Options That Chicago Employees Actually Want",
    description: "Which healthy vending products do Chicago employees actually buy? Real data from 400+ Chicago locations plus how to upgrade your office break room.",
    category: "Health & Wellness",
    date: "February 3, 2025",
    readTime: "6 min read",
    image: "https://www.healthyworkplacesnacks.com/wp-content/uploads/2023/01/healthy-snacks-at-work.jpg",
    imageAlt: "Healthy office snacks for Chicago employees",
    tags: ["Healthy Snacks", "Wellness", "Productivity", "Chicago"],
    excerpt: "The research is clear: healthy break rooms improve productivity. Here's how Chicago companies are upgrading their vending to match what modern employees expect.",
  },
  {
    slug: "office-coffee-service-chicago",
    title: "Bean-to-Cup vs. Pod Machines: What's Right for Your Chicago Office?",
    description: "Compare bean-to-cup and pod coffee machines for Chicago offices — cost per cup, quality, maintenance requirements, and which your team will actually use daily.",
    category: "Coffee",
    date: "February 20, 2025",
    readTime: "5 min read",
    image: "https://stockcake.com/i/barista-at-work_981684_1048458/barista-at-work.jpg",
    imageAlt: "Bean-to-cup coffee machine in modern Chicago workplace",
    tags: ["Coffee", "Office Perks", "Equipment", "Chicago"],
    excerpt: "Comparing the two most popular office coffee solutions for Chicago workplaces — cost, quality, maintenance, and which one your team will actually use.",
  },
  {
    slug: "micro-market-vs-vending-chicago",
    title: "Micro-Market vs. Vending Machine: Which Is Right for Your Chicago Location?",
    description: "Micro-markets vs. traditional vending machines for Chicago offices — a complete breakdown of cost, space requirements, product variety, and ideal use cases.",
    category: "Comparison",
    date: "March 5, 2025",
    readTime: "7 min read",
    image: "https://www.pbsvending.com/wp-content/uploads/2021/08/fresh-food-markets.jpg",
    imageAlt: "Office micro-market with fresh food options in Chicago",
    tags: ["Micro-Market", "Comparison", "Chicago", "Fresh Food"],
    excerpt: "Micro-markets are exploding across Chicago office parks. But are they right for every workplace? We break down the differences, costs, and ideal use cases for each.",
  },
  {
    slug: "vending-employee-retention-chicago",
    title: "How Chicago Companies Use Break Room Perks to Reduce Employee Turnover",
    description: "Chicago HR leaders are using break room upgrades as a low-cost, high-impact retention strategy. Research, cost analysis, and a practical 5-step implementation plan.",
    category: "HR & Culture",
    date: "March 18, 2025",
    readTime: "6 min read",
    image: "https://www.aihr.com/wp-content/uploads/employee-retention.png",
    imageAlt: "Employee retention strategy with workplace benefits in Chicago",
    tags: ["Retention", "HR Strategy", "Benefits", "Break Room"],
    excerpt: "With Chicago's job market tighter than ever, companies are turning to break room upgrades as a low-cost, high-impact retention strategy. The data might surprise you.",
  },
];
