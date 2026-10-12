
function SkillAnalysis({ matchedSkills, missingSkills }) {
  return (
    <section className="content-panel">
      <div className="section-heading">
        <div>
          <h2>Skill Gap Analysis</h2>
          <p className="muted">
            Compare your skills with the requirements of your target role.
          </p>
        </div>
      </div>

      <div className="skills-grid">
        <div className="skill-group">
          <h3 className="matched-heading">
            <span aria-hidden="true">✓</span> Matched Skills
          </h3>

          <div className="skill-tags">
            {matchedSkills.map((skill) => (
              <span className="skill-tag matched" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h3 className="missing-heading">
            <span aria-hidden="true">＋</span> Skills to Develop
          </h3>

          <div className="skill-tags">
            {missingSkills.map((skill) => (
              <span className="skill-tag missing" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillAnalysis;