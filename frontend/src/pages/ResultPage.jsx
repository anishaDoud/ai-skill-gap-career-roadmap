
import ScoreCard from "../components/ScoreCard.jsx";
import SkillAnalysis from "../components/SkillAnalysis.jsx";
import "../styles/result-page.css";

// Temporary sample data.
// Later, this data will come from your backend API.
const analysis = {
  candidateName: "Anisha",
  targetRole: "Frontend Developer",
  overallScore: 76,
  atsScore: 82,
  skillsMatch: 70,
  sections: {
    formatting: 85,
    skills: 72,
    projects: 65,
    keywords: 78,
  },
  matchedSkills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ],
  missingSkills: [
    "TypeScript",
    "Testing",
    "Next.js",
    "Web Performance",
  ],
  suggestions: [
    "Add measurable results to your project descriptions.",
    "Include relevant keywords from your target job description.",
    "Build a project using TypeScript and automated testing.",
  ],
};

function ResultPage() {
  const {
    candidateName,
    targetRole,
    overallScore,
    atsScore,
    skillsMatch,
    sections,
    matchedSkills,
    missingSkills,
    suggestions,
  } = analysis;

  return (
    <main className="result-page">
      <header className="result-header">
        <div>
          <p className="eyebrow">RESUME INTELLIGENCE</p>
          <h1>Your Resume Analysis</h1>
          <p className="muted">
            Hi {candidateName}, here is your career readiness report.
          </p>
        </div>

        <button
          className="secondary-button"
          type="button"
          onClick={() => window.print()}
        >
          Print Report
        </button>
      </header>

      <section className="role-banner">
        <div>
          <span className="muted">Target job role</span>
          <h2>{targetRole}</h2>
        </div>
        <span className="status-pill">Analysis complete</span>
      </section>

      <section className="score-grid" aria-label="Resume scores">
        <ScoreCard
          title="Overall Resume Score"
          score={overallScore}
          description="Overall resume quality"
        />
        <ScoreCard
          title="ATS Compatibility"
          score={atsScore}
          description="Formatting and keyword checks"
        />
        <ScoreCard
          title="Skills Match"
          score={skillsMatch}
          description="Match with target role"
        />
      </section>

      <section className="content-panel">
        <div className="section-heading">
          <div>
            <h2>Resume Breakdown</h2>
            <p className="muted">
              Review each part of your resume.
            </p>
          </div>
        </div>

        <div className="breakdown-list">
          {Object.entries(sections).map(([name, score]) => (
            <div className="breakdown-item" key={name}>
              <div className="breakdown-label">
                <span>{formatLabel(name)}</span>
                <strong>{score}%</strong>
              </div>

              <div
                className="progress-track"
                role="progressbar"
                aria-label={`${formatLabel(name)} score`}
                aria-valuenow={score}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-fill"
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <SkillAnalysis
        matchedSkills={matchedSkills}
        missingSkills={missingSkills}
      />

      <section className="content-panel">
        <div className="section-heading">
          <div>
            <h2>Recommended Improvements</h2>
            <p className="muted">
              Focus on these actions to strengthen your resume.
            </p>
          </div>
        </div>

        <ol className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <li key={suggestion}>
              <span className="suggestion-number">
                {index + 1}
              </span>
              <span>{suggestion}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="roadmap-banner">
        <div>
          <p className="eyebrow">YOUR NEXT STEP</p>
          <h2>Turn your skill gaps into a career roadmap.</h2>
          <p className="muted">
            Learn the missing skills and prepare for your target role.
          </p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => {
            window.location.assign("/career-roadmap");
          }}
        >
          View Career Roadmap →
        </button>
      </section>

      <p className="disclaimer">
        Scores are illustrative sample data, not a guarantee of ATS
        results or hiring outcomes.
      </p>
    </main>
  );
}

function formatLabel(value) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}

export default ResultPage;