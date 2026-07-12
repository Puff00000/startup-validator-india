# Knowledge Base 📚

Comprehensive database of Indian startup ecosystem insights, trends, benchmarks, and regulatory information.

## Directory Structure

```
knowledge-base/
├── unicorns/              # Success stories
│   ├── README.md
│   └── major-unicorns.json (8 major Indian unicorns)
│
├── failures/              # Lessons from failures
│   └── README.md
│
├── sectors/               # Sector-specific analysis
│   ├── README.md
│   ├── fintech.json       ✅
│   ├── saas.json          ✅
│   ├── edtech.json        ✅
│   ├── ecommerce.json     (to be added)
│   ├── mobility.json      (to be added)
│   ├── healthtech.json    (to be added)
│   ├── agritech.json      (to be added)
│   └── d2c.json           (to be added)
│
├── market-trends/         # Current & future trends
│   ├── README.md
│   └── current-trends.json ✅ (8 major trends with TAM)
│
├── benchmarks/            # Indian startup KPIs
│   ├── README.md
│   └── unit-economics.json ✅ (By sector, stage, metrics)
│
├── regulatory/            # Compliance & regulations
│   ├── README.md          ✅
│   └── framework.json     ✅ (By sector, regulators, red flags)
│
├── consumer-behavior/     # Tier-wise insights
│   ├── README.md
│   └── india-demographics.json ✅ (Demographics, segments, behavior)
│
└── README.md (this file)
```

## What's Included

### ✅ Completed (Phase 1)

1. **Unicorns** (8 major startups)
   - Flipkart, Paytm, OYO, BYJU'S, Unacademy, CRED, Nykaa, Razorpay
   - Success factors, timelines, funding journey

2. **Sectors** (3 detailed + framework)
   - FinTech (with 4 subsectors)
   - SaaS (with 3 subsectors)
   - EdTech (with 3 subsectors)
   - Frameworks for: eCommerce, Mobility, HealthTech, AgriTech, D2C

3. **Market Trends** (8 current trends)
   - AI & Automation, Quick Commerce, Vertical SaaS, EV & Mobility, Climate & AgriTech, Remote Work, Creator Economy, Mental Health

4. **Benchmarks**
   - Unit economics by sector (SaaS, EdTech, Marketplace, FinTech, HealthTech)
   - Key metrics explained
   - Red flags & warning indicators
   - India-specific notes

5. **Regulatory Framework**
   - Key regulators (RBI, SEBI, MeitY, etc.)
   - Sector-specific compliance
   - Approval timelines
   - Red flags by sector
   - Government support schemes (Startup India, PLI, Digital India)

6. **Consumer Behavior & Demographics**
   - Population breakdown (urban/rural)
   - Internet penetration & digital behavior
   - Income segmentation (Tier 1-3, Rural)
   - Segment-specific insights (Students, Professionals, Homemakers, SMB Owners, Farmers)
   - Consumer behavior patterns by tier

## Key Insights for Validation

### Market Dynamics
- India's digital payments market is mature (40% UPI penetration)
- EdTech has high growth (50% YoY) but profitability challenges
- SaaS for SMBs is emerging opportunity (35% growth)
- Quick commerce is saturating (10-min delivery wars)

### Unit Economics Reality
- CAC is 2-3x higher in India vs. developed markets
- LTV:CAC must be 3:1+ for sustainable growth
- Profitability timeline: 5-7 years for most sectors
- Tier 2-3 expansion is critical but has lower willingness-to-pay

### Regulatory Reality
- EdTech & SaaS have minimal regulatory friction
- FinTech requires 6-18 months approval (very high compliance)
- HealthTech has significant liability concerns
- AgriTech varies by state (complex APMC rules)

### Consumer Behavior
- Mobile-first market (90% via smartphones)
- Local language preference (75% prefer local language)
- Cash still dominant outside metros (70% rural)
- YouTube is primary information/entertainment source

## How This Knowledge Base is Used

### 1. **Validation Input**
- Benchmarking founder submissions against sector KPIs
- Comparing TAM claims to known market sizes
- Checking unit economics against sector benchmarks
- Identifying regulatory concerns

### 2. **LLM Prompting**
- Provide context to Claude/GPT about Indian market
- Enable sector-specific analysis
- Generate tailored recommendations
- Flag sector-specific red flags

### 3. **Scoring Reference**
- Market Fit scoring uses TAM/sector insights
- Economic Viability uses unit economics benchmarks
- Timing & Trends uses market trends data
- Social Impact uses demographics & consumer behavior

## Future Additions (Phase 2-3)

- [ ] Add failure case studies (5-10 major failures)
- [ ] Add 5 more sectors (Mobility, HealthTech, AgriTech, eCommerce, D2C)
- [ ] Add quarterly trend updates
- [ ] Add VC funding data by sector
- [ ] Add exit multiples data
- [ ] Add customer interview templates
- [ ] Add pitch deck analysis examples
- [ ] Add competitive landscape heatmaps

## Data Sources & Attribution

- Government India reports (Ministry of Commerce, DSIR)
- VC reports (VCCircle, IvyCap, Sequoia India)
- Industry analysis (Bain, McKinsey, BCG India reports)
- Public company data (Unicorn IPOs, acquisitions)
- News sources (TechCrunch India, Yourstory, Moneycontrol)

## Maintaining Data Freshness

- Unicorns: Update quarterly (new exits, unicorn births)
- Trends: Update monthly (new emerging trends)
- Benchmarks: Update quarterly (new data)
- Demographics: Update annually (census-level changes)
- Regulatory: Update as changes occur (policy updates)
