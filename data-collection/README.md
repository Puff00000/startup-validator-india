# Data Collection 📊

This directory defines how startup ideas are collected and structured for validation.

## Structure

```
data-collection/
├── schemas/                    # JSON validation schemas
│   ├── submission-schema.json  # Main submission schema
│   └── README.md
├── templates/
│   ├── idea-submission-template.md  # Markdown template for founders
│   └── pitch-deck-template.md  # (To be created)
└── README.md (this file)
```

## Data Collection Flow

```
Founder Submission
    ↓
Validate against Schema
    ↓
Normalize & Structure Data
    ↓
Feed to Validation Engine
    ↓
Generate Report
```

## Key Data Points Collected

### Founder Profile (Team & Execution)
- Name, background, experience
- Previous venture outcomes
- Co-founder composition
- Domain expertise

### Business Idea (Problem & Solution)
- Problem statement & severity
- Solution & differentiation
- Why now
- Sector classification

### Market Analysis (Market Fit)
- Target segment (demographics, tier, problem acuteness)
- TAM/SAM/SOM with justification
- Competition & barriers to entry
- Addressable opportunity

### Go-to-Market (Traction & Growth)
- Customer acquisition channels
- Estimated CAC
- Pricing strategy & price point
- Initial geography

### Financial Projections (Economic Viability)
- Revenue projections (Y1, Y3)
- Unit economics (LTV, CAC, payback)
- Funding requirements
- Current runway

### Traction & Validation
- Current stage (ideation to revenue)
- Number of customers/users
- MRR (if applicable)
- Key metrics

### Risk Assessment (Execution Capability)
- Key risks & mitigation strategies
- Regulatory challenges
- Market risks

## Input Methods (Phase 2)

1. **Markdown Template** ✅ (created - `idea-submission-template.md`)
2. **Web Form** (to be built)
3. **Pitch Deck Parser** (to be built - extracts structured data from PDF)
4. **API** (to be built - for programmatic submissions)

## Data Quality Checks

### Validation Rules

✅ **Required Fields**: All marked fields must be filled  
✅ **Field Types**: Data must match expected types (string, number, enum, etc.)  
✅ **Value Ranges**: Numbers must be within realistic ranges  
✅ **Consistency**: Related fields must be logically consistent  
✅ **Red Flags**: Auto-detect concerning patterns

### Examples of Red Flags

- TAM claim without justification
- LTV:CAC ratio < 2:1
- Runway < 3 months
- Revenue growth > 500% YoY (unrealistic for early stage)
- Target segment too broad ("everyone")
- No clear differentiation vs. competitors

## Normalization

Before feeding to the validation engine, data is normalized:

1. **Standardize fields**: Convert "₹", "INR", "$", "USD" to consistent currency
2. **Extract numbers**: Parse "1 Crore" → 10000000
3. **Map categories**: "Cloud software" → "SaaS"
4. **Validate segments**: Ensure tier selections are valid
5. **Ensure consistency**: Flag conflicting information

## Example: Normalized Submission

```json
{
  "submission_id": "sub_001",
  "founder": {
    "name": "Raj Kumar",
    "background": "IIT",
    "experience_years": 5,
    "domain_experience_years": 2
  },
  "idea": {
    "name": "FarmConnect",
    "sector": "AgriTech",
    "problem_severity": "High"
  },
  "market": {
    "target_segments": ["rural", "tier_3"],
    "tam_inr": 25000000000,
    "tam_justification": "100M farmers x ₹2500/year = ₹25B TAM"
  },
  "unit_economics": {
    "cac_inr": 500,
    "ltv_inr": 2000,
    "ltv_to_cac_ratio": 4,
    "payback_months": 3
  },
  "validation_status": "valid",
  "red_flags": [],
  "created_at": "2024-01-15T10:30:00Z"
}
```

## Next Steps

1. Build web form UI (React)
2. Implement validation logic (TypeScript/Python)
3. Create pitch deck parser (PDF extraction)
4. Build API endpoint for submissions
5. Connect to validation engine
6. Generate validation reports
