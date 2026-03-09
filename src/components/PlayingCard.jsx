import { useState } from 'react'

export default function PlayingCard({ suit, rank, title, description }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              {suit}
            </div>
            <div style={{ fontSize: '1.5rem' }}>
              {rank}
            </div>
          </div>
        </div>
        <div className="card-back">
          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
