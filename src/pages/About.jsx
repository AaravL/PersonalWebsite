import PlayingCard from '../components/PlayingCard'

export default function About() {
  return (
    <div className="content">
      <div className="hero">
        <h1>♣ About Me</h1>
        <p>Discover the story behind the cards</p>
      </div>
      
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: '#d4af37', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
            My Journey
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#d0d0d0', marginBottom: '1.5rem' }}>
            I'm a Computer Science student at Stevens Institute of Technology with a passion for quantitative finance, machine learning, and full-stack development. Currently pursuing a B.S. in Computer Science with a minor in Quantitative Finance, I'm driven by the challenge of solving complex problems through elegant code and data-driven insights.
          </p>
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#d0d0d0', marginBottom: '1.5rem' }}>
            My experience spans from quantitative analysis at the Stevens Student Managed Investment Fund to research in high-frequency market dynamics. I've also worked as a software engineer intern at Kipu Health, developing backend solutions and optimizing data workflows. Each project has deepened my understanding of how to build scalable systems and leverage data science for meaningful impact.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#d0d0d0', marginBottom: '2rem' }}>
            I believe in continuous learning and collaboration. Whether it's mentoring 50+ students as a Course Assistant in Data Structures, building machine learning models, or architecting full-stack applications, I approach every challenge with curiosity and precision.
          </p>

          <div style={{ background: 'rgba(212, 175, 55, 0.1)', border: '2px solid #d4af37', borderRadius: '10px', padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ color: '#d4af37', marginBottom: '1rem' }}>Education</h3>
            <p style={{ color: '#d0d0d0', marginBottom: '0.5rem' }}><strong>Stevens Institute of Technology</strong></p>
            <p style={{ color: '#d0d0d0', marginBottom: '0.5rem' }}>B.S. Computer Science, Minor in Quantitative Finance</p>
            <p style={{ color: '#d0d0d0', marginBottom: '0.5rem' }}>Expected Graduation: Spring 2027</p>
            <p style={{ color: '#d4af37' }}>GPA: 4.0/4.0 | Stevens Pinnacle Scholar | Dean's List</p>
          </div>

          <h2 style={{ color: '#d4af37', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
            What I Value
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <PlayingCard 
              suit="♠"
              rank="A"
              title="Quantitative Thinking"
              description="Leveraging data and mathematical models to drive decisions"
            />
            <PlayingCard 
              suit="♥"
              rank="K"
              title="Full-Stack Mastery"
              description="Building complete solutions from database to frontend"
            />
            <PlayingCard 
              suit="♦"
              rank="Q"
              title="Innovation"
              description="Exploring emerging technologies and novel approaches"
            />
            <PlayingCard 
              suit="♣"
              rank="J"
              title="Mentorship"
              description="Sharing knowledge and helping others grow"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
