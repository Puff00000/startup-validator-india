# Indian Unicorns & Success Stories 🦄

This directory contains data on successful Indian startups (unicorns and high-growth ventures).

## Purpose
- Learn from successful business models
- Understand market conditions that led to success
- Identify replicable patterns and sector trends
- Benchmark against industry standards

## File Structure

```
unicorns/
├── by-sector/           # Organized by industry
│   ├── fintech.json
│   ├── ecommerce.json
│   ├── saas.json
│   ├── mobility.json
│   ├── edtech.json
│   ├── healthtech.json
│   └── others.json
├── timeline.json        # IPOs and milestones
└── success-patterns.json # Common success factors
```

## Schema: Unicorn Profile

```json
{
  "name": "Flipkart",
  "founded_year": 2007,
  "founders": ["Sachin Bansal", "Binny Bansal"],
  "sector": "eCommerce",
  "headquarters": "Bangalore",
  "problem_statement": "Online shopping infrastructure didn't exist in India; limited catalog, trust issues",
  "solution": "Full-stack marketplace with cash-on-delivery, logistics, payments",
  "initial_market": "Online books in India",
  "pivot_points": [
    { "year": 2010, "change": "Expanded beyond books to general merchandise" },
    { "year": 2013, "change": "Launched Flipkart Plus (membership program)" }
  ],
  "target_segments": [
    { "tier": "Tier 1-2 urban", "age": "18-45", "income": "₹3-15 LPA" }
  ],
  "unit_economics": {
    "year": 2013,
    "gmv": "₹500 Cr",
    "cac": "₹200-300",
    "ltv": "₹2000-3000",
    "repeat_rate": "25%"
  },
  "growth_metrics": [
    { "year": 2010, "gmv": "₹5 Cr", "users": 50000 },
    { "year": 2012, "gmv": "₹100 Cr", "users": "500K" },
    { "year": 2014, "gmv": "₹2000 Cr", "users": "5M" }
  ],
  "funding_journey": [
    { "round": "Seed", "amount": "$1M", "year": 2009 },
    { "round": "Series A", "amount": "$20M", "year": 2010 },
    { "round": "Series E", "amount": "$1B", "year": 2013 }
  ],
  "exit": {
    "type": "Acquisition",
    "acquirer": "Walmart",
    "year": 2018,
    "valuation": "$16B"
  },
  "key_success_factors": [
    "Solved real trust barrier in Indian e-commerce (COD)",
    "Built proprietary logistics network",
    "Aggressive customer acquisition in underserved markets",
    "Strong execution team with tech + business acumen"
  ],
  "regulatory_tailwinds": [
    "Digital India initiative",
    "GST implementation",
    "Improved internet penetration"
  ]
}
```

## Key Insights (To Extract Later)

- Average time to unicorn: 8-10 years
- Founder backgrounds: IIT/top B-schools common but not required
- Series A average: $15-25M
- Exit multiples: 40-100x initial investment
- Most successful in: FinTech, SaaS, Mobility, EdTech
