
function ScoreCard({ title, score, description }) {
  const safeScore = Math.max(0, Math.min(100, score));

  return (
    <article className="score-card">
      <p className="score-title">{title}</p>

      <div className="score-value">
        <span>{safeScore}</span>
        <span className="score-total">/100</span>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-label={title}
        aria-valuenow={safeScore}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-fill"
          style={{ width: `${safeScore}%` }}
        />
      </div>

      <p className="muted">{description}</p>
    </article>
  );
}

export default ScoreCard;