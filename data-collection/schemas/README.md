# Data Collection Schemas 📋

This directory contains JSON schemas and validation rules for data collection.

## Purpose

- Standardize submissions from founders
- Ensure consistent data quality
- Enable structured validation and analysis
- Support LLM prompting with structured inputs

## Key Schemas

### 1. **Submission Schema** (`submission-schema.json`)
Main schema for validating founder submissions. Includes:
- Founder profile & experience
- Business idea & problem statement
- Market analysis & competition
- Go-to-market strategy
- Financial projections
- Risk assessment
- Current traction

### 2. **Scoring Rubric** (to be created)
Defines scoring logic across 5 dimensions:
- Market Fit (25%)
- Economic Viability (25%)
- Team & Execution (20%)
- Timing & Trends (15%)
- Social Impact (15%)

### 3. **Red Flags & Green Signals** (to be created)
Predefined indicators for quick pattern matching

## Validation Rules

### Founder Profile
- **Experience**: 0-30 years
- **Background**: One of predefined categories
- **Co-founders**: 0-4 (ideally 2-3 for technical + business)

### Business Idea
- **Problem statement**: Must be specific (not generic)
- **Solution**: Must be different from existing solutions
- **Sector**: Must be one of major Indian sectors

### Market Analysis
- **TAM**: Must have justification/methodology
- **Target segment**: Must be specific (not "everyone")
- **Competition**: Should list at least 2 direct competitors

### Financial Projections
- **Realistic targets**: Revenue growth 50-200% YoY for early stage
- **Unit economics**: LTV:CAC ratio should be 3:1+
- **Runway**: Should have 6+ months runway

### Red Flags (Auto-flagged)
- No clear target segment
- TAM claims without justification
- Unrealistic revenue projections (>500% YoY growth)
- LTV:CAC < 2:1
- Runway < 3 months
- No relevant experience in domain
- Too crowded market with no differentiation

## Usage

```python
# Example: Validate a submission against schema
from jsonschema import validate

with open('submission-schema.json') as f:
    schema = json.load(f)

submission = {...}
validate(instance=submission, schema=schema)
```

## Next Steps

1. Create scoring rubric schema
2. Define red flags & green signals
3. Build validation logic (Python/TypeScript)
4. Create input form mapping to schema
