import React, { useEffect, useRef, useState } from "react";
import RubricWheel from "./RubricWheel.jsx";
import { createSession, sendMessage } from "./api.js";

export default function App() {
  const [sessionId, setSessionId] = useState(null);
  const [turns, setTurns] = useState([]); // {role: "founder"|"analyst", text}
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    createSession()
      .then((res) => setSessionId(res.session_id))
      .catch(() => setError("Could not reach the validator backend."));
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [turns, sending]);

  async function handleSend(e) {
    e.preventDefault();
    const text = draft.trim();
    if (!text || !sessionId || sending) return;

    setTurns((prev) => [...prev, { role: "founder", text }]);
    setDraft("");
    setSending(true);
    setError(null);

    try {
      const res = await sendMessage(sessionId, text);
      setTurns((prev) => [...prev, { role: "analyst", text: res.reply }]);
      if (res.report) {
        setReport(res.report);
      }
    } catch (err) {
      setError(err.message || "Something went wrong reaching the validator.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="app-shell">
      <header className="masthead">
        <span className="eyebrow">Diligence File</span>
        <h1>Startup Validator — India</h1>
        <p className="subhead">
          Describe your idea. The analyst will ask what it needs, then weigh it against
          market fit, unit economics, team, timing, and impact.
        </p>
      </header>

      <div className="workspace">
        <section className="transcript" ref={scrollRef}>
          {turns.length === 0 && (
            <div className="empty-state">
              Start by telling the analyst what you're building — one or two sentences is enough.
            </div>
          )}
          {turns.map((t, i) => (
            <div key={i} className={`turn turn-${t.role}`}>
              <span className="turn-role">{t.role === "founder" ? "Founder" : "Analyst"}</span>
              <p>{t.text}</p>
            </div>
          ))}
          {sending && (
            <div className="turn turn-analyst turn-pending">
              <span className="turn-role">Analyst</span>
              <p className="pending-dots">weighing evidence…</p>
            </div>
          )}
          {error && <div className="error-banner">{error}</div>}
        </section>

        {report && (
          <aside className="report-panel">
            <span className="eyebrow">Assessment</span>
            <RubricWheel scores={report.dimension_scores} weightedTotal={report.weighted_total_out_of_10} />
          </aside>
        )}
      </div>

      <form className="composer" onSubmit={handleSend}>
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={sessionId ? "Tell the analyst about your idea…" : "Connecting…"}
          disabled={!sessionId || sending}
        />
        <button type="submit" disabled={!sessionId || sending || !draft.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}
