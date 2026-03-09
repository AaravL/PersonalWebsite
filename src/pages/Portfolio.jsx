import CardDeck from '../components/CardDeck'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Stock Market Fantasy Draft Web App",
      description: "A real-time trading application where users can draft stocks and manage portfolios. Built with a 3-person team, featuring live stock data integration and instantaneous portfolio updates.",
      technologies: ["React", "FastAPI", "WebSocket", "Supabase", "PostgreSQL", "Alpaca API"],
      link: "#",
      suit: "♠"
    },
    {
      id: 2,
      title: "Skin Classification Deep Learning Model",
      description: "A deep learning classifier achieving 85% accuracy for skin lesion classification. Implemented transfer learning with ensemble models and created a REST API for real-time predictions.",
      technologies: ["PyTorch", "TensorFlow", "Flask", "EfficientNet", "ONNX"],
      link: "#",
      suit: "♥"
    },
    {
      id: 3,
      title: "High-Frequency Market Research Project",
      description: "Research project analyzing high-frequency trading data. Engineered 20+ liquidity features, developed ML models achieving 55-58% directional accuracy with ensemble methods.",
      technologies: ["NumPy", "Pandas", "PyTorch", "scikit-learn", "LightGBM", "CatBoost"],
      link: "#",
      suit: "♦"
    },
    {
      id: 4,
      title: "Quant Analysis & Portfolio Management",
      description: "As Quant Analyst for Stevens Student Managed Investment Fund, developed macro multi-factor models for real fund investments. Implemented backtesting and risk-adjusted metrics.",
      technologies: ["Python", "PyTorch", "scikit-learn", "PostgreSQL", "Pandas"],
      link: "#",
      suit: "♣"
    },
    {
      id: 5,
      title: "Backend System Enhancement (Kipu Health Internship)",
      description: "Enhanced backend functionality and optimized data import workflows. Evaluated Enterprise Master Patient Index solutions and improved system reliability through Spring Boot development.",
      technologies: ["Java", "Spring Boot", "SQL", "PostgreSQL"],
      link: "#",
      suit: "♠"
    },
    {
      id: 6,
      title: "Course Assistant - Data Structures (CS 284)",
      description: "Teaching Assistant guiding 50+ students through CS 284. Provided mentoring on Java debugging, data structure performance analysis, and algorithm optimization.",
      technologies: ["Java", "Data Structures", "Algorithms"],
      link: "#",
      suit: "♥"
    }
  ]

  return (
    <div className="content">
      <div className="hero">
        <h1>🎴 My Portfolio</h1>
        <p>Click on any card to learn more about my projects</p>
      </div>
      
      <div className="container">
        <h2 style={{ color: '#d4af37', textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
          Featured Projects
        </h2>
        
        <CardDeck cards={projects} />
      </div>
    </div>
  )
}
