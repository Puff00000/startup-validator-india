import React from "react";

const DIMENSION_META = {
  market_fit: { label: "Market Fit", short: "MF" },
  economic_viability: { label: "Economic Viability", short: "EV" },
  team_execution: { label: "Team & Execution", short: "TE" },
  timing_trends: { label: "Timing & Trends", short: "TT" },
  social_impact: { label: "Social Impact", short: "SI" },
};

const WEIGHTS = {
  market_fit: 0.25,
  economic_viability: 0.25,
  team_execution: 0.2,
  timing_trends: 0.15,
  social_impact: 0.15,
};

function polar(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function wedgePath(cx, cy, rOuter, startAngle, endAngle) {
  const [x1, y1] = polar(cx, cy, rOuter, startAngle);
  const [x2, y2] = polar(cx, cy, rOuter, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

export default function RubricWheel({ scores, weightedTotal }) {
  const cx = 160;
  const cy = 160;
  const rOuter = 130;

  let angle = 0;
  const wedges = Object.keys(WEIGHTS).map((dim) => {
    const sweep = WEIGHTS[dim] * 360;
    const start = angle;
    const end = angle + sweep;
    angle = end;
    const score = scores?.[dim] ?? 0;
    const rFill = rOuter * Math.min(Math.max(score / 10, 0), 1);
    const mid = (start + end) / 2;
    const [lx, ly] = polar(cx, cy, rOuter + 26, mid);
    return {
      dim,
      start,
      end,
      score,
      outlinePath: wedgePath(cx, cy, rOuter, start, end),
      fillPath: wedgePath(cx, cy, Math.max(rFill, 6), start, end),
      labelPos: [lx, ly],
    };
  });

  return (
    <div className="rubric-wheel">
      <svg viewBox="0 0 320 320" width="280" height="280">
        {wedges.map((w) => (
          <path
            key={`outline-${w.dim}`}
            d={w.outlinePath}
            fill="none"
            stroke="var(--line)"
            strokeWidth="1"
          />
        ))}
        {wedges.map((w) => (
          <path key={`fill-${w.dim}`} d={w.fillPath} fill="var(--accent)" opacity="0.85" />
        ))}
        <circle cx={cx} cy={cy} r={54} fill="var(--bg)" stroke="var(--line)" strokeWidth="1" />
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          className="wheel-total"
        >
          {weightedTotal != null ? weightedTotal.toFixed(1) : "—"}
        </text>
        <text x={cx} y={cy + 16} textAnchor="middle" className="wheel-total-label">
          / 10
        </text>
        {wedges.map((w) => {
          const [lx, ly] = w.labelPos;
          return (
            <text
              key={`label-${w.dim}`}
              x={lx}
              y={ly}
              textAnchor="middle"
              className="wheel-label"
            >
              {DIMENSION_META[w.dim].short}
            </text>
          );
        })}
      </svg>
      <ul className="wheel-legend">
        {wedges.map((w) => (
          <li key={`legend-${w.dim}`}>
            <span className="legend-dot" />
            {DIMENSION_META[w.dim].label}
            <span className="legend-weight">{Math.round(WEIGHTS[w.dim] * 100)}%</span>
            <span className="legend-score">{w.score.toFixed(1)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
