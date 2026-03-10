import { useState } from 'react'
import blankCardImage from './blank-playing-card-balatr-1753661972.png'
import cardBackImage from './balatro-red-deck.png'

export default function PlayingCard({ suit, rank, title, description }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-inner">
        <div className="card-front" style={{ backgroundImage: `url('${cardBackImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="card-back" style={{ backgroundImage: `url('${blankCardImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>
    </div>
  )
}
