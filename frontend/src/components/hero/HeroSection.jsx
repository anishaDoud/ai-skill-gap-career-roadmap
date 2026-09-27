function HeroSection({openAuth}){
    return (<div className="hero-content">

          <div className="small-heading">
            Analyze <span>•</span> Learn <span>•</span> Grow <span>•</span>{" "}
            Achieve
          </div>

          <h1>
            Bridge Your <span>Skill Gap</span>
            <br />
            Build Your <span>Dream Career</span>
          </h1>

          <p>
            AI-powered insights, personalized roadmaps
            <br />
            and smart guidance for your career growth.
          </p>

          <button
            className="get-started"
            onClick={() => openAuth("signup")}
          >
            Get Started →
          </button>

        </div>);
}
export default HeroSection;