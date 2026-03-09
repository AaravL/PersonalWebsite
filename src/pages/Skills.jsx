export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      suit: "♦",
      skills: ["Java", "Python", "JavaScript", "SQL", "C++", "C", "Scheme", "HTML/CSS"]
    },
    {
      category: "ML & Data Science",
      suit: "♠",
      skills: ["PyTorch", "scikit-learn", "TensorFlow", "Pandas", "NumPy", "LightGBM", "CatBoost"]
    },
    {
      category: "Frameworks & Libraries",
      suit: "♣",
      skills: ["React", "FastAPI", "Spring Boot", "Flask", "WebSocket", "ONNX", "EfficientNet"]
    },
    {
      category: "Tools & Platforms",
      suit: "♥",
      skills: ["Git", "Supabase", "PostgreSQL", "Alpaca API", "Confluence", "REST APIs"]
    }
  ]

  return (
    <div className="content">
      <div className="hero">
        <h1>⚡ My Skills</h1>
        <p>A deck of expertise and capabilities</p>
      </div>
      
      <div className="container">
        <div className="skills-container">
          {skillCategories.map((item, index) => (
            <div key={index} className="skill-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {item.suit}
              </div>
              <h3>{item.category}</h3>
              <div className="skill-list">
                {item.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '10px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ color: '#d4af37', marginBottom: '1rem', fontSize: '1.5rem' }}>
            Always Learning
          </h2>
          <p style={{ color: '#d0d0d0', lineHeight: '1.6' }}>
            Like mastering a card game, continuous improvement is key to success in technology. 
            I'm always exploring new frameworks, diving deeper into cutting-edge technologies, 
            and refining my craft to deliver exceptional results.
          </p>
        </div>
      </div>
    </div>
  )
}
