export interface LocationPage {
  slug: string;
  name: string;
  shortName: string;
  region: string;
  image: string;
  imageAlt: string;
  description: string;
  businesses: string[];
  landmarks: string[];
  stats: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
  nearbyAreas: string[];
  zipCodes: string[];
}

export interface IndustryPage {
  slug: string;
  name: string;
  icon: string;
  image: string;
  imageAlt: string;
  headline: string;
  subheadline: string;
  description: string;
  pain_points: string[];
  solutions: { title: string; desc: string }[];
  topProducts: string[];
  stats: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
  faqs: { q: string; a: string }[];
}

export const locations: LocationPage[] = [
  {
    slug: "chicago-loop",
    name: "The Loop",
    shortName: "Loop",
    region: "Downtown Chicago",
    image: "https://images.loopnet.com/i2/8ceCNrwnENIvGS0wlEKtMCkSSLYPOoLe7Mfz7UBXxvM/110/image.jpg",
    imageAlt: "Chicago Loop downtown business district office buildings",
    description: "Chicago's central business district — home to Fortune 500 headquarters, law firms, financial institutions, and thousands of office workers who need reliable break room service.",
    businesses: ["Salesforce Tower", "Willis Tower tenants", "Chase Tower", "BMO Harris offices", "Skidmore Owings & Merrill", "Jones Lang LaSalle"],
    landmarks: ["Millennium Park", "Chicago Riverwalk", "Union Station", "The Bean"],
    stats: [
      { label: "Sq ft of office space", value: "130M+" },
      { label: "Daily office workers", value: "400,000+" },
      { label: "Locations we serve", value: "50+" },
    ],
    testimonial: {
      quote: "We run a 30-floor building in the Loop and needed a vendor who could actually respond in time. Chicago Vending Co. has never missed their 4-hour SLA in 3 years.",
      author: "Brian L.",
      role: "Property Manager, Loop Office Tower",
    },
    nearbyAreas: ["River North", "West Loop", "South Loop", "Millennium Park"],
    zipCodes: ["60601", "60602", "60603", "60604", "60605"],
  },
  {
    slug: "naperville-vending",
    name: "Naperville",
    shortName: "Naperville",
    region: "West Suburbs",
    image: "https://images.crains.com/wp-content/uploads/2021/09/naperville-office.jpg",
    imageAlt: "Naperville Illinois suburban office park",
    description: "One of Chicago's fastest-growing business suburbs — Naperville's corporate parks, tech campuses, and healthcare facilities all need the kind of reliable vending service that only a true Chicago-area company can deliver.",
    businesses: ["Nicor Gas HQ", "OfficeMax/ODP Corporation", "Nalco Water (Ecolab)", "Calamos Investments", "Edward Hospital campus"],
    landmarks: ["Naperville Riverwalk", "Lisle Corporate Park", "I-88 Tech Corridor"],
    stats: [
      { label: "Corporate employers", value: "2,000+" },
      { label: "Daily business commuters", value: "65,000+" },
      { label: "Locations we serve", value: "40+" },
    ],
    testimonial: {
      quote: "Running a 250-person warehouse in Naperville meant two shifts needing break room access. Chicago Vending Co. handles both without us thinking about it once.",
      author: "Rosa M.",
      role: "HR Director, Naperville Manufacturing Co.",
    },
    nearbyAreas: ["Lisle", "Downers Grove", "Warrenville", "Aurora", "Bolingbrook"],
    zipCodes: ["60540", "60563", "60564", "60565", "60566"],
  },
  {
    slug: "schaumburg-vending",
    name: "Schaumburg",
    shortName: "Schaumburg",
    region: "Northwest Suburbs",
    image: "https://images.loopnet.com/i2/pHnzB3m2_HW6k5e5UPU4T0AXVqFnFENuVpVCuG1b7v0/112/425-N-Martingale-Rd-Schaumburg-IL-60173-Primary-Photo-1-LargeHighDefinition.jpg",
    imageAlt: "Schaumburg Illinois Woodfield corporate office buildings",
    description: "Schaumburg's Woodfield Corporate Center and surrounding office parks house some of the Chicago area's largest employers. Dense, suburban, and far from a Starbucks — exactly the kind of location that needs great vending.",
    businesses: ["Motorola Solutions HQ", "Zurich North America", "Woodfield Mall corporate offices", "Amazon fulfillment", "CDK Global"],
    landmarks: ["Woodfield Mall", "Woodfield Corporate Center", "O'Hare proximity", "I-90/290 interchange"],
    stats: [
      { label: "Fortune 500 offices nearby", value: "12" },
      { label: "Office workers in area", value: "80,000+" },
      { label: "Locations we serve", value: "30+" },
    ],
    testimonial: {
      quote: "Our Schaumburg campus has 400 employees across 3 buildings. Chicago Vending Co. manages machines in all three and we've never had a stocking issue.",
      author: "David K.",
      role: "Facilities Director, Schaumburg Corporate Campus",
    },
    nearbyAreas: ["Hoffman Estates", "Elk Grove Village", "Rolling Meadows", "Palatine", "Roselle"],
    zipCodes: ["60173", "60194", "60195", "60196"],
  },
  {
    slug: "evanston-vending",
    name: "Evanston",
    shortName: "Evanston",
    region: "North Suburbs",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Northwestern_University_campus.jpg/1280px-Northwestern_University_campus.jpg",
    imageAlt: "Evanston Illinois Northwestern University campus",
    description: "Home to Northwestern University, a thriving downtown, and a growing healthcare sector — Evanston is a dense, diverse market with strong demand for both traditional vending and healthy, organic options.",
    businesses: ["Northwestern University", "NorthShore University HealthSystem", "Evanston Hospital", "AMITA Health", "Rotary International HQ"],
    landmarks: ["Northwestern University", "Lake Michigan lakefront", "Evanston Research Park"],
    stats: [
      { label: "University students & staff", value: "25,000+" },
      { label: "Healthcare workers", value: "8,000+" },
      { label: "Locations we serve", value: "22+" },
    ],
    testimonial: {
      quote: "Northwestern's research facilities run 24/7. We needed a vending partner who could keep machines stocked at odd hours. Chicago Vending Co. delivers.",
      author: "Aisha W.",
      role: "Facilities Coordinator, Northwestern Research Campus",
    },
    nearbyAreas: ["Skokie", "Wilmette", "Glenview", "Rogers Park", "Lincoln Square"],
    zipCodes: ["60201", "60202", "60203", "60208"],
  },
  {
    slug: "oak-park-vending",
    name: "Oak Park",
    shortName: "Oak Park",
    region: "West Suburbs",
    image: "https://images.loopnet.com/i2/8ceCNrwnENIvGS0wlEKtMCkSSLYPOoLe7Mfz7UBXxvM/110/image.jpg",
    imageAlt: "Oak Park Illinois downtown business district",
    description: "Oak Park's mix of professional services, healthcare facilities, and a strong small business community makes it a natural fit for modern, flexible vending service.",
    businesses: ["Rush Oak Park Hospital", "West Suburban Medical Center", "Oak Park professional offices", "Advocate Health facilities"],
    landmarks: ["Frank Lloyd Wright Home", "Oak Park Arts District", "Downtown Oak Park"],
    stats: [
      { label: "Healthcare workers", value: "3,500+" },
      { label: "Business establishments", value: "1,200+" },
      { label: "Locations we serve", value: "18+" },
    ],
    testimonial: {
      quote: "Rush Oak Park Hospital needed ADA-compliant machines with nutritional labeling. Chicago Vending Co. handled everything — installation, compliance, and keeps it stocked perfectly.",
      author: "Marcus T.",
      role: "Facilities Manager, Rush Oak Park Hospital",
    },
    nearbyAreas: ["River Forest", "Forest Park", "Berwyn", "Cicero", "Elmwood Park"],
    zipCodes: ["60301", "60302", "60303", "60304"],
  },
  {
    slug: "river-north-vending",
    name: "River North",
    shortName: "River North",
    region: "Downtown Chicago",
    image: "https://americandiningcreations.com/wp-content/uploads/2023/01/AdobeStock_288866065.jpeg",
    imageAlt: "River North Chicago modern office break room",
    description: "Chicago's tech and creative hub — River North is packed with startups, agencies, co-working spaces, and boutique offices. These teams expect premium everything, including their break rooms.",
    businesses: ["1871 Chicago tech hub", "Outcome Health", "Morningstar (nearby)", "Tribune Media", "Braintree / PayPal offices", "Groupon"],
    landmarks: ["1871 at Merchandise Mart", "Chicago Riverwalk", "Marina City", "Merchandise Mart"],
    stats: [
      { label: "Tech companies in area", value: "600+" },
      { label: "Co-working desks", value: "15,000+" },
      { label: "Locations we serve", value: "35+" },
    ],
    testimonial: {
      quote: "River North startups are picky about everything — including snacks. Chicago Vending Co. worked with our office manager to build a product mix our team actually loves.",
      author: "Jennifer R.",
      role: "Office Manager, River North Tech Startup",
    },
    nearbyAreas: ["Streeterville", "Gold Coast", "Old Town", "Fulton Market", "Goose Island"],
    zipCodes: ["60610", "60611", "60654"],
  },
];

export const industries: IndustryPage[] = [
  {
    slug: "office-building-vending",
    name: "Office Buildings",
    icon: "🏢",
    image: "https://americandiningcreations.com/wp-content/uploads/2023/01/AdobeStock_288866065.jpeg",
    imageAlt: "Office building break room with modern vending machines",
    headline: "Vending machines that make your office better",
    subheadline: "Free installation. Weekly restocking. Zero headaches for you or your tenants.",
    description: "From single-tenant offices to multi-floor commercial towers, Chicago Vending Co. designs vending programs around your building's unique needs — headcount, shift patterns, tenant mix, and floor plan.",
    pain_points: [
      "Tenants complaining about empty or broken machines",
      "Cash-only machines in 2025 annoying employees",
      "Service response times measured in days, not hours",
      "Product selection nobody wants",
      "Machines that make the lobby look dated",
    ],
    solutions: [
      { title: "Multi-floor deployment", desc: "We map every floor for optimal placement — no employee is more than two floors from a machine." },
      { title: "Cashless on every unit", desc: "Tap card, Apple Pay, Google Pay, and app payments. Built in, not bolted on." },
      { title: "4-hour service SLA", desc: "A machine down is a tenant complaint waiting to happen. We're there in 4 hours, guaranteed." },
      { title: "Custom product mix", desc: "We survey your tenants and tailor selections to your building's demographic and culture." },
      { title: "Branded machine wraps", desc: "Available for buildings that want a premium, co-branded look in common areas." },
    ],
    topProducts: ["Sparkling Ice", "KIND Bars", "Lay's Classic", "Gatorade", "Red Bull", "Cliff Bars", "Cheez-Its", "LaCroix", "RxBar", "Kettle Chips"],
    stats: [
      { label: "Office buildings served in Chicago", value: "200+" },
      { label: "Average tenant satisfaction increase", value: "34%" },
      { label: "Machines installed citywide", value: "600+" },
    ],
    testimonial: {
      quote: "I manage vending across 8 commercial properties in Chicago. Having one vendor who covers Loop to suburbs, responds fast, and keeps machines looking modern has simplified my life enormously.",
      author: "Brian L.",
      role: "Property Manager, 8 Chicago Buildings",
    },
    faqs: [
      { q: "How many machines does my building need?", a: "We recommend one machine per 50 employees as a baseline. Buildings with multiple floors typically need machines on every other floor. Our free site assessment will give you a specific recommendation." },
      { q: "Can I get revenue share on a high-traffic building?", a: "Yes — for buildings with 250+ daily users, we offer revenue share arrangements. Discussed during your site assessment." },
      { q: "Do you handle multi-tenant buildings?", a: "Absolutely. We regularly manage vending programs across multi-tenant Class A and B office buildings throughout Chicago." },
    ],
  },
  {
    slug: "gym-fitness-vending",
    name: "Gyms & Fitness Centers",
    icon: "💪",
    image: "https://vendinglocator.com/wp-content/uploads/2023/11/Gym-Vending-Machine.jpg",
    imageAlt: "Gym vending machine with protein bars and sports drinks",
    headline: "Performance vending for Chicago gyms",
    subheadline: "Protein, electrolytes, and recovery products — curated for members who actually train.",
    description: "Generic vending doesn't cut it in a fitness environment. Your members are health-conscious and they notice when the machine is stocked with products that contradict what they're working toward. We build vending programs specifically for the fitness industry.",
    pain_points: [
      "Generic snack machines full of candy members don't want",
      "Missing the revenue opportunity post-workout",
      "Members leaving to buy protein at Whole Foods down the street",
      "Machines that look wrong in a premium fitness environment",
      "No 24/7 access when the gym is open late",
    ],
    solutions: [
      { title: "Sport & performance catalog", desc: "100+ fitness-specific SKUs: Quest, RxBar, Bodyarmor, Liquid IV, REBBL, Protein2o, and more." },
      { title: "Refrigerated units available", desc: "Cold protein shakes, Greek yogurt, and refrigerated beverages — not just shelf-stable options." },
      { title: "24/7 capable machines", desc: "For gyms with extended or 24-hour access, our machines operate independently of staff hours." },
      { title: "App & cashless payments", desc: "Members pay with their phone on the way from the squat rack to the exit. No fumbling for cash." },
      { title: "Member survey integration", desc: "We survey your membership and adjust the product mix quarterly to match what they actually want to buy." },
    ],
    topProducts: ["Quest Bar (Variety)", "RxBar", "Bodyarmor Lyte", "Liquid IV", "Protein2o", "KIND Protein", "REBBL Protein", "Muscle Milk RTD", "Biosteel Sports Drink", "Built Bar"],
    stats: [
      { label: "Chicago gyms & studios served", value: "60+" },
      { label: "Avg. revenue per machine per month", value: "$800+" },
      { label: "Member satisfaction with healthy options", value: "91%" },
    ],
    testimonial: {
      quote: "Having a vending partner that understands fitness-focused customers was key. They curated a perfect mix of electrolytes, protein, and snacks. Members love it and it's become a genuine revenue stream.",
      author: "David K.",
      role: "GM, Equinox Fitness Schaumburg",
    },
    faqs: [
      { q: "Can you stock only health-focused products?", a: "Absolutely — we can make your machine 100% better-for-you if that's your brand positioning. We have a deep catalog of sports nutrition, natural snacks, and functional beverages." },
      { q: "Do you offer refrigerated machines for gyms?", a: "Yes. Refrigerated units are available for qualifying gym locations and are especially popular for post-workout protein shakes and recovery drinks." },
      { q: "My gym is open 24 hours — does that work?", a: "Perfectly. Our machines operate 24/7 independently of staff. Members can purchase anytime using card or app payment." },
    ],
  },
  {
    slug: "school-university-vending",
    name: "Schools & Universities",
    icon: "🎓",
    image: "https://vendinglocator.com/wp-content/uploads/2021/06/University-Vending-Machine.jpg",
    imageAlt: "University students using vending machine on campus",
    headline: "Compliant campus vending for Chicago schools",
    subheadline: "USDA Smart Snacks compliant. Student ID payments. Nutritional labeling on every item.",
    description: "Educational environments have unique requirements — from USDA Smart Snacks compliance for K-12 to diverse dietary needs at universities. We've built our education program around these specific demands.",
    pain_points: [
      "USDA Smart Snacks compliance headaches for K-12",
      "Students complaining machines don't accept student ID or app payment",
      "Products that don't align with wellness initiatives",
      "Machines that are chronically empty between service visits",
      "No visibility into what's selling and what's wasting space",
    ],
    solutions: [
      { title: "USDA Smart Snacks compliance", desc: "Every product in K-12 machines meets USDA Smart Snacks nutrition standards. No compliance risk for your administration." },
      { title: "Student ID & app payments", desc: "We integrate with campus card systems and mobile apps so students never need cash." },
      { title: "Campus-wide deployment", desc: "Student unions, dorms, libraries, athletic facilities, faculty lounges — we map and serve every building." },
      { title: "Allergen labeling", desc: "Full allergen and nutritional labeling on every product, meeting Illinois school nutrition requirements." },
      { title: "Monthly restocking reports", desc: "We provide administrators with monthly reports on top products, revenue, and machine performance." },
    ],
    topProducts: ["Baked Lay's", "SunChips", "KIND Bar (USDA compliant)", "Apple Juice 100%", "Water", "Welch's Fruit Snacks", "Nutri-Grain Bar", "Quaker Oats Bar", "Sun Maid Raisins", "Veggie Straws"],
    stats: [
      { label: "Chicago-area schools & universities served", value: "45+" },
      { label: "Students &  staff reached daily", value: "80,000+" },
      { label: "K-12 compliance record", value: "100%" },
    ],
    testimonial: {
      quote: "UIC Health Sciences needed machines for 6 buildings with different population needs. Chicago Vending Co. handled the compliance documentation and customized every machine. Smooth from day one.",
      author: "Aisha W.",
      role: "Ops Lead, UIC Health Sciences",
    },
    faqs: [
      { q: "Are your machines USDA Smart Snacks compliant?", a: "Yes. All products in K-12 machines are USDA Smart Snacks certified. We maintain compliance documentation and update the product list whenever USDA standards change." },
      { q: "Can students pay with their campus card?", a: "We support campus card integration at most Chicago-area universities. Contact us with your card system details during the site assessment." },
      { q: "Do you serve community colleges?", a: "Yes — we serve community colleges throughout the Chicago metro including Harper, Oakton, Moraine Valley, and Triton." },
    ],
  },
  {
    slug: "hospital-healthcare-vending",
    name: "Hospitals & Healthcare",
    icon: "🏥",
    image: "https://images.sundun.com/wcs2/wp-content/uploads/2024/07/AdobeStock_461590820-scaled.jpeg",
    imageAlt: "Hospital healthcare facility vending machine for staff",
    headline: "Healthcare vending that meets your standards",
    subheadline: "ADA compliant. Nutritionally labeled. Contactless. Available 24/7 for staff on every shift.",
    description: "Healthcare facilities operate under strict requirements and serve patients, families, and staff with very different needs. Our healthcare program is designed around the specific demands of clinical environments.",
    pain_points: [
      "Non-ADA-compliant machines creating liability exposure",
      "No nutritional labeling causing issues with health-conscious patients and staff",
      "Machines that accept only cash in a touchless environment",
      "Slow service response when machines break during night shifts",
      "Product selections that don't align with hospital wellness programs",
    ],
    solutions: [
      { title: "Full ADA compliance", desc: "All machines meet ADA height, reach range, and interface requirements. Installation placement follows ADA clearance guidelines." },
      { title: "Nutritional labeling on every item", desc: "Calorie counts displayed on every product per Illinois nutrition labeling requirements for vending." },
      { title: "Contactless-only payment option", desc: "For environments that prefer touchless interaction — card tap, Apple Pay, and Google Pay only, no cash handling." },
      { title: "24/7 service capability", desc: "Healthcare never stops. Our service team operates 24/7 for facilities that can't have a machine down during night shifts." },
      { title: "Staff vs. patient area customization", desc: "Different machines for staff break rooms vs. patient family waiting areas — different product mixes for different needs." },
    ],
    topProducts: ["KIND Bar", "Mixed Nuts", "CORE Water", "Sparkling Ice", "Quaker Oats Bar", "Trail Mix", "Belvita Breakfast", "Whole Grain Crackers", "Greek Yogurt (refrigerated)", "100% Juice"],
    stats: [
      { label: "Healthcare facilities served in Chicago", value: "40+" },
      { label: "ADA compliance rate", value: "100%" },
      { label: "Night shift service calls answered", value: "100%" },
    ],
    testimonial: {
      quote: "Healthcare settings have strict requirements. They understood immediately — nutritional labeling, ADA-compliant machines, contactless pay. Installed 6 units across our campus with zero issues.",
      author: "Aisha W.",
      role: "Ops Lead, UIC Health Sciences",
    },
    faqs: [
      { q: "Are your machines ADA compliant?", a: "Yes, 100%. All machines meet ADA height, reach range, and control requirements. We also follow ADA clearance guidelines for placement, ensuring wheelchair access." },
      { q: "Can you serve a 24-hour emergency department?", a: "Absolutely. Our service team operates 24/7 and we prioritize healthcare facilities in our response queue. ED and ICU adjacent machines get same-day service calls." },
      { q: "Do you offer calorie-count displays?", a: "Yes. All machines in healthcare settings display calorie counts per product, complying with Illinois vending nutrition labeling requirements." },
    ],
  },
];
