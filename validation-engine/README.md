# Validation Engine 🔍

Core scoring and validation logic for startup ideas.

## Scoring Framework

The validation engine scores submissions on **5 dimensions**:

### 1. **Market Fit** (25%)
- Problem clarity and real need
- Market size (TAM) with justification
- Customer segment definition
- Solution differentiation

### 2. **Economic Viability** (25%)
- Unit economics (LTV, CAC, LTV:CAC ratio)
- Revenue model sustainability
- Path to profitability
- Margin structure

### 3. **Team & Execution** (20%)
- Founder experience in domain
- Team composition and balance
- Track record
- Ability to execute

### 4. **Timing & Trends** (15%)
- Market readiness
- Regulatory tailwinds
- Infrastructure availability
- Consumer trend alignment

### 5. **Social Impact** (15%)
- Problem relevance to Indian population
- Scalability beyond metros
- Accessibility and affordability
- Local language support

## Scoring Process

```
1. Parse submission data
   ↓
2. Validate against schema
   ↓
3. Calculate dimension scores (0-100 each)
   ↓
4. Apply weights to get overall score
   ↓
5. Identify red flags & green signals
   ↓
6. Generate detailed report with recommendations
```

## Output Report Structure

```json
{
  "submission_id": "sub_001",
  "overall_score": 78,
  "grade": "Good",
  "dimensions": {
    "market_fit": { "score": 82, "feedback": "..." },
    "economic_viability": { "score": 75, "feedback": "..." },
    "team_execution": { "score": 80, "feedback": "..." },
    "timing_trends": { "score": 70, "feedback": "..." },
    "social_impact": { "score": 85, "feedback": "..." }
  },
  "red_flags": ["High CAC in competitive market", "..."],
  "green_signals": ["Strong domain experience", "..."],
  "recommendations": ["Reduce CAC through partnerships", "..."],
  "benchmark_comparison": {
    "vs_sector_average": "+5 points",
    "vs_similar_stage": "+8 points"
  }
}
```

## Implementation (Phase 2)

- [ ] Build scoring algorithm (TypeScript/Python)
- [ ] Integrate with LLM for qualitative analysis
- [ ] Create comparison engine vs. benchmarks
- [ ] Build report generation
- [ ] Add visualization (charts, comparisons)

## Key Files

- `scoring-rubric.json` - Detailed scoring criteria
- `validation-logic.ts/py` - Algorithm implementation (to be created)
- `red-flags.json` - Auto-detection patterns (to be created)
