const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Vite", "React Router"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "Database & Tools",
    skills: ["MongoDB", "Git", "GitHub", "Postman", "Docker Basics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="section-container">
        <h2 id="skills-heading" className="section-title">
          Skills
        </h2>

        <div className="skills-layout">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="skill-group">
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skills-badge-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
