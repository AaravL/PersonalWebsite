import PlayingCard from '../components/PlayingCard'

export default function Home() {
  return (
    <div className="content">
      <div className="hero">
        <h1>🎴 Welcome to My Portfolio</h1>
        <p>Explore my world of creativity and code through the lens of playing cards</p>
      </div>
      
      <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ color: '#d4af37', marginBottom: '2rem', fontSize: '2rem' }}>
          Quantitative Engineer & Full-Stack Developer
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#d0d0d0', marginBottom: '2rem' }}>
          Combining computer science with quantitative finance. I build data-driven applications, 
          develop machine learning solutions, and create scalable systems. Whether analyzing market dynamics 
          or architecting full-stack applications, I bring analytical rigor and engineering excellence.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <PlayingCard 
            suit="♠"
            rank="Ace"
            title="Quantitative Analysis"
            description="ML models, backtesting, and data-driven strategy"
          />
          <PlayingCard 
            suit="♥"
            rank="King"
            title="Full-Stack Development"
            description="React frontend to FastAPI backend systems"
          />
          <PlayingCard 
            suit="♦"
            rank="Queen"
            title="Machine Learning"
            description="PyTorch, TensorFlow, ensemble models"
          />
        </div>
      </div>
    </div>
  )
}
